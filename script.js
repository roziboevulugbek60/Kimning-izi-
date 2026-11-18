
const questions = [
    {
        animal: "Sher",
        symbol: "🦁",
        track: "Katta va kuchli panja izlari",
        hint: "O‘rmon qiroli deb ataladi.",
        options: ["Sher", "Tulki", "Quyon", "Kiyik"]
    },
    {
        animal: "Bo‘ri",
        symbol: "🐺",
        track: "O‘tkir tirnoqli panja izlari",
        hint: "Bu hayvon to‘da bo‘lib yashaydi va uvillaydi.",
        options: ["Mushuk", "Bo‘ri", "Ayiq", "Ot"]
    },
    {
        animal: "Quyon",
        symbol: "🐰",
        track: "Orqa oyoq izlari kattaroq",
        hint: "Sakrab yuradi va sabzini yaxshi ko‘radi.",
        options: ["Tulki", "Kiyik", "Quyon", "Sher"]
    },
    {
        animal: "Ayiq",
        symbol: "🐻",
        track: "Juda katta panja izlari",
        hint: "Bu hayvon asalni yaxshi ko‘radi.",
        options: ["Bo‘ri", "Ayiq", "Quyon", "Mushuk"]
    },
    {
        animal: "Tulki",
        symbol: "🦊",
        track: "Kichik va oval panja izlari",
        hint: "Ayyorligi bilan mashhur.",
        options: ["Sher", "Ot", "Tulki", "Kiyik"]
    },
    {
        animal: "Kiyik",
        symbol: "🦌",
        track: "Ikki qismli tuyoq izlari",
        hint: "Bu hayvonning shoxlari bo‘lishi mumkin.",
        options: ["Kiyik", "Bo‘ri", "Ayiq", "Quyon"]
    },
    {
        animal: "Ot",
        symbol: "🐎",
        track: "Dumaloq tuyoq izlari",
        hint: "Bu hayvon tez chopishi mumkin.",
        options: ["Sigir", "Ot", "Sher", "Tulki"]
    },
    {
        animal: "Sigir",
        symbol: "🐄",
        track: "Keng, ikkiga ajralgan tuyoq izlari",
        hint: "Bu uy hayvoni sut beradi.",
        options: ["Kiyik", "Ot", "Sigir", "Bo‘ri"]
    },
    {
        animal: "Mushuk",
        symbol: "🐈",
        track: "Kichik va yumaloq panja izlari",
        hint: "Bu uy hayvoni miyovlaydi.",
        options: ["Mushuk", "Ayiq", "Sher", "Quyon"]
    },
    {
        animal: "Fil",
        symbol: "🐘",
        track: "Juda katta va yumaloq oyoq izlari",
        hint: "Bu hayvonning uzun xartumi bor.",
        options: ["Ot", "Fil", "Ayiq", "Kiyik"]
    },
    {
        animal: "It",
        symbol: "🐕",
        track: "To‘rtta barmoq izi va tirnoq belgilari",
        hint: "Bu hayvon insonning sodiq do‘sti.",
        options: ["Mushuk", "It", "Tulki", "Bo‘ri"]
    },
    {
        animal: "O‘rdak",
        symbol: "🦆",
        track: "Panjali va pardali oyoq izlari",
        hint: "Bu qush suvda suzadi.",
        options: ["Burgut", "O‘rdak", "Tovuq", "Kabutar"]
    },
    {
        animal: "Tovuq",
        symbol: "🐔",
        track: "Uchta oldinga qaragan barmoq izi",
        hint: "Bu qush tuxum qo‘yadi.",
        options: ["O‘rdak", "Tovuq", "Burgut", "G‘oz"]
    },
    {
        animal: "Burgut",
        symbol: "🦅",
        track: "O‘tkir changalli qush panjasi",
        hint: "Bu qush baland uchadi va juda yaxshi ko‘radi.",
        options: ["Burgut", "O‘rdak", "Tovuq", "G‘oz"]
    },
    {
        animal: "Maymun",
        symbol: "🐒",
        track: "Barmoqlari uzun qo‘l va oyoq izlari",
        hint: "Bu hayvon daraxtlarga chiqadi.",
        options: ["Maymun", "Sher", "Fil", "Ayiq"]
    },
    {
        animal: "Timsoh",
        symbol: "🐊",
        track: "Dum va oyoq izlari",
        hint: "Bu sudralib yuruvchi suvda yashaydi.",
        options: ["Ilon", "Timsoh", "Toshbaqa", "Kaltakesak"]
    },
    {
        animal: "Ilon",
        symbol: "🐍",
        track: "Egri-bugri sudralish izi",
        hint: "Bu hayvon oyoqsiz harakatlanadi.",
        options: ["Timsoh", "Ilon", "Toshbaqa", "Kaltakesak"]
    },
    {
        animal: "Toshbaqa",
        symbol: "🐢",
        track: "Kichik panjalar va sudralish izlari",
        hint: "Bu hayvonning qattiq kosasi bor.",
        options: ["Ilon", "Timsoh", "Toshbaqa", "Qurbaqa"]
    },
    {
        animal: "G‘oz",
        symbol: "🪿",
        track: "Pardali uch barmoqli oyoq izlari",
        hint: "Bu qush uy atrofida ham boqiladi.",
        options: ["G‘oz", "Burgut", "Tovuq", "Kabutar"]
    },
    {
        animal: "Qurbaqa",
        symbol: "🐸",
        track: "Uzun orqa oyoq va barmoqlar izlari",
        hint: "Bu hayvon sakraydi va ko‘pincha suv yaqinida yashaydi.",
        options: ["Ilon", "Qurbaqa", "Toshbaqa", "Timsoh"]
    }
];

