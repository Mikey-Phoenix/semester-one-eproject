
const photo = ['../images/carousel/Clock-Images-Screen-Download.jpg', '../images/carousel/retro-alarm-clock-standing-white-table-clear-home-background-morning-time-concept_91014-5638-3.png', '../images/carousel/Watch+service.jpg'];
let temp = 0;
const bgCarousel = document.querySelector('#visible');
const timeinterval_a = setInterval(() => {
    bgCarousel.style.backgroundPosition = 'center';
    bgCarousel.style.backgroundSize = '200%';
    bgCarousel.style.background = ` url(${photo[temp]})`;
    if (temp ==(photo.length)) {
        bgCarousel.style.background = ` url('../images/carousel/akram-huseyn-f3nGngsnp3A-unsplash2.jpg')`;
        temp = 0;
    } else {
        temp++;
    }
}, 10000);
timeinterval_a;


const pic = ['../images/product/30-offclock-three.jpg', '../images/product/30-offclock-two.jpg'];
let sub = 0;
const bgCarousel30 = document.querySelector('#thirty');
const timeinterval_30 = setInterval(() => {
    bgCarousel30.style.background = ` url(${pic[sub]})`;
    bgCarousel30.style.backgroundPosition = 'center';
    bgCarousel30.style.backgroundSize = 'cover';
    if (sub ==(pic.length)) {
        bgCarousel30.style.background = ` url('../images/product/30-offclock-one.png')`;
        bgCarousel30.style.backgroundPosition = 'center';
        bgCarousel30.style.backgroundSize = 'cover';
        sub = 0;
    } else {
        sub++;
    }
}, 20000);
timeinterval_30;

const image = ['../images/product/20-offwatch-two.png', '../images/product/20-offwatch-three.jpg'];
let pry = 0;
const bgCarousel20 = document.querySelector('#twenty');
const timeinterval_20 = setInterval(() => {
    bgCarousel20.style.background = ` url(${image[pry]})`;
    bgCarousel20.style.backgroundPosition = 'center';
    bgCarousel20.style.backgroundSize = 'cover';
    if (pry ==(pic.length)) {
        bgCarousel20.style.background = ` url('../images/product/20-offwatch.png')`;
        bgCarousel20.style.backgroundPosition = 'center';
        bgCarousel20.style.backgroundSize = 'cover';
        pry = 0;
    } else {
        pry++;
    }
}, 25000);
timeinterval_20;

const img = ['../images/product/10-offsmart-two.jpg', '../images/product/10-offsmart-three.jpg'];
let forNow = 0;
const bgCarousel10 = document.querySelector('#ten');
const timeinterval_10 = setInterval(() => {
    bgCarousel10.style.background = ` url(${img[forNow]})`;
    bgCarousel10.style.backgroundPosition = 'center';
    bgCarousel10.style.backgroundSize = 'cover';
    if (forNow ==(img.length)) {
        bgCarousel10.style.background = ` url('../images/product/10-offsmart.png')`;
        bgCarousel10.style.backgroundPosition = 'center';
        bgCarousel10.style.backgroundSize = 'cover';
        forNow = 0;
    } else {
        forNow++;
    }
}, 30000);
timeinterval_10;









const largeList = document.querySelector('.productWindowContainer');

const list = document.querySelector('.productWindow');


const exit = document.querySelector('.exit');


exit.addEventListener('click', ()=>{
    document.querySelector('.productWindowContainer').style.display = 'none';
    list.removeChild(list.querySelector('.tiny'));
    console.log('i work');
})



const cartList = document.querySelector('.web');
const cartListMobile = document.querySelector('.semiMobile');

let capsule = [];
let box = 0;


