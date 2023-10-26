
let computerNum = 0;
let playbutton = document.getElementById("play-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result-area");
let resetbutton = document.getElementById("reset-button");
let chances = 5
let gameover = false
let chancearea = document.getElementById("chance-area")
let history = []



playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset);
userinput.addEventListener("focus",function(){
    userinput.value=""});

function pickRandomNum()  {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("正解",computerNum)
}

function play() {
   let uservalue = userinput.value;


   if(uservalue < 1 || uservalue > 100){
        resultarea.textContent = "1と100の間の数字を入力してください";
        return;
   }

   if(history.includes(uservalue)){
        resultarea.textContent = "もう入力した数字です 他の数字を入力してください";
        return;
   }

   chances -- ;
   chancearea.textContent = `残った機会:${chances}回`;
   console.log("chance",chances)
   
   if(uservalue < computerNum){
        resultarea.textContent = "UP!!!";
   }else if(uservalue > computerNum){
            resultarea.textContent = "DOWN!!!!";
   }else {
        resultarea.textContent = "当たりました！!";
        gameover = true;
   }

   history.push(uservalue);
   console.log(history);

   if(chances < 1){
        gameover=true;
   }

   if(gameover == true){
    playbutton.disabled = true;
   }
}

function reset() {
    userinput.value = "";
    pickRandomNum();

    resultarea.textContent = "結果値がここに出ます。"

}
pickRandomNum();
