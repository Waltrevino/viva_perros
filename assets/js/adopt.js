var adoptDogData = [{
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog1.jpg"
  },
  {
    name: "Trixi",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog2.jpg"
  },
  {
    name: "Stella",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog3.jpg"
  },
  {
    name: "Lupe",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog4.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog5.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog6.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog7.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/dog8.jpg"
  }
]

for (var i = 0; i < adoptDogData.length; i++) {
  const cards = document.querySelector("#carta");
  var dogCard = `<div class="col-md-6 card-wrapper">
  <div class="card adopt-dog-card box-shadow" style="width: 100%;">
    <img src=${adoptDogData[i].src} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">${adoptDogData[i].name}</h5>
      <p class="card-text text-center">${adoptDogData[i].message}</p>
    </div>
    </div>
  </div>`
  console.log(adoptDogData[i].name);
  cards.innerHTML += dogCard;
}