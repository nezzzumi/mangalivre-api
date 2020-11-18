# Resumo

Uma simples API de mangás que tem o mangá livre como source. Feita em Node.js, usando Express.js.


`api.js` é o arquivo que contém as funções que extraem os dados do site.

`index.js` é o arquivo principal, que gerencia as rotas.

# Instalação

## Dependências

    ejs
    express
    got


No diretório do projeto, digite:

    npm install

## Execução
No diretório do projeto, digite:

    node index.js

# Exemplos de uso
Alguns exemplos de uso da API.

## Busca

No exemplo, irei buscar por "i sold".


### Request
`GET /search/:nome` para buscar mangás pelo nome.

    curl "http://localhost:8080/search/i%20sold"

### Response
```json
{
  "mangas":[
    {
      "name":"Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de.",
      "author":"Miaki, Sugaru &  Taguchi, Shouichi (Arte)",
      "description":"Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de.(\"Eu vendi minha vida p0 mil yene o ano\") é um mangá baseado no romance \"Três dias de felicidade\" de Miyaki Sugaru, e conta a história de Kusunoki, um jovem com poucas espectativas para o futuro, que com 20 anos chegou ao fundo do poço. Foi forçado a vender até mesmo seus CDs e livros para conseguir dinheiro, nesse dia ele descobre uma loja que compra o tempo de vida, o tempo e a saúde das pessoas. Essa é uma história do valor de uma vida, e das consequências de vendê-la.",
      "link":"/manga/jumyou-wo-kaitotte-moratta-ichinen-ni-tsuki-ichimanen-de-/7203",
      "id":"7203",
      "chapters_count":"17",
      "image":"https://static3.mangalivre.com/capas/F90r_Di84p1K4x75frSw8A/7203/external_cover.jpg?quality=100",
      "score":"8.88",
      "categories":[
        "Drama",
        "Shounen"
      ]
    }
  ]
}
```

## Listar capítulos

No exemplo, usarei o id retornado na busca do tópico anterior, que é <b>7203</b>.

### Request

`GET /chapters/:id_serie` para listar todos os capítulos (pode demorar, dependendo da quantidade de capítulos).

`GET /chapters/:id_serie/:page` para listar 30 capítulos por vez. O valor da página deve ser incrementado até não haver mais resultados.

    curl "http://localhost:8080/chapters/7203"
    
ou
    
    curl "http://localhost:8080/chapters/7203/1"
    
 ### Response
 
 <details>
 <summary>Mostrar response longo</summary>
 <p>
 
 ```json
 {
  "id_serie":7203,
  "url_name":"jumyou-wo-kaitotte-moratta-ichinen-ni-tsuki-ichimanen-de-",
  "name":"Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de.",
  "chapters":[
    {
      "chapter_name":"",
      "number":"16",
      "date":"29/07/18",
      "id_release":162345
    },
    {
      "chapter_name":"",
      "number":"15",
      "date":"22/07/18",
      "id_release":161790
    },
    {
      "chapter_name":"",
      "number":"14",
      "date":"15/07/18",
      "id_release":161356
    },
    {
      "chapter_name":"",
      "number":"13",
      "date":"08/07/18",
      "id_release":160961
    },
    {
      "chapter_name":"",
      "number":"12",
      "date":"01/07/18",
      "id_release":160474
    },
    {
      "chapter_name":"",
      "number":"11.5",
      "date":"24/06/18",
      "id_release":160081
    },
    {
      "chapter_name":"",
      "number":"11",
      "date":"17/06/18",
      "id_release":159625
    },
    {
      "chapter_name":"",
      "number":"10",
      "date":"10/06/18",
      "id_release":159116
    },
    {
      "chapter_name":"",
      "number":"9",
      "date":"03/06/18",
      "id_release":158750
    },
    {
      "chapter_name":"",
      "number":"8",
      "date":"03/06/18",
      "id_release":158747
    },
    {
      "chapter_name":"",
      "number":"7",
      "date":"20/05/18",
      "id_release":157875
    },
    {
      "chapter_name":"",
      "number":"6",
      "date":"13/05/18",
      "id_release":157551
    },
    {
      "chapter_name":"",
      "number":"5",
      "date":"07/05/18",
      "id_release":157321
    },
    {
      "chapter_name":"",
      "number":"4",
      "date":"07/05/18",
      "id_release":157320
    },
    {
      "chapter_name":"",
      "number":"3",
      "date":"22/04/18",
      "id_release":156484
    },
    {
      "chapter_name":"",
      "number":"2",
      "date":"16/04/18",
      "id_release":156152
    },
    {
      "chapter_name":"",
      "number":"1",
      "date":"09/04/18",
      "id_release":155702
    }
  ]
}
 ```
 </p>
 </details>
    
## Listar páginas de um capítulo

No exemplo, usarei o id_release de um capítulo retornado no exemplo do tópico anterior, que é <b>162345</b>.

### Request 

`GET /pages/:id_release`

    curl "http://localhost:8080/pages/160961"
    
### Response
<details>
<summary>Mostrar response longo</summary>
<p>

```json
{
  "images":[
    "https://static2.mangalivre.com/cdnwp2/firefox/xKJEkyigOHoIhbC-aE27Yg/m3719902/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_00.jpg",
    "https://static2.mangalivre.com/cdnwp2/firefox/ELVWqHpKmnqJoVb7pSZlfA/m3719903/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_01.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/7E1MDNWq0HuOLF-9gXIIPQ/m3719904/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_02.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/nS195Od7L3wobNuo6B_mJg/m3719905/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_03.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/EG5WgBKfVGIPFu1Okba1tQ/m3719906/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_04.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/vc5-QL35UOMeHd5VJ_WXKQ/m3719907/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_05.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/epKdxjg9q_mYrEfZpsZBCA/m3719908/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_06.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/4U4OzFOk-DjvJDzAOKEPwg/m3719909/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_07.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/9bu70-SJp8DVVbc8c04Qbg/m3719910/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_08.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/VLCaBUZiENXS5Cml61AClQ/m3719911/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_09.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/CSUOaSjyy4G0KkR1mwjOgg/m3719912/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_10.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/CxeSNFMpQKT7QD1Ud7ON3g/m3719913/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_11.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/8SoIsilimJN-7c0UVphVKw/m3719914/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_12.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/OhcWd7Mpy0yDvgxp5lX1fw/m3719915/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_13.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/KVYC_-nhj2ZibhF-NhC7rA/m3719916/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_14.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/BnxfhgkcEzNmurvCP7AvOg/m3719917/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_15.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/knlnZLbGDV3LV8y-VarXSw/m3719918/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_16.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/1BJtX_bNa5TezR1aN20NFw/m3719919/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_17.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/22A1wqCBLxyW4oGyMLT0CQ/m3719920/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_18.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/DzC1sseozev3uiIzPMEe0g/m3719921/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_19.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/6GDTg0DWnZYxLzrtJV13fQ/m3719922/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_20.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/R0XiTsM2AaoMH2_m5pnUeQ/m3719923/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_21.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/1suphyqrXahkvEp1JLwPyA/m3719924/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_22.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/J-pr723Pxz0Chy2l-kP_Lg/m3719925/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_23.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/hjJplt6j1zWripRqkTnOfw/m3719926/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_24.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/_gNscWaSfbtYpMO8lye62A/m3719927/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_25.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/MmKMVxZXoU5_tzyLHNOAkA/m3719928/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_26.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/u5lNTrlr7GGB1QQLHhshWQ/m3719929/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_27.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/XNtrF2ATpKYDwKUzZZyn1g/m3719930/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_28.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/C_poNY6j3ochI4ksohcigA/m3719931/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_29.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/0OcZSrMk6g2JeK7F3a3YBg/m3719932/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_30.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/viJ659TOkJs5TdHcVDhWYg/m3719933/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_31.png",
    "https://static2.mangalivre.com/cdnwp2/firefox/GyLKWx_KHHPwa-KewyvT9A/m3719934/7203/155322/160961/-kts-scans-jumyou-wo-kaitotte-moratta_vol_03_cap_13_32.png"
  ]
}
```
</p>
</details>

## Listar gêneros disponíveis

### Request

`GET /genres`

    curl "http://localhost:8080/genres"
    
### Response

<details>
<summary>Mostrar response longo</summary>
<p>

