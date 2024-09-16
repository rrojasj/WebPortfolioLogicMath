// Variables
var carModule1 = document.getElementById('card-mod1');
var carModule2 = document.getElementById('card-mod2');
var carModule3 = document.getElementById('card-mod3');
var carModule4 = document.getElementById('card-mod4');
var carModule5 = document.getElementById('card-mod5');
var carModule6 = document.getElementById('card-mod6');
var carModule7 = document.getElementById('card-mod7');

function showModule(opt) {

    if(opt === "card-mod1") {
        carModule1.classList.remove('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod2") {
        carModule1.classList.add('d-none');
        carModule2.classList.remove('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod3") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.remove('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod4") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.remove('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod5") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.remove('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod6") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.remove('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod7") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.remove('d-none');
    }
}