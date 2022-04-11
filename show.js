var myQ = [
    {
        question: "What is the plural of appendix?",
        answers: {
            a: 'appenda',
            b: 'appendixes',
            c: 'appendices ',
            d: "appendix"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which number should be on the dots?<br>27  9  18  6  12  4 ….",
        answers: {
            a: '5',
            b: '6',
            c: '7',
            d: "8"
        },
        correctAnswer: 'd'
    },
    {
        question: "Which word is different from the rest?",
        answers: {
            a: 'stupid ',
            b: 'dumb',
            c: 'smart ',
            d: "idiotic"
        },
        correctAnswer: 'c'
    },
    {
        question: "Whats the result of this sum?<br>16 * 63 - 1214",
        answers: {
            a: '306',
            b: '206',
            c: '306',
            d: "18416"
        },
        correctAnswer: 'b'
    },

    {
        question: "Straw is to drink as food is to plate as drink is to :",
        answers: {
            a: 'fork',
            b: 'cup',
            c: 'straw',
            d: "table"
        },
        correctAnswer: 'b'
    },
    {
        question: "He___ born in 1963 in America.",
        answers: {
            a: 'had',
            b: 'is ',
            c: 'was  ',
            d: "did"
        },
        correctAnswer: 'c'
    },
    {
        question: "___ you ever visited London?",
        answers: {
            a: 'did',
            b: 'do ',
            c: 'were  ',
            d: "have"
        },
        correctAnswer: 'd'
    },
    {
        question: "She has never ____to New York?",
        answers: {
            a: 'gone ',
            b: 'was',
            c: 'been',
            d: "went"
        },
        correctAnswer: 'c'
    },
    {
        question: "Switzerland is ____than Britain?",
        answers: {
            a: 'as small',
            b: 'smallest ',
            c: 'more small ',
            d: "smaller"
        },
        correctAnswer: 'd'
    },
    {
        question: "He passed his English exam very ____",
        answers: {
            a: 'easy',
            b: 'cueasier ',
            c: 'good ',
            d: "easily"
        },
        correctAnswer: 'd'
    },
    {
        question: "If we want to place text around an image, which CSS property should we use?",
        answers: {
            a: 'push',
            b: 'float ',
            c: 'align ',
            d: "wrap"
        },
        correctAnswer: 'b'
    },
    {
        question: "Choose the correct HTML tag for a large title.",
        answers: {
            a: 'h1',
            b: 'heading ',
            c: 'head ',
            d: "h6"
        },
        correctAnswer: 'a'
    },
    {
        question: "An array can be stored in a reverse manner through the method?",
        answers: {
            a: 'sort()',
            b: 'reverse() ',
            c: 'rev.length() ',
            d: "sort.length()"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following keywords is used  to define a variable in JavaScript?",
        answers: {
            a: 'var',
            b: 'let ',
            c: 'both A and B  ',
            d: "None of the above"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the following methods is used to access HTML elements using javascipt?",
        answers: {
            a: 'getElementbyId()',
            b: 'getElementbyId() ',
            c: 'both A and B ',
            d: "None of the above"
        },
        correctAnswer: 'c'
    },
    {
        question: "When an operators value is NULL , the typeof returned by the unary operator is ?",
        answers: {
            a: 'Boolean',
            b: 'undefined ',
            c: 'object ',
            d: "integer"
        },
        correctAnswer: 'c'
    },

    {
        question: "Which function is used to serialize an object into a JSON string in javascript?",
        answers: {
            a: 'stringify()',
            b: 'parse() ',
            c: 'convert() ',
            d: "None of the above"
        },
        correctAnswer: 'a'
    },
    {
        question: "What keyword is used to declare an asynchronous function in javascript?",
        answers: {
            a: 'async ',
            b: 'await ',
            c: 'setTimeout ',
            d: "None of the above"
        },
        correctAnswer: 'a'
    },
    {
        question: "How do we write a single-line comment in javascript?",
        answers: {
            a: '/* */',
            b: '//  ',
            c: '# ',
            d: "$ $"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        answers: {
            a: 'Date',
            b: 'FileUpload ',
            c: 'Function ',
            d: "All of the above"
        },
        correctAnswer: 'b'
    }


];

for (i = 0; i < myQ.length; i++) {
    //Id
    var qId = 'q' + i;
    var input1Id = 'ia1' + i;
    var input2Id = 'ia2' + i;
    var input3Id = 'ia3' + i;
    var input4Id = 'ia4' + i;
    var rad1Id = 'rad1' + i;
    var rad2Id = 'rad2' + i;
    var rad3Id = 'rad3' + i;
    var rad4Id = 'rad4' + i;
    var ans1Id = 'ans1' + i;
    var ans2Id = 'ans2' + i;
    var ans3Id = 'ans3' + i;
    var ans4Id = 'ans4' + i;
    var formId = 'form' + i;
    var spanId='span'+i;

    //create tr and td
    document.getElementById('table').innerHTML += ` <tr> <td><div class="div-form"><div id=${formId} class='form'>  <hr> <div class="div-input-p">  <p class="para" id="${qId}"></p> <div class="input-answer" id="${input1Id}"  >  <input type="radio" name="answer" id="${rad1Id}" onchange="butAple()">  <label  id="${ans1Id}" for="${rad1Id}"></label> </div> <div class="input-answer"  id="${input2Id}"  > <input type="radio" name="answer" id="${rad2Id}" onchange="butAple()">   <label  id="${ans2Id}" for="${rad2Id}"></label>   </div>    <div class="input-answer" id="${input3Id}"   >    <input type="radio" name="answer" id="${rad3Id}" onchange="butAple()"> <label id="${ans3Id}" for="${rad3Id}"></label> </div>  <div class="input-answer"   id="${input4Id}" >  <input type="radio" name="answer" id="${rad4Id}" onchange="butAple()">   <label  id="${ans4Id}" for="${rad4Id}"></label> </div></div> <span id=${spanId}></span> <hr></div></div></td></tr> `;

    //disabled radio buuton
    document.getElementById(`${rad1Id}`).disabled = true;
    document.getElementById(`${rad2Id}`).disabled = true;
    document.getElementById(`${rad3Id}`).disabled = true;
    document.getElementById(`${rad4Id}`).disabled = true;

    //get data from array
    document.getElementById(`${qId}`).innerHTML = `Q${i + 1}: ` + myQ[i].question;

    document.getElementById(`${ans1Id}`).innerHTML = myQ[i].answers["a"];

    document.getElementById(`${ans2Id}`).innerHTML = myQ[i].answers["b"];

    document.getElementById(`${ans3Id}`).innerHTML = myQ[i].answers["c"];

    document.getElementById(`${ans4Id}`).innerHTML = myQ[i].answers["d"];

    //check correct answer and set background green
    if (i == 0) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 1) {
        document.getElementById(`${input4Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
    }
    else if (i == 2) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 3) {
        document.getElementById(`${input2Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 4) {
        document.getElementById(`${input2Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 5) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 6) {
        document.getElementById(`${input4Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
    }
    else if (i == 7) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 8) {
        document.getElementById(`${input4Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
    }
    else if (i == 9) {
        document.getElementById(`${input4Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
    }
    else if (i == 10) {
        document.getElementById(`${input2Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 11) {
        document.getElementById(`${input1Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 12) {
        document.getElementById(`${input2Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 13) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 14) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 15) {
        document.getElementById(`${input3Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 16) {
        document.getElementById(`${input1Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 17) {
        document.getElementById(`${input1Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input2Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 18) {
        document.getElementById(`${input2Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }
    else if (i == 19) {
        document.getElementById(`${input2Id}`).style.backgroundColor = 'green';
        document.getElementById(`${input3Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input1Id}`).style.backgroundColor = 'red';
        document.getElementById(`${input4Id}`).style.backgroundColor = 'red';
    }


    //check user uncorrect answer from session storage and set background red
    f=JSON.parse(sessionStorage.getItem('falseQ'));
    fa=JSON.parse(sessionStorage.getItem('falseAns'));
    for (j = 0; j < f.length; j++) {
        if (f[j] == i) {
           if (fa[j] == 'a') {
        document.getElementById(`${spanId}`).innerHTML = 'Your Answer : A';
        break;
    }
    else if (fa[j] == 'b') {
        document.getElementById(`${spanId}`).innerHTML = 'Your Answer : B';
        break;
    }
    else if (fa[j] == 'c') {
        document.getElementById(`${spanId}`).innerHTML = 'Your Answer : C';
        break;
    }
    else if (fa[j] == 'd') {
        document.getElementById(`${spanId}`).innerHTML = 'Your Answer : D';
        break;
    }
        }
    }


   

  


}