function postlap(temps) {
    const tiny = document.createElement('div');
    tiny.classList.add('innercontainer');

    const picture = document.createElement('img');
    picture.src = temps.image;

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = temps.name;


    const price = document.createElement('p');
    price.classList.add('price');

    const amount = document.createElement('p')
    amount.innerHTML ='$' + temps.newPrice;
    amount.classList.add('amount')

    const button = document.createElement('button');
    button.classList.add('remove');
    button.innerHTML = 'remove';


    price.appendChild(amount);
    price.appendChild(button);
    tiny.appendChild(picture);
    tiny.appendChild(name);
    tiny.appendChild(price);

    cartListMobile.appendChild(tiny);
}
function prelap(temps) {
    const tiny = document.createElement('div');
    tiny.classList.add('innercontainer');

    const picture = document.createElement('img');
    picture.src = temps.image;

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = temps.name;


    const price = document.createElement('p');
    price.classList.add('price');

    const amount = document.createElement('p')
    amount.innerHTML ='$' + temps.newPrice;
    amount.classList.add('amount')

    const button = document.createElement('button');
    button.classList.add('remove');
    button.innerHTML = 'remove';


    price.appendChild(amount)
    price.appendChild(button);
    tiny.appendChild(picture);
    tiny.appendChild(name);
    tiny.appendChild(price);

    cartList.appendChild(tiny);
}
function onlap(temps) {
    const tiny = document.createElement('div');
    tiny.classList.add('innercontainer');

    const picture = document.createElement('img');
    picture.src = temps.image;

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = temps.name;


    const price = document.createElement('p');
    price.classList.add('price');
    
    const amount = document.createElement('p')
    amount.innerHTML ='$' + temps.newPrice;
    amount.classList.add('amount');

    const button = document.createElement('button');
    button.classList.add('remove');
    button.innerHTML = 'remove';

    const vault = tiny;
    console.log(vault);


    price.appendChild(amount);
    price.appendChild(button);
    tiny.appendChild(picture);
    tiny.appendChild(name);
    tiny.appendChild(price);


    capsule.push(tiny);
    console.log(capsule);
}

const dot = document.querySelector('.dot');

function check() {
    console.log('check works');
    if (dot.innerHTML != 0) {
        dot.style.opacity = 1;
    } else {
        dot.style.opacity = 0;
    }
}
check();

function add() {
    box = 0;
    for (let i = 0; i <= capsule.length; i++) {                    
        if (capsule[i].style.display != 'none') {
            console.log(capsule[i-1]);
            box = box + parseFloat(capsule[i].querySelector('.amount').innerHTML);
            document.querySelector('.totalNumber').innerHTML = capsule.length;
            document.querySelector('.dot').innerHTML = document.querySelector('.totalNumber').innerHTML;
            document.querySelector('.totalAmount').innerHTML = `$${box}`;
            document.querySelector('.totalNumberMobile').innerHTML = document.querySelector('.totalNumber').innerHTML;
            document.querySelector('.totalAmountMobile').innerHTML = `$${box}`;
        } else {box = box}

    }
}


function info(url) {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let temp = data;
        localStorage.setItem('store1', JSON.stringify(temp));
        var store1 = JSON.parse(localStorage.getItem('store1'));
        console.log(store1);

        function loop(temps) {

            const tiny = document.createElement('div');
            tiny.classList.add('tiny');

            const picture = document.createElement('img');
            picture.src = temps.image;

            const detailStuff = document.createElement('div');
            detailStuff.classList.add('detailsStuff');

            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;

            const details = document.createElement('p')
            details.classList.add('detai');
            details.innerHTML = temps.about;    
            const price = document.createElement('p');
            price.innerHTML ='$' + temps.newPrice;
            price.classList.add('price');


            detailStuff.appendChild(name);
            detailStuff.appendChild(price);
            detailStuff.appendChild(details);
            tiny.appendChild(picture);
            tiny.appendChild(detailStuff);
            list.appendChild(tiny);

            largeList.style.display = 'block'; 
        }

        store1.forEach( loop(temp))
                
    })
}



