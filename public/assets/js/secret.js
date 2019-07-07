const allow = false;
let messages;


const subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", getClearance)

function getClearance() {
  const pin = document.getElementById("pin").value.trim();
  $.ajax("/api/secretpage", { method: "POST", data: { pin: pin } })
    .then(result => {
      console.log(result)
      if (result === true) {
        $.ajax("/api/all", { method: "GET" })
          .then(data => {
            messages = data;
            console.log(data);
            showMessages();
          })
          .catch(err => console.log(err))
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

let switchMe = false;
const box = document.getElementById("box");
box.addEventListener("click", function() {
  if (switchMe) {
		switchMe = false;
  box.classList = "box";
} else {
    switchMe = true;
    box.classList = "box popUp";
  }
})