```json
{
  "genres":[
    {
      "id":23,
      "name":"Ação",
      "titles":2911,
      "link":"/mangas/acao/23"
    },
    {
      "id":61,
      "name":"Adulto",
      "titles":294,
      "link":"/mangas/adulto/61"
    },
    {
      "id":36,
      "name":"Artes Marciais",
      "titles":605,
      "link":"/mangas/artes-marciais/36"
    },
    {
      "id":24,
      "name":"Aventura",
      "titles":1557,
      "link":"/mangas/aventura/24"
    },
    {
      "id":60,
      "name":"Bara",
      "titles":28,
      "link":"/mangas/bara/60"
    },
    {
      "id":25,
      "name":"Carros",
      "titles":11,
      "link":"/mangas/carros/25"
    },
    {
      "id":26,
      "name":"Comédia",
      "titles":3672,
      "link":"/mangas/comedia/26"
    },
    {
      "id":27,
      "name":"Demência",
      "titles":17,
      "link":"/mangas/demencia/27"
    },
    {
      "id":28,
      "name":"Demônios",
      "titles":191,
      "link":"/mangas/demonios/28"
    },
    {
      "id":57,
      "name":"Doujinshi",
      "titles":112,
      "link":"/mangas/doujinshi/57"
    },
    {
      "id":29,
      "name":"Drama",
      "titles":2781,
      "link":"/mangas/drama/29"
    },
    {
      "id":18,
      "name":"Ecchi",
      "titles":1115,
      "link":"/mangas/ecchi/18"
    },
    {
      "id":46,
      "name":"Escolar",
      "titles":2418,
      "link":"/mangas/escolar/46"
    },
    {
      "id":49,
      "name":"Espacial",
      "titles":26,
      "link":"/mangas/espacial/49"
    },
    {
      "id":50,
      "name":"Esportes",
      "titles":262,
      "link":"/mangas/esportes/50"
    },
    {
      "id":30,
      "name":"Fantasia",
      "titles":2767,
      "link":"/mangas/fantasia/30"
    },
    {
      "id":10,
      "name":"Fanzine",
      "titles":17,
      "link":"/mangas/fanzine/10"
    },
    {
      "id":14,
      "name":"Gag",
      "titles":0,
      "link":"/mangas/gag/14"
    },
    {
      "id":58,
      "name":"Gastronomia",
      "titles":7,
      "link":"/mangas/gastronomia/58"
    },
    {
      "id":6,
      "name":"Genérico",
      "titles":49,
      "link":"/mangas/generico/6"
    },
    {
      "id":31,
      "name":"Harém",
      "titles":568,
      "link":"/mangas/harem/31"
    },
    {
      "id":17,
      "name":"Hentai",
      "titles":252,
      "link":"/mangas/hentai/17"
    },
    {
      "id":32,
      "name":"Histórico",
      "titles":555,
      "link":"/mangas/historico/32"
    },
    {
      "id":33,
      "name":"Horror",
      "titles":521,
      "link":"/mangas/horror/33"
    },
    {
      "id":15,
      "name":"HQ",
      "titles":3,
      "link":"/mangas/hq/15"
    },
    {
      "id":34,
      "name":"Infantil",
      "titles":11,
      "link":"/mangas/infantil/34"
    },
    {
      "id":59,
      "name":"Isekai",
      "titles":104,
      "link":"/mangas/isekai/59"
    },
    {
      "id":8,
      "name":"Jogos",
      "titles":138,
      "link":"/mangas/jogos/8"
    },
    {
      "id":9,
      "name":"Josei",
      "titles":398,
      "link":"/mangas/josei/9"
    },
    {
      "id":16,
      "name":"Light Novel",
      "titles":5,
      "link":"/mangas/light-novel/16"
    },
    {
      "id":35,
      "name":"Magia",
      "titles":370,
      "link":"/mangas/magia/35"
    },
    {
      "id":37,
      "name":"Mechas",
      "titles":84,
      "link":"/mangas/mechas/37"
    },
    {
      "id":38,
      "name":"Militar",
      "titles":83,
      "link":"/mangas/militar/38"
    },
    {
      "id":40,
      "name":"Mistério",
      "titles":654,
      "link":"/mangas/misterio/40"
    },
    {
      "id":39,
      "name":"Música",
      "titles":67,
      "link":"/mangas/musica/39"
    },
    {
      "id":0,
      "name":"Nenhuma",
      "titles":6,
      "link":"#"
    },
    {
      "id":11,
      "name":"One Shot",
      "titles":142,
      "link":"/mangas/one-shot/11"
    },
    {
      "id":41,
      "name":"Paródia",
      "titles":52,
      "link":"/mangas/parodia/41"
    },
    {
      "id":42,
      "name":"Policial",
      "titles":42,
      "link":"/mangas/policial/42"
    },
    {
      "id":43,
      "name":"Psicológico",
      "titles":541,
      "link":"/mangas/psicologico/43"
    },
    {
      "id":13,
      "name":"Revista",
      "titles":0,
      "link":"/mangas/revista/13"
    },
    {
      "id":44,
      "name":"Romance",
      "titles":4570,
      "link":"/mangas/romance/44"
    },
    {
      "id":45,
      "name":"Samurai",
      "titles":43,
      "link":"/mangas/samurai/45"
    },
    {
      "id":47,
      "name":"Sci-Fi",
      "titles":708,
      "link":"/mangas/sci-fi/47"
    },
    {
      "id":3,
      "name":"Seinen",
      "titles":2006,
      "link":"/mangas/seinen/3"
    },
    {
      "id":55,
      "name":"Sem banner",
      "titles":0,
      "link":"/mangas/sem-banner/55"
    },
    {
      "id":2,
      "name":"Shoujo",
      "titles":2156,
      "link":"/mangas/shoujo/2"
    },
    {
      "id":22,
      "name":"Shoujo Ai",
      "titles":278,
      "link":"/mangas/shoujo-ai/22"
    },
    {
      "id":1,
      "name":"Shounen",
      "titles":2457,
      "link":"/mangas/shounen/1"
    },
    {
      "id":20,
      "name":"Shounen Ai",
      "titles":259,
      "link":"/mangas/shounen-ai/20"
    },
    {
      "id":48,
      "name":"Slice of Life",
      "titles":1487,
      "link":"/mangas/slice-of-life/48"
    },
    {
      "id":52,
      "name":"Sobrenatural",
      "titles":2217,
      "link":"/mangas/sobrenatural/52"
    },
    {
      "id":51,
      "name":"Super Poderes",
      "titles":198,
      "link":"/mangas/super-poderes/51"
    },
    {
      "id":53,
      "name":"Suspense",
      "titles":53,
      "link":"/mangas/suspense/53"
    },
    {
      "id":54,
      "name":"Vampiros",
      "titles":111,
      "link":"/mangas/vampiros/54"
    },
    {
      "id":56,
      "name":"Webtoon",
      "titles":278,
      "link":"/mangas/webtoon/56"
    },
    {
      "id":19,
      "name":"Yaoi",
      "titles":916,
      "link":"/mangas/yaoi/19"
    },
    {
      "id":21,
      "name":"Yuri",
      "titles":137,
      "link":"/mangas/yuri/21"
    }
  ]
}
```
</p>
</details>

## Listar mangás atualizados recentemente

### Request

`GET /recents/:page` para listar mangás com capítulos lançados recentemente. Quanto menor o número da página, mais recentes serão.

ou

`GET /recents` para listar os 30 mangás com capítulos mais recentes. (redirecionamento para `/recents/1`)

### Response
<details>
<summary>Mostrar response longo</summary>
<p>