function added(url) {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let temp = data;
        localStorage.setItem('store2', JSON.stringify(temp));
        var store2 = JSON.parse(localStorage.getItem('store2'));
        console.log(store2);
        function lappee(temps) {
    
            const tiny = document.createElement('div');
            tiny.classList.add('innercontainer');
    
            const picture = document.createElement('img');
            picture.src = temps.image;
    
            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;
    
    
            const price = document.createElement('p');
            price.classList.add('price');

            const amount = document.createElement('p')
            amount.innerHTML = temps.newPrice;
            amount.classList.add('amount')
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';

            const vault = tiny;
    
            price.appendChild(amount);
            price.appendChild(button);
            tiny.appendChild(picture);
            tiny.appendChild(name);
            tiny.appendChild(price);
 

            capsule.push(tiny);
 
        }
        function lapper(temps) {
    
            const tiny = document.createElement('div');
            tiny.classList.add('innercontainer');
    
            const picture = document.createElement('img');
            picture.src = temps.image;
    
            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;
    
    
            const price = document.createElement('p');
            price.classList.add('price');

            const amount = document.createElement('p')
            amount.innerHTML = temps.newPrice;
            amount.classList.add('amount')
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';
            button.addEventListener('click', (e)=>{
                console.log(e);
                check();
                e.path[2].style.display = 'none';
                let val = e.path[2].querySelector('.price').querySelector('.amount').innerHTML;
                // console.log(val);
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
            // console.log(vault);
    
            price.appendChild(amount);
            price.appendChild(button);
            tiny.appendChild(picture);
            tiny.appendChild(name);
            tiny.appendChild(price);

            cartList.appendChild(vault);
            // cartListMobile.appendChild(tiny); 

            // capsule.push(tiny);
            // console.log(capsule);
            
 
        }
        function lap(temps) {
    
            const tiny = document.createElement('div');
            tiny.classList.add('innercontainer');
    
            const picture = document.createElement('img');
            picture.src = temps.image;
    
            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;
    
    
            const price = document.createElement('p');
            price.classList.add('price');
            
            const amount = document.createElement('p')
            amount.innerHTML = temps.newPrice;
            amount.classList.add('amount')
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';
            button.addEventListener('click', (e)=>{
                console.log(e);
                e.path[2].style.display = 'none';
                let val = e.path[2].querySelector('.price').querySelector('.amount').innerHTML;
                // console.log(val);
                box = box - val;
                let tempCapsule =  document.querySelector('.totalNumber').innerHTML;
                let tempCapsuleMobile =  document.querySelector('.totalNumberMobile').innerHTML;
                document.querySelector('.totalNumber').innerHTML = parseInt(tempCapsule) -1;
                if (box > 0) {
                    document.querySelector('.totalAmount').innerHTML = `$${box}`;
                } else {
                    document.querySelector('.totalAmount').innerHTML = `$0`;
                    box = 0;
                    capsule = [];
                }
                document.querySelector('.totalNumberMobile').innerHTML = parseInt(tempCapsuleMobile) -1;
                document.querySelector('.totalAmountMobile').innerHTML = `$${box}`;
            })

            const vault = tiny;
            // console.log(vault);
    
            price.appendChild(amount);
            price.appendChild(button);
            tiny.appendChild(picture);
            tiny.appendChild(name);
            tiny.appendChild(price);

            // cartList.appendChild(vault);
            cartListMobile.appendChild(tiny); 
 
        }
        
    
        store2.forEach(check(), lapper(temp), lap(temp), lappee(temp), add());
    })

                
}


