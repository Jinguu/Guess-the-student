const students = [
    {
        name: "Abdi Ali",
        image: "assets/images/students/abdi_ali.jpg",
    },
    {
        name: "Albin Lindeborg",
        image: "assets/images/students/albin_lindeborg.jpg",
    },
    {
        name: "Alexander Olsson",
        image: "assets/images/students/alexander_olsson.jpg",
    },
    {
        name: "André Lang",
        image: "assets/images/students/andre_lang.jpg",
    },
    {
        name: "Andreas Gustafsson",
        image: "assets/images/students/andreas_gustafsson.jpg",
    },
    {
        name: "Andreas Xu",
        image: "assets/images/students/andreas_xu.jpg",
    },
    {
        name: "Arden Haldorson",
        image: "assets/images/students/arden_haldorson.jpg",
    },
    {
        name: "Asenakew Zegeye",
        image: "assets/images/students/asenakew_zegeye.jpg",
    },
    {
        name: "Astrid Lindfors",
        image: "assets/images/students/astrid_lindfors.jpg",
    },
    {
        name: "Bob Oskar Kindgren",
        image: "assets/images/students/bob_oskar_kindgren.jpg",
    },
    {
        name: "Christine Nilsson",
        image: "assets/images/students/christine_nilsson.jpg",
    },
    {
        name: "Daniella Dam",
        image: "assets/images/students/daniella_dam.jpg",
    },
    {
        name: "Eli Ennab",
        image: "assets/images/students/eli_ennab.jpg",
    },
    {
        name: "Felicia Gartz Levin",
        image: "assets/images/students/felicia_gartz_levin.jpg",
    },
    {
        name: "Hanna Björling",
        image: "assets/images/students/hanna_bjorling.jpg",
    },
    {
        name: "Harald Henriksson",
        image: "assets/images/students/harald_henriksson.jpg",
    },
    {
        name: "Helga Börjesson",
        image: "assets/images/students/helga_borjesson.jpg",
    },
    {
        name: "Isak Westerberg",
        image: "assets/images/students/isak_westerberg.jpg",
    },
    {
        name: "Jimmy Nguyen",
        image: "assets/images/students/jimmy_nguyen.jpg",
    },
    {
        name: "Joakim Ottosson",
        image: "assets/images/students/joakim_ottosson.jpg",
    },
    {
        name: "Jonas Nilsson",
        image: "assets/images/students/jonas_nilsson.jpg",
    },
    {
        name: "Kristopher Gray",
        image: "assets/images/students/kristopher_gray.jpg",
    },
    {
        name: "Linnea Saxvik",
        image: "assets/images/students/linnea_saxvik.jpg",
    },
    {
        name: "Linus Ohlander",
        image: "assets/images/students/linus_ohlander.jpg",
    },
    {
        name: "Louise Keinström",
        image: "assets/images/students/louise_keinstrom.jpg",
    },
    {
        name: "Louise Murray",
        image: "assets/images/students/louise_murray.jpg",
    },
    {
        name: "Ludvig Lundberg",
        image: "assets/images/students/ludvig_lundberg.jpg",
    },
    {
        name: "Malin Kyttä",
        image: "assets/images/students/malin_kytta.jpg",
    },
    {
        name: "Måns Edenfalk",
        image: "assets/images/students/mans_edenfalk.jpg",
    },
    {
        name: "Marcus Birgersson",
        image: "assets/images/students/marcus_birgersson.jpg",
    },
    {
        name: "Michelle Klemendz",
        image: "assets/images/students/michelle_klemendz.jpg",
    },
    {
        name: "Mohammad Mzien",
        image: "assets/images/students/mohammad_mzien.jpg",
    },
    {
        name: "Nastassia Martin",
        image: "assets/images/students/nastassia_martin.jpg",
    },
    {
        name: "Patrik He",
        image: "assets/images/students/patrik_he.jpg",
    },
    {
        name: "Philippe Le Gall",
        image: "assets/images/students/philippe_legall.jpg",
    },
    {
        name: "Sandra Vidalin",
        image: "assets/images/students/sandra_vidalin.jpg",
    },
    {
        name: "Simon Bengtsson",
        image: "assets/images/students/simon_bengtsson.jpg",
    },
    {
        name: "Sofia Travnicek Mattiasson",
        image: "assets/images/students/sofia_travnicek_mattiasson.jpg",
    },
    {
        name: "Sonja Svidén",
        image: "assets/images/students/sonja_sviden.jpg",
    },
    {
        name: "Tanja Söderholm",
        image: "assets/images/students/tanja_soderholm.jpg",
    },
    {
        name: "Viktor Pettersson",
        image: "assets/images/students/viktor_pettersson.jpg",
    },
];

