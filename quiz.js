let rand = [];
let num = [];
let sum = 0;
let ans = [];
let done = [];
let final = [];
let n1;
let n2;
let answer;
let score=0;
let questionNum=0;
let wrongAtp=0;
let total;
let strScore;
let strQNum, stractualQNum, actualQNum=0;
let strwrongAtp = '';
let temp = [];
let closeAns;
let ranNum;
let minAns;
let maxAns;
let exclude;


loadQuestion();
function getRandomNumber() {
    minNum = Math.ceil(1);
    maxNum = Math.floor(100);
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
function loadQuestion() {
    num=[];sum=0;n1=0;n2=0;answer='';rand=[];ans=[];done=[];final=[];    
for (i=0;i<2;i++) {    
    num[i] = getRandomNumber();
    sum += num[i];
/*
    if (num[0] > num[1]) {
        subtract = num[0] - num[1];
    } else {
        subtract = num[1] - num[0];
    }
*/
    }
n1 = num[0].toString();
n2 = num[1].toString();
answer = sum.toString();

const generateRandomBetween = (minAns, maxAns, exclude) => {
    minAns = Math.ceil(sum-10);
    maxAns = Math.floor(sum+10);
    let ranNum = Math.floor(Math.random() * (maxAns - minAns)) + minAns;

    if (ranNum === exclude) {
        ranNum = generateRandomBetween(minAns, maxAns, exclude);
    }    
    return ranNum;         
}

do {    
    closeAns = generateRandomBetween(minAns, maxAns, sum);
if (!rand.includes(closeAns)) {    
    rand.push(closeAns);    
}
}
while (rand.length < 3);

ans = rand;
ans.push(sum);
done=ans;
var allAns = done.sort((a, b) => 0.5 - Math.random()); 
final = allAns.join().split(',') 


var heading = document.getElementById('heading');
heading.innerHTML = n1 +' + '+ n2;

const label1 = document.querySelector('label[for="radio1"]');
label1.textContent = final[0];
document.getElementById("1").value = final[0];

const label2 = document.querySelector('label[for="radio2"]');
label2.textContent = final[1];
document.getElementById("2").value = final[1];

const label3 = document.querySelector('label[for="radio3"]');
label3.textContent = final[2];
document.getElementById("3").value = final[2];

const label4 = document.querySelector('label[for="radio4"]');
label4.textContent = final[3];
document.getElementById("4").value = final[3];
console.log(sum);

document.getElementById("1").checked = false;
document.getElementById("2").checked = false;
document.getElementById("3").checked = false;
document.getElementById("4").checked = false;
}

function checkButton() {    
    var getSelectedValue = document.querySelector(   
        'input[name="q1"]:checked');

    if(getSelectedValue !== null && getSelectedValue.value == sum) {   
        document.getElementById("result").innerHTML   
            = "Correct Answer!";
            score++;
            loadQuestion();
            questionNum++;           
            wrongMode = false;
        document.getElementById('result').style.color = "green";    
    } else if (getSelectedValue == null) {
        document.getElementById("result").innerHTML   
            = "*You have not selected any answer.";
        document.getElementById('result').style.color = "red";   
    } else {   
        document.getElementById("result").innerHTML   
            = "Incorrect Answer! Try again!";
        document.getElementById('result').style.color = "red";
        wrongMode = true;
        score-=0.5;
        wrongAtp++;        
}
    
if (score <= 0) {
    score=0;
}
    strScore = score.toString();
    strQNum = questionNum.toString();
    actualQNum = questionNum+1;
    stractualQNum = actualQNum.toString();
    strwrongAtp = wrongAtp.toString();
    
    document.getElementById("score").innerHTML   
            = 'Current Score: ' + strScore + "/" + strQNum;
    document.getElementById("wrongAtp").innerHTML= 'Incorrect Attempt: ' + strwrongAtp;
    document.getElementById("qNumber").innerHTML=stractualQNum+'.';
}
    
       