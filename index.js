const dataSet = {
    new: {
        display: "Neue Kurse",
        list: [
            {
                leader: "Rene",
                courseName: "BodyPower mit Rene",
                length: "62:34",
                type: "Body Power",
                link: "mKORApb_gMQ",
            },
            {
                leader: "Peggy",
                courseName: "Pilates mit Peggy",
                length: "60:08",
                type: "Pilates",
                link: "BQvgwH4uUv0 ",
            },
            {
                leader: "Jenny",
                courseName: "Yoga mit Jenny",
                length: "62:34",
                type: "Yoga",
                link: "WomtuvphAM0",
            },
            {
                leader: "Rene",
                courseName: "Body Power mit Rene",
                length: "59:19",
                type: "Body Power",
                link: "IQ71flkDMZc",
            },
            {
                leader: "Peggy",
                courseName: "Pilates mit Peggy",
                length: "58:10",
                type: "Pilates",
                link: "16-yzuHKuXk",
            },
        ],
    },
    courses: {
        display: "Alle Kurse",
        list: [
            {
                leader: "Nezar",
                courseName: "Pilates mit Nezar und Lukas",
                length: "33:07",
                type: "Pilates",
                link: "s-cW_MqJm8o",
            },
            {
                leader: "Ilka",
                courseName: "Rücken mit Ilka und Lukas",
                length: "38:23",
                type: "RückenFIT",
                link: "Tco0CHbtO-E",
            },
            {
                leader: "Jenny",
                courseName: "Yoga mit Jenny",
                length: "39:59",
                type: "Yoga",
                link: "-cic94yQ1Ck",
            },
            {
                leader: "Peggy",
                courseName: "Pilates mit Peggy",
                length: "24:03",
                type: "Pilates",
                link: "8sIHQ_XszdI",
            },
            {
                leader: "Jenny",
                courseName: "Yoga mit Jenny",
                length: "36:41",
                type: "Yoga",
                link: "ng9qayO1t2A",
            },
            {
                leader: "Peggy",
                courseName: "RückenFIT/WSG mit Peggy",
                length: "34:21",
                type: "RückenFit",
                link: "GEZUMsE2BEQ",
            },
            {
                leader: "Jenny",
                courseName: "Power Workout mit Jenny",
                length: "42:50",
                type: "Workout",
                link: "bfNi-jEXMc0",
            },
        ],
    },
    plans: {
        display: "Traininspläne",
        list: [
            {
                leader: "Daniel und Peter",
                courseName: "Selbstgemachte Heimgeräte",
                length: "6:36",
                type: "Infomation",
                link: "HKWG5Rs79u0",
            },
            {
                leader: "Daniel und Peter",
                courseName: "Kraftkreis #1",
                length: "6:46",
                type: "Kraftkreis",
                link: "y8x83HrTMbs",
            },
            {
                leader: "Daniel und Peter",
                courseName: "Intensiver Kraftkreis #2",
                length: "7:22",
                type: "Kraftkreis",
                link: "65fDlpE7jQ4",
            },
            {
                leader: "Daniel",
                courseName: "Workout mit Toilettenpapier",
                length: "4:51",
                type: "Spaß",
                link: "-rAjHt3zvb8",
            },
        ],
    },
};

window.addEventListener("load", () => {
    renderAllCourses(dataSet.courses);
    renderAllPlans(dataSet.plans);
    renderNew(dataSet.new);
});

const fillSection = (data) => {
    return `<section>
          <div class="video">
              <h3 class="name">${data.courseName}</h3>
              <iframe src="https://www.youtube.com/embed/${data.link}?modestbranding=1&autohide=1&showinfo=0&controls=0"" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p class="length">Dauer: ${data.length}</p>
          
              </div>
      </section>`;
};

const renderNew = (data) => {
    container = document.getElementById("content_new");
    container.innerHTML = `<h2> ${data.display}</h2><div class="container" id="containerNewDisplay"></div><div class="container" id="containerNewDisplay"></div>`;
    let section = document.getElementById("containerNewDisplay");
    data.list.forEach((video) => {
        section.innerHTML = section.innerHTML + fillSection(video);
    });
};

const renderAllCourses = (data) => {
    container = document.getElementById("content_courses");
    container.innerHTML = `<h2> ${data.display}</h2><div class="container" id="containerCourseDisplay"></div><div class="container" id="containerCourseDisplay"></div>`; //<h2> ${dataSet.courses.display}</h2><div class="container" id="containerCourseDisplay"></div>
    let section = document.getElementById("containerCourseDisplay");
    data.list.forEach((video) => {
        section.innerHTML = section.innerHTML + fillSection(video);
    });
};

const renderAllPlans = (data) => {
    container = document.getElementById("content_plans");
    container.innerHTML = `<h2> ${data.display}</h2><div class="container" id="containerPlansDisplay"></div><div class="container" id="containerPlansDisplay"></div>`; //<h2> ${dataSet.Planss.display}</h2><div class="container" id="containerPlansDisplay"></div>
    let section = document.getElementById("containerPlansDisplay");
    data.list.forEach((video) => {
        section.innerHTML = section.innerHTML + fillSection(video);
    });
};
