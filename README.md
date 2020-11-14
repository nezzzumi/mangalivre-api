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

No exemplo irei buscar por "i sold".


### Request
`GET /search/:nome` para buscar mangás pelo nome.

    curl "http://localhost:8080/search/i%20sold"

### Response
```json
{
  "series":[
    {
      "id_serie":7203,
      "name":"Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de.",
      "label":"Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de.",
      "score":"8.88",
      "value":"Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de. Mikkakan no Koufuku;Three Days of Happiness;I sold my life for ten thousand yen per year.;寿命を買い取ってもらった。一年につき、一万円で。",
      "author":"Miaki, Sugaru",
      "artist":"Taguchi, Shouichi",
      "categories":[
        {
          "name":"Drama",
          "id_category":29
        },
        {
          "name":"Shounen",
          "id_category":1
        }
      ]
    }
  ]
}
```

## Listar capítulos

No exemplo usarei o id retornado na busca do tópico anterior, que é <b>7203</b>.

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

Nesse exemplo usarei o id_release de um capítulo retornado no exemplo do tópico anterior, que é <b>162345</b>.

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

`GET /recents/:page` para listar mangás com lançamentos recentes de capítulo. Quanto menor o número da página, mais recentes serão.

ou

`GET /recents` para listar os 30 mangás com lançamentos de capítulo mais recentes. (redirecionamento para `/recents/1`)

### Response
<details>
<summary>Mostrar response longo</summary>
<p>

