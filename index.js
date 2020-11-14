const express = require('express');
const api = require("./api");
const app = express();
const port = 8080;

app.set("views", "./static/");
app.use(express.static("./public/"))
app.engine('html', require('ejs').renderFile);

app.get("/search/:name", (req, res) => {
    const name = req.params.name;
    api.search(name).then((response) => {
        res.send(response);
    });
});

app.get("/chapters/:id/", async (req, res) => {
    const id = req.params.id;
    var return_data = {
        "id_serie": undefined,
        "url_name": undefined,
        "name": undefined,
        "chapters": []
    };

    for (let i = 1; ; i++) {
        var result = await api.getChapters(id, i);
        if (!return_data.name) { // checa se ja as infos ja foram adicionados para evitar ficar reescrevendo os valores
            return_data.id_serie = result.id_serie;
            return_data.url_name = result.url_name;
            return_data.name = result.name;
        }

        if (result.chapters.length > 0) {
            return_data.chapters = return_data.chapters.concat(result.chapters);
            continue;
        }
        break;
    }
    res.send(return_data);
});

app.get("/chapters/:id/:page/", async (req, res) => {
    const id = req.params.id;
    const page = req.params.page;

    var return_data = {
        "id_serie": undefined,
        "url_name": undefined,
        "name": undefined,
        "chapters": []
    };

    var result = await api.getChapters(id, page);

    return_data.chapters = result.chapters;

    if (!return_data.name) { // checa se ja as infos ja foram adicionados para evitar ficar reescrevendo os valores
        return_data.id_serie = result.id_serie;
        return_data.url_name = result.url_name;
        return_data.name = result.name;
    }

    res.send(return_data);
});

app.get("/pages/:name/:id", (req, res) => {
    const name = req.params.name;
    const id = req.params.id;

    api.getPages(name, id).then((pages) => {
        res.send(pages);
    });
});

app.get("/genres/", (_req, res) => {
    api.getGenres().then((response) => {
        res.send(response);
    });
});

app.get("/recents", (req, res) => {
    res.redirect("/recents/1");
});

app.get("/recents/:page", (req, res) => {
    const page = req.params.page;
    api.getRecents(page).then((response) => {
        res.send(response);
    });
});

app.get("/popular/", async (_req, res) => {
    res.redirect("/popular/1");
});

app.get("/popular/:page", (req, res) => {
    const page = req.params.page;
    api.getPopular(page).then((response) => {
        res.send(response);
    });
});

app.get("/top/:page", (req, res) => {
    const page = req.params.page;
    api.getTop(page).then((response) => {
        res.send(response);
    });
});

app.get("/top/", async (_req, res) => {
    res.redirect("/top/1");
});

app.get('*', (req, res) => {
    res.header("401");
    res.render("html/401.html");
});

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}/`);
});