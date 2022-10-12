
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









window.addEventListener('loading', ()=>{
    console.log('loading');
})





const largeList = document.querySelector('.productWindowContainer');

const list = document.querySelector('.productWindow');


const exit = document.querySelector('.productWindow').querySelector('.exit');


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
    for (let i = 0; i < capsule.length; i++) {                    
        if (capsule[i].style.display !== 'none') {
            console.log(capsule[i-1]);
            box = box + parseFloat(capsule[i].querySelector('.amountInner').innerHTML);
            document.querySelector('.totalNumber').innerHTML = capsule.length;
            document.querySelector('.dot').innerHTML = document.querySelector('.totalNumber').innerHTML;
            document.querySelector('.totalAmount').innerHTML = `$${box}`;
            document.querySelector('.totalNumberMobile').innerHTML = document.querySelector('.totalNumber').innerHTML;
            document.querySelector('.totalAmountMobile').innerHTML = `$${box}`;
        } else {box = box}

    }
}

function success(html) {
    let success = document.querySelector('.success');
    let successMessage = document.querySelector('.successMessage');
    let cancel = document.querySelector('.cancel');
    success.style.display = 'block';
    successMessage.innerHTML = html;
    cancel.addEventListener('click', ()=>{
        success.style.display = 'none';
    })
}

let req = new XMLHttpRequest();

const asyncFunc = (callback)=>{
    req.addEventListener('readystatechange', ()=>{
        if (req.readyState == 4) {
            if (req.status == 200) {
                callback(null , "https://mikey-phoenix.github.io/semester_one_storage/overall-semester-one-storage-file.json");
            } else {
                callback('something went wrong' , null);
            }
        } else {
            
        }
    })
}

req.open("GET", "https://mikey-phoenix.github.io/semester_one_storage/overall-semester-one-storage-file.json", true);
req.send(null);



