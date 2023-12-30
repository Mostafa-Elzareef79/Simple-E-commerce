var addToCart = document.querySelectorAll('.addtocart')
var cart = document.querySelector('.cart');
var cardBody = document.querySelectorAll('.card-body')
// var cardBody = document.querySelector('.card-body')


// console.log(cardBody.childNodes[1].textContent)
// console.log(cardBody.childNodes[3].textContent)
// console.log(cardBody.childNodes[5].textContent)
let getData = JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [];
getCartNumber = JSON.parse(localStorage.getItem('cartNumber')) ? JSON.parse(localStorage.getItem('cartNumber')) : 0;

cart.innerHTML = getCartNumber

for(let i=0; i<addToCart.length; i++){
    addToCart[i].addEventListener('click', (e)=>{
      let turnToNumber = Number(cart.innerHTML)
      let cartNumber = turnToNumber + 1
      
      localStorage.setItem('cartNumber', JSON.stringify(cartNumber))


      const image = cardBody[i].childNodes[1].src
      const title = cardBody[i].childNodes[3].textContent
      const description = cardBody[i].childNodes[5].textContent
      const price = cardBody[i].childNodes[7].textContent
      // count += 1 
      data = {
        "image": image,
        "title": title,
        "description": description,
        "price": price
      }
      localStorage.setItem('cartItems', JSON.stringify([...getData, data]))
      getData = JSON.parse(localStorage.getItem('cartItems'))
      ////////////
      getCartNumber = JSON.parse(localStorage.getItem('cartNumber')) ? JSON.parse(localStorage.getItem('cartNumber')) : 0;
      
      cart.innerHTML = getCartNumber
    })
  }
  


// ================================================================================================================================
// ================================================================================================================================
// ================================================================================================================================


  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');

  let currentIndex = 0; 
  let intervalId; 
  
  
  function showSlide(index) {
    
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    
    
    slides[index].style.display = 'block';
    currentIndex = index;
  }
  
  function showNextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0; 
    }
    showSlide(nextIndex);
}
function showPreviousSlide() {
  let previousIndex = currentIndex - 1;
  if (previousIndex < 0) {
    previousIndex = slides.length - 1; 
  }
  showSlide(previousIndex);
}
function startSlideshow() {
  intervalId = setInterval(showNextSlide, 5000);
}

const nextButton = document.getElementById('next-btn');
const previousButton = document.getElementById('previous-btn');
const playButton = document.getElementById('play-btn');
const stopButton = document.getElementById('stop-btn');

nextButton.addEventListener('click', showNextSlide);
previousButton.addEventListener('click', showPreviousSlide);


startSlideshow()



// let ADD=document.querySelectorAll(".addtocart")

let div=document.querySelector(".carts")
addToCart.addEventListener("click",()=>{
  window.sessionStorage.div.innerHTML="<h2>samo3aleko</h2>"
  // div.append("addToCart")
  
  
})
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  
  document.getElementById('error').innerHTML = '';
  
  if (name === '') {
    document.getElementById('error').innerHTML += 'Name is required.<br>';
  }
  
  if (!validateEmail(email)) {
    document.getElementById('error').innerHTML += 'Email is not valid.<br>';
  }
  
  if (document.getElementById('error').innerHTML !== '') {
    return false; 
  }
  
  
  return true;
  
}

let productes=[{ 
name:'classic model',
price:10,
inCart:0
},
{name:'kagoal model',
price:20,
inCart:1},
{name:'ronbay shirts',
price:30,
inCart:2},
{name:'collage time',
price:40,
inCart:3}]
  for(var i=0;i<addToCart.length;i++){
    addToCart[i].addEventListener("click",()=>{
totalCost(productes[i]);
    })
  }
  
  
  

  
  
  
  