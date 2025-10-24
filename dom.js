const shoes = [
  {
    name: "Nike Dunk Lows",
    price: 120,
    brand: "Nike",
    img: "images/Nike dunk.avif",
    url: "https://www.nike.com/t/dunk-low-retro-mens-shoes-5FQWGR",
    inStock: true,
  },
  {
    name: "Sabrina 3 'Silencer'",
    price: 100,
    brand: "Nike",
    img: "images/sabrina silencer.avif",
    url: "https://www.nike.com/t/sabrina-3-silencer-big-kids-basketball-shoes-LArVJUMq/IB3088-100",
    inStock: true,
  },
  {
    name: "Nike Air Force 1 LE",
    price: 90,
    brand: "Nike",
    img: "images/air force.avif",
    url: "https://www.nike.com/t/air-force-1-le-big-kids-shoes-3JNSvS/DH2920-111",
    inStock: true,
  },
  {
    name: "Nike Field General 'Ref'",
    price: 85,
    brand: "Nike",
    img: "images/nike field.avif",
    url: "https://www.nike.com/t/field-general-ref-big-kids-shoes-R3DCzx/IF0465-001",
    inStock: true,
  },
  {
    name: "GEL-CUMULUS 27 GRADE SCHOOL",
    price: 90,
    brand: "ASICS",
    img: "images/gel asic.jpg",
    url: "https://www.asics.com/us/en-us/gel-cumulus-27-grade-school/p/ANA_1014A366-500.html",
    inStock: true,
  },
  {
    name: "GEL-RESOLUTION X GRADE SCHOOL",
    price: 95,
    brand: "ASICS",
    img: "images/gel resolution.webp",
    url: "https://www.asics.com/us/en-us/gel-resolution-x-grade-school/p/ANA_1044A081-101.html",
    inStock: true,
  },
  {
    name: "GEL-KAYANO 32 TOKYO",
    price: 165,
    brand: "ASICS",
    img: "images/kayano.webp",
    url: "https://www.asics.com/us/en-us/gel-kayano-32-tokyo/p/ANA_1012B915-500.html",
    inStock: true,
  },
  {
    name: "SNAPDOWN 4 GRADE SCHOOL",
    price: 65,
    brand: "ASICS",
    img: "images/snapdown.webp",
    url: "https://www.asics.com/us/en-us/snapdown-4-grade-school/p/ANA_1084A014-001.html",
    inStock: true,
  },
  {
    name: "MATFLEX 7 GRADE SCHOOL",
    price: 60,
    brand: "ASIC",
    img: "images/matflex.webp",
    url: "https://www.asics.com/us/en-us/matflex-7-grade-school/p/ANA_1084A011-400.html?width=Standard",
    inStock: true,
  },
  {
    name: "Nike JAM",
    price: 120,
    brand:"Nike",
    img: "images/jam.avif",
    url: "https://www.nike.com/t/jam-womens-shoes-TMf3j8/FN0314-100",
    inStock: true,
  },
  {
    name: "Luka 4 'Gone Camping'",
    price: 110,
    brand:"Nike",
    img: "images/luka4.avif",
    url: "https://www.nike.com/t/luka-4-gone-camping-big-kids-basketball-shoes-V7X5B5/IF0484-300",
    inStock: true,
  },
  {
    name: "Nike Zoom Vomero 5",
    price: 170,
    brand: "Nike",
    img: "images/vomero.avif",
    url: "https://www.nike.com/t/zoom-vomero-5-womens-shoes-81TPKW/IM2404-645",
    inStock: true,
  },
  {
    name: "Nike Aqua Swoosh",
    price: 55,
    brand: "Nike",
    img: "images/aquaswoosh.avif",
    url: "https://www.nike.com/t/aqua-swoosh-big-kids-sandals-wvMBze7F/FV6363-800",
    inStock: true,
  },
  {
    name: "Nike Dunk Low Women's Artist Collection",
    price: 170,
    brand: "Nike",
    img: "images/womenartcollection.avif",
    url: "https://www.nike.com/t/dunk-low-womens-artist-collection-womens-shoes-5vkQTb/HV8575-100",
    inStock: true,
  },
  {
    name: "Nike Cosmic Runner",
    price: 57,
    brand: "Nike",
    img: "images/cosmic.avif",
    url: "https://www.nike.com/t/cosmic-runner-big-kids-road-running-shoes-Ua3qA0Nz/HM4402-601",
    inStock: true,
  },
  {
    name: "Nike Team Hustle D 12",
    price: 65,
    brand: "Nike",
    img: "images/hustled12.avif",
    url: "https://www.nike.com/t/team-hustle-d-12-big-kids-basketball-shoes-baRv6HO8/HF6279-102",
    inStock: true,
  },
  {
    name: "Giannis Immortality 4",
    price: 77,
    brand: "Nike",
    img: "images/giannis4.avif",
    url: "https://www.nike.com/t/giannis-immortality-4-big-kids-basketball-shoes-dV7RTS1D/FZ6734-001",
    inStock: true,
  },
  {
    name: "CONTEND 9 GRADE SCHOOL",
    price: 60,
    brand: "ASICS",
    img: "images/contend9.webp",
    url: "https://www.asics.com/us/en-us/contend-9-grade-school/p/ANA_1014A337-103.html?width=Standard",
    inStock: true,
  },
  {
    name: "SKYHAND OG",
    price: 100,
    brand: "ASICS",
    img: "images/skyhand.webp",
    url: "https://www.asics.com/us/en-us/skyhand-og/p/ANA_1203A452-301.html",
    inStock: true,
  },
  {
    name: "JAPAN S GRADE SCHOOL",
    price: 60,
    brand: "ASICS",
    img: "images/jsgs.webp",
    url: "https://www.asics.com/us/en-us/japan-s-grade-school/p/ANA_1204A007-120.html",
    inStock: true,
  }
]


