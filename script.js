<<<<<<< HEAD
{
  const showCurrentRate = (rate) =>{
      const labelCurrency = document.querySelector(".js-labelCurrency");
      labelCurrency.innerHTML = "Kurs z dnia 04.12.2022 r.: <br>" + rate;
  }

  const showResult = (rate,amount) => {
      const result = document.querySelector(".js-result");
      amountZloty = amount.value * rate;
      result.innerHTML = "Kwota w złotówkach: " + amountZloty.toFixed(2);
  }

  const setCurrencyRate = () =>{
      const currency = document.querySelector(".js-currency");
      const EUR = 4.6898;
      const USD = 4.4415;
      const GBP = 5.4558;
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
        return rate;
  }

  const calculate = (event) =>{
      const amount = document.querySelector(".js-amount");
      event.preventDefault();
      if(amount.value === ""){
          return;
      }   

      showCurrentRate(setCurrencyRate());
      showResult(setCurrencyRate(),amount);
  }

  const form = document.querySelector(".form");
  form.addEventListener("submit", calculate);
}
=======
const showCurrentRate = (rate) =>{
    const labelCurrency = document.querySelector(".js-labelCurrency");
    labelCurrency.innerHTML = "Kurs z dnia 04.12.2022 r.: <br>" + rate;
}

const showResult = (rate,amount) => {
    const result = document.querySelector(".js-result");
    amountZloty = amount.value * rate;
    result.innerHTML = "Kwota w złotówkach: " + amountZloty.toFixed(2);
}

const setCurrencyRate = () =>{
    const currency = document.querySelector(".js-currency");
    const EUR = 4.6898;
    const USD = 4.4415;
    const GBP = 5.4558;
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
      return rate;
}

const calculate = (event) =>{
    const amount = document.querySelector(".js-amount");
    event.preventDefault();
    if(amount.value === ""){
        return;
    }   

    showCurrentRate(setCurrencyRate());
    showResult(setCurrencyRate(),amount);
}

const form = document.querySelector(".form");

form.addEventListener("submit", calculate);
>>>>>>> ede4c2f66ddc9760c1e95eca49396a4811d8ca86
