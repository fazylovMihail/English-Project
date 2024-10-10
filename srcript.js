class Product{
    constructor(
        name,
        info,
        img
    ){
        this.name = name
        this.info = info
        this.img = img
    }
    DrowCard(){
        return `<div class="content-btn" onclick="OpenProductWindow()">
                    <p class="content-btn-text">${this.name}</p>
                    <img src="${this.img}" alt="">
                </div>`
    }
    DrowWindow(){
        return `<div class="product-name-text">${this.name}</div>
                <div class="vertical-band"></div>
                <div class="product-info">
                    ${this.info}
                </div>`
    }
}

// let productNameText = document.querySelector('.product-name-text')
// let productInfo = document.querySelector('.product-info')
let productConteiner = document.querySelector('.product-conteiner')
let contentBtnConteiner = document.querySelector('.content-btn-conteiner')

let persons = []

let person1 = new Product(
    'Шакил О’Нил',
    'dfdfddfdfdfdfdf',
    'img/Прямоугольник 4.png'
)
persons.push(person1)
let person2 = new Product(
    'Майкл Джордан',
    'fjhdfjghfjghfj',
    'img/Прямоугольник 5.png'
)
persons.push(person2)
let person3 = new Product(
    'Леброн Джеймс',
    'khjlkhjlnkhklj',
    'img/Прямоугольник 6.png'
)
persons.push(person3)
let person4 = new Product(
    'Стефан Карри',
    'cnvbcnvbcnvnc',
    'img/Прямоугольник 7.png'
)
persons.push(person4)

console.log(persons)

for(let i=0;i<persons.length;i++){
    contentBtnConteiner.innerHTML += persons[i].DrowCard()
}

let contentBtn = document.querySelectorAll('.content-btn')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let productWindow = document.querySelector('.product-group')

for(let i=0;i<contentBtn.length;i++){
    contentBtn[i].addEventListener('click',()=>{
        productConteiner.innerHTML = persons[i].DrowWindow()
    })
}

function OpenProductWindow(){
    main.style.display = 'none'
    footer.style.display = 'none'
    productWindow.style.display = 'flex'
}
function CloseProductWindow(){
    main.style.display = 'block'
    footer.style.display = 'flex'
    productWindow.style.display = 'none'
}
