const buttonIncrement = document.querySelectorAll('.product__quantity-control_inc');
const buttonDecrement = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');

class Cart {   
    constructor(box) {
        this.body = box;
        this.buttonInc = box.querySelectorAll('.product__quantity-control_inc');
        this.buttonDec = box.querySelectorAll('.product__quantity-control_dec');
        this.productAdd = box.querySelectorAll('.product__add');

        this.buttonIncrement();
        this.buttonDecrement();
        this.addInnBasket(this.createElement);
    }
    buttonIncrement() {
        for(let element of this.buttonInc) {
            element.addEventListener('click', function(e) {
                let target = e.target.closest(`.product`);
                if(target) {
                    target.querySelector('.product__quantity-value').textContent++
                }
            }) 
        }    
    }
    buttonDecrement() {
        for(let element of this.buttonDec) {
            element.addEventListener('click', function(e) {
                let target = e.target.closest(`.product`);
                if(target) {
                    if(target.querySelector('.product__quantity-value').textContent > 1) {
                        target.querySelector('.product__quantity-value').textContent--
                    }
                }
            }) 
        }  
    }
    addInnBasket(create){
        const bodyElement = this.body;
        for(let product of this.productAdd) {
            product.addEventListener('click', function() {
                let dataEvent = event.target.closest(`.product`).dataset.id;
                let targetEvent = event.target.closest(`.product`);
                let cart = bodyElement.querySelector('.cart__products');
                let valueTarget = targetEvent.querySelector('.product__quantity-value');
                
                if(cart.children.length !== 0) {  
                    if(cart.querySelector(`[data-id="${dataEvent}"]`)) {
                        cart.querySelector(`[data-id="${dataEvent}"]`).lastChild.textContent = Number(valueTarget.textContent)
                    } else {
                        console.log(2)
                        cart.appendChild(create(dataEvent, Number(valueTarget.textContent), targetEvent.querySelector('img').getAttribute('src')));
                    }
                } else {
                    cart.appendChild(create(dataEvent, Number(valueTarget.textContent), targetEvent.querySelector('img').getAttribute('src')));
                }
            })
        }
    }
    createElement(id, value, image) {

        let divDataId = document.createElement('div');
        let divDataValue = document.createElement('div');
        let img = document.createElement('img');
        let divDelete = document.createElement('div');

        divDataId.setAttribute('data-id', id);
        divDataId.classList.add('cart__product');
        
        img.setAttribute('src', image);
        img.classList.add('cart__product-image');

        divDataValue.classList.add('cart__product-count');
        divDataValue.textContent = value;

        divDelete.classList.add('delete');
        divDelete.setAttribute('title', 'Удалить товар');
        divDelete.innerHTML = "&#128939";
        divDelete.addEventListener('click', function(e){
            e.target.closest(`.cart__product`).remove();
        })

        divDataId.appendChild(divDelete);
        divDataId.appendChild(img);
        divDataId.appendChild(divDataValue);

        return divDataId;
    }
}

new Cart(document.body);