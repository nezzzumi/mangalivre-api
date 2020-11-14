const got = require('got');

function parseManga(html) {
    let mangas = [];
    html = html.replace(/(\r\n|\n|\r)/gm, "");
    
    // li tags
    let lis = html.match(new RegExp('<li> *<a href="\/manga\/.*?\<\/div\>\ *<\/a\>\ *<\/li>', "gm"));

    for (let li of lis) {
        let manga = {};
        
        manga.name = li.match(/(?<=series-title......).*?(?=<\/h1>)/gm)[0].trim();
        manga.author = li.match(/(?<=<span class="series-author">).*?(?=<\/span>)/gm)[0].trim().replace(/\<i.*<\/i>/gm, "").replace(/(\ \ )*/gm, "").replace(/&/, " & ");
        manga.description = li.match(/(?<=<span class="series-desc">).*?(?=<\/span>)/gm)[0].trim();
        manga.link = li.match(/(?<=\<a href=\").*?(?=" )/gm)[0].trim();
        manga.id = manga.link.replace(/.*\//gm, "");
        manga.chapters = li.match(/(?<=number of chapters">).*?(?=<\/span>)/gm)[0].trim();
        manga.image = li.match(/(?<=background-image: url\(\').*?(?=\')/gm)[0].trim();
        manga.rate = li.match(/(?<=class="nota">)....(?=<\/span>)/gm)[0].trim();
        
        let categories = li.match(/(?<="touch-carousel-item.*<span class="nota">).*?(?=<\/span>)/gm);
        if (categories) {
            manga.categories = categories.map(genre => {
                return genre;
            });
        }
        mangas.push(manga);
    }
    return mangas;
}


function search(name) {
    var return_data = { "series": [] };
    const form = "search=" + name;
    
    return (async () => {
        try {
            let response = await got.post(
                "https://mangalivre.net/lib/search/series.json", {
                body: form,
                headers: {
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                },
            });

            for (const serie of JSON.parse(response.body).series) {
                return_data.series.push({
                    "id_serie": serie.id_serie,
                    "name": serie.name,
                    "label": serie.label,
                    "score": serie.score,
                    "value": serie.value,
                    "author": serie.author,
                    "artist": serie.artist,
                    "categories": serie.categories.map((categorie) => { return { "name": categorie.name, "id_category": categorie.id_category }; }),
                });
            }

            return return_data;
        } catch (error) {
            console.log(error.message);
        }
    })();
}


function getChapters(id, page) {
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
            console.error(error.message);
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


function getGenres() {
    var return_data = { "genres": [] };

    return (async () => {
        try {
            let response = await got('https://mangalivre.net/categories/categories_list.json');
            response = JSON.parse(response.body);

            for (let genre of response.categories_list) {
                return_data.genres.push({
                    "id": genre.id_category,
                    "name": genre.name,
                    "titles": genre.titles,
                    "link": genre.link,
                });
            }
        } catch (error) {
            console.error(error.message);
        }

        return return_data;
    })();
}

function getRecents(page) {
    var return_data = { "mangas": [] };

    return (async () => {
        try {
            let response = await got('https://mangalivre.net/series/index/atualizacoes?page=' + page);
            return_data.mangas = parseManga(response.body);
        } catch (error) {
            console.error(error.message);
        }
        return return_data;
    })();
}


function getPopular(page) {
    var return_data = { "mangas": [] };

    return (async () => {
        try {
            let response = await got("https://mangalivre.net/series/index/numero-de-leituras/todos/desde-o-comeco?page=" + page);
            return_data.mangas = parseManga(response.body);
        } catch (error) {
            console.error(error.message);
        }
        return return_data;
    })();
}


function getTop(page) {
    var return_data = { "mangas": [] };

    return (async () => {
        try {
            let response = await got("https://mangalivre.net/series/index/nota?page="+page);
            return_data = parseManga(response.body);
        } catch (error) {
            console.error(error.message);
        }
        return return_data;
    })();
}

module.exports = {
    search: search,
    getChapters: getChapters,
    getPages: getPages,
    getGenres: getGenres,
    getRecents: getRecents,
    getPopular: getPopular,
    getTop: getTop
}