// ELEMENTLAR
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const exitBtn = document.getElementById("exitBtn");
const hintBtn = document.getElementById("hintBtn");

const levelText = document.getElementById("level");
const scoreText = document.getElementById("score");
const recordText = document.getElementById("record");
const timerText = document.getElementById("timer");

const trackSymbol = document.getElementById("trackSymbol");
const trackName = document.getElementById("trackName");
const answers = document.getElementById("answers");
const message = document.getElementById("message");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const hintCount = document.getElementById("hintCount");

// O'YIN O'ZGARUVCHILARI
let currentLevel = 0;
let score = 0;
let correctCount = 0;
let timeLeft = 20;
let hintsLeft = 3;
let timerInterval = null;
let locked = false;
let currentRecord = 0;

const totalQuestions = questions.length;

// REKORDNI YUKLASH
try {
    currentRecord =
        Number(localStorage.getItem("animalTrackRecord")) || 0;
} catch (error) {
    currentRecord = 0;
}

recordText.textContent = currentRecord;

// TASODIFIY JAVOBLAR TARTIBI
function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// O'YINNI BOSHLASH
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

function startGame() {
    clearInterval(timerInterval);

    currentLevel = 0;
    score = 0;
    correctCount = 0;
    hintsLeft = 3;
    locked = false;

    scoreText.textContent = score;
    hintCount.textContent = hintsLeft + " ta yordam qoldi";

    welcomeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    loadQuestion();
}

// SAVOLNI YUKLASH
function loadQuestion() {
    clearInterval(timerInterval);

    locked = false;

    const question = questions[currentLevel];

    // Bosqichga qarab vaqt kamayadi
    timeLeft = Math.max(10, 25 - currentLevel);

    levelText.textContent =
        (currentLevel + 1) + " / " + totalQuestions;

    document.getElementById("questionNumber").textContent =
        "SAVOL " + (currentLevel + 1);

    const progress =
        ((currentLevel + 1) / totalQuestions) * 100;

    progressFill.style.width = progress + "%";
    progressText.textContent = Math.round(progress) + "%";

    trackSymbol.textContent = question.symbol;
    trackName.textContent = question.track;

    message.textContent = "";
    message.style.color = "#6ee7a0";

    timerText.textContent = timeLeft;

    document.querySelector(".timer-box")
        .classList.remove("danger");

    hintBtn.disabled = hintsLeft <= 0;

    answers.innerHTML = "";

    // JAVOBLARNI CHIQARISH
    const shuffledOptions = shuffle(question.options);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(option, button);
        });

        answers.appendChild(button);
    });

    startTimer();
}

// VAQT HISOBLAGICHI
function startTimer() {
    timerInterval = setInterval(() => {

        timeLeft--;

        timerText.textContent = timeLeft;

        if (timeLeft <= 5) {
            document.querySelector(".timer-box")
                .classList.add("danger");
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }

    }, 1000);
}