const DOMSelectors = {
  name: document.getElementById("name"),
  price: document.getElementById("price"),
  brand: document.getElementById("brand"),
  img: document.getElementById("img"),
  
  container: document.querySelector(".container"),
  allBtn: document.querySelector(".all"),
  nikeBtn: document.querySelector(".n"),
  asicsBtn: document.querySelector(".a")
};


function inject(shoes) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin",
    `<div class="card" category ="${shoes.brand}">
      <img class="card-img" src="${shoes.img}"/>
      <h2 class="card-header">${shoes.name}</h2>
      <h3 class="card-price">$${shoes.price}</h3>
      <a href="${shoes.url}">
            <button class="b">Buy</button>
      </a>
      <button class = "cart">Add to cart</button>
    </div>`
  )
}
shoes.forEach((shoes) => inject(shoes));

function all() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "inline-block";
  })
}
document.querySelector(".all").addEventListener("click", all);

function filterbyBrand(brand) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("category");
    if (cardCategory === brand) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })
}
document.querySelector(".n").addEventListener("click", () => filterbyBrand("Nike"));
document.querySelector(".a").addEventListener("click", () => filterbyBrand("ASICS"));

let cart = [];

function addtoCart() {
  const cartButton = document.querySelectorAll(".cart");
  const list = document.querySelector(".items");
  cartButton.forEach((button) =>
    button.addEventListener("click", function(event) {
      const card = event.target.closest(".card");
      const cardPrice = card.querySelector(".card-price").textContent;
      const total = document.querySelector(".total");
      const cardName = card.querySelector(".card-header").textContent;
      list.insertAdjacentHTML("beforeend", 
        `<ul>${cardName} ${cardPrice}</ul>`,
        
      );
      
    })
  )
}
addtoCart();



/* const numbers = [1, 2, 3, 4, 5];
let x = 0;
while (x<11) {
  if (numbers.includes(3)) {
    console.log("found");
  } else {
    numbers.push(x);
  }
  x++;
}
console.log(numbers); */


/* function getCards() {
  const buttons = document.querySelectorAll("button");
  //not needed unless you need to filter etc
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) => 
    btn.addEventListener("click", function(event){
      //console.log(event.target);
      console.log(
        event.target.closest(".card").getAttribute(".brand"),
        event.target.textContent
      );
    })
  )
}
getCards(); */
//make array
//find item in array, .find("name")
//push item to cart
//show cart
//total cart
//make a cart (HTML, JS = array)