const handleData = (err , res)=>{
    if (err) {
        success('There was an error in connecting to the server');
    } else {
        fetch(res).then(res => res.json()).then(data =>{
            console.log(data);
            data.forEach((dat) => {
            
                pry = document.createElement('div')
                pry.classList.add('gridItem');
                if (data.indexOf(dat) < 18) {
                    pry.classList.add('see')
                    pry.classList.add('watches');
                    console.log('watches');
                    if (data.indexOf(dat) <= 2) {
                        pry.classList.add('Regular');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } else if (data.indexOf(dat) <= 5 && data.indexOf(dat) >= 2){
                        pry.classList.add('Luxury');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } else if (data.indexOf(dat) <= 11 && data.indexOf(dat) >= 5) {
                        pry.classList.add('Vintage');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } else if (data.indexOf(dat) <= 14 && data.indexOf(dat) >= 11) {
                        pry.classList.add('Digital');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } else if (data.indexOf(dat) <= 17 && data.indexOf(dat) >= 14) {
                        pry.classList.add('Smart');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } if(data.indexOf(dat) == 9 || data.indexOf(dat) == 10 || data.indexOf(dat) == 11){
                        pry.classList.add('Pocket');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } if (data.indexOf(dat) == 2 ||data.indexOf(dat) == 7 ||data.indexOf(dat) == 8 ||data.indexOf(dat) == 9 ||data.indexOf(dat) == 11 ||data.indexOf(dat) == 12) {
                        pry.classList.add('Used');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } if (data.indexOf(dat) == 1 || data.indexOf(dat) == 4 || data.indexOf(dat) == 6 || data.indexOf(dat) == 8 || data.indexOf(dat) == 9 || data.indexOf(dat) == 10 || data.indexOf(dat) == 11 || data.indexOf(dat) == 12 || data.indexOf(dat) == 13 || data.indexOf(dat) == 14 || data.indexOf(dat) == 16 || data.indexOf(dat) == 17 || data.indexOf(dat) == 18) {
                        pry.classList.add('Men');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    } if (data.indexOf(dat) == 0 || data.indexOf(dat) == 2 || data.indexOf(dat) == 4 || data.indexOf(dat) == 6 || data.indexOf(dat) == 14 || data.indexOf(dat) == 15 || data.indexOf(dat) == 16 || data.indexOf(dat) == 17) {
                        pry.classList.add('Women');
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);
                    }
                } else {
                    pry.classList.add('see');
                    pry.classList.add('clocks');
                    console.log('clocks');
                    if (data.indexOf(dat) <= 20 && data.indexOf(dat) >= 18) {
                        pry.classList.add('Vintage')
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry);  
                    } else if (data.indexOf(dat) <= 23 && data.indexOf(dat) >= 21) {
                        pry.classList.add('Luxury')
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry); 
                    } else if (data.indexOf(dat) <= 26 && data.indexOf(dat) >= 23) {
                        pry.classList.add('Regular')
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry); 
                    } else if (data.indexOf(dat) >= 27) {
                        pry.classList.add('Digital')
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry); 
                    } if (data.indexOf(dat) == 25 || data.indexOf(dat) == 28 || data.indexOf(dat) == 29) {
                        pry.classList.add('Used')
                        pry.innerHTML = 
                        `
                            <div class="image-holder" onclick="info(${data.indexOf(dat)})">
                                <div class="cast" style="background-image: url(${dat.image}); background-size: cover; background-position: center; background-repeat: no-repeat;" >
                                </div>
                            </div>
                            <div class="other">
                                <p class="name" onclick="info(${data.indexOf(dat)})">${dat.name}</p>
                                <div class="inner-other">
                                <p class="info">$${dat.newPrice}</p>
                                <p class="cart"><abbr title="Add to cart"><i class="fa-solid fa-cart-shopping addToCart" onclick="added(${data.indexOf(dat)})"></i></abbr></p>
                                </div>
                            </div>
                        `
                        
                        document.querySelector('.gridContainer').appendChild(pry); 
                    }
                                        
                }
            });
            let cartbtns = Array.from(document.querySelectorAll('.addToCart'));
            for (const btn of cartbtns) {
                btn.addEventListener('click', (e)=>{
                    console.log(e);
                    // let cartbtn = btn;
                    e.target.style.backgroundColor = 'white'
                    e.target.style.color = '#f6c763'
                    setTimeout(() => {
                        e.target.style.backgroundColor = 'saddlebrown';
                        e.target.style.color = 'white';
                    }, 2000);
                })
            }
            ontab(0, 'gridItem')
        })
    }
}

asyncFunc(handleData);

function clicked(btn) {
    let cartbtn = btn;
    cartbtn.backgroundColor = 'white'
    cartbtn.color = '#f6c763'
    setTimeout(() => {
        cartbtn.background = '#f6c763';
        cartbtn.color = 'white';
    }, 2000);
}

