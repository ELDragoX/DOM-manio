console.log('Hello');

let titleDiv=document.getElementById('title');
console.log('before:',titleDiv.innerText);

const message="Goodbye";
titleDiv.innerText=message;

console.log('after:',titleDiv.innerText);
titleDiv.innerHTML=`<p>${message}</p>`;

titleDiv.style.backgroundColor="blue";

let redDiv=document.getElementById('red');
let yellowDiv=document.getElementById('yellow');
let greenDiv=document.getElementById('green');


const squares=document.querySelectorAll('.colorSquare');

const timesClicked = {'red':0,'yellow':0,'green':0};

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value]+=1
square.innerText=timesClicked[square.value]
    //console.log(square.value)}
  }
});
const clearGameButton=document.getElementById('clearGame');
clearGameButton.onclick= () => clearScores();
function clearScores(){
  squares.forEach(sqaure => sqaure.innerText='')
}