```json
{
  "mangas":[
    {
      "name":"Material and Spiritual World",
      "author":"Dong Chen, SummerZoo &  Bamboo and Raft Entertainment (Arte)",
      "description":"No passado e no presente, existiram inúmeras substancias especiais com propriedades estrenhas, que os antigos chamavam de \"Obejetos divinos\" e agora os chamamos de \"Tesouros Exoticos\". Zhou Mu era um ladrão lendário, mas ele subestimou seu inimigo descuidadamente e ficou preso na ARMADILHA DA ALMA [Objeto Divino] Por 2.000 anos. Ele jurou se vingar de todos aqueles que o injustiçaram. Essa e a Historia de sua vingança!",
      "link":"/manga/material-and-spiritual-world/11170",
      "id":"11170",
      "chapters_count":"9",
      "image":"https://static3.mangalivre.com/capas/k81YtL0xStFgvIXFyTMaxw/11170/5fa5a42698365external_cover.jpg?quality=100",
      "score":"6.03",
      "categories":[
        "Ação",
        "Aventura",
        "Mistério"
      ]
    },
    {
      "name":"Leviathan",
      "author":" Otsuka, Eiji &  Kinutani, Yuu (Arte)",
      "description":"",
      "link":"/manga/leviathan/556",
      "id":"556",
      "chapters_count":"72",
      "image":"https://static3.mangalivre.com/capas/_JTEZAHRK6qu11AsXIVbEQ/556/capa.jpg?quality=100",
      "score":"7.18",
      "categories":[
        "Seinen"
      ]
    },
    {
      "name":"First God of War",
      "author":"Ah Li Wen Xue",
      "description":"Resumo do primeiro deus da guerra: \"Se os céus me pressionarem, eu vou desmanchá-lo, se o chão se opuser a mim, eu irei destruí-lo\"! O jovem Deus da Guerra Yang Wu",
      "link":"/manga/first-god-of-war/9460",
      "id":"9460",
      "chapters_count":"23",
      "image":"https://static3.mangalivre.com/capas/t2vOc5Rjv5eWOrUtPgF8-g/9460/external_cover.jpg?quality=100",
      "score":"6.08",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Fantasia",
        "Histórico",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Yuan Zun (Manhua)",
      "author":"Tian Can Tu Dou &  Dr. Da Ji (Arte)",
      "description":"Um adolescente segura um pincel, enquanto um dragão dança; O caos rodeia o mundo, iluminando o céu. Neste mundo, a píton engolirá o dragão, ou o Santo dragão se elevará.",
      "link":"/manga/yuan-zun-manhua/7117",
      "id":"7117",
      "chapters_count":"69",
      "image":"https://static3.mangalivre.com/capas/4tmpdoiQIbplxr-qTSdHdw/7117/external_cover.jpg?quality=100",
      "score":"6.70",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Fantasia",
        "Romance"
      ]
    },
    {
      "name":"The Strongest King",
      "author":"Yuan Man Dongman & (Arte)",
      "description":"Esta é uma era cheia de Qi, também é um mundo povoado por cultivadores. O jovem Wu Fu renasceu da reencarnação, só que quando alguém olha nos olhos dele, eles estão estranhamente pacíficos. Este é um novo caminho para o pico! Tudo o que preciso fazer é levantar a espada e eliminar todos os inimigos da última geração!",
      "link":"/manga/the-strongest-king/8967",
      "id":"8967",
      "chapters_count":"95",
      "image":"https://static3.mangalivre.com/capas/JdLsYllQAZVKU09LGSIcww/8967/external_cover.jpg?quality=100",
      "score":"7.12"
    },
    {
      "name":"Love & Kiss",
      "author":"Yamada Yana",
      "description":"Doce romance colegial de uma garota ingênua. Você tem alguém especial?",
      "link":"/manga/love-kiss/11102",
      "id":"11102",
      "chapters_count":"3",
      "image":"https://static3.mangalivre.com/capas/zftjy1oLTPfZwlSEgOtqRA/11102/5f9c29ab4e645external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Escolar",
        "Romance",
        "Shoujo",
        "Slice of Life"
      ]
    },
    {
      "name":"Dr. Stone",
      "author":"Inagaki, Riichiro &  Boichi (Arte)",
      "description":"Durante 5 anos, Taiju Ooki tentou se confessar para o amor de sua vida, Yuzuriha, mas nunca conseguiu. Um dia ele decide reunir toda sua coragem para dizer a ela tudo o que sente... Mas EXATAMENTE nessa hora uma CATÁSTROFE de proporções globais extingue toda a humanidade transformando-a em pedra. Como únicos sobreviventes (até então) cabe a Taiju e seu brilhante amigo, o cientista Senkuu, fazerem a humanidade sair da Idade da Pedra, voltar a Era Moderna e salvar Yuzuriha!!!",
      "link":"/manga/dr-stone/4948",
      "id":"4948",
      "chapters_count":"176",
      "image":"https://static3.mangalivre.com/capas/MCqVxZSZHivlguTx40QBBw/4948/5fa1ed4036304external_cover.jpg?quality=100",
      "score":"9.02",
      "categories":[
        "Aventura",
        "Sci-Fi",
        "Shounen"
      ]
    },
    {
      "name":"Rettoujin no Maken Tsukai Skill Board wo Kushi shite Saikyou ni Itaru",
      "author":"Hagiu, Aki &  Kanou, Hiroto (Arte)",
      "description":"Um trabalhador de escritório comum, Toru Minasuki, foi engolido por uma fissura dimensional e reencarnou em um mundo diferente. Na reencarnação, Toru recebeu o [Quadro de skills] de Deus. Aproveito ao máximo para adquirir as skills necessárias! Mesmo que ele seja uma \"pessoa inferior\", ele vai escrever a sua história até o topo!",
      "link":"/manga/rettoujin-no-maken-tsukai-skill-board-wo-kushi-shite-saikyou-ni-itaru/10375",
      "id":"10375",
      "chapters_count":"11",
      "image":"https://static3.mangalivre.com/capas/_s1ZoxbgotADrMdtagXDdw/10375/external_cover.jpg?quality=100",
      "score":"6.06"
    },
    {
      "name":"Jishou Akuyaku Reijou na Konyakusha Kansatsu Kiroku.",
      "author":"Shiki ( &  Hasumi, Natsume (Arte)",
      "description":"O príncipe herdeiro Cecil era tão brilhante que tudo na vida era fácil a ponto de entediá-lo; então, um dia, sua noiva Bertia disse de repente: \"Príncipe Cecil, eu sou uma vilã!\" Alegando que este mundo é o mesmo de um \"jogo otome\" de sua vida passada e que ela está desempenhando o papel de \"vilã\" nele, ela pretende desempenhar bem seu papel e anular o noivado. Com esse objetivo em mente, ela começa a causar turbulência na vida cotidiana de Cecil.",
      "link":"/manga/jishou-akuyaku-reijou-na-konyakusha-kansatsu-kiroku-/9719",
      "id":"9719",
      "chapters_count":"27",
      "image":"https://static3.mangalivre.com/capas/n2vcTaYrffQeWHAXGiTBPg/9719/external_cover.jpg?quality=100",
      "score":"7.63",
      "categories":[
        "Comédia",
        "Fantasia",
        "Romance",
        "Shoujo"
      ]
    },
    {
      "name":"Build King",
      "author":"Shimabukuro, Mitsutoshi",
      "description":"Tonkachi e Renge vivem na misteriosa Ilha Hammer, um lugar onde nenhum ser humano deveria sobreviver. Os dois são carpinteiros que constroem casas para os habitantes da ilha, mas quais são os seus poderes especiais? E quais são seus sonhos?",
      "link":"/manga/build-king/11237",
      "id":"11237",
      "chapters_count":"1",
      "image":"https://static3.mangalivre.com/capas/8xHyZgUzJqZ2URSvz-nIPQ/11237/5fb2b940e5de1external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Ação",
        "Aventura",
        "Shounen"
      ]
    },
    {
      "name":"A Good Day to Be a Dog",
      "author":"Lee Hye",
      "description":"Hana tem feito todo esforço para evitar uma inevitável maldição da sua família... De se tornar um cachorro após seu primeiro beijo. O pior de tudo é que a única forma de ela quebrar essa maldição é obter um segundo beijo. Como que isso irá funcionar quando o primeiro beijo de Hana é com um cara que morre de medo de cachorros?!",
      "link":"/manga/a-good-day-to-be-a-dog/10865",
      "id":"10865",
      "chapters_count":"6",
      "image":"https://static3.mangalivre.com/capas/t5r4kqSnX5q_pPy_TU9e4A/10865/5f6f3dee6dc5b_capa.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Drama",
        "Josei",
        "Romance",
        "Shoujo",
        "Sobrenatural"
      ]
    },
    {
      "name":"One Thousand Live Broadcast Big Local Tyrant",
      "author":"Savako Sam &  Da da cat comics (Arte)",
      "description":"Wang Tian, que trabalha na sala de artes marciais, encontrou um bug quando se registrou em uma plataforma de transmissão ao vivo depois de ter sido expulso. Usando as recompensas na sala de transmissão ao vivo, ele abriu o baú do tesouro para conseguir trapaças e varreu aqueles que antes o olhavam de cima! Artes marciais, comida, arte, riqueza! Wang Tian tem tudo!",
      "link":"/manga/one-thousand-live-broadcast-big-local-tyrant/10762",
      "id":"10762",
      "chapters_count":"10",
      "image":"https://static3.mangalivre.com/capas/sqxpT4iim3OtjOQZuhc8cw/10762/5f5bcb66ab4f4external_cover.jpg?quality=100",
      "score":"6.19",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Harém",
        "Romance",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"One Sword Reigns Supreme",
      "author":"2D Dynamics",
      "description":"Os mais velhos da família, lutando pelo direito de explorar as minas, enviaram alguém para esmagar seu dantian e se tornou um filho abandonado da família Ye. No entanto, ele acidentalmente entrou na Torre do Inferno Ilimitado por causa do anel sangrento de sua mãe e foi instruído por uma pessoa misteriosa a cultivar o Dao da espada, que ninguém havia cultivado antes. A família Ye abandonou o filho Ye Xuan: “Devo me tornar forte para proteger minha irmã e recuperar tudo que perdi na família Ye”. Mulher misteriosa: \"Siga-me e eu farei de você o espadachim mais forte em todos os céus.\" Com a ajuda da mulher misteriosa, poderia Ye Xuan se tornar o espadachim mais forte no reino dos céus?",
      "link":"/manga/one-sword-reigns-supreme/11071",
      "id":"11071",
      "chapters_count":"18",
      "image":"https://static3.mangalivre.com/capas/9iDa4Vn_pbCZ3tlL6R19JQ/11071/5f972ab3a1b6b_capa.jpg?quality=100",
      "score":"6.07",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Fantasia",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Past Life Regressor",
      "author":"Cha Yongun, Min-Chae Na",
      "description":"Você gostaria de reverter o tempo? Todas as estatísticas serão redefinidas... Por favor, escolha uma data... \"28 de fevereiro de 1985. O dia em que nasci.\" Riqueza, vou aproveitar todo o dinheiro do mundo. Monopólio, vou aproveitar todas as masmorras do mundo. Neste momento, enquanto o mundo ainda está em paz.",
      "link":"/manga/past-life-regressor/9425",
      "id":"9425",
      "chapters_count":"19",
      "image":"https://static3.mangalivre.com/capas/V2RBTqqMkMDAROVMRoE_tw/9425/external_cover.jpg?quality=100",
      "score":"6.51",
      "categories":[
        "Ação",
        "Aventura",
        "Drama",
        "Seinen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Dark Hunter",
      "author":"Big Bear &  Nie Bei (Arte)",
      "description":"Chen BieMing já foi uma vez um jovem talentoso caçador da Sagrada Aliança, até que foi traído e assassinado pelos \"Os Cinco Lordes\". Ele é ressuscitado no passado com a sua memória intacta e jura se vingar daqueles que lhe traíram. Com a ajuda do seu sprite de batalha, ele ruma novamente ao caminho para se tornar o mais forte..",
      "link":"/manga/dark-hunter/7751",
      "id":"7751",
      "chapters_count":"114",
      "image":"https://static3.mangalivre.com/capas/ENbKvd52txjkQkhuE67nFQ/7751/external_cover.jpg?quality=100",
      "score":"7.60",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Drama",
        "Fantasia",
        "Romance",
        "Seinen",
        "Webtoon"
      ]
    },
    {
      "name":"Dominating the town",
      "author":"传奇漫业 (ou Legendary Comics) &  传奇漫业 (Arte)",
      "description":"Zhian Tian foi abandonado por seu pai junto com sua mãe e irmã. Eles se mudaram para o Mar da China Oriental para ganhar a vida, mas sua mãe foi assassinada e incriminada para parecer um suicida pulando de um prédio. Felizmente, uma pessoa misteriosa o resgatou e o levou para se juntar ao exército. Após dez anos de campos de batalha sangrentos e lutando bravamente para matar os inimigos, Zhan Tian deixou de ser um peão da fronteira e passou a ser chamado de 'O Deus da Guerra'. Ele liderou a cavalaria de ferro sob seu comando para varrer as fronteiras, guardar territórios, expulsar os bárbaros e estabelecer um feito de liderança mundial. Dez anos depois, ele recebeu um édito imperial e voltou a Pequim para relatar suas funções. Finalmente, ele teve a oportunidade de fazer todos tremerem sob seus pés.",
      "link":"/manga/dominating-the-town/11235",
      "id":"11235",
      "chapters_count":"1",
      "image":"https://static3.mangalivre.com/capas/YGX764B0roWbKXA-yQCV9g/11235/5fb2a958112e2external_cover.jpg?quality=100",
      "score":"6.04",
      "categories":[
        "Ação",
        "Drama",
        "Seinen",
        "Suspense",
        "Webtoon"
      ]
    },
    {
      "name":"Kajiya de Hajimeru Isekai Slow Life",
      "author":"Tamamaru / たままる &  Himori Yoshino / 日森よし の (Arte)",
      "description":"Uma noite, Eizo, um infeliz escravo corporativo, salva um gato e é atropelado por um caminhão. O gato que parece estar relacionado a um mundo paralelo, em troca de sua ajuda, concede a Eizo uma habilidade de seu desejo e o reencarna em outro mundo. Eizo, que tem o artesanato como hobby e deseja usar essa habilidade para viver, opta por reencarnar como ferreiro. E então ele começa sua vida em outro mundo como ferreiro, assim como deseja. No entanto, as criações de Eizo estão em outro nível diferente que vai abalar este novo mundo.",
      "link":"/manga/kajiya-de-hajimeru-isekai-slow-life/11057",
      "id":"11057",
      "chapters_count":"1",
      "image":"https://static3.mangalivre.com/capas/TMYsoZP-T8tyVw3Jpu_k-Q/11057/5f930e96b2472external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Ação",
        "Aventura",
        "Comédia",
        "Ecchi",
        "Fantasia",
        "Harém",
        "Isekai",
        "Romance",
        "Slice of Life"
      ]
    },
    {
      "name":"Palace of Bardo",
      "author":"Bamilssi &  Zaru (Arte)",
      "description":"Mesmo se você morrer, mesmo se você renascer ...Você nunca será capaz de me deixar.Incapaz de aceitar o imperador, que está mergulhado na obsessão e na loucura, matei-me.Mas cem anos se passaram... e eu renasci, como se fosse o destino, como se o destino pregasse peças em mim.E com minha memória passada intacta !!Jurei nunca mais vê-lo, mas esperava que ao menos ele tivesse esquecido toda a sua memória ...Será que eu não poderia ter escapado dele mesmo com a morte?&nbsp;Encaro a reencarnação do imperador mais uma vez...",
      "link":"/manga/palace-of-bardo/11236",
      "id":"11236",
      "chapters_count":"1",
      "image":"https://static3.mangalivre.com/capas/CyLMAitQwdgDjOYIX7foLQ/11236/5fb2aba5a92d0external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Drama",
        "Hentai",
        "Histórico",
        "Psicológico",
        "Webtoon",
        "Yaoi"
      ]
    },
    {
      "name":"Above All Gods",
      "author":"Manke Culture",
      "description":"O imperador do submundo Gu Tianlang é punido pelo Dao celestial até perder sua vida, ao menos é o que deveria acontecer, mas aparentemente seu artefato de jade conseguiu salvá-lo da morte iminente. 500 anos depois ele retorna a esse mundo, justamente nas proximidades da seita de seu melhor amigo Huode.",
      "link":"/manga/above-all-gods/9924",
      "id":"9924",
      "chapters_count":"153",
      "image":"https://static3.mangalivre.com/capas/kldnfEHl29TAGjdvqMHz0w/9924/external_cover.jpg?quality=100",
      "score":"7.13",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Fantasia",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Henjo: Hen na Joshikousei Amaguri Senko",
      "author":"Konogi, Yoshiru",
      "description":"Amaguri Senko é uma garota do ensino médio com uma personalidade legal e é uma grande pervertida. Ela lê abertamente pornô e&nbsp;mangás eróticos, e não se&nbsp;perturba no vendo um pênis e tal. A história é de cerca de dois homens adultos que vêm para viver e trabalhar para seu pai, que dirige uma empresa que faz vários trabalhos,com ajuda dela. E as várias formas de assédio sexual que ela submete os dois.",
      "link":"/manga/henjo-hen-na-joshikousei-amaguri-senko/5996",
      "id":"5996",
      "chapters_count":"31",
      "image":"https://static3.mangalivre.com/capas/4paGusyVz7beKHZg-6urmw/5996/5fad377d11776external_cover.jpg?quality=100",
      "score":"7.34",
      "categories":[
        "Comédia",
        "Ecchi",
        "Escolar",
        "Romance",
        "Seinen"
      ]
    },
    {
      "name":"Mahou Shoujo Gakuen no Suketto Kyoushi",
      "author":"Toudou Gou &  Fujimoto Sakura (Arte)",
      "description":"Lou Brandel, um mago gênio com talento há milhares de anos.&nbsp;Um dia ajudou uma linda filha aristocrática, Franc, e foi designado para o “Magic Girls 'Gakuen”, onde atua como professor!&nbsp;Agora, a vida de professor “fora do padrão” do mago mais forte se abre!",
      "link":"/manga/mahou-shoujo-gakuen-no-suketto-kyoushi/11221",
      "id":"11221",
      "chapters_count":"1",
      "image":"https://static3.mangalivre.com/capas/0eM9EN_mUvioAtAineHtVQ/11221/5faf1f1e32d25external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Aventura",
        "Escolar",
        "Fantasia",
        "Harém",
        "Magia",
        "Seinen"
      ]
    },
    {
      "name":"Isekai de Tochi wo Katte Noujou wo Tsukurou",
      "author":"Okazawa, Rokujuuyon ( &  Sasameyuki, Jun (Arte)",
      "description":"Itonami Norio é invocado para outro mundo para enfrentar o Rei Demônio, mas como os humano não encontraram nenhuma habilidade nele, ficou sendo considerado como um inútil. Para não se envolver, ele negocia com o Rei e recebe um terreno vazio e deserto. Sem poder contar, Norio tem uma habilidade chamada de “O Mestre da Supremacia”, um presente que foi dado por Hephaistos. Acompanhe essa tranquila vida de Norio em um mundo desconhecido.",
      "link":"/manga/isekai-de-tochi-wo-katte-noujou-wo-tsukurou/9598",
      "id":"9598",
      "chapters_count":"23",
      "image":"https://static3.mangalivre.com/capas/7t6AYgf0hQVH4AW_VqJfgg/9598/external_cover.jpg?quality=100",
      "score":"6.21",
      "categories":[
        "Comédia",
        "Fantasia",
        "Slice of Life"
      ]
    },
    {
      "name":"Sei-chan, Your Love Is Too Much!",
      "author":"Segawa Sasa",
      "description":"Quando meu melhor amigo de infância, Sei-chan, mudou-se para morar conosco, ele começou a me provocar, tentando me seduzir, entrando no meu quarto sem permissão, e tomando outras liberdades! Os ataques diários do lindo Sei-chan são muito poderosos!",
      "link":"/manga/sei-chan-your-love-is-too-much/11211",
      "id":"11211",
      "chapters_count":"2",
      "image":"https://static3.mangalivre.com/capas/1ZCu8aT0DcJofT0NzO9cvg/11211/5faf0ed64b149external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Comédia",
        "Escolar",
        "Romance",
        "Shoujo",
        "Slice of Life"
      ]
    },
    {
      "name":"Urban Fairy King",
      "author":"Boyi animation",
      "description":"Bai Li Yun Xiao foi morto uma vez nessa vida, após isso foi para o continente Jiuxiao onde cultivou até se tornar um soberano, o que não durou mais que dois dias, já que sua esposa o traiu e o matou, agora Bai Li retorna 300 anos no passado, em sua vida na terra, podendo evitar ser morto novamente qual caminho ele seguirá?",
      "link":"/manga/urban-fairy-king/9198",
      "id":"9198",
      "chapters_count":"49",
      "image":"https://static3.mangalivre.com/capas/vC-OSa9i-nEvJcAiQ_cIKw/9198/external_cover.jpg?quality=100",
      "score":"6.46",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Escolar",
        "Webtoon"
      ]
    },
    {
      "name":"Soushi Souai",
      "author":"Liberum",
      "description":"Uma linda, inevitável e calorosa história de amor entre um garoto loiro delinquente e uma garota séria de cabelos negros.",
      "link":"/manga/soushi-souai/11234",
      "id":"11234",
      "chapters_count":"1",
      "image":"https://static3.mangalivre.com/capas/QfL_Jqxf7VyJ_l-MfE5I5Q/11234/5fb292b976880external_cover.jpg?quality=100",
      "score":"7.13",
      "categories":[
        "Comédia",
        "Escolar",
        "Romance"
      ]
    },
    {
      "name":"Head Over Heels",
      "author":"South Star  &  Prishe (Arte)",
      "description":"Woohyun é rico, bonito e popular ... mas ele também é um valentão total. Seu saco de pancadas é Ha Yan, uma garota gago e receptiva em sua classe. Woohyun gosta de nada mais do que assediá-la... O estranho é que Ha Yan parece realmente desejar sua atenção, alimentando-a. Na medida que cada um vai fazendo sua rede de engano para capturar o outro, quem terminará capturado? E o romance poderia florescer com essa massa de obsessão emaranhada e espinhosa?",
      "link":"/manga/head-over-heels/9397",
      "id":"9397",
      "chapters_count":"15",
      "image":"https://static3.mangalivre.com/capas/s4y_aZHA_wo7DMqhB0jnmw/9397/external_cover.jpg?quality=100",
      "score":"6.23",
      "categories":[
        "Drama",
        "Escolar",
        "Psicológico",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"Marielle Clarac no Konyaku",
      "author":"Momo, Haruka ( &  Mitani, Tomoko (Arte)",
      "description":"Simples e imperceptível, ela era a flor da parede nada atraente da alta sociedade. Mesmo assim, Marielle foi proposta a. Além disso, seu noivo é Sir Simeon, o popular cavaleiro da Guarda Imperial! Por que ele está com alguém como ela? Por mais que fosse invejada e desprezada, Marielle era feliz. Bem, porque sua aparência era a de um Adônis calmo e de duas caras!",
      "link":"/manga/marielle-clarac-no-konyaku/10594",
      "id":"10594",
      "chapters_count":"9",
      "image":"https://static3.mangalivre.com/capas/lZXJpuNt8sxJ-ndCFrZd_g/10594/external_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Fantasia",
        "Histórico",
        "Josei",
        "Romance"
      ]
    },
    {
      "name":"The Peerless Doctor: From Consort to Empress",
      "author":"YouYvWuYv",
      "description":"[Adaptado do webnovel de mesmo nome] Ela é uma especialista em medicina legal chinesa, reencarnando na única filha de uma família. Ele é neto do imperador, indiferente e com uma dívida de sangue. Um banquete permite que sua elegância e talento floresçam, formando adicionalmente os laços que os unem. Para ela, ele abriu um lindo caminho para viver de acordo com seu brilho absoluto. Para ele, ela conspirou contra o mundo para ajudá-lo no caminho ao trono ... Uma perita médico-legal, reencarnando e contra-atacando, encontrando o neto do Imperador ... conseguindo ficar juntos para o resto de suas vidas.",
      "link":"/manga/the-peerless-doctor-from-consort-to-empress/11123",
      "id":"11123",
      "chapters_count":"3",
      "image":"https://static3.mangalivre.com/capas/r6nxRbQdOTSJ_vzVR-tF0w/11123/5fa08648416a0external_cover.jpg?quality=100",
      "score":"6.08",
      "categories":[
        "Histórico",
        "Isekai",
        "Romance",
        "Webtoon"
      ]
    },
    {
      "name":"Joou Heika no Isekai Strategy",
      "author":"Dai-616 Tokubetsu Jouhou Daitai ( &  Iwamoto, Eiri (Arte)",
      "description":"Nossa protagonista é uma estudante universitária que gosta de jogar como a facção do mal, Arachnea, em seu jogo favorito. Um dia, ela se encontra em um mundo semelhante ao do jogo, além disso, seu corpo agora é o de uma garota de quatorze anos. Embora as coisas estejam um pouco diferentes de como eram no jogo, um elemento permaneceu o mesmo: ela é a líder da Arachnea.",
      "link":"/manga/joou-heika-no-isekai-strategy/11198",
      "id":"11198",
      "chapters_count":"3",
      "image":"https://static3.mangalivre.com/capas/OL9kykP-t1-22igPmBrNDw/11198/5fb2914f4ae7cexternal_cover.jpg?quality=100",
      "score":"6.00",
      "categories":[
        "Ação",
        "Fantasia",
        "Horror",
        "Jogos"
      ]
    },
    {
      "name":"Eguchi-kun wa Minogasanai",
      "author":"Nozawa, Yukiko",
      "description":"Eguchi Hajime é um garoto da escola primária com o pior (melhor?) Super poder de todos os tempos: Ser capaz de perceber cada pequeno momento erótico que acontece na vida cotidiana.",
      "link":"/manga/eguchi-kun-wa-minogasanai/9761",
      "id":"9761",
      "chapters_count":"10",
      "image":"https://static3.mangalivre.com/capas/_ZPvXLJgaekAzjtKk5fB5Q/9761/5fad37581cf2fexternal_cover.jpg?quality=100",
      "score":"6.70",
      "categories":[
        "Comédia",
        "Ecchi",
        "Escolar",
        "Seinen"
      ]
    }
  ]
}
```
</p>
</details>

