const form = document.getElementById("form");

const firstName = document.getElementById("namaDepan");
const lastName = document.getElementById("namaBelakang");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("numberPhone");
const date = document.getElementById("date");
const message = document.getElementById("exampleFormControlTextarea1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fnValue = firstName.value;
  lnValue = lastName.value;
  eValue = email.value;
  pnValue = phoneNumber.value;
  dValue = date.value;
  mValue = message.value;

  let radio = document.getElementsByClassName("form-check-input");

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log(radio[i].value);
    }
  }

  console.log(fnValue);
  console.log(lnValue);
  console.log(eValue);
  console.log(pnValue);
  console.log(dValue);
  console.log(mValue);
});
