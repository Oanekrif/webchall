var currentQuestion = 0;
var questions = [
    { question: "في أي عام ولد صلى الله عليه وسلم وفي أي عام توفي؟", answers: ["ولد في سنة 571م وتوفي سنة 11هـ", "ولد في سنة 572م وتوفي سنة 635م", "ولد في سنة 573م وتوفي سنة 12هـ", "ولد في سنة 570م وتوفي سنة 633م"], correctAnswer: "ولد في سنة 571م وتوفي سنة 11هـ" },
    { question: "من أهم الاحداث التي سبقت مولد النبي صلى الله عليه وسلم", answers: ["صلح الحديبية", "موت هرقل", "قصة أصحاب الفيل", "انهزام الفرس"], correctAnswer: "قصة أصحاب الفيل" },
    { question: " كم عدد ابناء الرسول صلى الله عليه و سلم ؟", answers: ["11", "7", "5", "6"], correctAnswer: "7" },
    { question: "معجزة من معجزاته عندما كان صبيا", answers: ["هزم اسدا", "تكلم في المهد", "حادثة شق الصدر", "الاسراء و المعراج"], correctAnswer: "حادثة شق الصدر" },
    { question: "من تكلف به بعد وفاة امه؟", answers: ["عبد المطلب-أبو طالب", "عبد المطلب-حليمة", "حليمة-آمنة", "آمنة-عبد المطلب"], correctAnswer: "عبد المطلب-أبو طالب" },
    { question: "من مرضعات النبي صلى الله عليه و سلم", answers: ["آمنة-ثويبة-حليمة", "حليمة-خديجة-زينب", "أمامة-آمنة-أسماء", "خولة-ثويبة-آمنة"], correctAnswer: "آمنة-ثويبة-حليمة" },
    { question: "أربعة من أزواج النبي صلى الله عليه و سلم", answers: ["ميمونة-زينب-أميمة-صفية", "ميمونة-زينب-حفصة-خديجة", "خديجة-فاطمة-عائشة-اسماء", "مريم-عائشة-سودة-مارية"], correctAnswer: "ميمونة-زينب-حفصة-خديجة" },
    { question: "في اي عمر نزل عليه الوحي و أين؟", answers: ["غار حراء-41", "غار حراء-42", "غار حراء-40", "غار حراء-45"], correctAnswer: "غار حراء-40" },
    { question: "كم سنة دامت الدعوة السرية؟", answers: ["4", "7", "3", "5"], correctAnswer: "3" },
    { question: "أول من آمن من البشر؟", answers: ["أبو بكر الصديق", "محمد", "نوح", "آدم"], correctAnswer: "آدم" },
    { question: "خمسة من المبشرين بالجنة", answers: ["عمر-انس-عثمان-علي-عمرو", "عمر-طلحة-سعد-عثمان-بلال", "سعيد-الزبير-سعد-عبد الرحمان-طلحة", "أبو بكر الصديق-عمر-طلحة-زيد-ياسر"], correctAnswer: "سعيد-الزبير-سعد-عبد الرحمان-طلحة" },
    { question: "ما هو الاسم الأخر لغزوة تبوك؟", answers: ["الخندق", "الاحزاب", "الفرقان", "العسرة"], correctAnswer: "العسرة" },
    { question: "في اي غزوة كاد أن يموت صلى الله عليه و سلم؟", answers: ["بدر", "الخندق", "احد", "تبوك"], correctAnswer: "احد" },
    { question: "كم عدد الغزوات التي شارك فيها الرسول صلى الله عليه و سلم؟", answers: ["9", "10", "7", "13"], correctAnswer: "9" },
    { question: "في اي عام فرض الصيام و كم عام صامه النبي صلى الله عليه و سلم؟", answers: ["9هـ - 5سنوات", "2هـ -9سنوات", "1ق.هـ -11سنوات", "3هـ -8سنوات"], correctAnswer: "2هـ -9سنوات" },
    { question: "أربعة من خدم رسول الله صلى الله عليه و سلم", answers: ["أنس-عبد الله-عقبة-بلال", "أنس-بلال-اسلع-الزبير", "بلال-أيمن-عثمان-قاسم", "عمر-علي-أنس-أحمد"], correctAnswer: "أنس-بلال-اسلع-الزبير" },
    { question: "صحابي فرق الله به بين الحق و الباطل؟", answers: ["أبو بكر الصديق", "عثمان", "علي", "عمر"], correctAnswer: "عمر" },
    { question: "من اخوانه في الرضاعة", answers: ["حمزة-عمر-عبد الله", "عبد الله-حذافة-حمزة", "علي-عثمان-أنس", "سعيد-سعد-حذافة"], correctAnswer: "عبد الله-حذافة-حمزة" },
    { question: "الثلاث الاوائل الذين آمنو برسالته", answers: ["على-خديجة-أبو بكر", "أبو بكر-خديجة-زيد", "خديجة-بلال-علي", "زيد-أبو بكر-علي"], correctAnswer: "على-خديجة-أبو بكر" },
    { question: "عدد الأبناء الذكور و الاناث", answers: ["ثلاث ذكور - أربع اناث", "سبع ذكور - أربع اناث", "خمس ذكور - أربع اناث", "ست ذكور - ثلاث اناث"], correctAnswer: "ثلاث ذكور - أربع اناث" },
];
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        document.getElementById("question").style.display = "none";
        document.getElementById("result").innerHTML = "<h2>أسرة الخير تهنأكم بحلول المولد النبوي الشريف &#10084</h2>";
    }
}
function showQuestion(index) {
    var questionElement = document.getElementById("question");
    var questionData = questions[index];
    var answersHtml = "";
    for (var i = 0; i < questionData.answers.length; i++) {
        answersHtml += '<li><button onclick="checkAnswer(this, \'' + questionData.answers[i] + '\')">' + questionData.answers[i] + '</button></li>';
    }
    questionElement.innerHTML = '<p>' + questionData.question + '</p><ul>' + answersHtml + '</ul>';
}
function checkAnswer(button, answer) {
    var questionData = questions[currentQuestion];
    if (answer === questionData.correctAnswer) {
        button.classList.add("correct");
        document.getElementById("result").innerHTML = "<p>إجابة صحيحة أحسنت</p>";
        setTimeout(nextQuestion, 1000);
    } else {
        button.classList.add("incorrect");
        document.getElementById("result").innerHTML = "<p>إجابة خاطئة للأسف. حاول مرة أخرى.</p>";
        // تعطيل جميع الأزرار لمنع المزيد من النقر على هذا السؤال
        var buttons = document.querySelectorAll("#question button");
        buttons.forEach(function (btn) {
            btn.disabled = true;
        });
        // إعادة عرض نفس السؤال بعد فترة زمنية محددة
        setTimeout(function () {
            showQuestion(currentQuestion);
            // إزالة تأثيرات الأزرار
            buttons.forEach(function (btn) {
                btn.classList.remove("correct", "incorrect");
                btn.disabled = false;
            });
        }, 2000); // هنا يتم عرض نفس السؤال بعد 2 ثانية
    }
}
function restartGame() {
    currentQuestion = 0;
    showQuestion(currentQuestion);
    document.getElementById("question").style.display = "block";
    document.getElementById("result").innerHTML = "";
    // Remove effects
    // Remove button effects
    buttons.forEach(function (btn) {
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
    });

    // Redirect to a specific URL
    // window.location.href = "beIndex.html";
}
showQuestion(currentQuestion);