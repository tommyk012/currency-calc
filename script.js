let amount = document.querySelector(".js-amount");
let currency = document.querySelector(".js-currency");
let result = document.querySelector(".js-result");
let form = document.querySelector(".form");
let labelCurrency = document.querySelector(".js-labelCurrency")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(amount.value === ""){
        return;
    }   

    let EUR = 4.6898;
    let USD = 4.4415;
    let GBP = 5.4558;
    let amountZloty = 0;

    switch(currency[currency.selectedIndex].id){
        case "euro":    
            amountZloty = amount.value * EUR;
            labelCurrency.innerHTML = "Kurs z dnia 04.12.2022 r.: <br>" + EUR;
            break;
        case "dollar":  
            amountZloty = amount.value * USD;
            labelCurrency.innerHTML = "Kurs z dnia 04.12.2022 r.: <br>" + USD;
            break;
        case "pound":  
            amountZloty = amount.value * GBP;
            labelCurrency.innerHTML = "Kurs z dnia 04.12.2022 r.: <br>" + GBP;
            break;
        default: 
            break;
    }

    amountZloty = amountZloty.toFixed(2);
    result.innerHTML = "Kwota w złotówkach: " + amountZloty;
})