const Page = document.getElementsByClassName('cartWindowConntainer').item(0);

const inner = document.querySelector('.cartWindow');

const cartDraw = document.querySelector('.cartdraw'); 

const uncartDraw = document.querySelector('.uncartdraw'); 

const SendToCart = document.querySelector('.cart');

const cartIcon = document.querySelector('.cart-icon')



cartDraw.addEventListener('click', ()=>{
    if (inner.style.right === '-48%') {
        inner.style.right = '0px';
    }else{
        inner.style.right = '-48%';
    }
            
})

cartIcon.addEventListener('click', ()=>{
    if (inner.style.right === '-48%') {
        inner.style.right = '0px';
    }else{
        inner.style.right = '-48%';
    }
            
})