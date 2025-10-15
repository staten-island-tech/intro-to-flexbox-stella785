const shoes = [
  {
    name: "Nike Dunk Lows",
    price: 120,
    brand: "Nike",
    img: "images/Nike dunk.avif",
    inStock: true,
  },
  {
    name: "Sabrina 3 'Silencer'",
    price: 100,
    brand: "Nike",
    img: "images/sabrina silencer.avif",
    inStock: true,
  },
  {
    name: "Nike Air Force 1 LE",
    price: 90,
    brand: "Nike",
    img: "images/air force.avif",
    inStock: true,
  },
  {
    name: "Nike Field General 'Ref'",
    price: 85,
    brand: "Nike",
    img: "images/nike field.avif",
    inStock: true,
  },
  {
    name: "GEL-CUMULUS 27 GRADE SCHOOL",
    price: 90,
    brand: "ASICS",
    img: "images/gel asic.jpg",
    inStock: true,
  },
  {
    name: "GEL-RESOLUTION X GRADE SCHOOL",
    price: 95,
    brand: "ASICS",
    img: "images/gel resolution.webp",
    inStock: true,
  },
  {
    name: "GEL-KAYANO 32 TOKYO",
    price: 165,
    brand: "ASICS",
    img: "images/kayano.webp",
    inStock: true,
  },
  {
    name: "SNAPDOWN 4 GRADE SCHOOL",
    price: 65,
    brand: "ASICS",
    img: "images/snapdown.webp",
    inStock: true,
  },
  {
    name: "MATFLEX 7 GRADE SCHOOL",
    price: 60,
    brand: "ASIC",
    img: "images/matflex.webp",
    inStock: true,
  },
  {
    name: "Nike JAM",
    price: 120,
    brand:"Nike",
    img: "images/jam.avif",
    inStock: true,
  },
  {
    name: "Luka 4 'Gone Camping'",
    price: 110,
    brand:"Nike",
    img: "images/luka4.avif",
    inStock: true,
  },
  {
    name: "Nike Zoom Vomero 5",
    price: 170,
    brand: "Nike",
    img: "images/vomero.avif",
    inStock: true,
  },
  {
    name: "Nike Aqua Swoosh",
    price: 55,
    brand: "Nike",
    img: "images/aquaswoosh.avif",
    inStock: true,
  },
  {
    name: "Nike Dunk Low Women's Artist Collection",
    price: 170,
    brand: "Nike",
    img: "images/womenartcollection.avif",
    inStock: true,
  },
  {
    name: "Nike Cosmic Runner",
    price: 57,
    brand: "Nike",
    img: "images/cosmic.avif",
    inStock: true,
  },
  {
    name: "Nike Team Hustle D 12",
    price: 65,
    brand: "Nike",
    img: "images/hustled12.avif",
    inStock: true,
  },
  {
    name: "Giannis Immortality 4",
    price: 77,
    brand: "Nike",
    img: "images/giannis4.avif",
    inStock: true,
  },
  {
    name: "CONTEND 9 GRADE SCHOOL",
    price: 60,
    brand: "ASICS",
    img: "images/contend9.webp",
    inStock: true,
  },
  {
    name: "SKYHAND OG",
    price: 100,
    brand: "ASICS",
    img: "images/skyhand.webp",
    inStock: true,
  },
  {
    name: "JAPAN S GRADE SCHOOL",
    price: 60,
    brand: "ASICS",
    img: "images/jsgs.webp",
    inStock: true,
  }
]

//created array
//find the container using query selector
//create function to add 1 card to screen

//2. selecting elements in js
const DOMSelectors = {
  name: document.getElementById("name"),
  price: document.getElementById("price"),
  brand: document.getElementById("brand"),
  img: document.getElementById("img"),
};


function inject(shoes) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin",
    `<div class="card">
      <img class="card-img" src="${shoes.img}"/>
      <h2 class="card-header">${shoes.name}</h2>
      <h3 class="card-price">${shoes.price}</h3>
      <button class="addcart">Buy</button>
    </div>`
  )
}

shoes.forEach((shoes) => inject(shoes));

function display(brand) {
  const allButton = document.querySelector(".all");
  allButton.addEventListener("click", function() {
    console.log("all")
  });
  const nikeButton = document.querySelector(".n");
  nikeButtonButton.addEventListener("click", function() {
    console.log("nike")
  });
  const asicsButton = document.querySelector(".a");
  asicsButton.addEventListener("click", function() {
    console.log("asics")
  });
}


/* function getCards() {
  const buttons = document.querySelectorAll("button");
  //not needed unless you need to filter etc
  const btnArr = Array.from(button);
  btnArr.forEach((btn) => 
    btn.addEventListener("click", function(event){
      //console.log(event.target);
      console.log(
        event.target.closest(".display-card").getAttribute("data-id"),
        event.target.textContent
      );
    })
  )
}
getCards(); */

//make a cart (HTML, JS = array)