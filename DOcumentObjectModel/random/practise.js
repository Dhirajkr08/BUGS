var correctAnswers={
    '1': "New Delhi",
    '2':["Paris"]
}

var userAnswers={};

function checkAnswer(answer,questionNumber){
    userANswers[questionNumber]=answer;
}

function checkBoxAnswer(checkbox){
    var questionNumber='2';
    if(checkbox.checked){
        if(! userAnswers[questionNumber]){
            userAnswer[questionNumber]=[];
        }
        userAnswers[questionNumber].push(checkbox.value)
    }
    else{
        var index=userAnswers[questionNumber].indexOf(checkbox.value);
        if(index !== -1){
            userAnswer[questionNumber].splice(index,1)
        }
    }
}

function submitQuiz(){
    var correctCount=0
    var resultHtml="<h2> Results:</h2>"

    for (var questionNumber in userAnswer){
        var questionCorrect=false;
        var userAnswer=userAnswers[questionNumber];
        var correctAnswer=correctAnswers[questionNumber];

        if(Array.isArray(userAnswer)){
            if(arraysEqual(userAnswer.sort(),correctAnswer.sort())){
                questionCorrect=true;
            }
            else{
                if(userAnswer.toLowerCase()===correctAnswer.toLowerCase()){
                    questionCorrect=true
                }
            }
        }
        if(questionCorrect){
            correctCount++;
            resultHtml+="<p>Question"+questionNumber + ":correct(your answer:"+userAnswer+")</p>";

        } else {
            resultHtml += "<p>Question " + questionNumber + ": Incorrect (Correct Answer: " + correctAnswer + ", Your Answer: " + userAnswer + ")</p>";
        }
    }  
    resultHtml += "<p>Total Correct Answers: " + correctCount + "</p>";
    document.getElementById("result").innerHTML = resultHtml;


}
function arraysEqual(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    for (var i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]) return false;
    }
    return true;
}
