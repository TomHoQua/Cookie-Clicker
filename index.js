const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;


increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    if(count >0){
    count--;
    countLabel.textContent = count;
    }
    else{
    countLabel.textContent = count;
    }
}

resetBtn.onclick = function(){
    answer = window.prompt("are you sure? y/n")
    if(answer=="y"){
        count = 0;
        countLabel.textContent = count;
}

    else{
        countLabel.textContent = count;
    }
}