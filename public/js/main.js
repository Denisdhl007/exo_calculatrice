// // let input = document.getElementsByClassName('form-control')[0];
// // console.log(input);
// // let inputValue = input.value;
// // console.log(inputValue);

// // let input2 = document.getElementsByClassName('form-control')[1];
// // console.log(input2);
// // let inputValue2 = input.value;
// // console.log(inputValue2);

let button = document.querySelector("button");
button.addEventListener('click', ()=> {
    let nbr1 = document.getElementsByClassName('form-control')[0];
    let nbr2 = document.getElementsByClassName('form-control')[1];
    let response1 = Number(nbr1.value) + Number(nbr2.value);
    let repAfficher= document.getElementById('response1');
    repAfficher.textContent=response1;
});


let button1 = document.getElementsByClassName('btn')[1];
console.log(button1);
button.addEventListener('click', ()=> {
    let nbr1 = document.getElementsByClassName('form-control')[0];
    let nbr2 = document.getElementsByClassName('form-control')[1];
    let response1 = Number(nbr1.value) + Number(nbr2.value);
    let repAfficher= document.getElementById('response1');
    repAfficher.textContent=response1;
});


