{
  const showCurrentRate = (rate) =>{
      const labelCurrency = document.querySelector(".js-labelCurrency");
      labelCurrency.innerHTML = `Kurs z dnia 04.12.2022 r.: <br>${rate}`;
  }

  const updateResultText = (rate,amount) => {
      const result = document.querySelector(".js-result");

      amountZloty = amount.value * rate;
      result.innerHTML = "Kwota w złotówkach: " + amountZloty.toFixed(2);
  }

  const getCurrencyRate = () =>{
      const currency = document.querySelector(".js-currency");
      const EUR = 4.6898;
      const USD = 4.4415;
      const GBP = 5.4558;
      let rate;

      switch (currency.value) {
          case "euro":
            return EUR;
          case "dollar":
            return USD;
          case "pound":
            return GBP;
          default:
            break;
        }
  }

  const calculate = (event) =>{
      const amount = document.querySelector(".js-amount");
      event.preventDefault();
      if(amount.value === ""){
          return;
      }   

      const currenyRate = getCurrencyRate()

      showCurrentRate(currenyRate);
      updateResultText(currenyRate,amount);
  }

  const init = () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", calculate);
  }

  init();
}