const missing_students = [
    {
        name: "Amer El-Jechi",
        image: null,
    },
    {
        name: "Amin Hassani",
        image: null,
    },
    {
        name: "Gunnar Omander",
        image: null,
    },
    {
        name: "Maryia Tamasheuskaya",
        image: null,
    },
];

const container = document.querySelector('#quiz_container');
const highscore = document.querySelector('#highscore');
const imageList = document.querySelector('#images')
const answerList = document.querySelector('#answer-btns');
const startButtons = document.querySelectorAll('#answer-btns button')
const optionList1 = document.querySelector('#option_1');
const optionList2 = document.querySelector('#option_2');
const optionList3 = document.querySelector('#option_3');
const result = document.querySelector('#result_btn');
const reset = document.querySelector('#reset_btn');
const resulty = document.querySelector('#results');
const h2 = document.querySelector('h2');
const scored = document.querySelector('.score')


let quiz = students
let questions = 0
let random;
let answer;
let score = 0;
let guesses = 0;
let usedName = [];



const shuffling = (studentArray) => {
    for (let i = 0; i < studentArray.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = studentArray[i];
        studentArray[i] = studentArray[j];
        studentArray[j] = temp;
    }
}



const hide = () => {

    h2.classList.add('hide')
    optionList1.classList.add('hide')
    optionList2.classList.add('hide')
    optionList3.classList.add('hide')
    reset.classList.remove('hide')
    result.classList.remove('hide')
    container.classList.remove('hide')
}

const show = () => {

    h2.classList.remove('hide')
    optionList1.classList.remove('hide')
    optionList2.classList.remove('hide')
    optionList3.classList.remove('hide')
    reset.classList.add('hide')
    result.classList.add('hide')
    container.classList.add('hide')
}

const resetScore = () => {
    quiz = students;
    score = 0;
    guesses = 0;
}


const autoScore = () => {
    scored.innerHTML = `
    <h1> Your score is </h1>
    <li> You gussed ${guesses} time(s).</li>
    <li>${score} correct answer(s).</li>
    `

    if (quiz.length === score && guesses <= quiz.length) {
        scored.innerHTML += `<p> Good job ${score}/${quiz.length} with ${guesses} guesses</p>`
    } else if (quiz.length === score) {
        scored.innerHTML += `<p> All correct! Amazing </p>`
    }

    if (guesses >= quiz.length + 10 && quiz.length === score) {
        scored.innerHTML += `<p> Alot of guesses either way well done</p>`
    } else if (guesses <= 3 || score < 2) {
        scored.innerHTML += `<p> Unfortunately you did not pass </p>`
    }

}

const startGame = () => {
    hide();
    resulty.classList.add('hide')

    shuffling(quiz);


    startButtons.forEach((btn, i) => {
        btn.innerText = quiz[i].name;
        random = Math.floor(Math.random() * 3);
        imageList.firstElementChild.setAttribute('src', quiz[random].image);
        answer = quiz[random]
        console.log(random);
    });

    startButtons.forEach((e) => {
        e.classList.remove('correct')
        e.classList.remove('wrong')
    })
}





answerList.addEventListener('click', e => {
    if (e.target.tagName === 'button') {
        guesses++;

        if (e.target.innerText == answer.name) {
            score++;
            e.target.classList.add('correct');
            console.log(Correct);
        }

        usedName.push(answer);
        quiz = quiz.filter((e) => e !== answer);
        console.log(quiz);

        if (guesses <= questions) {
            startGame();


            if (guesses === questions) {
                show();
                autoScore();
                resulty.classList.remove('hide')
                h2.classList.add('hide')
                resetScore();
                usedName = [];
            }
        }
    }
});


optionList1.addEventListener('click', () => {
    questions = 10
    startGame()
});

optionList2.addEventListener('click', () => {
    questions = 15
    startGame()
});

optionList3.addEventListener('click', () => {
    questions = 20
    startGame()
});


reset.addEventListener('click', () => {
    resetScore()
    usedName = [];
    show();
    alert('Game has been resetted!');
});


const showResults = () => {
    show();
    autoScore();
    resulty.classList.remove('hide')
    h2.classList.add('hide')
    resetScore();
    usedName = [];
}
result.addEventListener('click', (showResults));