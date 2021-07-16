import notesdir from "../notesdir";

export default {
    notFound: {
        heading: "Page not found :("
    },
    nav: {
        projects: "Projects",
        notes: "Notes",
        gallery: "Gallery"
    },
    about: {
        header: "Hi",
        body: [
            "I am a full-time student of mathematics at the University of Tartu (graduating in 2022). I have worked as a news reporter (2016 - 2018), a frontend web developer (2019 - 2020), a teacher's assistant at the university (2020 - 2021) and a data analyst (2021).",
            "I spend my free time working on this homepage, reading books and procrastinating on r/math. I represented Estonia at the international Toledo/Madrid MEP in 2018 and led my high school's student council for a year. Lately I've been in the process of writing a report on how the use of Estonian has changed in mathematical texts over the past 150 years.",
            "Feel free to check out my GitHub page or follow me right here! Up top you can find any bigger (and more complete) projects or read my notes on various topics. I usually write in Estonian.",
            "If you have any questions, send them my way at renepiik@gmail.com."
        ]
    },
    notes: {
        header: "Notes",
        placeholder: "Nothing here yet!",
        links: [
            {
                link: "https://github.com/renepiik/funktsionaalanalyys-1",
                title: "Functional analysis I (in Estonian)",
                local: false
            },
            ...notesdir
        ]
    },
    projects: {
        header: "Projects",
        projects: [
            {
                "title": "UniTartu Progress",
                "image_src": "",
                "desc": "Twitter bot for tracking the progress of the ongoing semester at the University of Tartu",
                "techs": [
                    "Python",
                    "AWS EC2"
                ],
                "link": "https://twitter.com/unitartu_prgrss"
            },
            {
                "title": "website for my school's newspaper",
                "image_src": "",
                "desc": "A web app and content management system for Tallinn Secondary School of Science's newpaper 'Reaali Poiss'.",
                "techs": [
                    "jQuery",
                    "MySQL",
                    "PHP"
                ],
                "link": "https://reaalipoiss.piik.eu/"
            },
            {
                "title": "personal library",
                "image_src": "",
                "desc": "A Java app for managing your personal library. Accessible by command line and by using a GUI.",
                "techs": [
                    "Java",
                    "JavaFX"
                ],
                "link": "https://github.com/renepiik/Raamatukogu"
            },
            {
                "title": "Lazare Carnot's biography and proof of Carnot's theorem",
                "image_src": "",
                "desc": "A paper on the French politician, engineer and mathematician Lazare Carnot and an analytic proof of Carnot's theorem. The first half of the paper explores his exciting life, his role in French politics and contributions to Napoleon's war efforts. The second half proposes an alternative analytic proof to Carnot's theorem.",
                "techs": [],
                "link": "https://drive.google.com/file/d/1RYWWmSwycsf7p6eJEvgGJaHFQq8_t7Pd/view"
            }
        ]
    }
};