function info(index) {
    console.log(document.querySelector('.image-holder'));
    fetch("https://mikey-phoenix.github.io/semester_one_storage/overall-semester-one-storage-file.json")
    .then(res => res.json())
    .then(data =>{
        let temp = data[index];
        // console.log(temp);
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

let addToCart = Array.from(document.querySelectorAll('.addToCart'))
addToCart.forEach((add)=>{
    add.addEventListener('click', (e)=>{
        e.target.style.cssText = "color: saddlebrown; background-color: #f6c763"
        setTimeout(() => {
            e.target.style.cssText = "color: white; background-color: saddlebrown"
        }, 2000);
    })
})


function added(index) {
    fetch("https://mikey-phoenix.github.io/semester_one_storage/overall-semester-one-storage-file.json")
    .then(res => res.json())
    .then(data =>{
        let temp = data[index];
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
            amount.classList.add('amount')

            const amountInner = document.createElement('span');
            amountInner.innerHTML = temps.newPrice;
            amountInner.classList.add('amountInner')

            const dollar = document.createElement('span');
            dollar.innerHTML = '$';
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';

            const vault = tiny;
    
            amount.appendChild(dollar);
            amount.appendChild(amountInner);
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
            amount.classList.add('amount')

            const amountInner = document.createElement('span');
            amountInner.innerHTML = temps.newPrice;
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
    
            amount.appendChild(dollar);
            amount.appendChild(amountInner);
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
            amount.classList.add('amount')

            const amountInner = document.createElement('span');
            amountInner.innerHTML = temps.newPrice;
            amountInner.classList.add('amountInner')

            const dollar = document.createElement('span');
            dollar.innerHTML = '$';
    
            const button = document.createElement('button');
            button.classList.add('remove');
            button.innerHTML = 'remove';
            button.addEventListener('click', (e)=>{
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
    
            amount.appendChild(dollar);
            amount.appendChild(amountInner);
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
const tabs = Array.from(document.getElementsByClassName('productTabs'));
let divisions = Array.from(document.getElementsByClassName('menuItem'));
let menuObjects = document.getElementsByClassName('menuItem');
let MobilemenuObjects = document.querySelector('.mobileMenu');
let totalMenu = menuObjects.length;
console.log(divisions);

function ontab(a, c) {
    const grids = Array.from(document.getElementsByClassName('gridItem'));
    const totalGrid = grids.length;
    console.log(grids);
    gridContainer.style.display = 'grid';
    requestbtn.style.display = 'none';
    repairForm.style.display = 'none';
    MobilemenuObjects.style.display = 'block'
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
            // grids[i].classList.remove('see');
            for (const division of divisions) {
                division.addEventListener("click", (a)=>{
                        switch (a.target.innerText) {
                            case 'Vintage':
                                if (grids[i].classList.contains('Vintage')) {
                                    grids[i].classList.remove('see');
                                } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Luxury':
                                    if (grids[i].classList.contains('Luxury')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Regular':
                                    if (grids[i].classList.contains('Regular')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Pocket Watches':
                                    if (grids[i].classList.contains('Pocket')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Digital':
                                    if (grids[i].classList.contains('Digital')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Smart Watches':
                                    if (grids[i].classList.contains('Smart')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'Fairly Used':
                                    if (grids[i].classList.contains('Used')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'For Men':
                                    if (grids[i].classList.contains('Men')) {
                                        grids[i].classList.remove('see');
                                    } else {
                                    grids[i].classList.add('see');
                                }
                                break;
                                case 'For Women':
                                    if (grids[i].classList.contains('Women')) {
                                        grids[i].classList.remove('see');
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
    MobilemenuObjects.style.display = 'none';
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

document.querySelector('.feedbackSubmit').addEventListener('click', (event)=>{
    event.preventDefault();
    sendEmail();
})

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "bajomichael06@gmail.com",
//         Password : "D280F3B9026F39C2C40008AB910CA1F3981B",
//         To : 'bcd9fb46-d12d-4a6c-adac-155e5ef0a162',
//         From : document.querySelector('.feedbackform').querySelector('.email').value,
//         Subject : "New contact form",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
// D280F3B9026F39C2C40008AB910CA1F3981B
function sendEmail() {
    Email.send({
        SecureToken : "72666d88-96e0-45ec-9144-b3e72de1ea71",
        To : 'bajomichael06@gmail.com',
        From : `${document.querySelector('.feedbackform').querySelector('.email').value}`,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
        );
        submit()
}
// bcd9fb46-d12d-4a6c-adac-155e5ef0a162
// 125a1584-f049-4445-bc77-5c7b4510840c
    // f49f56ac-8ddf-4f1f-b6cf-46234c3c50f1

    const paymentOptions = Array.from(document.querySelectorAll('.paymentOption'));

    console.log(paymentOptions);
    for (const option of paymentOptions) {
        option.addEventListener('click', ()=>{
            success('This feature is coming soon')
        })
        
    }

const checkoutbtn = document.querySelector('.checkoutbtn');
checkoutbtn.addEventListener('click', ()=>{
    success('Thank you!')
    setTimeout(() => {
        success.style.display = 'none'
    }, 5000);
});

// const feedbackbtn = document.querySelector('.submit');
function submit() {
    success('Thank you for leaving a comment');
    setTimeout(() => {
        success.style.display = 'none'
    }, 5000);
};

requestbtn.addEventListener('click', ()=>{
    success('One of our agents will reach you shortly.')
    setTimeout(() => {
        success.style.display = 'none'
    }, 5000);
});

document.querySelector('.viewMore').addEventListener('click', ()=>{
    const success = document.createElement('div');
    success.style.cssText = 'z-index: 100000';
    success.style.backgroundColor = ' rgba(255, 255, 255, 0.8)';
    success.style.width = '100vw';
    success.style.height = '100vh';
    success.style.position = 'fixed';
    success.style.top = '0%';
    success.style.left = '0%';

    const successInner = document.createElement('div');
    successInner.style.cssText = 'width: 80vw; height: 80vh; display: flex; flex-direction: column; align-items: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); overflow-y: scroll';
    
    const cancel = document.createElement('i');
    cancel.style.cssText = 'position: absolute; top: 4%; right: 5%; font-size: 50px; cursor: pointer; background-color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center;';
    cancel.addEventListener('click', ()=>{
        success.style.display = 'none';
    });
    const cancelInner = document.createElement('p');
    cancelInner.innerHTML = '&times';
    cancelInner.style.cssText = 'color: #f6c763;'
    
    const successMessageOne = document.createElement('div');
    successMessageOne.style.fontSize = '20px';
    successMessageOne.style.textAlign = 'center';
    successMessageOne.style.borderRadius = '15px';
    successMessageOne.style.marginBottom = '50px';
    successMessageOne.style.backgroundColor = 'saddlebrown';
    successMessageOne.style.width = '100%';
    successMessageOne.classList.add('feedbackItem');
    successMessageOne.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageTwo = document.createElement('div');
    successMessageTwo.style.fontSize = '20px';
    successMessageTwo.style.textAlign = 'center';
    successMessageTwo.style.borderRadius = '15px';
    successMessageTwo.style.marginBottom = '50px';
    successMessageTwo.style.backgroundColor = 'saddlebrown';
    successMessageTwo.style.width = '100%';
    successMessageTwo.classList.add('feedbackItem');
    successMessageTwo.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageThree = document.createElement('div');
    successMessageThree.style.fontSize = '20px';
    successMessageThree.style.textAlign = 'center';
    successMessageThree.style.borderRadius = '15px';
    successMessageThree.style.marginBottom = '50px';
    successMessageThree.style.backgroundColor = 'saddlebrown';
    successMessageThree.style.width = '100%';
    successMessageThree.classList.add('feedbackItem');
    successMessageThree.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageFour = document.createElement('div');
    successMessageFour.style.fontSize = '20px';
    successMessageFour.style.textAlign = 'center';
    successMessageFour.style.borderRadius = '15px';
    successMessageFour.style.marginBottom = '50px';
    successMessageFour.style.backgroundColor = 'saddlebrown';
    successMessageFour.style.width = '100%';
    successMessageFour.classList.add('feedbackItem');
    successMessageFour.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageFive = document.createElement('div');
    successMessageFive.style.fontSize = '20px';
    successMessageFive.style.textAlign = 'center';
    successMessageFive.style.borderRadius = '15px';
    successMessageFive.style.marginBottom = '50px';
    successMessageFive.style.backgroundColor = 'saddlebrown';
    successMessageFive.style.width = '100%';
    successMessageFive.classList.add('feedbackItem');
    successMessageFive.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';
    

    successInner.appendChild(successMessageOne);
    successInner.appendChild(successMessageTwo);
    successInner.appendChild(successMessageThree);
    successInner.appendChild(successMessageFour);
    successInner.appendChild(successMessageFive);
    cancel.appendChild(cancelInner);
    success.appendChild(cancel);
    success.appendChild(successInner);
    document.body.prepend(success);
})

document.querySelector('.viewMoreMobile').addEventListener('click', ()=>{
    const success = document.createElement('div');
    success.style.cssText = 'z-index: 100000';
    success.style.backgroundColor = ' rgba(255, 255, 255, 0.8)';
    success.style.width = '100vw';
    success.style.height = '100vh';
    success.style.position = 'fixed';
    success.style.top = '0%';
    success.style.left = '0%';

    const successInner = document.createElement('div');
    successInner.style.cssText = 'width: 80vw; height: 80vh; display: flex; flex-direction: column; align-items: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); overflow-y: scroll';
    
    const cancel = document.createElement('i');
    cancel.style.cssText = 'position: absolute; top: 4%; right: 5%; font-size: 50px; cursor: pointer; background-color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; z-index: 300;';
    cancel.addEventListener('click', ()=>{
        success.style.display = 'none';
    });
    const cancelInner = document.createElement('p');
    cancelInner.innerHTML = '&times';
    cancelInner.style.cssText = 'color: #f6c763;'
    
    const successMessageOne = document.createElement('div');
    successMessageOne.style.fontSize = '20px';
    successMessageOne.style.textAlign = 'center';
    successMessageOne.style.borderRadius = '15px';
    successMessageOne.style.marginBottom = '50px';
    successMessageOne.style.backgroundColor = 'saddlebrown';
    successMessageOne.style.width = '100%';
    successMessageOne.classList.add('feedbackItem');
    successMessageOne.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageTwo = document.createElement('div');
    successMessageTwo.style.fontSize = '20px';
    successMessageTwo.style.textAlign = 'center';
    successMessageTwo.style.borderRadius = '15px';
    successMessageTwo.style.marginBottom = '50px';
    successMessageTwo.style.backgroundColor = 'saddlebrown';
    successMessageTwo.style.width = '100%';
    successMessageTwo.classList.add('feedbackItem');
    successMessageTwo.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageThree = document.createElement('div');
    successMessageThree.style.fontSize = '20px';
    successMessageThree.style.textAlign = 'center';
    successMessageThree.style.borderRadius = '15px';
    successMessageThree.style.marginBottom = '50px';
    successMessageThree.style.backgroundColor = 'saddlebrown';
    successMessageThree.style.width = '100%';
    successMessageThree.classList.add('feedbackItem');
    successMessageThree.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageFour = document.createElement('div');
    successMessageFour.style.fontSize = '20px';
    successMessageFour.style.textAlign = 'center';
    successMessageFour.style.borderRadius = '15px';
    successMessageFour.style.marginBottom = '50px';
    successMessageFour.style.backgroundColor = 'saddlebrown';
    successMessageFour.style.width = '100%';
    successMessageFour.classList.add('feedbackItem');
    successMessageFour.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';

    const successMessageFive = document.createElement('div');
    successMessageFive.style.fontSize = '20px';
    successMessageFive.style.textAlign = 'center';
    successMessageFive.style.borderRadius = '15px';
    successMessageFive.style.marginBottom = '50px';
    successMessageFive.style.backgroundColor = 'saddlebrown';
    successMessageFive.style.width = '100%';
    successMessageFive.classList.add('feedbackItem');
    successMessageFive.innerHTML = '<h4 class="name">Mary Jones</h4><p class="words">The guy here was great! Repaired watch and chain in a timely manner and had a great offer for a strap replacement. All the prices were reasonable and service was very courteous and friendly.</p>';
    

    successInner.appendChild(successMessageOne);
    successInner.appendChild(successMessageTwo);
    successInner.appendChild(successMessageThree);
    successInner.appendChild(successMessageFour);
    successInner.appendChild(successMessageFive);
    cancel.appendChild(cancelInner);
    success.appendChild(cancel);
    success.appendChild(successInner);
    document.body.prepend(success);
})