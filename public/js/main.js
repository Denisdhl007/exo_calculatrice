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




// Test1
let nbr3 = document.getElementsByClassName('form-control')[2];
console.log(nbr3);
let nbr4 = document.getElementsByClassName('form-control')[2];
console.log(nbr4);

// Exo2


let button2 = document.getElementsByClassName('btn')[2];
console.log(button2);
button2.addEventListener('click', ()=> {
    let operator = document.querySelector('select').value;
    console.log(operator);
    let nbr3 = document.getElementsByClassName('form-control')[2];
    let nbr4 = document.getElementsByClassName('form-control')[2];

    switch (operator) {
        case "+" :
            console.log(Number(nbr3.value) + Number(nbr4.value));
            let repAfficher1= document.getElementById('response2');
            repAfficher1.textContent=response2;
        break;

        case "-" :
            console.log(Number(nbr3.value) + Number(nbr4.value));
            let repAfficher2= document.getElementById('response2');
            repAfficher2.textContent=response2;
        break;

        case "*" :
            console.log(Number(nbr3.value) + Number(nbr4.value));
            let repAfficher3= document.getElementById('response2');
            repAfficher3.textContent=response2;
        break;

        case "/" :
            console.log(Number(nbr3.value) + Number(nbr4.value));
            let repAfficher4= document.getElementById('response2');
            repAfficher4.textContent=response2;
        break;

        default:
            console.log('error');
        break;
    }
    }




    let repAfficher= document.getElementById('response1');
    repAfficher.textContent=response2;
});







//     let response2 = Number(nbr3.value) 
    
// //  l'opérator
    
//     Number(nbr4.value);