/* =========================================
   DATA PLANET
========================================= */

const planets = [

    {
        name: "Merkurius",
        icon: "☿️",
        order: "01",
        type: "Planet batuan",
        description:
            "Merkurius adalah planet terdekat dengan Matahari dan merupakan planet terkecil di Tata Surya.",

        distance: "57,9 juta km",
        diameter: "4.879 km",
        gravity: "3,7 m/s²",
        rotation: "58,6 hari",
        revolution: "88 hari",
        temperature: "−180°C hingga 430°C",
        moons: "0"
    },

    {
        name: "Venus",
        icon: "🟠",
        order: "02",
        type: "Planet batuan",
        description:
            "Venus adalah planet kedua dari Matahari dan memiliki atmosfer yang sangat tebal.",

        distance: "108,2 juta km",
        diameter: "12.104 km",
        gravity: "8,87 m/s²",
        rotation: "243 hari",
        revolution: "225 hari",
        temperature: "±465°C",
        moons: "0"
    },

    {
        name: "Bumi",
        icon: "🌍",
        order: "03",
        type: "Planet batuan",
        description:
            "Bumi adalah planet tempat kita hidup dan sejauh yang diketahui merupakan satu-satunya planet yang memiliki kehidupan.",

        distance: "149,6 juta km",
        diameter: "12.742 km",
        gravity: "9,81 m/s²",
        rotation: "23 jam 56 menit",
        revolution: "365,25 hari",
        temperature: "±15°C",
        moons: "1"
    },

    {
        name: "Mars",
        icon: "🔴",
        order: "04",
        type: "Planet batuan",
        description:
            "Mars sering disebut Planet Merah karena permukaannya mengandung banyak mineral besi yang teroksidasi.",

        distance: "227,9 juta km",
        diameter: "6.779 km",
        gravity: "3,71 m/s²",
        rotation: "24 jam 37 menit",
        revolution: "687 hari",
        temperature: "±−63°C",
        moons: "2"
    },

    {
        name: "Jupiter",
        icon: "🟤",
        order: "05",
        type: "Raksasa gas",
        description:
            "Jupiter merupakan planet terbesar di Tata Surya dan memiliki badai raksasa yang dikenal sebagai Great Red Spot.",

        distance: "778,5 juta km",
        diameter: "139.820 km",
        gravity: "24,79 m/s²",
        rotation: "9 jam 56 menit",
        revolution: "11,86 tahun",
        temperature: "±−110°C",
        moons: "95+"
    },

    {
        name: "Saturnus",
        icon: "🪐",
        order: "06",
        type: "Raksasa gas",
        description:
            "Saturnus terkenal karena sistem cincinnya yang sangat luas dan indah.",

        distance: "1,43 miliar km",
        diameter: "116.460 km",
        gravity: "10,44 m/s²",
        rotation: "10 jam 42 menit",
        revolution: "29,45 tahun",
        temperature: "±−140°C",
        moons: "140+"
    },

    {
        name: "Uranus",
        icon: "🔵",
        order: "07",
        type: "Raksasa es",
        description:
            "Uranus memiliki kemiringan sumbu yang sangat ekstrem sehingga seolah-olah berputar sambil berbaring.",

        distance: "2,87 miliar km",
        diameter: "50.724 km",
        gravity: "8,69 m/s²",
        rotation: "17 jam 14 menit",
        revolution: "84 tahun",
        temperature: "±−195°C",
        moons: "27"
    },

    {
        name: "Neptunus",
        icon: "🔵",
        order: "08",
        type: "Raksasa es",
        description:
            "Neptunus adalah planet terjauh dari Matahari dan memiliki angin tercepat di Tata Surya.",

        distance: "4,50 miliar km",
        diameter: "49.244 km",
        gravity: "11,15 m/s²",
        rotation: "16 jam 6 menit",
        revolution: "164,8 tahun",
        temperature: "±−200°C",
        moons: "14"
    },

    {
        name: "Pluto",
        icon: "⚪",
        order: "09",
        type: "Planet katai",
        description:
            "Pluto adalah planet katai di wilayah luar Tata Surya. Pluto diklasifikasikan sebagai planet katai sejak 2006.",

        distance: "±5,9 miliar km",
        diameter: "2.377 km",
        gravity: "0,62 m/s²",
        rotation: "6,4 hari",
        revolution: "248 tahun",
        temperature: "±−230°C",
        moons: "5"
    }

];


/* =========================================
   MENAMPILKAN PLANET
========================================= */

const planetContainer =
    document.getElementById("planetContainer");


function displayPlanets(list) {

    planetContainer.innerHTML = "";

    if (list.length === 0) {

        planetContainer.innerHTML = `
            <p style="
                grid-column: 1/-1;
                text-align:center;
                color:#8d96b6;
            ">
                🔭 Planet tidak ditemukan.
            </p>
        `;

        return;
    }


    list.forEach((planet) => {

        const card = document.createElement("div");

        card.className = "planet-card";

        card.onclick = () => openPlanet(planet.name);


        card.innerHTML = `

            <div class="planet-number">
                PLANET ${planet.order}
            </div>

            <div class="planet-icon">
                ${planet.icon}
            </div>

            <h3>${planet.name}</h3>

            <p>${planet.type}</p>

        `;


        planetContainer.appendChild(card);

    });

}