## Listar mangás populares

### Request
`GET /popular/:page` para listar mangás populares. Quanto menor a página, mais popular.

ou

`GET /popular` para listar os 30 mangás mais populares. (redirecionamento para `/popular/1`)

### Response

<details>
<summary>Mostrar response longo</summary>
<p>

```json
{
  "mangas":[
    {
      "name":"Tales Of Demons And Gods",
      "author":"Mad Snail",
      "description":"Nie Li, o mais poderoso Espiritualista Demoníaco e estando no topo do mundo marcial, perde sua vida durante a batalha com o Imperador Sábio e as seis bestas de nível divino, e sua alma volta ao passado para quando ele tinha 13 anos. Embora ele seja o mais fraco em sua classe, com o talento mais baixo no reino da alma Vermelho – o mais fraco dos reinos – com a ajuda de seu vasto conhecimento acumulado na sua vida passada, cresce mais rápido do que todos.Agora, ele irá tentar proteger a cidade que no futuro será invadida pelas bestas e que acabou sendo destruída, assim como sua amada, seus amigos e sua família que morreram pelo ataque das mesmas, e destruir a família Sagrada que abandonaram seus deveres e traíram a cidade em sua vida passada.",
      "link":"/manga/tales-of-demons-and-gods/2412",
      "id":"2412",
      "chapters_count":"464",
      "image":"https://static3.mangalivre.com/capas/gD0Oa7y2CPW5rtPpe0HmRA/2412/external_cover.jpg?quality=100",
      "score":"9.22",
      "categories":[
        "Artes Marciais",
        "Aventura",
        "Shounen",
        "Sobrenatural",
        "Webtoon"
      ]
    },
    {
      "name":"Boku no Hero Academia",
      "author":"Horikoshi, Kouhei",
      "description":"A série conta a história de Midoriya Izuku, um garoto tímido e fraco cujo sonho é ser um herói. O problema é que ele vive num mundo repleto de pessoas com super poderes, mas ele mesmo não tem poder algum. No entanto, ele não desiste de seu grande sonho e fará de todo o possível para ser o maior herói que o mundo já conheceu!",
      "link":"/manga/boku-no-hero-academia/1319",
      "id":"1319",
      "chapters_count":"301",
      "image":"https://static3.mangalivre.com/capas/fFNEvtskJ9_rLiZYuUEyAw/1319/5f8b2ac064a49external_cover.jpg?quality=100",
      "score":"9.15",
      "categories":[
        "Ação",
        "Comédia",
        "Escolar",
        "Shounen",
        "Super Poderes"
      ]
    },
    {
      "name":"One Piece",
      "author":"Oda, Eiichiro",
      "description":"One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso. Desde então muitos piratas se aventuram pela Grand Line para tentar encontrar o tesouro chamado One Piece. Um deles é Monkey D. Luffy, o garoto que, acidentalmente, comeu uma das Akuma No Mi, a Gomu Gomu No Mi (Fruta da Borracha), e agora ele pode esticar seu corpo como se fosse uma borracha. A jornada dele começa atrás de companheiros e um barco, que ele vai conseguindo pouco a pouco, pois tem um objetivo: Ser o Rei Dos Piratas!!!",
      "link":"/manga/one-piece/13",
      "id":"13",
      "chapters_count":"999",
      "image":"https://static3.mangalivre.com/capas/_slRjF_Ugy8VwYmS7w3o7Q/13/5f8b2d4095387external_cover.jpg?quality=100",
      "score":"9.56",
      "categories":[
        "Ação",
        "Aventura",
        "Comédia",
        "Fantasia",
        "Shounen",
        "Super Poderes"
      ]
    },
    {
      "name":"Solo Leveling",
      "author":"Jang Sung-Lak",
      "description":"Dez anos atrás, depois do \"Portal\" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, \"O mais fraco do mundo\". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível... Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder!!!",
      "link":"/manga/solo-leveling/7702",
      "id":"7702",
      "chapters_count":"128",
      "image":"https://static3.mangalivre.com/capas/5BVAUcY8TDTVeiYJpDzMqQ/7702/capa.jpg?quality=100",
      "score":"9.35",
      "categories":[
        "Ação",
        "Aventura",
        "Shounen"
      ]
    },
    {
      "name":"Kimetsu no Yaiba",
      "author":" Gotouge, Koyoharu",
      "description":"O mangá conta a história de Tanjiro, o filho mais velho de uma família que é massacrada por um demônio e, a única sobrevivente do incidente foi umas das suas irmãs, que por causa do massacre acaba se transformando em um demônio. Então, o protagonista, Tanjiro, sai em uma jornada para tentar achar uma ''cura'' para a sua irmã.",
      "link":"/manga/kimetsu-no-yaiba/3364",
      "id":"3364",
      "chapters_count":"212",
      "image":"https://static3.mangalivre.com/capas/jphmHo-AllnqJOLTH5jm3w/3364/external_cover.jpg?quality=100",
      "score":"9.11",
      "categories":[
        "Ação",
        "Demônios",
        "Histórico",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"One Punch Man",
      "author":"ONE &  Murata, Yusuke (Arte)",
      "description":"Conta o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso...",
      "link":"/manga/one-punch-man/1036",
      "id":"1036",
      "chapters_count":"206",
      "image":"https://static3.mangalivre.com/capas/CuI4nqmgWPJE2rAVPv_EgA/1036/external_cover.jpg?quality=100",
      "score":"9.57",
      "categories":[
        "Ação",
        "Comédia",
        "Paródia",
        "Sci-Fi",
        "Sobrenatural",
        "Super Poderes"
      ]
    },
    {
      "name":"Black Clover",
      "author":"Tabata, Yuuki",
      "description":"Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta, um jovem que mesmo sem um pingo de magia, sonha em se tornar o Mago Imperador, o mais forte de todos os magos! Com muito esforço e trabalho duro, será ele capaz de atingir seus objetivos e superar seu genial rival e amigo de infância, Yuno?!!",
      "link":"/manga/black-clover/1751",
      "id":"1751",
      "chapters_count":"275",
      "image":"https://static3.mangalivre.com/capas/hv_3KLSu289xrUFEpVHbcQ/1751/5f9b4f9da813dexternal_cover.jpg?quality=100",
      "score":"9.10",
      "categories":[
        "Ação",
        "Comédia",
        "Fantasia",
        "Magia",
        "Shounen"
      ]
    },
    {
      "name":"The God of Highschool",
      "author":"Yong-Je Park",
      "description":"Enquanto uma ilha desaparece pela metade da face do planeta, uma organização misteriosa está enviando convites para cada lutador habilidoso da Terra para participarem de um torneio. Se você vencer, você pode ter O QUE QUISER?. Eles estão recrutando apenas os melhores para lutarem com os melhores e clamar o título de \"The God of HighSchool\"!",
      "link":"/manga/the-god-of-highschool/428",
      "id":"428",
      "chapters_count":"461",
      "image":"https://static3.mangalivre.com/capas/BpDCbmEBKxo3DV3YAOFQpA/428/external_cover.jpg?quality=100",
      "score":"8.73",
      "categories":[
        "Artes Marciais",
        "Shounen",
        "Webtoon"
      ]
    },
    {
      "name":"Tower of God (Season 2)",
      "author":" SIU",
      "description":"O que você deseja? Dinheiro? Glória? Poder? Vingança? Ou algo maior que tudo isso? O que quer que você deseje, \"isso está aqui\"...",
      "link":"/manga/tower-of-god-season-2/1772",
      "id":"1772",
      "chapters_count":"338",
      "image":"https://static3.mangalivre.com/capas/R4Iqm5Xw7aPZTIAMNPKv5Q/1772/external_cover.jpg?quality=100",
      "score":"8.75",
      "categories":[
        "Ação",
        "Aventura",
        "Drama",
        "Romance",
        "Sobrenatural",
        "Webtoon"
      ]
    },
    {
      "name":"Bleach",
      "author":" Kubo, Tite",
      "description":"A história conta com Kurosaki Ichigo como personagem principal. Após uma série de incidentes ele acaba se tornando um Shinigami, que são responsáveis pelo fluxo de almas do mundo real até a Soul Society, assim como combater os espíritos malígnos, Hollows. Porém, conforme ele começa a se envolver com o mundo espiritual, ele acaba no meio de uma trama que ameaça a existência de ambos os mundos.",
      "link":"/manga/bleach/2",
      "id":"2",
      "chapters_count":"712",
      "image":"https://static3.mangalivre.com/capas/6jne1MVWZthwoVxtBi9bvg/2/external_cover.jpg?quality=100",
      "score":"8.65",
      "categories":[
        "Ação",
        "Aventura",
        "Shounen",
        "Sobrenatural",
        "Super Poderes"
      ]
    },
    {
      "name":"Martial Peak",
      "author":"Momo II & (Arte)",
      "description":"A jornada para o Pico Marcial é algo longo e solitário. Indo de encontro com a adversidade, você deve sobreviver e permanecer vivo. Apenas aqueles que superarem os limites continuarão a jornada rumo ao objetivo de se tornar o mais forte. A Sky Tower testa seus discípulos de maneiras bem complexas para esta jornada. Um dia, o menosprezado Yang Kai conseguiu obter um livro negro, fazendo-o tomar rumo ao pico do mundo marcial!",
      "link":"/manga/martial-peak/7302",
      "id":"7302",
      "chapters_count":"669",
      "image":"https://static3.mangalivre.com/capas/9sEGIBRVeSk-n7f8-3duFQ/7302/external_cover.jpg?quality=100",
      "score":"8.29",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Comédia",
        "Fantasia",
        "Harém",
        "Histórico",
        "Romance",
        "Sobrenatural",
        "Webtoon"
      ]
    },
    {
      "name":"Star Martial God Technique",
      "author":"Mad Snail",
      "description":"No mundo existem doze caminhos para subir a torre de Deus, e contam as lendas que estes doze caminhos levam a lendária estrada da imortalidade. No entanto, esses caminhos da Torre de Deus, são exageradamente longo, sem fim. Nos tempos antigos haviam muitos tipos de artes marciais mas infelizmente o mundo passou por mudanças horríveis e restaram apenas três: a arte marcial da Chama, do Dragão e da Estrela. As Gerações de especialistas dessas três artes marciais estão a procura da estrada da imortalidade. Praticantes das Artes Marciais da Estrela, juntamente com a geração jovem, tentam durante toda sua vida encontrá-la para se tornar o Deus mais forte!",
      "link":"/manga/star-martial-god-technique/4300",
      "id":"4300",
      "chapters_count":"381",
      "image":"https://static3.mangalivre.com/capas/Pe49w2BUNubSALY5ajwFEg/4300/external_cover.jpg?quality=100",
      "score":"8.84",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Fantasia",
        "Romance",
        "Sobrenatural",
        "Webtoon"
      ]
    },
    {
      "name":"Boruto: Naruto Next Generations",
      "author":"Kodachi, Ukyou &  Ikemoto, Mikio (Arte)",
      "description":"Essa não é a história de um garoto que almeja se tornar Hokage, essa foi a história do meu pai. Mas essa é a minha história, o filho do Hokage, mas de certa forma está entrelaçada com a do meu pai. Essa é a história de uma alma shinobi.",
      "link":"/manga/boruto-naruto-next-generations/3637",
      "id":"3637",
      "chapters_count":"51",
      "image":"https://static3.mangalivre.com/capas/PLgbFCrRhE20KrRx3LyyKg/3637/external_cover.jpg?quality=100",
      "score":"8.60",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Shounen",
        "Super Poderes"
      ]
    },
    {
      "name":"Fights Break Sphere (Manhua)",
      "author":"Tian Can Tu Dou",
      "description":"Em uma terra onde não há magia, uma terra onde os fortes fazem as leis e os fracos tem que obedecer, uma terra cheia de tesouros fascinantes e de uma beleza indescritível, mas que também está preenchida com perigos inimagináveis. Xiao Yan, que mostrou ter um talento nunca visto em décadas, de repente perdeu tudo há 3 anos - seus poderes, sua reputação e a promessa com sua mãe. O que o levou a perder todos os seus poderes? E por que a sua noiva de repente apareceu?!",
      "link":"/manga/fights-break-sphere-manhua/2330",
      "id":"2330",
      "chapters_count":"336",
      "image":"https://static3.mangalivre.com/capas/VQpv4xINwz2pmep2VGpqkg/2330/external_cover.jpg?quality=100",
      "score":"9.20",
      "categories":[
        "Ação",
        "Aventura",
        "Comédia",
        "Romance",
        "Sobrenatural"
      ]
    },
    {
      "name":"Naruto",
      "author":" Kishimoto, Masashi",
      "description":"Naruto Uzumaki é um menino que vive em Konohagakure no Sato ou simplesmente Konoha ou Vila Oculta da Folha, a vila ninja do País do Fogo. Quando ainda bebê, Naruto teve aprisionada em seu corpo a Kyuubi no Youko por Minato Namikaze (quarto Hokage, e seu pai), com a finalidade de salvar a Vila da Folha. Desde então, Naruto é visto por muitas pessoas como um monstro, não só pelos familiares das pessoas mortas pela Kyuubi, mas também por pessoas que não toleram suas brincadeiras, já que o mesmo é extremamente hiperativo, incompreendido e solitário. Naruto sonha em se tornar o Hokage de sua vila, um ninja poderoso e respeitado, para assim poder ser reconhecido por todos.",
      "link":"/manga/naruto/1",
      "id":"1",
      "chapters_count":"718",
      "image":"https://static3.mangalivre.com/capas/EjvoRCrtbg8u15ewyND_4g/1/5f8b2f63f1b70external_cover.jpg?quality=100",
      "score":"8.97",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Shounen",
        "Super Poderes"
      ]
    },
    {
      "name":"Shingeki no Kyojin",
      "author":"Isayama, Hajime",
      "description":"Várias centenas de anos atrás, os humanos quase foram exterminados por Titãs. Os Titãs têm vários andares de altura, parecem não ter inteligência, devoram seres humanos e, o pior de tudo, parecem fazer isso pelo prazer e não como fonte de alimento.Avancemos para o presente e a cidade não viu um Titã há mais de 100 anos. O adolescente Eren e sua irmã adotiva Mikasa testemunham algo terrível quando as muralhas da cidade são destruídas por um super Titã que surge de lugar nenhum. Enquanto os Titãs menores inundam a cidade, as duas crianças assistem horrorizadas sua mãe ser devorada viva!",
      "link":"/manga/shingeki-no-kyojin/210",
      "id":"210",
      "chapters_count":"137",
      "image":"https://static3.mangalivre.com/capas/DLF5jbeg5ITRLKp56adSOg/210/external_cover.jpg?quality=100",
      "score":"9.44",
      "categories":[
        "Ação",
        "Drama",
        "Fantasia",
        "Horror",
        "Mistério",
        "Shounen",
        "Sobrenatural",
        "Super Poderes"
      ]
    },
    {
      "name":"Berserk",
      "author":"Miura, Kentarou",
      "description":"Gatts é um sobrevivente que vaga pelo mundo à procura de respostas. Antigo membro do ext \"Bando dos Falcões\", um grupo mercenário de cavaleiros e guerreiros liderado por Griffith e Caska, Gatts se adentra na história que ganha corpo e emerge sob um ponto de vista totalmente imprevisível, a medida que os acontecimentos vão se completando. É uma obra dedicada à eterna luta do Catolicismo contra Paganismo....",
      "link":"/manga/berserk/117",
      "id":"117",
      "chapters_count":"380",
      "image":"https://static3.mangalivre.com/capas/75i1MyyphXB1YA_3NuQ8vg/117/external_cover.jpg?quality=100",
      "score":"9.69",
      "categories":[
        "Ação",
        "Aventura",
        "Demônios",
        "Drama",
        "Fantasia",
        "Horror",
        "Militar",
        "Psicológico",
        "Seinen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Brawling Go",
      "author":" Worin",
      "description":"Jae Jiné impotente... em toda sua vida nunca conseguiu ter uma ereção e isso o faz tentar se suicidar. Mas a vida dará outra oportunidade a ele, mas não será muito agradável.",
      "link":"/manga/brawling-go/2656",
      "id":"2656",
      "chapters_count":"154",
      "image":"https://static3.mangalivre.com/capas/ZdQGVIhOwVcqdff2zTMxPQ/2656/external_cover.jpg?quality=100",
      "score":"8.47",
      "categories":[
        "Comédia",
        "Drama",
        "Ecchi",
        "Hentai",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"This Doesn't Feel Like Me",
      "author":"Andromeda 11",
      "description":"Jin-Woo, um garoto normal, vive sua vida tranquilamente até o dia em que é apresentado à sua nova mãe, que para sua surpresa é apenas alguns anos mais velha que ele. A princípio tudo parecia normal, até ele começar a notar alguns comportamentos peculiares em sua nova mãe...",
      "link":"/manga/this-doesnt-feel-like-me/7130",
      "id":"7130",
      "chapters_count":"51",
      "image":"https://static3.mangalivre.com/capas/vuomK_8OajohA-Bg8PNo4g/7130/external_cover.jpg?quality=100",
      "score":"6.77",
      "categories":[
        "Drama",
        "Harém",
        "Romance",
        "Webtoon"
      ]
    },
    {
      "name":"Killing Stalking",
      "author":" Koogi",
      "description":"Yoonbum, um rapaz quieto e carrancudo, tem uma queda por um dos caras mais populares e bonitos da faculdade, Sangwoo. Um dia, com a obsessão de Yoonbum por Sangwoo alcança seu pico, e Yoonbum decide entrar na casa de Sangwoo. Mas o que ele viu dentro não era o Sangwoo que ele sonhara, e nada do que ele estava esperando.",
      "link":"/manga/killing-stalking/5167",
      "id":"5167",
      "chapters_count":"72",
      "image":"https://static3.mangalivre.com/capas/swENZudlIpIpkfExgy6RWA/5167/capa.jpg?quality=100",
      "score":"8.72",
      "categories":[
        "Ação",
        "Drama",
        "Psicológico",
        "Suspense",
        "Yaoi"
      ]
    },
    {
      "name":"Shokugeki no Souma",
      "author":" Morisaki, Yuki ( &  Saeki, Shun (Arte)",
      "description":"O Sonho de Yukihira Souma é se tornar um chef no restaurante do seu pai e superar ele em habilidades. Mas assim que Yukihira se gradua no ginásio, seu pai Jouichirou, fecha o restaurante e vai cozinhar em Nova Iorque. Após isso, seu pai matricula Souma em uma escola de elite onde apenas 10% ficam até o final, e se Souma não puder sobreviver naquela escola, não poderá superar o seu pai...",
      "link":"/manga/shokugeki-no-souma/1114",
      "id":"1114",
      "chapters_count":"324",
      "image":"https://static3.mangalivre.com/capas/968TtGiXcHbaMeiGpHePFQ/1114/external_cover.jpg?quality=100",
      "score":"9.29",
      "categories":[
        "Ecchi",
        "Escolar",
        "Shounen"
      ]
    },
    {
      "name":"Kingdom",
      "author":"Hara, Yasuhisa",
      "description":"Milhões de anos se passaram desde a era das lendas, quando o mundo dos homens e dos deuses eram iguais. Nessa época, a ambição do homem movia o mundo. Essa é a era da guerra dos 500 anos: o período de guerras das primaveras e outonos. Kingdom é a história de um jovem chamado Shin e dos desafios pelos quais ele passou até se tornar um grande general!!!",
      "link":"/manga/kingdom/1222",
      "id":"1222",
      "chapters_count":"658",
      "image":"https://static3.mangalivre.com/capas/8-eLRRSQPRhPUkse4Kf0Dg/1222/external_cover.jpg?quality=100",
      "score":"9.54",
      "categories":[
        "Ação",
        "Drama",
        "Histórico",
        "Militar",
        "Seinen"
      ]
    },
    {
      "name":"The Gamer",
      "author":"Sung San-young &  Sang-ah (Arte)",
      "description":"Han Je-Han era somente um estudante normal até que repentinamente desenvolveu uma habilidade estranha em que para ele, o mundo real todo passa a ser configurado como em um jogo. As pessoas possuem nome e nível sobre suas cabeças, ajudar uma pessoa rende pontos de experiência e quando ele avança de nível ganha novas habilidades. Acompanhe Han Je-Han e descubra como usar estes novos poderes… e quais são as grandes responsabilidades que vem com eles.",
      "link":"/manga/the-gamer/1745",
      "id":"1745",
      "chapters_count":"351",
      "image":"https://static3.mangalivre.com/capas/OhsLhKsYOtU7I9Ilp2egcA/1745/external_cover.jpg?quality=100",
      "score":"8.69",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Comédia",
        "Escolar",
        "Fantasia",
        "Romance",
        "Shounen",
        "Sobrenatural",
        "Webtoon"
      ]
    },
    {
      "name":"The Last Human",
      "author":"Amazing Works",
      "description":"Zuo Tianchen é o último humano vivo em uma cidade infestada de zumbis. Quando ele estava prestes a morrer ele acabou voltando para o seu eu de 10 anos atrás. Qual será o desfecho desta vez com Zuo Tianchen possuindo sua experiência de 10 anos no futuro?!!",
      "link":"/manga/the-last-human/7797",
      "id":"7797",
      "chapters_count":"287",
      "image":"https://static3.mangalivre.com/capas/O41-pMhRWA-sNtrrhCH4uA/7797/external_cover.jpg?quality=100",
      "score":"8.23",
      "categories":[
        "Ação",
        "Horror",
        "Shounen",
        "Sobrenatural",
        "Webtoon"
      ]
    },
    {
      "name":"Hajime no Ippo",
      "author":"Morikawa, George",
      "description":"Ippo Makunouchi, um tímido estudante de ensino médio, é um dia salvo se der espancado, por Takamura, um boxeador. Encantado pelas habilidade de Takamura e por vídeos de boxe, Ippo decide enfrentar o mundo profissional do boxe",
      "link":"/manga/hajime-no-ippo/284",
      "id":"284",
      "chapters_count":"1321",
      "image":"https://static3.mangalivre.com/capas/ZlB2Nq_qMYaDFmur22kJww/284/external_cover.jpg?quality=100",
      "score":"9.14",
      "categories":[
        "Ação",
        "Comédia",
        "Drama",
        "Esportes",
        "Shounen"
      ]
    },
    {
      "name":"Sign",
      "author":"Ker",
      "description":"Existem algumas coisas fora do normal no Café Goyo. Número um, o café deles é uma porcaria. Número dois, seus clientes nunca pedem coisas do menu. E número três, Yohan, o gerente da cafeteria, é surdo. Então quando Soohwa começa a trabalhar lá, mesmo que não esperem que ele aprenda a fazer um bom café, o pedem para expandir seu vocabulário de linguagem de sinais além de “pagamento,” “melhor,” e “por favor.” Mas, quando Yohan oferece aulas particulares, Soohwa hesita. Não porque não queira estudar, mas por certos “problemas” que acontecem quando ouve a voz dele.&nbsp;",
      "link":"/manga/sign/6861",
      "id":"6861",
      "chapters_count":"109",
      "image":"https://static3.mangalivre.com/capas/W0qIK7EmAGOyeu1KM5_ARg/6861/capa.jpg?quality=100",
      "score":"8.76",
      "categories":[
        "Comédia",
        "Hentai",
        "Romance",
        "Webtoon",
        "Yaoi"
      ]
    },
    {
      "name":"Yakusoku no Neverland",
      "author":"Shirai, Kaiu &  Demizu, Posuka (Arte)",
      "description":"Emma e seus amigos vivem uma boa vida no orfanato em que cresceram. embora as regras sejam duras, a babá (ou qualquer outro nome pra quem cuida das crianças) é gentil. mas porque as crianças são proibidas de saírem...?!",
      "link":"/manga/yakusoku-no-neverland/4055",
      "id":"4055",
      "chapters_count":"183",
      "image":"https://static3.mangalivre.com/capas/XxG_-E0-93XIygjOX_lGqQ/4055/external_cover.jpg?quality=100",
      "score":"9.10",
      "categories":[
        "Horror",
        "Mistério",
        "Sci-Fi",
        "Shounen"
      ]
    },
    {
      "name":"A Perverts Daily Life",
      "author":"Alice Crazy",
      "description":"Vamos apenas dizer que Jinwoo e Seyoung tiveram um começo difícil. Não sabendo que Seyoung estaria morando em um dormitório da companhia com um empregado do sexo masculino, seu superior direto, invadiu seu quarto pensando que era dela. Seu timing não poderia ter sido mais inadequado, já que Jinwoo estava no meio de uma bronha. Envergonhado e sem lugar para se esconder, a vida de Jinwoo estava caminhando para a miséria. No entanto, pouco ele sabia que Seyoung não era um novata comum. Ela tinha seu próprio segredinho...",
      "link":"/manga/a-perverts-daily-life/8194",
      "id":"8194",
      "chapters_count":"89",
      "image":"https://static3.mangalivre.com/capas/o3se21H_p_J8RS9wuYd8DQ/8194/external_cover.jpg?quality=100",
      "score":"8.24",
      "categories":[
        "Adulto",
        "Comédia",
        "Ecchi",
        "Hentai",
        "Romance",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"19 Days",
      "author":"Old Xian",
      "description":"A estranha amizade de dois amigos...",
      "link":"/manga/19-days/2951",
      "id":"2951",
      "chapters_count":"260",
      "image":"https://static3.mangalivre.com/capas/b0VZ-CxOq7kofISzY733RA/2951/v037_1.jpg?quality=100",
      "score":"8.19",
      "categories":[
        "Comédia",
        "Escolar",
        "Shounen Ai",
        "Slice of Life"
      ]
    },
    {
      "name":"Dr. Stone",
      "author":"Inagaki, Riichiro &  Boichi (Arte)",
      "description":"Durante 5 anos, Taiju Ooki tentou se confessar para o amor de sua vida, Yuzuriha, mas nunca conseguiu. Um dia ele decide reunir toda sua coragem para dizer a ela tudo o que sente... Mas EXATAMENTE nessa hora uma CATÁSTROFE de proporções globais extingue toda a humanidade transformando-a em pedra. Como únicos sobreviventes (até então) cabe a Taiju e seu brilhante amigo, o cientista Senkuu, fazerem a humanidade sair da Idade da Pedra, voltar a Era Moderna e salvar Yuzuriha!!!",
      "link":"/manga/dr-stone/4948",
      "id":"4948",
      "chapters_count":"176",
      "image":"https://static3.mangalivre.com/capas/MCqVxZSZHivlguTx40QBBw/4948/5fa1ed4036304external_cover.jpg?quality=100",
      "score":"9.02",
      "categories":[
        "Aventura",
        "Sci-Fi",
        "Shounen"
      ]
    }
  ]
}
```

