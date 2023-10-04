const item = document.querySelector('.shop');

let basket = [];

let genShoppingList = ()=>{
    return (item.innerHTML = shoppingArray.map((x)=>{
        let {id, productName, productImg, productPrice} = x
        return `<div class="shopping-items">
                    <h2 class="product-name">${productName}</h2>
                    <img class="product-img" src="${productImg}" alt="product image">
                    <div class="cont">
                        <h3 class="price-tag">${productPrice}</h3>
                        <input class="add-btn btn btn-outline-info" type="button" value="ADD TO CART">
                    </div>
                    <div class="item-count">
                        <i onclick = "decrement(${id})" class="bi bi-dash-circle-fill"></i>
                        <div class="quantity" id=${id}>0</div>
                        <i onclick = "increment(${id})" class="bi bi-plus-circle-fill"></i>
                    </div>
                </div>`;
    }).join(""));


}

genShoppingList();


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if(search === undefined){
        return;
    }
    else if(search.item === 0){
        return;
    }
    else {
        search.item -= 1;
    }
    console.log(basket);
    update(selectedItem.id);

}


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    }
    else {
        search.item += 1;
    }
    console.log(basket);
    update(selectedItem.id);

}

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
}


let addToCart = document.querySelectorAll('.add-btn');

addToCart.forEach(function(e){
    e.addEventListener('click', ()=>{
        let icon = document.querySelector('.cart-amount');
        icon.innerHTML = basket.map((x)=>x.item).reduce((x,y) => x+y , 0);
    })
})