// JAVOBNI TEKSHIRISH
function checkAnswer(selected, selectedButton) {
    if (locked) return;

    locked = true;

    clearInterval(timerInterval);

    const question = questions[currentLevel];

    const allButtons =
        document.querySelectorAll(".answer-btn");

    allButtons.forEach(button => {
        button.disabled = true;

        if (button.textContent === question.animal) {
            button.classList.add("correct");
        }
    });

    if (selected === question.animal) {

        correctCount++;

        const gainedPoints = 100 + (timeLeft * 2);

        score += gainedPoints;

        scoreText.textContent = score;

        message.style.color = "#6ee7a0";

        message.textContent =
            "🎉 To‘g‘ri! +" + gainedPoints + " ball";

        updateRecord();

    } else {

        selectedButton.classList.add("wrong");

        message.style.color = "#ff8888";

        message.textContent =
            "❌ Noto‘g‘ri! Javob: " + question.animal;
    }

    setTimeout(nextQuestion, 1400);
}

// VAQT TUGASHI
function timeOut() {
    if (locked) return;

    locked = true;

    const question = questions[currentLevel];

    document.querySelectorAll(".answer-btn").forEach(button => {

        button.disabled = true;

        if (button.textContent === question.animal) {
            button.classList.add("correct");
        }

    });

    message.style.color = "#ff9999";

    message.textContent =
        "⏰ Vaqt tugadi! Javob: " + question.animal;

    setTimeout(nextQuestion, 1600);
}

// KEYINGI SAVOL
function nextQuestion() {
    currentLevel++;

    if (currentLevel < totalQuestions) {
        loadQuestion();
    } else {
        finishGame();
    }
}

// YORDAM TIZIMI
hintBtn.addEventListener("click", useHint);

function useHint() {

    if (hintsLeft <= 0 || locked) return;

    const question = questions[currentLevel];

    hintsLeft--;

    hintCount.textContent =
        hintsLeft + " ta yordam qoldi";

    hintBtn.disabled = hintsLeft <= 0;

    message.style.color = "#ffd37b";

    message.textContent = "💡 " + question.hint;

    // Bitta noto'g'ri javobni chiqarib tashlash
    const wrongButtons = Array.from(
        document.querySelectorAll(".answer-btn")
    ).filter(button =>
        button.textContent !== question.animal &&
        !button.classList.contains("eliminated")
    );

    if (wrongButtons.length > 0) {

        const randomIndex = Math.floor(
            Math.random() * wrongButtons.length
        );

        const button = wrongButtons[randomIndex];

        button.classList.add("eliminated");
        button.disabled = true;
    }
}

// REKORDNI SAQLASH
function updateRecord() {

    if (score > currentRecord) {

        currentRecord = score;

        try {
            localStorage.setItem(
                "animalTrackRecord",
                currentRecord
            );
        } catch (error) {
            console.log("Rekord saqlanmadi.");
        }

        recordText.textContent = currentRecord;
    }
}

// O'YIN YAKUNI
function finishGame() {

    clearInterval(timerInterval);

    updateRecord();

    gameScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    document.getElementById("finalScore").textContent =
        score;

    document.getElementById("correctAnswers").textContent =
        correctCount + "/" + totalQuestions;

    document.getElementById("finalRecord").textContent =
        currentRecord;

    const resultTitle =
        document.getElementById("resultTitle");

    const resultDescription =
        document.getElementById("resultDescription");

    const resultIcon =
        document.getElementById("resultIcon");

    if (correctCount === totalQuestions) {

        resultIcon.textContent = "🏆";

        resultTitle.textContent =
            "Ajoyib! Sen chempionsan!";

        resultDescription.textContent =
            "Barcha hayvonlarning izlarini topding!";

    } else if (correctCount >= 15) {

        resultIcon.textContent = "🥇";

        resultTitle.textContent = "Zo‘r natija!";

        resultDescription.textContent =
            "Sen haqiqiy o‘rmon izquvarisan!";

    } else if (correctCount >= 8) {

        resultIcon.textContent = "🌟";

        resultTitle.textContent = "Yaxshi natija!";

        resultDescription.textContent =
            "Yana mashq qil va yangi rekord o‘rnat!";

    } else {

        resultIcon.textContent = "🐾";

        resultTitle.textContent = "Sarguzasht tugadi!";

        resultDescription.textContent =
            "Keyingi safar yanada ko‘proq izlarni topasan!";
    }
}

// CHIQISH TUGMASI
exitBtn.addEventListener("click", () => {

    const confirmExit = confirm(
        "O‘yindan chiqishni xohlaysizmi?"
    );

    if (confirmExit) {

        clearInterval(timerInterval);

        gameScreen.classList.add("hidden");
        resultScreen.classList.add("hidden");
        welcomeScreen.classList.remove("hidden");
    }
});

// O'YIN YAKUNI
console.log("KIMNING IZI? o‘yini tayyor!");
console.log("Developer: Ulug'bek.R");
