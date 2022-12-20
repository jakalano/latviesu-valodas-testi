// an array of objects, where each object represents a question and its correct answer
const questions = [
    {
      question: "1. Mana māsa ________  (krāsoties) katru dienu.",
      answers: ["krāsojas", "krasojas"]
    },
    {
      question: "2. Jūs katru dienu ________ (mācīties) daudz jaunu vārdu latviešu valodā.",
      answers: ["mācāties", "macaties"]
    },
    {
      question: "3. Es ļoti ________ (priecāties) par šodienas laikapstākļiem.",
      answers: ["priecājos", "priecajos"]
    },
    {
        question: "4. Kad es biju jaunāka, es ļoti ________ (baidīties) no spokiem",
        answers: ["baidījos", "baidijos"]
    },
    {
        question: "5. Rītvakar mani brāļi kopā ________ (skatīties) televīzijas šovu. ",
        answers: ["skatīsies", "skatisies"]
    },
    {
        question: "6. Šorīt suns parkā ________  (spēlēties) ar pīlēm. ",
        answers: ["spēlējās", "spelejas"]
    },
    {
        question: "7. Pirms dažām dienām pie mums ________ (ciemoties) vecmāmiņa. ",
        answers: ["ciemojās", "ciemojas"]
    },
    {
        question: "8. Pagājušonedēļ mēs ar māsu ________ (sarunāties) katru dienu. ",
        answers: ["sarunājāmies", "sarunajamies"]
    },
    {
        question: "9. Šorīt es ________ (mazgāties) dušā.",
        answers: ["mazgājos", "mazgajos"]
    },
    {
        question: "10. Šī reklāma ________ (atkārtoties) pēc 20 minūtēm.",
        answers: ["atkārtosies", "atkartosies"]
    },
    {
        question: "11. Nākotnē es ________ (nodarboties) ar slēpošanu. ",
        answers: ["nodarbošos", "nodarbosos"]
    },
    {
        question: "12. Mēs šobrīd ________ (trenēties) skriešanas sacensībām. ",
        answers: ["trenējamies", "trenejamies"]
    },
    {
        question: "13. Kolēģis teica, ka viņš ________ (kavēties) kādas 20 minūtes. ",
        answers: ["kavēsies", "kavesies"]
    },
    {
        question: "14. Nākamnedēļ mēs ________ (gatavoties) lielajai teātra izrādei. ",
        answers: ["gatavosimies"]
    },
    {
        question: "15. Mēs ________ (precēties) nākamvasar. ",
        answers: ["precēsimies", "precesimies"]
    },
    {
        question: "16. Es noteikti šo brīdi ________ (atcerēties) visu savu mūžu. ",
        answers: ["atcerēšos", "atceresos"]
    },
    {
        question: "17. Man ļoti ________ (gribēties) ēst. ",
        answers: ["gribas"]
    },
    {
        question: "18. Tu parasti vakaros ________ (sarunāties) ar saviem vecākiem.",
        answers: ["sarunājies", "sarunajies"]
    },
    {
        question: "19. Mēs ar ģimeni bieži ________ (peldēties) jūrā. ",
        answers: ["peldamies"]
    },
    {
        question: "20. Mēs ________ (tuvoties) mūsu galamērķim – šim benzīntankam. ",
        answers: ["tuvojamies"]
    },
    {
        question: "21. Kolēģis ar mani ________ (vēlēties) parunāties. ",
        answers: ["vēlējas", "velejas"]
    },
    {
        question: "22. Bieži es ________ (iztēloties), kā būtu dzīvot eksotiskā valstī.",
        answers: ["iztēlojos", "iztelojos"]
    },
    {
        question: "23. Šobrīd virtuvē ________ (vārīties) zupa. ",
        answers: ["vārās", "varas"]
    },
    {
        question: "24. Klusu, es pašlaik ________ (klausīties) radio pārraidi. ",
        answers: ["klausos"]
    },
    {
        question: "25. Gatavojoties eksāmenam, es ________ (kļūdīties) un apguvu nepareizās tēmas. ",
        answers: ["kļūdījos", "kludijos"]
    },
    {
        question: "26. Uz ielas ________ (lamāties) dusmīgs bezpajumtnieks. ",
        answers: ["lamājas", "lamajas"]
    },
    {
        question: "26. Uz ielas ________ (lamāties) dusmīgs bezpajumtnieks. ",
        answers: ["mainījās", "mainijas"]
    },
    {
        question: "28. Vakar tu ________ (mācīties) spēlēt klavieres.",
        answers: ["mācījies", "macijies"]
    },
    {
        question: "29. Lietus ietekmē papīrs ________ (sadalīties) un izšķīda. ",
        answers: ["sadalījās", "sadalijas"]
    },
    {
        question: "30. Rīt skolā mēs ________ (fotografēties).",
        answers: ["fotografēsimies", "fotografesimies"]
    },
    {
        question: "31. Nākamnedēļ es ________ (piedalīties) komandas saliedēšanas pasākumā. ",
        answers: ["piedalīšos", "piedalisos"]
    },
    {
        question: "32. Mēs ar vecmāmiņu rīt no rīta ________ (sazvanīties). ",
        answers: ["sazvanīsimies", "sazvanisimies"]
    },
    {
        question: "33. Tu rīt no manis ________ (atvadīties) un aizbrauksi uz Liepāju.",
        answers: ["atvadīsies", "atvadisies"]
    },
  ];
  
let currentQuestionIndex = 0;
let currentQuestionAnswered = false;
  
  function checkTekstaUzd() {
    const currentQuestion = questions[currentQuestionIndex];
    const TekstaUzd = document.getElementById("tekstaUzd").value.toLowerCase();
    const prevQuestion = currentQuestion[-1];
    if (currentQuestionAnswered) {
        // the user has already answered this question correctly
        document.getElementById("result").innerHTML = `Pareizi! Pareizā atbilde bija "${prevQuestion.answers[0]}".`;
      } else if (currentQuestion.answers.includes(TekstaUzd)) {
        currentQuestionAnswered = true;
        document.getElementById("result").innerHTML = `Pareizi! Pareizā atbilde bija "${currentQuestion.answers[0]}".`;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            // show the "next" link
            document.getElementById("next").style.display = "inline";
        } else {
        // all questions have been answered correctly
            document.getElementById("result").innerHTML = "Visi uzdevumi ir atrisināti!";
        }
    } else {
        document.getElementById("result").innerHTML = "Nepareizi.";
    }
  }
  
  window.onload = function() {
    // event listener for the "next" link
    document.getElementById("next").addEventListener("click", function() {
        // hide the "next" link
        document.getElementById("next").style.display = "none";
        // clear the value of the input element
        document.getElementById("tekstaUzd").value = "";
        // display the next question
        document.getElementById("question").innerHTML = questions[currentQuestionIndex].question;
        document.getElementById("result").innerHTML = "";
        currentQuestionAnswered = false;
    });
  };