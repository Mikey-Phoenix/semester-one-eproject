const discountContainer = document.querySelector('.displayContainer');
const discountDisplay = document.querySelector('.discountDisplay');
const viewon = document.querySelector('.viewon');
const optionOne = document.querySelector('#optionOne');
const optionTwo = document.querySelector('#optionTwo');
const optionThree = document.querySelector('#optionThree');
const castone = document.querySelector('#castone');
const casttwo = document.querySelector('#casttwo');
const castthree = document.querySelector('#castthree');
const Discountname = document.querySelector('.discountDetails').querySelector('.name');
const oldPrice = document.querySelector('.discountDetails').querySelector('.price').querySelector('del');
const newPrice = document.querySelector('.discountDetails').querySelector('.price').querySelector('.new').querySelector('.innerNew');
const discountInfo = document.querySelector('.discountDetails').querySelector('.info');
const discountExit = document.querySelector('.exit');
const discountCartbtn = document.querySelector('.innerDiscountCart');

const cartItems = document.querySelector('.web');

let discountStorage = [];



const pic = ['https://cdn.shopify.com/s/files/1/2117/1313/products/JY8078-52L_large.jpg', 'https://cdn.mos.cms.futurecdn.net/cXsCL3fo2PAuUaRSkUfvwJ-970-80.png.webp'];
let sub = 0;
const bgCarousel30 = document.querySelector('#thirty');
const timeinterval_30 = setInterval(() => {
    bgCarousel30.style.background = ` url(${pic[sub]})`;
    bgCarousel30.style.backgroundPosition = 'center';
    bgCarousel30.style.backgroundSize = 'cover';
    if (sub ==(pic.length)) {
        bgCarousel30.style.background = ` url('https://clockshops.com/wp-content/uploads/2022/04/BUL-C4867-1-462x462.jpg')`;
        bgCarousel30.style.backgroundPosition = 'center';
        bgCarousel30.style.backgroundSize = 'cover';
        sub = 0;
    } else {
        sub++;
    }
}, 20000);
timeinterval_30;

const imagey = ['https://cdn.shopify.com/s/files/1/2117/1313/products/98B104_600x.jpg?v=1574741873', 'https://cdn.mos.cms.futurecdn.net/vzDhs6ZUrqXQHzK8HiQWMb-970-80.jpg.webp'];
let pry = 0;
const bgCarousel20 = document.getElementById('twenty');
const timeinterval_20 = setInterval(() => {
    bgCarousel20.style.background = ` url(${imagey[pry]})`;
    bgCarousel20.style.backgroundPosition = 'center';
    bgCarousel20.style.backgroundSize = 'cover';
    if (pry ==(pic.length)) {
        bgCarousel20.style.background = ` url('https://cdn11.bigcommerce.com/s-g62km8uew2/images/stencil/1280x1280/products/1180/35165/CLSL03_portrait_8__53813.1638464427.jpg?c=1')`;
        bgCarousel20.style.backgroundPosition = 'center';
        bgCarousel20.style.backgroundSize = 'cover';
        pry = 0;
    } else {
        pry++;
    }
}, 25000);
timeinterval_20;

const img = ['https://cdn.shopify.com/s/files/1/2117/1313/products/YA125511.jpg?v=1509120633', 'https://cdn.mos.cms.futurecdn.net/2N4kn9kFxbn48XgtCDejpA-970-80.jpg.webp'];
let forNow = 0;
const bgCarousel10 = document.querySelector('#ten');
const timeinterval_10 = setInterval(() => {
    bgCarousel10.style.background = ` url(${img[forNow]})`;
    bgCarousel10.style.backgroundPosition = 'center';
    bgCarousel10.style.backgroundSize = 'cover';
    if (forNow ==(img.length)) {
        bgCarousel10.style.background = ` url('https://cdn11.bigcommerce.com/s-g62km8uew2/images/stencil/640w/products/1179/35144/CLCN05_portrait_8__04224.1638464168.jpg?c=1')`;
        bgCarousel10.style.backgroundPosition = 'center';
        bgCarousel10.style.backgroundSize = 'cover';
        forNow = 0;
    } else {
        forNow++;
    }
}, 30000);
timeinterval_10;





