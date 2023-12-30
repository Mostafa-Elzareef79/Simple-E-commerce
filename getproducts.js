const products = JSON.parse(localStorage.getItem('cartItems'))
const getCartItems = document.querySelector('.cartitems')
var cart = document.querySelector('.cart');

for(let i=0; i<products.length; i++){
    let product = `
    <tr id="${i}" >
        <th scope="col"><img src="${products[i].image}" width="70" height="70" class="rounded" alt="..."></th>
        <th scope="col">${products[i].title}</th>
        <th scope="col">${products[i].price}</th>
        <th scope="col"  class="delete ${i}"><a href="" style="color:red">Delete</a></th>

    </tr>
    
    `
    getCartItems.insertAdjacentHTML('afterbegin', product)
}



getCartNumber = JSON.parse(localStorage.getItem('cartNumber')) ? JSON.parse(localStorage.getItem('cartNumber')) : 0;

cart.innerHTML = getCartNumber


const deleteBtn = document.querySelectorAll('.delete')

for(let i=0; i<deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', (e)=>{
      const deleteItem = deleteBtn[i].classList[1]
      products.splice(deleteItem, 1)
      localStorage.setItem('cartItems', JSON.stringify(products))

      const getRow = document.getElementById(`${deleteItem}`)
      console.log(getRow)
      getRow.remove()

      ////////////////////////////////////////////////////////////////////
      getCartNumber -= 1
      cart.innerHTML = getCartNumber
      localStorage.setItem('cartNumber', JSON.stringify(getCartNumber))
    })
  }
  