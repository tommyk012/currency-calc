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
    let rate;

    switch (currency.value) {
        case "euro":
          rate = EUR;
          break;
        case "dollar":
          rate = USD;
          break;
        case "pound":
          rate = GBP;
          break;
        default:
          break;
      }

    labelCurrency.innerHTML = "Kurs z dnia 04.12.2022 r.: <br>" + rate;

    amountZloty = amount.value * rate;
    result.innerHTML = "Kwota w złotówkach: " + amountZloty.toFixed(2);
});