discountCartbtn.addEventListener('click', ()=>{
    discountStorage = [];

    discountStorage.push(viewon.src);
    discountStorage.push(Discountname.innerHTML);
    discountStorage.push(newPrice.innerHTML);

    console.log(discountStorage[0]);
    console.log(discountStorage[1]);
    console.log(discountStorage[2]);

    function discountCartingAndroid() {
        const tiny = document.createElement('div');
        tiny.classList.add('innercontainer');

        const picture = document.createElement('img');
        picture.src = discountStorage[0];

        const name = document.createElement('div');
        name.classList.add('name');
        name.innerHTML = discountStorage[1];


        const price = document.createElement('p');
        price.classList.add('price');

        const amount = document.createElement('p')
        amount.classList.add('amount');

        const amountInner = document.createElement('span');
        amountInner.innerHTML = discountStorage[2];
        amountInner.classList.add('amountInner')

        const dollar = document.createElement('span');
        dollar.innerHTML = '$';
        
        const button = document.createElement('button');
        button.classList.add('remove');
        button.innerHTML = 'remove';
        button.addEventListener('click', (e)=>{
            console.log(e);
            check();
            e.path[2].style.display = 'none';
            let val = e.path[2].querySelector('.price').querySelector('.amount').innerHTML;
            box = box - val;
            let tempCapsule =  document.querySelector('.totalNumber').innerHTML;
            let tempCapsuleMobile =  document.querySelector('.totalNumberMobile').innerHTML;
            
            document.querySelector('.totalNumber').innerHTML = parseInt(tempCapsule) -1;
            document.querySelector('.dot').innerHTML = parseInt(tempCapsule) -1;
            if (box > 0) {
                document.querySelector('.totalAmount').innerHTML = `$${box}`;
            } else {
                document.querySelector('.totalAmount').innerHTML = `$0`;
                box = 0;
                capsule = [];
            }
            document.querySelector('.totalNumberMobile').innerHTML = parseInt(tempCapsuleMobile) -1;
            document.querySelector('.dot').innerHTML = parseInt(tempCapsuleMobile) -1;
            document.querySelector('.totalAmountMobile').innerHTML = `$${box}`;
        })

        const vault = tiny;
        
        amount.appendChild(dollar);
        amount.appendChild(amountInner);
        price.appendChild(amount);
        price.appendChild(button);
        tiny.appendChild(picture);
        tiny.appendChild(name);
        tiny.appendChild(price);
        
        cartListMobile.appendChild(tiny);
        
        capsule.push(tiny);
        
        console.log('discounting');
        
    }
    function discountCartingWeb() {
        const tiny = document.createElement('div');
        tiny.classList.add('innercontainer');

        const picture = document.createElement('img');
        picture.src = discountStorage[0];

        const name = document.createElement('div');
        name.classList.add('name');
        name.innerHTML = discountStorage[1];


        const price = document.createElement('p');
        price.classList.add('price');

        const amount = document.createElement('p')
        amount.classList.add('amount');

        const amountInner = document.createElement('span');
        amountInner.innerHTML = discountStorage[2];
        amountInner.classList.add('amountInner')

        const dollar = document.createElement('span');
        dollar.innerHTML = '$';
        
        const button = document.createElement('button');
        button.classList.add('remove');
        button.innerHTML = 'remove';
        button.addEventListener('click', (e)=>{
            console.log(e);
            check();
            e.path[2].style.display = 'none';
            let val = e.path[2].querySelector('.price').querySelector('.amount').innerHTML;
            box = box - val;
            let tempCapsule =  document.querySelector('.totalNumber').innerHTML;
            let tempCapsuleMobile =  document.querySelector('.totalNumberMobile').innerHTML;
            
            document.querySelector('.totalNumber').innerHTML = parseInt(tempCapsule) -1;
            document.querySelector('.dot').innerHTML = parseInt(tempCapsule) -1;
            if (box > 0) {
                document.querySelector('.totalAmount').innerHTML = `$${box}`;
            } else {
                document.querySelector('.totalAmount').innerHTML = `$0`;
                box = 0;
                capsule = [];
            }
            document.querySelector('.totalNumberMobile').innerHTML = parseInt(tempCapsuleMobile) -1;
            document.querySelector('.dot').innerHTML = parseInt(tempCapsuleMobile) -1;
            document.querySelector('.totalAmountMobile').innerHTML = `$${box}`;
        })

        const vault = tiny;
        
        amount.appendChild(dollar);
        amount.appendChild(amountInner);
        price.appendChild(amount);
        price.appendChild(button);
        tiny.appendChild(picture);
        tiny.appendChild(name);
        tiny.appendChild(price);


        cartList.appendChild(vault);
    }
    discountCartingAndroid();
    discountCartingWeb();
    add();
    check();
    
})