/* =========================================
   PENCARIAN
========================================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const keyword =
        this.value.toLowerCase().trim();


    const filtered =
        planets.filter((planet) =>
            planet.name
                .toLowerCase()
                .includes(keyword)
        );


    displayPlanets(filtered);

});


/* =========================================
   MODAL DETAIL PLANET
========================================= */

const modal =
    document.getElementById("planetModal");


const modalPlanet =
    document.getElementById("modalPlanet");


function openPlanet(name) {

    const planet =
        planets.find((p) => p.name === name);


    if (!planet) return;


    modalPlanet.innerHTML = `

        <div class="modal-planet-icon">
            ${planet.icon}
        </div>

        <h2>${planet.name}</h2>

        <p class="modal-description">
            ${planet.description}
        </p>


        <div class="info-grid">

            <div class="info-box">
                <span>Jenis</span>
                <strong>${planet.type}</strong>
            </div>

            <div class="info-box">
                <span>Jarak dari Matahari</span>
                <strong>${planet.distance}</strong>
            </div>

            <div class="info-box">
                <span>Diameter</span>
                <strong>${planet.diameter}</strong>
            </div>

            <div class="info-box">
                <span>Gravitasi</span>
                <strong>${planet.gravity}</strong>
            </div>

            <div class="info-box">
                <span>Rotasi</span>
                <strong>${planet.rotation}</strong>
            </div>

            <div class="info-box">
                <span>Revolusi</span>
                <strong>${planet.revolution}</strong>
            </div>

            <div class="info-box">
                <span>Suhu rata-rata</span>
                <strong>${planet.temperature}</strong>
            </div>

            <div class="info-box">
                <span>Jumlah bulan</span>
                <strong>${planet.moons}</strong>
            </div>

        </div>

    `;


    modal.style.display = "flex";

}


function closeModal() {

    modal.style.display = "none";

}


window.onclick = function (event) {

    if (event.target === modal) {

        closeModal();

    }

};


/* =========================================
   QUIZ
========================================= */

const questions = [

    {
        question: "Planet apa yang paling dekat dengan Matahari?",

        answers: [
            "Bumi",
            "Venus",
            "Merkurius",
            "Mars"
        ],

        correct: "Merkurius"
    },

    {
        question: "Planet terbesar di Tata Surya adalah?",

        answers: [
            "Saturnus",
            "Jupiter",
            "Neptunus",
            "Bumi"
        ],

        correct: "Jupiter"
    },

    {
        question: "Planet yang terkenal dengan cincinnya adalah?",

        answers: [
            "Mars",
            "Venus",
            "Saturnus",
            "Merkurius"
        ],

        correct: "Saturnus"
    },

    {
        question: "Planet yang kita tinggali adalah?",

        answers: [
            "Mars",
            "Bumi",
            "Jupiter",
            "Venus"
        ],

        correct: "Bumi"
    },

    {
        question: "Planet terjauh dari Matahari adalah?",

        answers: [
            "Uranus",
            "Saturnus",
            "Neptunus",
            "Jupiter"
        ],

        correct: "Neptunus"
    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextBtn");

const quizResult =
    document.getElementById("quizResult");


function loadQuestion() {

    answered = false;

    nextButton.style.display = "none";

    quizResult.innerHTML = "";


    const q =
        questions[currentQuestion];


    questionElement.textContent =
        q.question;


    answersElement.innerHTML = "";


    q.answers.forEach((answer) => {

        const button =
            document.createElement("button");


        button.className =
            "answer-btn";


        button.textContent =
            answer;


        button.onclick =
            () => checkAnswer(button, answer);


        answersElement.appendChild(button);

    });

}


function checkAnswer(button, answer) {

    if (answered) return;

    answered = true;


    const correct =
        questions[currentQuestion].correct;


    const allButtons =
        document.querySelectorAll(".answer-btn");


    allButtons.forEach((btn) => {

        if (btn.textContent === correct) {

            btn.classList.add("correct");

        }

    });


    if (answer === correct) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

    }


    nextButton.style.display = "inline-block";

}


function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showResult();

        return;

    }


    loadQuestion();

}


function showResult() {

    document.getElementById("quizContent")
        .innerHTML = `

            <div class="quiz-result">

                🎉 Quiz Selesai!

                <br><br>

                Skor kamu:

                <strong>
                    ${score} / ${questions.length}
                </strong>

                <br><br>

                <button
                    id="nextBtn"
                    onclick="restartQuiz()"
                >
                    🔄 Main Lagi
                </button>

            </div>

        `;

}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    location.reload();

}


/* =========================================
   START WEBSITE
========================================= */

displayPlanets(planets);

loadQuestion();