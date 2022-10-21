let phone = document.getElementById("cellphone");
let message = document.getElementById("message");
let generate = document.getElementById("generate");

console.log(generate);

generate.addEventListener("click", () => {
  let resultField = document.querySelector(".result");
  let formatPhone = "55" + phone.value.replace(/[^0-9]/g, "");
  let finalMessage = message.value.replaceAll(" ", "%20");

  let url =
    "https://api.whatsapp.com/send?phone=" +
    formatPhone +
    "&text=" +
    finalMessage;

  resultField.style.display = "block";
  resultField.innerHTML =
    "<h1> Link Gerado: </h1> <br> <a href=" +
    url +
    " target='_blank'>" +
    url +
    "</a>";
});
