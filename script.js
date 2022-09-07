var data = {
    questions: [
        {
            _quesId: "1",
            ques: "which of the following is  the capital city of India ?",
            quesOptions: ["Ahemdabad", "New Delhi", "Gorakhpur", "Chennai"],
            Answer: "New Delhi"
        },
        {
            _quesId: "2",
            ques: "who was winner of Dutch Grand Prix ?",
            quesOptions: ["Max Verstappen", "Charles Leclerc", "Sergio Perez", "Nicholas Latiffi"],
            Answer: "Max Verstappen"
        },
        {
            _quesId: "3",
            ques: "what is the result of 250 + 350  ?",
            quesOptions: ["650", "700", "560", "600"],
            Answer: "600"
        },
        {
            _quesId: "4",
            ques: "what is the result of 100 + 100  ?",
            quesOptions: ["200", "700", "560", "600"],
            Answer: "200"
        },
        {
            _quesId: "5",
            ques: "what is the result of 150 + 100  ?",
            quesOptions: ["200", "250", "560", "600"],
            Answer: "250"
        },


    ],
    userData: [
        {
            Name: "default",
            Age: "default",
            PhoneNo: "10000"
        }
    ]
}



// initialization-----------------------------------------

var submitBtn = document.querySelector(".submitBtn");

var userDetails = document.querySelector(".registration-sub")


// init confermation window--------------------------

var confirmWindow = document.querySelector(".confirmation");
// console.log(confirmWindow)

// init start button ----------------------------------
var startBtn = document.querySelector("#start");
console.log(startBtn)



// main layer init 

var mainLayer = document.querySelector(".mainLayer");

var questionLayer = document.querySelector(".questions");

// console.log(questions)






// console.log(userDetails.childNodes[0])

submitBtn.addEventListener("click", () => {

    var temp = {}
    // console.log(userDetails.childNodes)

    temp.Name = userDetails.childNodes[1].childNodes[1].value;
    temp.Age = userDetails.childNodes[3].childNodes[1].value;

    temp.PhoneNo = userDetails.childNodes[5].childNodes[1].value;


    data.userData.push(temp);

    // setting the user data given by the user to the userData array in data object
    console.log(data.userData)

    // setting the confirmation window ------------------------


    confirmWindow.innerHTML = `welcome ${temp.Name} you have successfully registered for the quiz , press on the start Button  to start the quiz `;



})








// functions of start button -- ----------------------

function randomPatternGenerator() {
    var pattern = []
    // console.log

    while (pattern.length < 5) {
        var r = Math.random() * 10 + 1;
        r = Math.floor(r)
        console.log(r)

        if (pattern.indexOf(Math.floor(r / 2)) === -1 && Math.floor(r / 2) < 5) {
            pattern.push(Math.floor(r / 2));
            console.log("pass")
        }
        console.log("ho")

    }
    return pattern;


}






// start button ----------------------------------------------------
startBtn.addEventListener("click", () => {

    // operations - 1 - starting timer 2 - displaying questions 



    var pattern = []

    pattern = randomPatternGenerator();
    console.log(pattern)


    questionNumber = "1"
    questionStatement = "what is the color of the sky?"
    optionArray = ["Blue", "Red", "Green", "Yellow"]

    var c= 0;
    pattern.forEach(element => {
        // console.log(data.questions[element])

        var quesDiv =  document.createElement("div")
        quesId = "ques"+c.toString();
        // console.log(quesId)

        quesDiv.setAttribute("id", quesId);
        c=c+1;

        // console.log(quesDiv)



        quesDiv.innerHTML = `
            <div class="${quesId}">

                <div class="statement">
                    Qn -${c.toString()} ${data.questions[element].ques}
                </div>
                <div class="options">
                    <ol>
                        <li id="option1"> <input type="radio" id="option-1">${data.questions[element].quesOptions[0]} </li>
                        <li id="option2"> <input type="radio" id="option-2"> ${data.questions[element].quesOptions[1]}</li>
                        <li id="option3"> <input type="radio" id="option-3"> ${data.questions[element].quesOptions[2]}</li>
                        <li id="option4"> <input type="radio" id="option-4"> ${data.questions[element].quesOptions[3]}</li>
                    </ol>
                </div>

            </div>
            `
            questionLayer.append(quesDiv);
        });




})







