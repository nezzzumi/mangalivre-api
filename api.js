const got = require('got');

function search(name){
    const form = "search="+name;
    return (async () => {
        try {
            let response = await got.post(
                "https://mangalivre.net/lib/search/series.json", {
                body: form,
                headers: {
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                },
            }
            );

            return response.body;

        } catch (error) {
            console.log(error.message);
        }
    })();
}

function getChapters(id, page){
    var return_data = { "chapters": [] };

    return (async () => {
        try {
            let response = await got(`https://mangalivre.net/series/chapters_list.json?page=${page}&id_serie=${id}`, {
                headers: {
                    "x-requested-with": "XMLHttpRequest",
                    //"content-length" : Buffer.byteLength(form),
                    "content-type": "application/x-www-form-urlencoded",
                },
            });

            response = JSON.parse(response.body);
            if (response.chapters) {
                return_data.id_serie = response.chapters[0].id_serie;
                return_data.url_name = response.chapters[0].releases[Object.keys(response.chapters[0].releases)[0]].link.match(/(?<=ler\/).*?(?=\/)/)[0];
                return_data.name = response.chapters[0].name;

                for (let chapter of response.chapters) {
                    return_data.chapters.push({
                        "chapter_name": chapter.chapter_name,
                        "number": chapter.number,
                        "date": chapter.date,
                        "id_release": chapter.releases[Object.keys(chapter.releases)[0]].id_release
                    });
                }
            }
            

        } catch (error) {
            console.log(error.message);
        }

        return return_data;
    })();
}

async function getPages(name, release_id) {
    const identifier = await (async () => {
        try {
            let response = await got(`https://mangalivre.net/ler/${name}/online/${release_id}/capitulo-0/`);
            // retornando identifier
            return response.body.match(/(?<=this\.page\.identifier =\ \").*?(?=\";)/)[0];
        } catch (error) {
            console.log(error.message);
        }
    })();
    return await (async () => {
        try {
            let response = await got(`https://mangalivre.net/leitor/pages/${release_id}.json?key=${identifier}`);
            return response.body;
        } catch (error) {
            console.log(error.message);
        }
    })();
}

module.exports = {
    search: search,
    getChapters: getChapters,
    getPages: getPages,
}