```json
{
  "mangas":[
    {
      "name":"Fuufu Ijou, Koibito Miman.",
      "author":"Kanamaru, Yuuki",
      "description":"Jirou, um estudante do terceiro ano do ensino médio, é forçado a viver com uma gyaru chamada Akari em um curso chamado \"Prática de Casais\". Para estarem emparelhados com seus próprios interesses românticos, eles vão agir como casados...!?",
      "link":"/manga/fuufu-ijou-koibito-miman-/8108",
      "id":"8108",
      "chapters":"33",
      "image":"https://static3.mangalivre.com/capas/TqYetspnxf8_VPv1b4F74w/8108/external_cover.jpg?quality=100",
      "rate":"7.84",
      "categories":[
        "Comédia",
        "Escolar",
        "Romance",
        "Seinen"
      ]
    },
    {
      "name":"K-On! Highschool",
      "author":"Kakifly",
      "description":"Após a Formatura das suas amigas, Azusa Nakano precisa recrutar novos membros para o Clube de Música Leve. Jun Suzuki e Ui Hirasawa aceitam se juntar ao clube, mas elas estão mais interessadas em tomar chá após as aulas do que criar música, mesmo quando Azusa consegue juntar os quatro membros necessários, a falta de conhecimento musical dos membros (e de instrumentos musicais) vai ser um desafio! Será que o Clube de Música Leve irá conseguir sobreviver e fazer mais uma apresentação?",
      "link":"/manga/k-on-highschool/11219",
      "id":"11219",
      "chapters":"3",
      "image":"https://static3.mangalivre.com/capas/oIJyCvhbBP7eB5wKtZpRFA/11219/5faf1d28ccb9dexternal_cover.jpg?quality=100",
      "rate":"7.57",
      "categories":[
        "Comédia",
        "Escolar",
        "Música",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"Kaifuku Jutsushi Yarinaoshi",
      "author":"Tsukiyo, Rui &  Haga, Souken (Arte)",
      "description":"\"Magos de cura não podem lutar sozinhos.\"Keare, que estava vinculado por esse conhecimento comum, foi explorado uma vez ou outra pelos outros. Mas um dia, ele notou o que estava além da magia de cura e estava convencido de que um mago de cura era a classe mais forte. No entanto, quando percebeu esse potencial, ele estava privado de tudo. Assim, ele usou a magia de cura no próprio mundo para voltar quatro anos, decidindo refazer tudo. Este é um conto heroico de um mago de cura que se tornou o mais forte usando o conhecimento de sua vida passada e magia de cura.",
      "link":"/manga/kaifuku-jutsushi-yarinaoshi/6854",
      "id":"6854",
      "chapters":"64",
      "image":"https://static3.mangalivre.com/capas/8esEsCk22RfoN55YSrKCMg/6854/external_cover.jpg?quality=100",
      "rate":"8.43",
      "categories":[
        "Adulto",
        "Ecchi",
        "Fantasia",
        "Hentai"
      ]
    },
    {
      "name":"Ijiranaide, Nagatoro-san",
      "author":"774 & amp; Art&(Arte)",
      "description":"Nagatoro é uma menina de primeiro ano na escola que adora fazer bullying com seu Senpai. Mas ele aceita isso, mesmo depois de ter passado por todos os tipos de situações humilhantes e embaraçosas, porque ele está apaixonado por ela.",
      "link":"/manga/ijiranaide-nagatoro-san/6938",
      "id":"6938",
      "chapters":"93",
      "image":"https://static3.mangalivre.com/capas/F-brGXk3Ur8LCvLgHXgd5A/6938/capa.jpg?quality=100",
      "rate":"8.20",
      "categories":[
        "Comédia",
        "Romance",
        "Slice of Life"
      ]
    },
    {
      "name":"Hazure Skill \"Mapping\" wo Te ni Shita Shounen wa Saikyou",
      "author":"Kamono, Udon ( &  SAVAN (Arte)",
      "description":"No seu 15º aniversário, Note é dotado desta versão inferior de skills \"Mapa do Mundo\" e \"Mapa de Área\". Em outras palavras, uma skill inútil.Logo depois, a amiga de infância de Note obtém skills extremamente poderosas e, devido a sua autodepreciação, relutantemente decide se separar. Tendo afastado a amiga de infância pela qual secretamente nutria sentimentos, ele vive seus dias na miséria enquanto tenta ganhar uma renda diária através de aventuras. Essa é a história de um garoto chamado Note, que sem nenhuma trapaça ou habilidade, se junta a um grupo cheio das mais fortes skills, suores, lutas e esforço para conseguir dominar as dungeons. Uma história desse tipo de crescimento.",
      "link":"/manga/hazure-skill-mapping-wo-te-ni-shita-shounen-wa-saikyou/8467",
      "id":"8467",
      "chapters":"14",
      "image":"https://static3.mangalivre.com/capas/0ErOwP2cV_v2dNQvmixVOg/8467/external_cover.jpg?quality=100",
      "rate":"6.24",
      "categories":[
        "Ação",
        "Aventura",
        "Fantasia"
      ]
    },
    {
      "name":"Disease",
      "author":"Hui Shi Tony &  Tuoto (Arte)",
      "description":"Um garoto com uma doença terminal que perdeu sua única família em um acidente descobre que essa doença escondia um poder extraordinário. Enquanto procura a verdade por trás da morte do seu ente querido, ele é tragado por uma trama obscura...",
      "link":"/manga/disease/11186",
      "id":"11186",
      "chapters":"13",
      "image":"https://static3.mangalivre.com/capas/wF6tQ662gEr5NXclROm1Zw/11186/5faafdf4d37dc_capa.jpg?quality=100",
      "rate":"6.12",
      "categories":[
        "Ação",
        "Drama",
        "Mistério",
        "Seinen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Hoshihimemura no Naishobanashi",
      "author":"Azuma, Yuki",
      "description":"Kanzaki Hajime, Cansado de ser provocado pelas meninas da cidade, Ele então decidiu voltar para sua cidade natal na vila Hoshihime, mas o que será que as meninas do interior pretendem fazer com ele...!?",
      "link":"/manga/hoshihimemura-no-naishobanashi/8943",
      "id":"8943",
      "chapters":"13",
      "image":"https://static3.mangalivre.com/capas/HgyCBODXlxgad4Arv_Ps5w/8943/external_cover.jpg?quality=100",
      "rate":"7.14",
      "categories":[
        "Comédia",
        "Ecchi",
        "Escolar",
        "Seinen"
      ]
    },
    {
      "name":"Kenja no Mago",
      "author":"Yoshioka, Tsuyoshi &  Shunsuke, Ogata (Arte)",
      "description":"Um jovem que com certeza tinha morrido em um acidente, foi renascer em outro mundo como um bebê! Depois disso, ele foi pego pelo herói patriota, o \"Sábio\" Merlin Wolford e lhe foi dado o nome de Shin. Ele foi criado como um neto por Merlin e recebeu ao máximo os ensinamentos de Merlin o que lhe valeu algum poder chocante no entanto, quando ele completou 15anos de idade seu avô Merlin disse: \"Eu esqueci de lhe ensinar o senso comum\"!!!<br>",
      "link":"/manga/kenja-no-mago/3902",
      "id":"3902",
      "chapters":"72",
      "image":"https://static3.mangalivre.com/capas/Oa1oidkFmjRVjVIGoe-H8Q/3902/capa.jpg?quality=100",
      "rate":"8.88",
      "categories":[
        "Comédia",
        "Fantasia",
        "Magia"
      ]
    },
    {
      "name":"Kamen Rider Spirits",
      "author":"Ishinomori, Shoutarou &  Muraeda, Kenichi (Arte)",
      "description":"Um policial solitário e triste de espírito chamado Taki Kazuya trabalha nos Estados Unidos, embora os o fogo em seu coração&nbsp;que uma vez o levou até onde está parece ter apagado. Um ataque sobrenatural sobre algumas&nbsp;crianças - seus amigos - reaviva o fogo que uma vez queimou brilhantemente dentro em seu coração! Juntamente com a ajuda de Kamen Rider Ichigo, Hongo Takeshi se dirige a ameaça. No entanto, ele descobre que há uma ameaça ainda maior do que aparece no horizonte e sai em busca de Kamen Rider Niigo, Ichimonji Hayato.Kamen Rider Spirits é a continuação do clássico história Kamen Rider - uma aventura de ação que narra os contos de heróis honrados e suas lutas contra o mal!",
      "link":"/manga/kamen-rider-spirits/5648",
      "id":"5648",
      "chapters":"38",
      "image":"https://static3.mangalivre.com/capas/r7lR1oXdmBvQU0IQLNPQ3Q/5648/capa.jpg?quality=100",
      "rate":"8.12",
      "categories":[
        "Ação",
        "Aventura",
        "Horror",
        "Sci-Fi",
        "Seinen"
      ]
    },
    {
      "name":"Collapse And See You Again",
      "author":"Lemoncandy &  Rodong (Arte)",
      "description":"O sonho de Jonathan é se tornar um popular streamer online! Sophie será capaz de ajudá-lo a alcançar seus sonhos?",
      "link":"/manga/collapse-and-see-you-again/10442",
      "id":"10442",
      "chapters":"11",
      "image":"https://static3.mangalivre.com/capas/6X7XRvbvuoyMeGGW9njL1g/10442/capa.jpg?quality=100",
      "rate":"6.25",
      "categories":[
        "Adulto",
        "Drama",
        "Ecchi",
        "Hentai",
        "Romance",
        "Seinen"
      ]
    },
    {
      "name":"Shiro Madoushi Syrup-san",
      "author":"Chilt",
      "description":"Syrup é uma Maga branca que dá suporte ao candidato a herói, Chrono. Mas Chrono não consegue se concentrar na batalha, e a causa não é outra senão a própria Syrup! O que ela está fazendo para distrair nosso corajoso herói?",
      "link":"/manga/shiro-madoushi-syrup-san/9686",
      "id":"9686",
      "chapters":"36",
      "image":"https://static3.mangalivre.com/capas/aPpIHlKuVnOejpNrjLeNcw/9686/external_cover.jpg?quality=100",
      "rate":"6.13",
      "categories":[
        "Comédia",
        "Ecchi",
        "Fantasia"
      ]
    },
    {
      "name":"K-On! Highschool",
      "author":"Kakifly",
      "description":"Após a Formatura das suas amigas, Azusa Nakano precisa recrutar novos membros para o Clube de Música Leve. Jun Suzuki e Ui Hirasawa aceitam se juntar ao clube, mas elas estão mais interessadas em tomar chá após as aulas do que criar música, mesmo quando Azusa consegue juntar os quatro membros necessários, a falta de conhecimento musical dos membros (e de instrumentos musicais) vai ser um desafio! Será que o Clube de Música Leve irá conseguir sobreviver e fazer mais uma apresentação?",
      "link":"/manga/k-on-highschool/11219",
      "id":"11219",
      "chapters":"3",
      "image":"https://static3.mangalivre.com/capas/oIJyCvhbBP7eB5wKtZpRFA/11219/5faf1d28ccb9dexternal_cover.jpg?quality=100",
      "rate":"7.57",
      "categories":[
        "Comédia",
        "Escolar",
        "Música",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"The Assistant",
      "author":"Siamtwins &  Cyburg (Arte)",
      "description":"Em 1990, vamos acompanhar a história de Terry, que almeja ser uma cartonista famoso. Após receber críticas  negativas de sua obra, Terry é contratado como assistente de Honey um Cartonista famoso.. Ops não tão famoso assim. Terry é chamado para trabalhar na casa do Honey, onde encontra a esposa de seu chefe.",
      "link":"/manga/the-assistant/11207",
      "id":"11207",
      "chapters":"2",
      "image":"https://static3.mangalivre.com/capas/48lr4YD_mVEEnGh7e4nOGQ/11207/5faf08848ff88external_cover.jpg?quality=100",
      "rate":"6.00",
      "categories":[
        "Adulto",
        "Drama",
        "Romance",
        "Webtoon"
      ]
    },
    {
      "name":"Hajime no Ippo",
      "author":"Morikawa, George",
      "description":"Ippo Makunouchi, um tímido estudante de ensino médio, é um dia salvo se der espancado, por Takamura, um boxeador. Encantado pelas habilidade de Takamura e por vídeos de boxe, Ippo decide enfrentar o mundo profissional do boxe",
      "link":"/manga/hajime-no-ippo/284",
      "id":"284",
      "chapters":"1321",
      "image":"https://static3.mangalivre.com/capas/ZlB2Nq_qMYaDFmur22kJww/284/external_cover.jpg?quality=100",
      "rate":"9.14",
      "categories":[
        "Ação",
        "Comédia",
        "Drama",
        "Esportes",
        "Shounen"
      ]
    },
    {
      "name":"Back To Rule Again",
      "author":"Rose Office",
      "description":"Um jovem chamado Yang Fan foi traído por sua namorada enquanto ele e sua irmã na porta da morte, quando, de repente, ele viajou de volta ao passado.&nbsp;Da última vez, vocês me intimidaram e me venderam.&nbsp;Desta vez, com o poder do anel, apenas os mais fortes podem sobreviver.&nbsp;E eu sou o mais forte.",
      "link":"/manga/back-to-rule-again/9679",
      "id":"9679",
      "chapters":"26",
      "image":"https://static3.mangalivre.com/capas/HA9__XEO8_i4w2mA1KjFFg/9679/external_cover.jpg?quality=100",
      "rate":"6.55",
      "categories":[
        "Ação",
        "Aventura",
        "Drama",
        "Romance",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"A Mão do Junior é boa",
      "author":"Songmi",
      "description":"\"Sunbae ... O que você faz todas as noites?\" Tae-Young, que mora com seu júnior 'Jung-hoon' (companheiro de quarto), tem um problema. Ele pensa em Jung-Hoon todas as noites enquanto se toca, mas não pode ir até o fim. Mas o que você é ...?! Jung Hoon de repente disse que iria 'me dar uma mão' enquanto bebêssemos álcool ...!",
      "link":"/manga/a-mao-do-junior-e-boa/11215",
      "id":"11215",
      "chapters":"1",
      "image":"https://static3.mangalivre.com/capas/EWTbRRHI7UJuTeMcpTryUg/11215/5faf1458b095aexternal_cover.jpg?quality=100",
      "rate":"6.00",
      "categories":[
        "Romance",
        "Yaoi"
      ]
    },
    {
      "name":"Nukenai Seiken-chan",
      "author":"Kumagai, Yuuki",
      "description":"Como a Excalibur, Excelia precisa ser retirada de algo... no caso dela, de um pedestal. Para a Espada Sagrada, Excelia, o pedestal é a sua calcinha.",
      "link":"/manga/nukenai-seiken-chan/9204",
      "id":"9204",
      "chapters":"29",
      "image":"https://static3.mangalivre.com/capas/AMn5QJvTfMiZax0BbbqSug/9204/external_cover.jpg?quality=100",
      "rate":"7.06"
    },
    {
      "name":"After Transformation, Mine and Her Wild Fantasy",
      "author":"Xue Yan Tian Zhao &  Shen July (Arte)",
      "description":"O que faria se acordasse num mundo novo sem memórias? Melhor ainda, acordar em dois corpos separados; Um homem e uma mulher! Esta é a história do nosso protagonista, Ti're. Embora, Pareça que a sorte não está do seu lado enquanto ele viaja em busca de \"as três ferramentas sagradas de Avalon\" para tentar recuperar suas memórias...",
      "link":"/manga/after-transformation-mine-and-her-wild-fantasy/7977",
      "id":"7977",
      "chapters":"115",
      "image":"https://static3.mangalivre.com/capas/3Ub00cZ8eYo-f_lYbZ3TNw/7977/external_cover.jpg?quality=100",
      "rate":"6.34",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Comédia",
        "Ecchi",
        "Fantasia",
        "Genérico",
        "Seinen"
      ]
    },
    {
      "name":"Yankee Musume to o Tomodachi Kara Hajimete Mita",
      "author":"Kuroabam",
      "description":"Um garoto se apaixonou à primeira vista pela delinquente n° 1 da escola. Ele reuniu coragem e a convidou para sair, mas...",
      "link":"/manga/yankee-musume-to-o-tomodachi-kara-hajimete-mita/8268",
      "id":"8268",
      "chapters":"15",
      "image":"https://static3.mangalivre.com/capas/P9nvGpV4MELI55Jw5y3Yaw/8268/external_cover.jpg?quality=100",
      "rate":"6.28",
      "categories":[
        "Comédia",
        "Escolar",
        "Romance"
      ]
    },
    {
      "name":"Murim Login",
      "author":"Zerobic &  Jang Cheol-Byuk (Arte)",
      "description":"Uma era onde caçadores prosperam caçando monstros que saem dos Portais. Jin Tae-Kyung é um Hunter de rank baixo que pega uma máquina RV, acidentalmente entra no jogo, o qual é em um mundo de artes marciais. Depois de muitos altos e baixos, Tae-Kyung é capaz de fugir deste mundo. A força e habilidades, que adquiriu em Murim foram capazes de serem levadas para o mundo real. Isso o possibilita a um boa caça... mas ele decide retornar ao mundo de Murim, para cuidar de seus amigos NPC.",
      "link":"/manga/murim-login/9837",
      "id":"9837",
      "chapters":"12",
      "image":"https://static3.mangalivre.com/capas/30alqNCCYoq9ZceMa9PUmA/9837/external_cover.jpg?quality=100",
      "rate":"6.23",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Drama",
        "Fantasia",
        "Sci-Fi",
        "Seinen"
      ]
    },
    {
      "name":"Mukasete! Ryuugasaki-san",
      "author":"Ichitomo, Kazutomo",
      "description":"A garota que estuda na minha classe, Ryugasaki-san é uma mulher-lagarto, e ela precisa trocar de pele várias vezes ao ano, eu a flagrei trocando de pele, será que ela me viu!?",
      "link":"/manga/mukasete-ryuugasaki-san/8945",
      "id":"8945",
      "chapters":"63",
      "image":"https://static3.mangalivre.com/capas/X0nijxRe2fANciuensgh8A/8945/external_cover.jpg?quality=100",
      "rate":"6.75",
      "categories":[
        "Comédia",
        "Ecchi",
        "Escolar",
        "Romance",
        "Sobrenatural"
      ]
    },
    {
      "name":"Holy Ancestor",
      "author":"Ao Tian Wu Hen &  神居动漫 文 (Arte)",
      "description":"Luo Lie sempre foi um aluno preguiçoso, mas ultimamente ele vem adormecendo na aula mais do que o habitual. Simplesmente sentado em sua mesa um dia, ele de repente se torna cercado por uma luz brilhante e vê uma misteriosa figura dourada atingindo dentro dele. Quando Luo Lie acorda, ele está em outro mundo, vestido com roupas diferentes, e as pessoas se aproximam dele chamando-o de \"Jovem Mestre\"!Agora, Luo Lie está a caminho de aprender técnicas poderosas em artes marciais com imensa força divina que está adormecida dentro dele!",
      "link":"/manga/holy-ancestor/7955",
      "id":"7955",
      "chapters":"81",
      "image":"https://static3.mangalivre.com/capas/VL5n0mBHFlSuMSrt8LbpvQ/7955/external_cover.jpg?quality=100",
      "rate":"6.66",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Aventura",
        "Harém",
        "Romance",
        "Shounen"
      ]
    },
    {
      "name":"Ring ni Kakero 2",
      "author":"Kurumada, Masami",
      "description":"No final do Ring ni Kakero 1, Ryuuji Takane enfrentou o Superstar Jun Kenzaki pelo título mundial. Agora, 17 anos depois, Rindo Kenzaki, filho de Jun Kenzaki e sobrinho de Ryuuji Takane, mora com Ishimatsu Katori, o \"Campeão Kenka\" da época de Ryuuji e Jun. Rindo se encontrará com uma nova geração de boxeadores para criar um novo Golden Japan Jr. para conquistar o mundo.",
      "link":"/manga/ring-ni-kakero-2/11106",
      "id":"11106",
      "chapters":"9",
      "image":"https://static3.mangalivre.com/capas/bl-W7Z_y6-rY-te2Z_IQnQ/11106/5f9ea85bad459external_cover.jpg?quality=100",
      "rate":"6.00",
      "categories":[
        "Esportes",
        "Seinen"
      ]
    },
    {
      "name":"Im Just An Immortal",
      "author":"Estúdio Red Carp",
      "description":"Nesta época, as pessoas estão sempre reencarnação, mas eu Lin Fei, depende de ser imortal. Eu vivi por centenas de milhões de anos, apenas para encontrar meus entes queridos que perdi por um milhão de anos !!",
      "link":"/manga/im-just-an-immortal/11134",
      "id":"11134",
      "chapters":"10",
      "image":"https://static3.mangalivre.com/capas/Bm-PtipzW3frp8efEGwk0Q/11134/5fa1659876d6cexternal_cover.jpg?quality=100",
      "rate":"6.07",
      "categories":[
        "Ação",
        "Fantasia",
        "Romance",
        "Sobrenatural"
      ]
    },
    {
      "name":"Tamarowa",
      "author":"Mikoto, Yamaguchi &  Mario (Arte)",
      "description":"O que acontece quando várias mulheres com circunstâncias especiais competem pela mão de um homem de negócios lindo e rico? Subam as cortinas para o show do \"Battle Royale do Namoro\", onde tudo vale! Assim começa a luta da bela Gotou Yuuna para dar a volta por cima de sua vida de dívidas!",
      "link":"/manga/tamarowa/9267",
      "id":"9267",
      "chapters":"17",
      "image":"https://static3.mangalivre.com/capas/-R3OaHo_X6ietcGZqP34ug/9267/external_cover.jpg?quality=100",
      "rate":"6.02",
      "categories":[
        "Adulto",
        "Drama",
        "Ecchi",
        "Harém",
        "Hentai",
        "Romance",
        "Seinen"
      ]
    },
    {
      "name":"Because I'm An Uncle Who Runs A Weapon Shop",
      "author":"SF Light Novels &  Man Tian Xing Hua & Xue Po (Arte)",
      "description":"Um dono de uma loja de armas que é muito mais capaz do que parece, um loli jovem e esperto de origem desconhecida. Que papéis esses dois desempenham em um novo mundo onde nada é certo!",
      "link":"/manga/because-im-an-uncle-who-runs-a-weapon-shop/7729",
      "id":"7729",
      "chapters":"5",
      "image":"https://static3.mangalivre.com/capas/cdlcuFh0liygOvCv3tnNxg/7729/external_cover.jpg?quality=100",
      "rate":"6.42",
      "categories":[
        "Ação",
        "Aventura",
        "Drama",
        "Fantasia",
        "Isekai",
        "Romance",
        "Webtoon"
      ]
    },
    {
      "name":"Quanzhi Fashi",
      "author":"Chaos",
      "description":"Ele acorda e o mundo mudou. A antiga escola agora ensina magia, encorajando seus estudantes a se tornarem os maiores magos que eles podem ser. Além dos limites da cidade, bestas magicas perambulam caçando humanos.<br><br>O mundo cientifico agora se transformou em um mundo magico. Mas ainda, algumas coisas não mudaram, o mesmo professor que olha com desdem para ele, os mesmos estudantes que desprezam ele, o mesmo pai que trabalha muito para sustenta-los, e a mesma meia-irmã que não consegue andar.<br><br>Mesmo assim, Mo Fan descobriu que enquanto o resto das pessoas pode usar um único elemento, ele pode usar toda a magia!!",
      "link":"/manga/quanzhi-fashi/7407",
      "id":"7407",
      "chapters":"199",
      "image":"https://static3.mangalivre.com/capas/_W4FCZW1VJW0rc8RZnJWqw/7407/external_cover.jpg?quality=100",
      "rate":"7.17",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Comédia",
        "Drama",
        "Escolar",
        "Fantasia",
        "Sobrenatural"
      ]
    },
    {
      "name":"Very Pure",
      "author":"Fishman The Second &  Dazui (Arte)",
      "description":"Yang Ming é um verdadeiro delinquente, entrando em brigas, fugindo da escola e colando nos testes. Um dia, ele recebe um misterioso par de lentes de contato que mudam toda a sua vida.",
      "link":"/manga/very-pure/7467",
      "id":"7467",
      "chapters":"94",
      "image":"https://static3.mangalivre.com/capas/Os-yenvK0b92gb5jSujHxg/7467/capa.jpg?quality=100",
      "rate":"6.84",
      "categories":[
        "Comédia",
        "Ecchi",
        "Escolar",
        "Harém",
        "Romance",
        "Shounen"
      ]
    },
    {
      "name":"Musume Janakute Mama ga Sukinano!? (Novel)",
      "author":"Nozomi, Kota &  Giuniu (Arte)",
      "description":"Eu sou Ayako Katsuragi, tenho 30 anos. Faz dez anos desde que adotei a filha da minha irmã falecida. Minha filha se tornou uma estudante do ensino médio e se dá muito bem com seu amigo de infância, Takumi Aterazawa. Será que eles vão comecar a namorar? Depois de uma noite de comemoração do aniversário do Ta-kun, ele me diz uma coisa que mudaria tudo na minha vida!",
      "link":"/manga/musume-janakute-mama-ga-sukinano-novel/9540",
      "id":"9540",
      "chapters":"15",
      "image":"https://static3.mangalivre.com/capas/r24ubLHpSTiqJjip66lRkw/9540/external_cover.jpg?quality=100",
      "rate":"6.00",
      "categories":[
        "Drama",
        "Romance",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"Rental Oniichan",
      "author":"Ichiiro, Hako",
      "description":"O que a garota alugou foi, um tempo feliz e amigável com seu falso irmão. A morte de seus pais... A completa mudança de seu irmão que era gentil... A garota que agora está sozinha e ferida, almejando a gentileza que um dia viu em seu irmão... Diz: Eu vou alugar um irmão! ...Com dinheiro. Mesmo alugando, eu quero ter uma \"família\"...",
      "link":"/manga/rental-oniichan/7348",
      "id":"7348",
      "chapters":"17",
      "image":"https://static3.mangalivre.com/capas/Rnodbdca8R0zT5-euYrFjw/7348/external_cover.jpg?quality=100",
      "rate":"7.44"
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
      "chapters":"464",
      "image":"https://static3.mangalivre.com/capas/gD0Oa7y2CPW5rtPpe0HmRA/2412/external_cover.jpg?quality=100",
      "rate":"9.22",
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
      "chapters":"301",
      "image":"https://static3.mangalivre.com/capas/fFNEvtskJ9_rLiZYuUEyAw/1319/5f8b2ac064a49external_cover.jpg?quality=100",
      "rate":"9.15",
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
      "chapters":"999",
      "image":"https://static3.mangalivre.com/capas/_slRjF_Ugy8VwYmS7w3o7Q/13/5f8b2d4095387external_cover.jpg?quality=100",
      "rate":"9.56",
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
      "description":"Dez anos atrás, depois do \"Portal\" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, \"O mais fraco do mundo\". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível... Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder!!!<br>",
      "link":"/manga/solo-leveling/7702",
      "id":"7702",
      "chapters":"128",
      "image":"https://static3.mangalivre.com/capas/5BVAUcY8TDTVeiYJpDzMqQ/7702/capa.jpg?quality=100",
      "rate":"9.35",
      "categories":[
        "Ação",
        "Aventura",
        "Shounen"
      ]
    },
    {
      "name":"Kimetsu no Yaiba",
      "author":" Gotouge, Koyoharu",
      "description":"O mangá conta a história de Tanjiro, o filho mais velho de uma família que é massacrada por um demônio e, a única sobrevivente do incidente foi umas das suas irmãs, que por causa do massacre acaba se transformando em um demônio. Então, o protagonista, Tanjiro, sai em uma jornada para tentar achar uma ''cura'' para a sua irmã.<br>",
      "link":"/manga/kimetsu-no-yaiba/3364",
      "id":"3364",
      "chapters":"212",
      "image":"https://static3.mangalivre.com/capas/jphmHo-AllnqJOLTH5jm3w/3364/external_cover.jpg?quality=100",
      "rate":"9.11",
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
      "chapters":"206",
      "image":"https://static3.mangalivre.com/capas/CuI4nqmgWPJE2rAVPv_EgA/1036/external_cover.jpg?quality=100",
      "rate":"9.57",
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
      "chapters":"275",
      "image":"https://static3.mangalivre.com/capas/hv_3KLSu289xrUFEpVHbcQ/1751/5f9b4f9da813dexternal_cover.jpg?quality=100",
      "rate":"9.10",
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
      "chapters":"461",
      "image":"https://static3.mangalivre.com/capas/BpDCbmEBKxo3DV3YAOFQpA/428/external_cover.jpg?quality=100",
      "rate":"8.72",
      "categories":[
        "Artes Marciais",
        "Shounen",
        "Webtoon"
      ]
    },
    {
      "name":"Tower of God (Season 2)",
      "author":" SIU",
      "description":"O que você deseja? Dinheiro? Glória? Poder? Vingança? Ou algo maior que tudo isso? O que quer que você deseje, \"isso está aqui\"...<br>",
      "link":"/manga/tower-of-god-season-2/1772",
      "id":"1772",
      "chapters":"338",
      "image":"https://static3.mangalivre.com/capas/R4Iqm5Xw7aPZTIAMNPKv5Q/1772/external_cover.jpg?quality=100",
      "rate":"8.75",
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
      "chapters":"712",
      "image":"https://static3.mangalivre.com/capas/6jne1MVWZthwoVxtBi9bvg/2/external_cover.jpg?quality=100",
      "rate":"8.65",
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
      "description":"A jornada para o Pico Marcial é algo longo e solitário. Indo de encontro com a adversidade, você deve sobreviver e permanecer vivo. Apenas aqueles que superarem os limites continuarão a jornada rumo ao objetivo de se tornar o mais forte. A Sky Tower testa seus discípulos de maneiras bem complexas para esta jornada. Um dia, o menosprezado Yang Kai conseguiu obter um livro negro, fazendo-o tomar rumo ao pico do mundo marcial!<br>",
      "link":"/manga/martial-peak/7302",
      "id":"7302",
      "chapters":"664",
      "image":"https://static3.mangalivre.com/capas/9sEGIBRVeSk-n7f8-3duFQ/7302/external_cover.jpg?quality=100",
      "rate":"8.28",
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
      "chapters":"381",
      "image":"https://static3.mangalivre.com/capas/Pe49w2BUNubSALY5ajwFEg/4300/external_cover.jpg?quality=100",
      "rate":"8.84",
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
      "chapters":"51",
      "image":"https://static3.mangalivre.com/capas/PLgbFCrRhE20KrRx3LyyKg/3637/external_cover.jpg?quality=100",
      "rate":"8.60",
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
      "chapters":"336",
      "image":"https://static3.mangalivre.com/capas/VQpv4xINwz2pmep2VGpqkg/2330/external_cover.jpg?quality=100",
      "rate":"9.20",
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
      "description":"Naruto Uzumaki é um menino que vive em Konohagakure no Sato ou simplesmente Konoha ou Vila Oculta da Folha, a vila ninja do País do Fogo. Quando ainda bebê, Naruto teve aprisionada em seu corpo a Kyuubi no Youko por Minato Namikaze (quarto Hokage, e seu pai), com a finalidade de salvar a Vila da Folha. Desde então, Naruto é visto por muitas pessoas como um monstro, não só pelos familiares das pessoas mortas pela Kyuubi, mas também por pessoas que não toleram suas brincadeiras, já que o mesmo é extremamente hiperativo, incompreendido e solitário. Naruto sonha em se tornar o Hokage de sua vila, um ninja poderoso e respeitado, para assim poder ser reconhecido por todos.<br>",
      "link":"/manga/naruto/1",
      "id":"1",
      "chapters":"718",
      "image":"https://static3.mangalivre.com/capas/EjvoRCrtbg8u15ewyND_4g/1/5f8b2f63f1b70external_cover.jpg?quality=100",
      "rate":"8.97",
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
      "chapters":"137",
      "image":"https://static3.mangalivre.com/capas/DLF5jbeg5ITRLKp56adSOg/210/external_cover.jpg?quality=100",
      "rate":"9.44",
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
      "chapters":"380",
      "image":"https://static3.mangalivre.com/capas/75i1MyyphXB1YA_3NuQ8vg/117/external_cover.jpg?quality=100",
      "rate":"9.69",
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
      "chapters":"154",
      "image":"https://static3.mangalivre.com/capas/ZdQGVIhOwVcqdff2zTMxPQ/2656/external_cover.jpg?quality=100",
      "rate":"8.47",
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
      "chapters":"51",
      "image":"https://static3.mangalivre.com/capas/vuomK_8OajohA-Bg8PNo4g/7130/external_cover.jpg?quality=100",
      "rate":"6.77",
      "categories":[
        "Drama",
        "Harém",
        "Romance",
        "Webtoon"
      ]
    },
    {
      "name":"Shokugeki no Souma",
      "author":" Morisaki, Yuki ( &  Saeki, Shun (Arte)",
      "description":"O Sonho de Yukihira Souma é se tornar um chef no restaurante do seu pai e superar ele em habilidades. Mas assim que Yukihira se gradua no ginásio, seu pai Jouichirou, fecha o restaurante e vai cozinhar em Nova Iorque. Após isso, seu pai matricula Souma em uma escola de elite onde apenas 10% ficam até o final, e se Souma não puder sobreviver naquela escola, não poderá superar o seu pai...",
      "link":"/manga/shokugeki-no-souma/1114",
      "id":"1114",
      "chapters":"324",
      "image":"https://static3.mangalivre.com/capas/968TtGiXcHbaMeiGpHePFQ/1114/external_cover.jpg?quality=100",
      "rate":"9.29",
      "categories":[
        "Ecchi",
        "Escolar",
        "Shounen"
      ]
    },
    {
      "name":"Killing Stalking",
      "author":" Koogi",
      "description":"Yoonbum, um rapaz quieto e carrancudo, tem uma queda por um dos caras mais populares e bonitos da faculdade, Sangwoo. Um dia, com a obsessão de Yoonbum por Sangwoo alcança seu pico, e Yoonbum decide entrar na casa de Sangwoo. Mas o que ele viu dentro não era o Sangwoo que ele sonhara, e nada do que ele estava esperando.",
      "link":"/manga/killing-stalking/5167",
      "id":"5167",
      "chapters":"72",
      "image":"https://static3.mangalivre.com/capas/swENZudlIpIpkfExgy6RWA/5167/capa.jpg?quality=100",
      "rate":"8.72",
      "categories":[
        "Ação",
        "Drama",
        "Psicológico",
        "Suspense",
        "Yaoi"
      ]
    },
    {
      "name":"Kingdom",
      "author":"Hara, Yasuhisa",
      "description":"Milhões de anos se passaram desde a era das lendas, quando o mundo dos homens e dos deuses eram iguais. Nessa época, a ambição do homem movia o mundo. Essa é a era da guerra dos 500 anos: o período de guerras das primaveras e outonos. Kingdom é a história de um jovem chamado Shin e dos desafios pelos quais ele passou até se tornar um grande general!!!",
      "link":"/manga/kingdom/1222",
      "id":"1222",
      "chapters":"658",
      "image":"https://static3.mangalivre.com/capas/8-eLRRSQPRhPUkse4Kf0Dg/1222/external_cover.jpg?quality=100",
      "rate":"9.54",
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
      "description":"Han Je-Han era somente um estudante normal até que repentinamente desenvolveu uma habilidade estranha em que para ele, o mundo real todo passa a ser configurado como em um jogo. As pessoas possuem nome e nível sobre suas cabeças, ajudar uma pessoa rende pontos de experiência e quando ele avança de nível ganha novas habilidades. Acompanhe Han Je-Han e descubra como usar estes novos poderes… e quais são as grandes responsabilidades que vem com eles.<br>",
      "link":"/manga/the-gamer/1745",
      "id":"1745",
      "chapters":"351",
      "image":"https://static3.mangalivre.com/capas/OhsLhKsYOtU7I9Ilp2egcA/1745/external_cover.jpg?quality=100",
      "rate":"8.69",
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
      "chapters":"287",
      "image":"https://static3.mangalivre.com/capas/O41-pMhRWA-sNtrrhCH4uA/7797/external_cover.jpg?quality=100",
      "rate":"8.23",
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
      "chapters":"1321",
      "image":"https://static3.mangalivre.com/capas/ZlB2Nq_qMYaDFmur22kJww/284/external_cover.jpg?quality=100",
      "rate":"9.14",
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
      "chapters":"109",
      "image":"https://static3.mangalivre.com/capas/W0qIK7EmAGOyeu1KM5_ARg/6861/capa.jpg?quality=100",
      "rate":"8.76",
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
      "chapters":"183",
      "image":"https://static3.mangalivre.com/capas/XxG_-E0-93XIygjOX_lGqQ/4055/external_cover.jpg?quality=100",
      "rate":"9.10",
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
      "chapters":"88",
      "image":"https://static3.mangalivre.com/capas/o3se21H_p_J8RS9wuYd8DQ/8194/external_cover.jpg?quality=100",
      "rate":"8.24",
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
      "description":"A estranha amizade de dois amigos...<br>",
      "link":"/manga/19-days/2951",
      "id":"2951",
      "chapters":"260",
      "image":"https://static3.mangalivre.com/capas/b0VZ-CxOq7kofISzY733RA/2951/v037_1.jpg?quality=100",
      "rate":"8.19",
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
      "chapters":"175",
      "image":"https://static3.mangalivre.com/capas/MCqVxZSZHivlguTx40QBBw/4948/5fa1ed4036304external_cover.jpg?quality=100",
      "rate":"9.02",
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

## Listar mangás com melhores notas

### Request

`GET /top/:page` para listar os mangás mais bem avaliados. Quanto menor a página, melhores as notas.

ou

`GET /top/` para listar os 30 mangás mais bem avaliados. (redirecionamento para `/top/1`)

### Response

<details>
<summary>Mostrar response longo</summary>
<p>

```json
{
  "mangas":[
    {
      "name":"The King of Fighters: A New Beginning",
      "author":"Azuma, Kyoutarou (Story  & amp; Art)&(Arte)",
      "description":"Adaptação em mangá do jogo The King of Fighters XIV.",
      "link":"/manga/the-king-of-fighters-a-new-beginning/7024",
      "id":"7024",
      "chapters":"24",
      "image":"https://static3.mangalivre.com/capas/h8I1EsmekO4giMi6LAErpA/7024/capa.jpg?quality=100",
      "rate":"9.80",
      "categories":[
        "Ação",
        "Artes Marciais",
        "Drama"
      ]
    },
    {
      "name":"Shikabanechou Undead",
      "author":"Iwaaki, Haru",
      "description":"Em uma certa cidade, quando dois adolescentes vão a um esgoto, dentro da \"caixa preta\", para fazer um vídeo, eles encontram uma montanha de cadáveres! Nessa cidade, há um professor chamado Katsuragi Zakuro. Estava tudo bem enquanto ele estava dando aula, até que algo acontece!",
      "link":"/manga/shikabanechou-undead/6693",
      "id":"6693",
      "chapters":"8",
      "image":"https://static3.mangalivre.com/capas/daLQtyOx5kqw_whz9f9N3w/6693/capa.jpg?quality=100",
      "rate":"9.75",
      "categories":[
        "Ação",
        "Horror"
      ]
    },
    {
      "name":"Bungou Stray Dogs: Dead Apple",
      "author":"Ganjii",
      "description":"Usuários de habilidades ao redor do mundo estão de repente cometendo suicídio um após o outro, em todos os casos, depois que uma estranha névoa aparece na cena. A pedido de Ango Sakaguchi, a Agência de Detetives Armados se dirige para investigar Tatsuhiko Shibusawa, um usuário poderoso que é chamado de \"O Colecionador\", e um homem suspeito de estar relacionado aos incidentes.",
      "link":"/manga/bungou-stray-dogs-dead-apple/7184",
      "id":"7184",
      "chapters":"1",
      "image":"https://static3.mangalivre.com/capas/FO_6tkuK56u4RyUlVNBORQ/7184/external_cover.jpg?quality=100",
      "rate":"9.74",
      "categories":[
        "Ação",
        "Mistério",
        "Sobrenatural"
      ]
    },
    {
      "name":"Berserk",
      "author":"Miura, Kentarou",
      "description":"Gatts é um sobrevivente que vaga pelo mundo à procura de respostas. Antigo membro do ext \"Bando dos Falcões\", um grupo mercenário de cavaleiros e guerreiros liderado por Griffith e Caska, Gatts se adentra na história que ganha corpo e emerge sob um ponto de vista totalmente imprevisível, a medida que os acontecimentos vão se completando. É uma obra dedicada à eterna luta do Catolicismo contra Paganismo....",
      "link":"/manga/berserk/117",
      "id":"117",
      "chapters":"380",
      "image":"https://static3.mangalivre.com/capas/75i1MyyphXB1YA_3NuQ8vg/117/external_cover.jpg?quality=100",
      "rate":"9.69",
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
      "name":"Seishun Zettai Tsubusuman na Ore ni Sukuihairanai. (Novel)",
      "author":"Sakaida, Yoshitaka &  U35 (Arte)",
      "description":"É sobre um total perdedor e na média, Akito Sayama, e uma tempestade de sangue frio de uma garota letárgica, Onodera Kaoru, que se aposentou das atividades do clube devido a uma lesão. Essas duas pessoas foram convidadas após a escola a se encontrar com a garota da ensino médio Fujisaki Yuko para uma misteriosa atividade voluntária: “Eu apenas estou ajudando Akito e Kauru, eu devo trabalhar duro!” Então, Fujisaki foi envolvido na atividade de resgate de uma sala especial do conselho estudantil sob a gestão de Sayama e Onodera. Os dois se encontram com os alunos que têm problemas na escola e irão lidar com seus problemas junto com Fujisaki.“Eu me chamo de escória, sou um sujeito grosseiro sem habilidades ou pontos fortes, exceto o forte gosto por garotas mais velhas e mais novas...”É uma dor, pode haver salvação na juventude?“A realidade é uma merda, é estúpida, uma dor e injusta. É por isso que não preciso de salvação...”",
      "link":"/manga/seishun-zettai-tsubusuman-na-ore-ni-sukuihairanai-novel/6105",
      "id":"6105",
      "chapters":"1",
      "image":"https://static3.mangalivre.com/capas/aQMtOkycA3Lrq4cMsiIvow/6105/capa.jpg?quality=100",
      "rate":"9.58",
      "categories":[
        "Comédia",
        "Escolar",
        "Romance"
      ]
    },
    {
      "name":"One Punch Man",
      "author":"ONE &  Murata, Yusuke (Arte)",
      "description":"Conta o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso...",
      "link":"/manga/one-punch-man/1036",
      "id":"1036",
      "chapters":"206",
      "image":"https://static3.mangalivre.com/capas/CuI4nqmgWPJE2rAVPv_EgA/1036/external_cover.jpg?quality=100",
      "rate":"9.57",
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
      "name":"One Piece",
      "author":"Oda, Eiichiro",
      "description":"One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso. Desde então muitos piratas se aventuram pela Grand Line para tentar encontrar o tesouro chamado One Piece. Um deles é Monkey D. Luffy, o garoto que, acidentalmente, comeu uma das Akuma No Mi, a Gomu Gomu No Mi (Fruta da Borracha), e agora ele pode esticar seu corpo como se fosse uma borracha. A jornada dele começa atrás de companheiros e um barco, que ele vai conseguindo pouco a pouco, pois tem um objetivo: Ser o Rei Dos Piratas!!!",
      "link":"/manga/one-piece/13",
      "id":"13",
      "chapters":"999",
      "image":"https://static3.mangalivre.com/capas/_slRjF_Ugy8VwYmS7w3o7Q/13/5f8b2d4095387external_cover.jpg?quality=100",
      "rate":"9.56",
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
      "name":"Kingdom",
      "author":"Hara, Yasuhisa",
      "description":"Milhões de anos se passaram desde a era das lendas, quando o mundo dos homens e dos deuses eram iguais. Nessa época, a ambição do homem movia o mundo. Essa é a era da guerra dos 500 anos: o período de guerras das primaveras e outonos. Kingdom é a história de um jovem chamado Shin e dos desafios pelos quais ele passou até se tornar um grande general!!!",
      "link":"/manga/kingdom/1222",
      "id":"1222",
      "chapters":"658",
      "image":"https://static3.mangalivre.com/capas/8-eLRRSQPRhPUkse4Kf0Dg/1222/external_cover.jpg?quality=100",
      "rate":"9.54",
      "categories":[
        "Ação",
        "Drama",
        "Histórico",
        "Militar",
        "Seinen"
      ]
    },
    {
      "name":"Shoukoku no Altair Gaiden: Toukoku no Subaru",
      "author":"Kobayashi, Hirokazu &  Katou, Chika (Arte)",
      "description":"A cortina sobe em um spin-off de Shoukoku no Altair, de Katou Kotono, situado a leste de Rumeliana, na antiga nação insular de Kusanagi, que foi anexada pelo Império Çinili e caiu em ruína.<br>",
      "link":"/manga/shoukoku-no-altair-gaiden-toukoku-no-subaru/6326",
      "id":"6326",
      "chapters":"3",
      "image":"https://static3.mangalivre.com/capas/j84ylO4Dqubob5cL_g-z3g/6326/capa.jpg?quality=100",
      "rate":"9.51",
      "categories":[
        "Drama",
        "Fantasia",
        "Shounen"
      ]
    },
    {
      "name":"Ai no Jidai: Ichigoichie",
      "author":" Kurumada, Masami",
      "description":"A história é uma semi-autobiografia ficcional de Masami Kurumada.",
      "link":"/manga/ai-no-jidai-ichigoichie/4665",
      "id":"4665",
      "chapters":"8",
      "image":"https://static3.mangalivre.com/capas/ajS3kD17pZmToMNdKT0NXA/4665/capa.jpg?quality=100",
      "rate":"9.50",
      "categories":[
        "Shounen"
      ]
    },
    {
      "name":"Arcadia Garden (Novel)",
      "author":"Yanagino, Kanata &  Nekonabe, Ao (Arte)",
      "description":"Aqui, a cidade aérea《Arcane Garden》, é o único lugar no mundo que o herói conseguiu salvar das ruínas. A 「Terra」 existente, o mundo dos seres vivos, tem apenas escuridão e poluição, e isso está começando a se expandir para o oceano celestial. Um grupo de aventureiros se juntou em um dirigível para começar uma jornada com o objetivo de derrotar a magia deixada pelo Espírito do Mal que iniciou tudo — e eles são: Grey Ackster, uns magos. Quando ele foi ao pedido de limpeza emitido pela《Academia de Guia》, ele conheceu uma garota, Syria, junto a um grupo de garotas espíritos. “Eu sou Síria!”, “Eu sei, estou florescendo!”. No seu dia-a-dia, o aventureiro, mesmo sendo imaturo, podia fazer alguns trabalhos. Em um dia simples, quando ele foi a uma chamada de vigilância, ele descobriu que o que o herói destruiu era um falso deus que servia o Espírito do Mal. Será que eles serão capazes de impedir o Mal de chegar ao《Centro das Trevas》 e obter os《Detritos Negros》?",
      "link":"/manga/arcadia-garden-novel/6242",
      "id":"6242",
      "chapters":"1",
      "image":"https://static3.mangalivre.com/capas/FNlti2m1KGiUP4h7bmIilQ/6242/capa.jpg?quality=100",
      "rate":"9.50",
      "categories":[
        "Fantasia"
      ]
    },
    {
      "name":"Heroine-kun",
      "author":" Yoshikawa, Susumu",
      "description":"Publicado entre 1979 e 1981, este mangá conta a história de um garoto, Akira Hiroin, cuja mãe sempre quis ter uma filha. Seu pai, um cientista, faz com que ele tome sem saber um remédio que o transforma em uma menina.",
      "link":"/manga/heroine-kun/2442",
      "id":"2442",
      "chapters":"25",
      "image":"https://static3.mangalivre.com/capas/BCbf1RH2CjkXA_RhYQmRIA/2442/capa.jpg?quality=100",
      "rate":"9.49",
      "categories":[
        "Comédia",
        "Ecchi"
      ]
    },
    {
      "name":"Horimiya",
      "author":"HERO &  Hagiwara, Daisuke (Arte)",
      "description":"Hori é uma colegial normal, mas ela é uma pessoa completamente diferente fora da escola. Na ausência de seus pais ela cuida de seu irmão mais novo. Miyamura um colega de classe dela , ele é um garoto normal, quatro-olhos e meio estranho mas ele também fora da escola tem um segredo. Quando os dois se encontram inesperadamente, descobrem segredos uns dos outros começam a desenvolver uma amizade inesperada. Que situações podem esperá-los já que um conheçe o segredo do outro?!",
      "link":"/manga/horimiya/1088",
      "id":"1088",
      "chapters":"120",
      "image":"https://static3.mangalivre.com/capas/gp79Dk_dEIXxbaaWQefXTg/1088/capa.jpg?quality=100",
      "rate":"9.46",
      "categories":[
        "Comédia",
        "Escolar",
        "Romance",
        "Shounen",
        "Slice of Life"
      ]
    },
    {
      "name":"Shingeki no Kyojin",
      "author":"Isayama, Hajime",
      "description":"Várias centenas de anos atrás, os humanos quase foram exterminados por Titãs. Os Titãs têm vários andares de altura, parecem não ter inteligência, devoram seres humanos e, o pior de tudo, parecem fazer isso pelo prazer e não como fonte de alimento.Avancemos para o presente e a cidade não viu um Titã há mais de 100 anos. O adolescente Eren e sua irmã adotiva Mikasa testemunham algo terrível quando as muralhas da cidade são destruídas por um super Titã que surge de lugar nenhum. Enquanto os Titãs menores inundam a cidade, as duas crianças assistem horrorizadas sua mãe ser devorada viva!",
      "link":"/manga/shingeki-no-kyojin/210",
      "id":"210",
      "chapters":"137",
      "image":"https://static3.mangalivre.com/capas/DLF5jbeg5ITRLKp56adSOg/210/external_cover.jpg?quality=100",
      "rate":"9.44",
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
      "name":"Thrill Hakase",
      "author":"Tezuka, Osamu",
      "description":"Em uma clínica onde todos amam histórias de terror, acabam por acontecer diversos mistérios. Agora Shunsaku Ban, ao lado de seu filho, Kenta, terão de bancar os detetives amadores para resolver tamanhos acontecimentos!",
      "link":"/manga/thrill-hakase/5825",
      "id":"5825",
      "chapters":"1",
      "image":"https://static3.mangalivre.com/capas/ITm7UviLeo7KHds-jViIUQ/5825/capa.jpg?quality=100",
      "rate":"9.43",
      "categories":[
        "Mistério",
        "Shounen"
      ]
    },
    {
      "name":"Vagabond",
      "author":"Yoshikawa, Eiji &  Inoue, Takehiko (Arte)",
      "description":"Baseado no livro Musashi, de Eiji Yoshikawa, tem como protagonista é o lendário espadachim Miyamoto Musashi, conhecido no Japão como sendo o maior samurai de todos os tempos. O mangá é um retrato fictício da vida de Musashi, um ronin (samurai que não serve a nenhum mestre) que viajava pelo Japão na procura de grandes adversários para desafiar e, assim, aprimorar-se. A mescla de lutas espetaculares, com a milenar filisofia oriental, além de uma pitada de romance e comédia, torna o mangá simplesmente irresistível.",
      "link":"/manga/vagabond/70",
      "id":"70",
      "chapters":"327",
      "image":"https://static3.mangalivre.com/capas/erg7K5BI0s__s3Uzx49tTw/70/external_cover.jpg?quality=100",
      "rate":"9.39",
      "categories":[
        "Ação",
        "Aventura",
        "Drama",
        "Histórico",
        "Samurai",
        "Seinen"
      ]
    },
    {
      "name":"Fullmetal Alchemist",
      "author":"Arakawa, Hiromu",
      "description":"As regras do estado da alquimia que para ganhar algo, deve-se perder alguma coisa de igual valor. A alquimia é o processo de desmontar e reconstruir um objeto em uma entidade diferente, com as regras da alquimia para governar este procedimento. No entanto, existe um objeto que pode trazer qualquer alquimista acima dessas regras, o objeto conhecido como Pedra Filosofal. O jovem Edward Elric é um alquimista particularmente talentoso que através de um acidente anos atrás perdeu seu irmão mais novo, Alphonse e uma de suas pernas. Sacrificar um de seus braços assim, ele usou a alquimia para ligar a alma de seu irmão a uma armadura. Isso levou ao início de sua jornada para recuperar seus corpos, em busca da lendária Pedra Filosofal.",
      "link":"/manga/fullmetal-alchemist/5",
      "id":"5",
      "chapters":"109",
      "image":"https://static3.mangalivre.com/capas/iW4tQx0bAIZGA_3CcIDt7Q/5/external_cover.jpg?quality=100",
      "rate":"9.38",
      "categories":[
        "Ação",
        "Aventura",
        "Comédia",
        "Drama",
        "Militar",
        "Shounen"
      ]
    },
    {
      "name":"Solo Leveling",
      "author":"Jang Sung-Lak",
      "description":"Dez anos atrás, depois do \"Portal\" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores. Porém, nem todos os caçadores são fortes. Meu nome é Sung Jin-Woo, um caçador de rank E. Eu sou alguém que tem que arriscar a própria vida nas dungeons mais fracas, \"O mais fraco do mundo\". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível... Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder!!!<br>",
      "link":"/manga/solo-leveling/7702",
      "id":"7702",
      "chapters":"128",
      "image":"https://static3.mangalivre.com/capas/5BVAUcY8TDTVeiYJpDzMqQ/7702/capa.jpg?quality=100",
      "rate":"9.35",
      "categories":[
        "Ação",
        "Aventura",
        "Shounen"
      ]
    },
    {
      "name":"Tokyo Ghoul:re",
      "author":" Ishida, Sui",
      "description":"Dois anos se passaram desde que a Comissão Contra Ghoul's (CCG) invadiu&nbsp;o Anteiku. Embora a atmosfera em Tóquio mudou drasticamente devido ao aumento da influência do CCG, ghouls continuam a representar um problema, mas eles começaram a tomar cuidado, especialmente a organização terrorista Árvore Aogiri, que reconhecem a crescente ameaça do CCG à sua existência.A criação de uma equipe especial, conhecido como o Esquadrão Quinx, pode fornecer ao CCG o impulso que precisam para exterminar os residentes indesejados de Tóquio. Como seres humanos que tenham sido submetidos a cirurgia, a fim de fazer uso das habilidades especiais dos&nbsp;ghouls, eles participam de operações para erradicar essas criaturas perigosas. O líder deste grupo, Haise Sasaki, é um, metade humano metade ghoul que foi treinado pelo famoso pesquisador de classe especial, Kishou Arima. No entanto, há mais neste jovem do que os olhos podem ver, como memórias desconhecidos arranham&nbsp;sua mente, lentamente, lembrando-o da pessoa que ele costumava ser!",
      "link":"/manga/tokyo-ghoulre/1377",
      "id":"1377",
      "chapters":"181",
      "image":"https://static3.mangalivre.com/capas/oxZqizaCmbQMFA8LS772Ig/1377/external_cover.jpg?quality=100",
      "rate":"9.33",
      "categories":[
        "Ação",
        "Drama",
        "Horror",
        "Mistério",
        "Psicológico",
        "Seinen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Haikyuu!!",
      "author":"Furudate, Haruichi",
      "description":"Hinata Shouyou, ao ver uma partida de voleibol, fica fascinado com \"o Pequeno Gigante\", um habilidoso jogador de vôlei, decidindo-se junta-se clube de vôlei de sua escola, no entanto ele é o único membro do clube. Após 3 anos ele finalmente completar o time e ruma para a disputa do Torneio de Primavera. No entanto seu primeiro oponente de cara é o preferido das finais. É neste momento que ocorre o encontro de Hinata com Kageyama Tobio, o \"Rei da Quadra\"!!!",
      "link":"/manga/haikyuu/805",
      "id":"805",
      "chapters":"404",
      "image":"https://static3.mangalivre.com/capas/W6WiYfpCzeaBhwaL1kS2qQ/805/external_cover.jpg?quality=100",
      "rate":"9.32",
      "categories":[
        "Comédia",
        "Drama",
        "Escolar",
        "Esportes",
        "Shounen"
      ]
    },
    {
      "name":"Tate no Yuusha no Nariagari",
      "author":"Aneko, Yusagi &  Aiya, Kyu (Arte)",
      "description":"Naofumi Iwatani, um otaku sem um pingo de carisma passa os dias jogando videogames e lendo mangás, até que subitamente é invocado para outro mundo onde ele é um dos quatro heróis lendários que receberam a missão de salvar um mundo de fantasia da sua profetizada destruição. Mas nem tudo é o que parece já que Naofumi é rapidamente traído e acusado de um crime que ele não cometeu. Com o reino inteiro contra ele e sem ter para onde fugir, Naofumi precisa se tornar o lendário Herói do Escudo e salvar o mundo!<br>",
      "link":"/manga/tate-no-yuusha-no-nariagari/1939",
      "id":"1939",
      "chapters":"74",
      "image":"https://static3.mangalivre.com/capas/xf_-f5lSLebw7zUL1lWCww/1939/external_cover.jpg?quality=100",
      "rate":"9.31",
      "categories":[
        "Fantasia",
        "Seinen"
      ]
    },
    {
      "name":"ReLIFE",
      "author":" Yayoi, Sou",
      "description":"A História segue Kaizaki Arata, um desempregado de 27 anos que falha em todas as entrevistas de emprego após sair da última no qual ficou por somente três meses. Sua vida muda após conhecer Yoake Ryou do Instituto ReLIFE de Pesquisas, que o oferece uma droga capaz de modificar sua aparência para a de um jovem de 17 anos novamente e então tornar-se alvo de experimentos por um ano no qual que ele começa sua vida de estudante mais uma vez.",
      "link":"/manga/relife/1960",
      "id":"1960",
      "chapters":"224",
      "image":"https://static3.mangalivre.com/capas/gmin92eeLkD9DbPVxSFukA/1960/capa.jpg?quality=100",
      "rate":"9.31",
      "categories":[
        "Escolar",
        "Romance",
        "Slice of Life"
      ]
    },
    {
      "name":"Hajimari no Mahoutsukai (Novel)",
      "author":"Ishinomiya, Kanto &  Fal Maro (Art (Arte)",
      "description":"Um homem cujo objetivo na vida era desvendar os mistérios do mundo percebeu que a Terra simplesmente não tinha mais nenhum mistério que não pudesse ser explicado através da ciência - na verdade, nunca teve verdadeiros mistérios desde o início. Seu desejo foi concedido quando sua existência chegou ao fim e renasceu em um mundo primitivo que não possui vestígios de civilização ou cultura.",
      "link":"/manga/hajimari-no-mahoutsukai-novel/7019",
      "id":"7019",
      "chapters":"7",
      "image":"https://static3.mangalivre.com/capas/yHyXhdNQMXGVxQPPSUX6_Q/7019/capa.jpg?quality=100",
      "rate":"9.30",
      "categories":[
        "Fantasia"
      ]
    },
    {
      "name":"Skip Beat!",
      "author":"Nakamura, Yoshiki",
      "description":"Skip Beat conta a história de Kyoko que foi usada e jogada fora pelo seu amor de infância Shotaru. Ele a retirou de sua casa, na verdade convidou sabendo que ela nunca negaria, para ir com ele para a capital e assim ele poderia se tornar uma estrela musical. Depois que ele conseguiu um pouco de fama ele largou de modo cruel nossa Kyoko sozinha nessa grande cidade. Mas?O que não te mata te fortalece!O que você faria se descobrisse que a pessoa para a qual você dedicou toda a sua vida estava usando você? A nossa protagonista sentiu na pele essa dor...",
      "link":"/manga/skip-beat/368",
      "id":"368",
      "chapters":"302",
      "image":"https://static3.mangalivre.com/capas/CbX2TxDz6lLCDsCBvAFlQQ/368/external_cover.jpg?quality=100",
      "rate":"9.30",
      "categories":[
        "Comédia",
        "Drama",
        "Romance",
        "Shoujo"
      ]
    },
    {
      "name":"Oyasumi Punpun",
      "author":" Asano, Inio",
      "description":"Punpun é uma criança como todas as outras. Alegre e hiperativo, ele passa por muitos conflitos em sua vida, assim como qualquer outro ser humano. Essa é a história sobre a vida de Punpun, superando seus obstáculos e as adversidades que o mundo lhe traz.",
      "link":"/manga/oyasumi-punpun/494",
      "id":"494",
      "chapters":"147",
      "image":"https://static3.mangalivre.com/capas/zv_wnqyukxx8Xvq4OWhNNw/494/capa.jpg?quality=100",
      "rate":"9.30",
      "categories":[
        "Drama",
        "Psicológico",
        "Seinen",
        "Slice of Life"
      ]
    },
    {
      "name":"Akatsuki no Yona",
      "author":"Kusanagi, Mizuho",
      "description":"Yona é a única princesa do reino e vive a vida luxuosa e despreocupada, como uma princesa deve viver. Ela tem tudo: as melhores roupas e cosméticos, os doces mais divinos, um imperador como pai amoroso.Mas seu mundo quase perfeito rapidamente é destruído quando o homem que ela ama, Soo-won, assassina seu pai para ter o caminhos para sua ascensão ao trono assegurado. Son Hak, guarda costas de Yona, escapa com ela, e a partir dai eles precisam correr para viver.",
      "link":"/manga/akatsuki-no-yona/1764",
      "id":"1764",
      "chapters":"202",
      "image":"https://static3.mangalivre.com/capas/N0ZXKusBaPHKXHz6kcKiaA/1764/external_cover.jpg?quality=100",
      "rate":"9.29",
      "categories":[
        "Ação",
        "Comédia",
        "Fantasia",
        "Romance",
        "Shoujo"
      ]
    },
    {
      "name":"Shokugeki no Souma",
      "author":" Morisaki, Yuki ( &  Saeki, Shun (Arte)",
      "description":"O Sonho de Yukihira Souma é se tornar um chef no restaurante do seu pai e superar ele em habilidades. Mas assim que Yukihira se gradua no ginásio, seu pai Jouichirou, fecha o restaurante e vai cozinhar em Nova Iorque. Após isso, seu pai matricula Souma em uma escola de elite onde apenas 10% ficam até o final, e se Souma não puder sobreviver naquela escola, não poderá superar o seu pai...",
      "link":"/manga/shokugeki-no-souma/1114",
      "id":"1114",
      "chapters":"324",
      "image":"https://static3.mangalivre.com/capas/968TtGiXcHbaMeiGpHePFQ/1114/external_cover.jpg?quality=100",
      "rate":"9.29",
      "categories":[
        "Ecchi",
        "Escolar",
        "Shounen"
      ]
    },
    {
      "name":"Slam Dunk",
      "author":" Inoue, Takehiko",
      "description":"Slam Dunk, além de ser uma história esportiva, contém várias faces de comédia, romance e ação. Sakuragi Hanamichi (personagem principal) passa por várias situações ?normais? como aluno do 1º ano do colegial em um novo colégio, o Shohoku. Ao apaixonar-se por uma garota que admira obasquete (Haruko), Sakuragi entra no time do colégio para conquistá-la. De início, passa por sérios problemas com a adaptação ao esporte, já que, apesar de possuir uma força física impressionante, não possuia habilidade na prática.",
      "link":"/manga/slam-dunk/224",
      "id":"224",
      "chapters":"276",
      "image":"https://static3.mangalivre.com/capas/69_hY9VrFnqHHrgzIj22QQ/224/capa.jpg?quality=100",
      "rate":"9.27",
      "categories":[
        "Comédia",
        "Drama",
        "Escolar",
        "Esportes",
        "Shounen"
      ]
    },
    {
      "name":"Noragami",
      "author":"Adachitoka",
      "description":"Yato é um deus menor, cujo sonho é ter um monte de seguidores adorá-lo e orar com ele. Infelizmente, o seu sonho está longe de se tornar realidade desde que ele não tem sequer um único santuário dedicado a ele. Para piorar as coisas, o único parceiro que tinha que o ajudava a resolver os problemas das pessoas, tinha acabado de sair do trabalho. Sua existência divina e a sorte só pode mudar quando ele se depara com Hiyori Iki e salva sua vida, um feito que também deixa em muito a situação para que ela está presa com ele até que seu problema é resolvido. Juntamente com Hiyori e sua nova Yukine parceiro de armas, Yato vai fazer tudo que puder para ganhar fama, reconhecimento e apenas talvez, um santuário dedicado a ele, também...",
      "link":"/manga/noragami/1388",
      "id":"1388",
      "chapters":"106",
      "image":"https://static3.mangalivre.com/capas/Q5KpXTubRbeSBtOsw8twIA/1388/external_cover.jpg?quality=100",
      "rate":"9.27",
      "categories":[
        "Ação",
        "Fantasia",
        "Romance",
        "Shounen",
        "Sobrenatural"
      ]
    },
    {
      "name":"Finder Series",
      "author":"Yamane, Ayano",
      "description":"Takaba Akihito é um fotógrafo que entra numa missão de inspecionar o “Escândalo da Droga”, no qual o líder mafioso responsável é Asami. Com base nas ordens do seu chefe, durante uma rotina de jornalismo, Akihito é apanhado pelos seguranças de Asami e levado para casa deste, onde é forçado a ter uma noite de prazer com o mafioso. Ao se envolver com esse personagem, o fotógrafo acaba sendo alvo de um ex-amante de Asami, Fei Long. Cada vez mais envolto no mundo da máfia, o que será que acontecerá a Akihito?",
      "link":"/manga/finder-series/2671",
      "id":"2671",
      "chapters":"73",
      "image":"https://static3.mangalivre.com/capas/gCpDG-LI7BBAGc0XuWsonw/2671/capa.jpg?quality=100",
      "rate":"9.27",
      "categories":[
        "Ação",
        "Drama",
        "Yaoi"
      ]
    }
  ]
}
```

</p>
</details>

