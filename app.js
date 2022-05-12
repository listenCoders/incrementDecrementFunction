let number = 0;
let increaseButton = document.querySelector('#button');
let id = document.getElementById("id");

function addNumber(){
 number = number + 1;
 id.innerText = number;
//  console.log(num);
}

function minusNumber(){
 number = number - 1;
 id.innerText = number;
//  console.log(num);
}
