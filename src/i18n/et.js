import notesdir from "../notesdir";

export default {
    notFound: {
        heading: "Seda lehte pole olemas :("
    },
    nav: {
        projects: "Projektid",
        notes: "Märkmed",
        gallery: "Galerii"
    },
    about: {
        header: "Tere",
        body: [
            "Olen täiskohaga matemaatikatudeng Tartu Ülikoolis. Olen pidanud reporteri ametit (2016 - 2018), töötanud veebiarendajana (2019 - 2020), õppeassistendina ülikoolis (2020 - 2021) ja andmeanalüütikuna (2021).",
            "Vabal ajal nokitsen oma kodulehe kallal, loen raamatuid ning löön r/math-is aega parajaks. 2018. aastal esindasin Eestit rahvusvahelisel MEPil Madridis ning juhtisin Reaalkooli õpilasomavalitsuse tööd. Kirjutan praegu uurimust eesti keele kasutusest matemaatilistes teksides viimase 150 aasta jooksul.",
            "Mu tegemisi saad jälgida GitHubis või siinsamal lehel. Suuremad tegemised lisan projektide alla ning igapäevasemat võid leida märkmete seast.",
            "Küsimuste korral saab minuga ühendust võtta aadressil renepiik@gmail.com."
        ]
    },
    notes: {
        header: "Märkmed",
        placeholder: "Siin pole veel midagi!",
        links: [
            {
                link: "https://github.com/renepiik/funktsionaalanalyys-1",
                title: "Funktsionaalanalüüs I (eesti keeles)",
                local: false
            },
            ...notesdir
        ]
    },
    projects: {
        header: "Projektid",
        projects: [
            {
                "title": "UniTartu Progress",
                "image_src": "",
                "desc": "Twitteri bot jälgimaks, kui kaugel on käesolev semester.",
                "techs": [
                    "Python",
                    "AWS EC2"
                ],
                "link": "https://twitter.com/unitartu_prgrss"
            },
            {
                "title": "reaalkooli ajalehe veebileht",
                "image_src": "",
                "desc": "Veebirakendus ja sisuhaldussüsteem Tallinna Reaalkooli ajalehe Reaali Poiss jaoks.",
                "techs": [
                    "jQuery",
                    "MySQL",
                    "PHP"
                ],
                "link": "https://reaalipoiss.piik.eu/"
            },
            {
                "title": "isiklik raamatukogu",
                "image_src": "",
                "desc": "Java rakendus isikliku raamatukogu haldamiseks. Kasutada saab nii terminali kui ka graafilist liidest.",
                "techs": [
                    "Java",
                    "JavaFX"
                ],
                "link": "https://github.com/renepiik/Raamatukogu"
            },
            {
                "title": "lazare carnot' elulugu ja carnot' teoreemi tõestus",
                "image_src": "",
                "desc": "Uurimistöö prantsuse poliitiku, inseneri ja matemaatiku Lazare Carnot' eluloost ning Carnot' teoreemist. Uurimistöö esimene osa jutustab Carnot' värvika eluloo sünnist surmani ja teine osa pakub Carnot' teoreemile välja uue tõestuse.",
                "techs": [],
                "link": "https://drive.google.com/file/d/1RYWWmSwycsf7p6eJEvgGJaHFQq8_t7Pd/view"
            }
        ]
    }
};