</p>
</details>

## Listar informações de um mangá pelo seu id
No exemplo, usarei o id 1, que é o id do mangá Naruto.

### Request
`GET /manga/:id` para listar as informações do mangá.

### Response
```json
{
  "manga":{
    "name":"Naruto",
    "id":"1",
    "link":"https://mangalivre.net/manga/id/1",
    "author":"Kishimoto, Masashi",
    "description":"Naruto Uzumaki é um menino que vive em Konohagakure no Sato ou simplesmente Konoha ou Vila Oculta da Folha, a vila ninja do País do Fogo. Quando ainda bebê, Naruto teve aprisionada em seu corpo a Kyuubi no Youko por Minato Namikaze (quarto Hokage, e seu pai), com a finalidade de salvar a Vila da Folha. Desde então, Naruto é visto por muitas pessoas como um monstro, não só pelos familiares das pessoas mortas pela Kyuubi, mas também por pessoas que não toleram suas brincadeiras, já que o mesmo é extremamente hiperativo, incompreendido e solitário. Naruto sonha em se tornar o Hokage de sua vila, um ninja poderoso e respeitado, para assim poder ser reconhecido por todos.",
    "chapters_count":"718",
    "image":"https://static3.mangalivre.com/capas/EjvoRCrtbg8u15ewyND_4g/1/5f8b2f63f1b70external_cover.jpg?quality=100",
    "score":"8.96",
    "categories":[
      "Ação",
      "Artes Marciais",
      "Aventura",
      "Shounen",
      "Super Poderes"
    ]
  }
}
```
