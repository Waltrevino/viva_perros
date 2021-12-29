var adoptDogData = [{
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog1.jpg"
  },
  {
    name: "Trixi",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog2.jpg"
  },
  {
    name: "Stella",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog3.jpg"
  },
  {
    name: "Lupe",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog4.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog5.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog6.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog7.jpg"
  },
  {
    name: "Marty",
    message: "Loyal, friendly, eccentric, best friend.",
    src: "./assets/imgs/adoptable_dogs/dog8.jpg"
  }
]

for (var i = 0; i < adoptDogData.length; i++) {
  // Update to TRUE if have dogs for adoption
  const dogsForAdoption = false;
  const cards = document.querySelector("#carta");
  if (dogsForAdoption){
      var dogCard = `<div class="col-md-6 card-wrapper">
      <div class="card adopt-dog-card box-shadow" style="width: 100%;">
        <img src=${adoptDogData[i].src} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${adoptDogData[i].name}</h5>
          <p class="card-text">${adoptDogData[i].message}</p>
        </div>
        </div>
      </div>`
      console.log(adoptDogData[i].name);
      cards.innerHTML += dogCard;
    } else {
      cards.innerHTML = `<span>We don't have any dogs available at this time. <br> Please check back later or <br> look for your new best friend on <a href="https://www.petfinder.com/member/us/tx/austin/viva-perros-tx2459/" style="color: green" target="_blank" >Petfinder.com<a></span>`
      // cards.setAttribute("style", "display: flex; justify-content: center;align-content: center;font-size: 2em;height: 60vh;text-align: center;color: yellow;")
      cards.classList.add('no-dogs-msg');
  }  
}