function addedClocks(url) {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let temp = data;
        localStorage.setItem('store2', JSON.stringify(temp));
        var store2 = JSON.parse(localStorage.getItem('store2'));
        console.log(store2);
        function lappee(temps) {
    
            const tiny = document.createElement('div');
            tiny.classList.add('innercontainer');
    
            const picture = document.createElement('img');
            picture.src = temps.image;
    
            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;
    
    
            const price = document.createElement('p');
            price.classList.add('price');

            const amount = document.createElement('p')
            amount.innerHTML = temps.newPrice;
            amount.classList.add('amount')
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';

            const vault = tiny;
    
            price.appendChild(amount);
            price.appendChild(button);
            tiny.appendChild(picture);
            tiny.appendChild(name);
            tiny.appendChild(price);


            capsule.push(tiny);
 
        }
        function lapper(temps) {
    
            const tiny = document.createElement('div');
            tiny.classList.add('innercontainer');
    
            const picture = document.createElement('img');
            picture.src = temps.image;
    
            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;
    
    
            const price = document.createElement('p');
            price.classList.add('price');

            const amount = document.createElement('p')
            amount.innerHTML = temps.newPrice;
            amount.classList.add('amount')
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';
            button.addEventListener('click', (e)=>{
                console.log(e);
                check();
                e.path[2].style.display = 'none';
                let val = e.path[2].querySelector('.price').querySelector('.amount').innerHTML;
                // console.log(val);
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
            // console.log(vault);
    
            price.appendChild(amount);
            price.appendChild(button);
            tiny.appendChild(picture);
            tiny.appendChild(name);
            tiny.appendChild(price);

            cartList.appendChild(vault);
            // cartListMobile.appendChild(tiny); 

            // capsule.push(tiny);
            // console.log(capsule);
            
 
        }
        function lap(temps) {
    
            const tiny = document.createElement('div');
            tiny.classList.add('innercontainer');
    
            const picture = document.createElement('img');
            picture.src = temps.image;
    
            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = temps.name;
    
    
            const price = document.createElement('p');
            price.classList.add('price');
            
            const amount = document.createElement('p')
            amount.innerHTML = temps.newPrice;
            amount.classList.add('amount')
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';
            button.addEventListener('click', (e)=>{
                console.log(e);
                e.path[2].style.display = 'none';
                let val = e.path[2].querySelector('.price').querySelector('.amount').innerHTML;
                // console.log(val);
                box = box - val;
                let tempCapsule =  document.querySelector('.totalNumber').innerHTML;
                let tempCapsuleMobile =  document.querySelector('.totalNumberMobile').innerHTML;
                document.querySelector('.totalNumber').innerHTML = parseInt(tempCapsule) -1;
                if (box > 0) {
                    document.querySelector('.totalAmount').innerHTML = `$${box}`;
                } else {
                    document.querySelector('.totalAmount').innerHTML = `$0`;
                    box = 0;
                    capsule = [];
                }
                document.querySelector('.totalNumberMobile').innerHTML = parseInt(tempCapsuleMobile) -1;
                document.querySelector('.totalAmountMobile').innerHTML = `$${box}`;
            })

            const vault = tiny;
            // console.log(vault);
    
            price.appendChild(amount);
            price.appendChild(button);
            tiny.appendChild(picture);
            tiny.appendChild(name);
            tiny.appendChild(price);

            // cartList.appendChild(vault);
            cartListMobile.appendChild(tiny); 
 
        }
        
    
        store2.forEach(check(), lapper(temp), lap(temp), lappee(temp), add());
    })

                
}

const repairForm = document.querySelector('.repair-form');
const requestbtn = document.querySelector('.request');
const gridContainer = document.querySelector('.gridContainer')
const tabs = document.getElementsByClassName('productTabs');
const grids = document.getElementsByClassName('gridItem');
const totalGrid = grids.length;
let divisions = Array.from(document.getElementsByClassName('menuItem'));
let menuObjects = document.getElementsByClassName('menuItem');
let totalMenu = menuObjects.length;
console.log(divisions);

