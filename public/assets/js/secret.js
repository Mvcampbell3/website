const allow = false;
let messages;


const subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", getClearance)

function getClearance() {
  const pin = document.getElementById("pin").value.trim();
  $.ajax("/api/secretpage", { method: "POST", data: { pin: pin } })
    .then(result => {
      if (result !== false) {
            messages = result;
            console.log(result);
            showMessages();
      } else {
        alert("wrong pin")
      }
    })
    .catch(err => console.log(err))
}

function showMessages() {
  messages.map(message => {
    const namePlace = document.createElement("h3");
    const emailPlace = document.createElement("h4");
    const messagePlace = document.createElement("p");
    const delBtn = document.createElement("button");
    const holder = document.createElement("div");
    namePlace.textContent = message.name;
    emailPlace.textContent = message.email;
    messagePlace.textContent = message.message;

    holder.classList = "messageHolder";
    const outputArea = document.getElementById("outputArea");
    holder.append(namePlace, emailPlace, messagePlace);
    outputArea.append(holder);
  })
}