let arry;

let tempOne;
let tempTwo;
let tempThree;
// let pryOne;
// let pryTwo;
// let pryThree;

let xhr = new XMLHttpRequest

xhr.open("GET", "https://mikey-phoenix.github.io/semester_one_storage/discount.json", true);
xhr.send(null)

const discountFunc = (callback)=>{
    xhr.addEventListener('readystatechange', ()=>{
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(null , "https://mikey-phoenix.github.io/semester_one_storage/discount.json");
            } else {
                callback('something went wrong' , null);
            }
        } else {
            
        }
    })
}

function display(err, res) {
    if (err) {
        
    } else {
        console.log(res);
        fetch(res).then(res => res.json()).then(data =>{
            console.log(data);
            tempOne = data[0];
            tempTwo = data[1];
            tempThree = data[2];
            console.log(tempOne, tempTwo, tempThree);
            
        })
    }
}
discountFunc(display);

function discountShow(array) {
    realDisplay(array)
}

function realDisplay(array) {
    discountContainer.style.display = 'flex';
    viewon.src = array[0].image;
    viewon.alt = array[0].name;

    Discountname.innerHTML = array[0].name;

    oldPrice.innerHTML = array[0].oldPrice;

    newPrice.innerHTML = array[0].newPrice;

    discountInfo.innerHTML = array[0].about;


    optionOne.src = array[0].image;
    castone.style.backgroundColor = '#f6c7637a';
    casttwo.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
    castthree.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
    optionTwo.src = array[1].image;
    optionThree.src = array[2].image;
}

discountExit.addEventListener('click', ()=>{
    discountContainer.style.display = 'none'
})


function swapCheck(other) {
    if (optionOne.src == tempOne[0].image || optionOne.src == tempOne[1] || optionOne.src == tempOne[2].image) {
        swap(other, tempOne)
    } else if (optionOne.src == tempTwo[0].image || optionOne.src == tempTwo[1].image || optionOne.src == tempTwo[2].image) {
        swap(other, tempTwo)
    } else if (optionOne.src == tempThree[0].image || optionOne.src == tempThree[1].image || optionOne.src == tempThree[2].image) {
        swap(other, tempThree)
    }
}


function swap(other, array) {
    arry = array
    console.log(array);
    array[1]
    console.log(other);
    viewon.src = array[other].image;
    viewon.alt = array[other].name;

    Discountname.innerHTML = array[other].name;

    oldPrice.innerHTML = array[other].oldPrice;

    newPrice.innerHTML = array[other].newPrice;

    discountInfo.innerHTML = array[other].about;


    if (other == 0) {
        castone.style.cssText = 'background-color: #f6c7637a;';
        casttwo.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
        castthree.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
    } else if (other == 1) {
        casttwo.style.cssText = 'background-color: #f6c7637a;';
        castthree.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
        castone.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
    } else {
        castthree.style.cssText = 'background-color: #f6c7637a;';
        casttwo.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
        castone.style.cssText = 'background-color: rgba(0, 0, 0, 0.199);';
    }
}