function ontab(a, c) {
    gridContainer.style.display = 'grid';
    requestbtn.style.display = 'none';
    repairForm.style.display = 'none';
    for (const menu of menuObjects) {
        menu.style.display = 'flex';
    }
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    tabs[a].classList.add('active');
    for (const grid of grids) {
        grid.classList.remove('see');
    }
    console.log(c);
    for (let i = 0; i < totalGrid; i++) {
        if (grids[i].classList.contains(c)) {
            grids[i].style.display = 'block';
            for (const division of divisions) {
                division.addEventListener("click", (a)=>{
                        switch (a.target.innerText) {
                            case 'Vintage':
                                if (grids[i].classList.contains('Vintage')) {
                                    console.log('bleck');
                                    grids[i].classList.remove('see');
                                } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Luxury':
                                    if (grids[i].classList.contains('Luxury')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Regular':
                                    if (grids[i].classList.contains('Regular')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Pocket Watches':
                                    if (grids[i].classList.contains('Pocket')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Digital':
                                    if (grids[i].classList.contains('Digital')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Smart Watches':
                                    if (grids[i].classList.contains('Smart')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Fairly Used':
                                    if (grids[i].classList.contains('Used')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'For Men':
                                    if (grids[i].classList.contains('Men')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'For Women':
                                    if (grids[i].classList.contains('Women')) {
                                        grids[i].classList.remove('see');
                                        console.log('bleck');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                        
                            default:
                                break;
                        }
                })
            }
           
        }else{
            grids[i].style.display = 'none';
        }
    }
}
ontab(0, 'gridItem')
function showform() {
    for (const tab of tabs) {
        tab.classList.remove('active')
    }
    document.getElementsByClassName('productTabs').item(3).classList.add('active');
    gridContainer.style.display = 'none';
    repairForm.style.display = 'block';
    requestbtn.style.display = 'block';
    for (const menu of menuObjects) {
        menu.style.display = 'none';
    }
}
function hide() {
    for (const menu of menuObjects) {
        menu.classList.remove('onmenu')
    }
}

function activecolor(text) {
    for(menu of menuObjects){
        menu.classList.remove('onmenu')
    }
    for (let x = 0; x < totalMenu; x++) {
        if (menuObjects[x].classList.contains(text)) {
            menuObjects[x].classList.add('onmenu');
        }
    }
}


const checkoutbtn = document.querySelector('.checkoutbtn');
checkoutbtn.addEventListener('click', ()=>{
    const success = document.createElement('div');
    success.style.cssText = 'z-index: 100000';
    success.style.backgroundColor = ' rgba(255, 255, 255, 0.8)';
    success.style.width = '100vw';
    success.style.height = '100vh';
    success.style.position = 'fixed';
    success.style.top = '0%';
    success.style.left = '0%';

    const successInner = document.createElement('div')
    successInner.style.cssText = 'border-radius: 5px; border: 1px solid saddlebrown; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40vw; height: 40vh; background-color: white; padding: 20px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center';

    const cancel = document.createElement('i');
    cancel.style.cssText = 'position: absolute; top: 5%; right: 5%; color: saddlebrown; font-size: 50px; cursor: pointer'
    cancel.innerHTML = '&times';
    cancel.addEventListener('click', ()=>{
        success.style.display = 'none';
    })
    
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '50px';
    successMessage.style.color = 'saddlebrown';
    successMessage.innerHTML = 'Thank you!';
    successMessage.classList.add('successMessage');
    
    const cancelbutton = document.createElement('div');
    cancelbutton.style.cssText = 'text-align: center; width: 80%; padding: 10px; bottom: 0%; border-radius: 10px; cursor: pointer';
    cancelbutton.style.fontSize = '30px';
    cancelbutton.style.color = 'white';
    cancelbutton.style.backgroundColor = 'rgb(175, 88, 25)';
    cancelbutton.innerHTML = 'close';
    cancelbutton.classList.add('cancelbutton');
    cancelbutton.addEventListener('click', ()=>{
        success.style.display = 'none';
    })

    successInner.appendChild(successMessage);
    successInner.appendChild(cancel);
    successInner.appendChild(cancelbutton);
    success.appendChild(successInner);
    document.body.prepend(success);
    setTimeout(() => {
        success.style.display = 'none'
    }, 5000);
});

const feedbackbtn = document.querySelector('.submit');
feedbackbtn.addEventListener('click', ()=>{
    const success = document.createElement('div');
    success.style.cssText = 'z-index: 100000';
    success.style.backgroundColor = ' rgba(255, 255, 255, 0.8)';
    success.style.width = '100vw';
    success.style.height = '100vh';
    success.style.position = 'fixed';
    success.style.top = '0%';
    success.style.left = '0%';

    const successInner = document.createElement('div')
    successInner.style.cssText = 'border-radius: 5px; border: 1px solid saddlebrown; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40vw; height: 40vh; background-color: white; padding: 20px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center';

    const cancel = document.createElement('i');
    cancel.style.cssText = 'position: absolute; top: -4%; right: 5%; color: saddlebrown; font-size: 50px; cursor: pointer'
    cancel.innerHTML = '&times';
    cancel.addEventListener('click', ()=>{
        success.style.display = 'none';
    })
    
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '30px';
    successMessage.style.color = 'saddlebrown';
    successMessage.innerHTML = 'Thank you for leaving a comment';
    successMessage.classList.add('successMessage');
    
    const cancelbutton = document.createElement('div');
    cancelbutton.style.cssText = 'text-align: center; width: 80%; padding: 10px; bottom: 0%; border-radius: 10px; cursor: pointer';
    cancelbutton.style.fontSize = '30px';
    cancelbutton.style.color = 'white';
    cancelbutton.style.backgroundColor = 'rgb(175, 88, 25)';
    cancelbutton.innerHTML = 'close';
    cancelbutton.classList.add('cancelbutton');
    cancelbutton.addEventListener('click', ()=>{
        success.style.display = 'none';
    })

    successInner.appendChild(successMessage);
    successInner.appendChild(cancel);
    successInner.appendChild(cancelbutton);
    success.appendChild(successInner);
    document.body.prepend(success);
    setTimeout(() => {
        success.style.display = 'none'
    }, 5000);
});

requestbtn.addEventListener('click', ()=>{
    const success = document.createElement('div');
    success.style.cssText = 'z-index: 100000';
    success.style.backgroundColor = ' rgba(255, 255, 255, 0.8)';
    success.style.width = '100vw';
    success.style.height = '100vh';
    success.style.position = 'fixed';
    success.style.top = '0%';
    success.style.left = '0%';

    const successInner = document.createElement('div')
    successInner.style.cssText = 'border-radius: 5px; border: 1px solid saddlebrown; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60vw; height: 40vh; background-color: white; padding: 20px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center';

    const cancel = document.createElement('i');
    cancel.style.cssText = 'position: absolute; top: -4%; right: 5%; color: saddlebrown; font-size: 50px; cursor: pointer'
    cancel.innerHTML = '&times';
    cancel.addEventListener('click', ()=>{
        success.style.display = 'none';
    })
    
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '30px';
    successMessage.style.color = 'saddlebrown';
    successMessage.innerHTML = 'One of our agents will reach you shortly.';
    successMessage.classList.add('successMessage');
    
    const cancelbutton = document.createElement('div');
    cancelbutton.style.cssText = 'text-align: center; width: 80%; padding: 10px; bottom: 0%; border-radius: 10px; cursor: pointer';
    cancelbutton.style.fontSize = '30px';
    cancelbutton.style.color = 'white';
    cancelbutton.style.backgroundColor = 'rgb(175, 88, 25)';
    cancelbutton.innerHTML = 'close';
    cancelbutton.classList.add('cancelbutton');
    cancelbutton.addEventListener('click', ()=>{
        success.style.display = 'none';
    })

    successInner.appendChild(successMessage);
    successInner.appendChild(cancel);
    successInner.appendChild(cancelbutton);
    success.appendChild(successInner);
    document.body.prepend(success);
    setTimeout(() => {
        success.style.display = 'none'
    }, 5000);
});