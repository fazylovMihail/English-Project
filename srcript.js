class Product{
    constructor(
        nameR,      
        nameE,
        infoE,
        infoR,
        img
    ){
        this.nameR = nameR
        this.nameE = nameE
        this.infoE = infoE
        this.infoR = infoR
        this.img = img
    }
    DrowCard(){
        return `<div class="content-btn" onclick="OpenProductWindow()">
                    <p class="content-btn-text">${this.nameE}</p>
                    <img src="${this.img}" alt="">
                </div>`
    }
    DrowWindowE(){
        return `<div class="product-name-text">${this.nameE}</div>
                <div class="vertical-band"></div>
                <div class="product-info">
                    ${this.infoE}
                </div>`
    }
    DrowWindowR(){
        return `<div class="product-name-text">${this.nameR}</div>
                <div class="vertical-band"></div>
                <div class="product-info">
                    ${this.infoR}
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
    'Shaquille O Neal',
    'They say that real talent manifests itself in everything. People, admiring the game of Shaquille O Neal, often believe that he has been inseparable from the ball since childhood. In fact, his father served in the army, and the family moved often, so Shakil had almost no friends.<br>To attract the attention of his peers, he once hacked a fire alarm and was punished. After that, he switched to sports, but did not achieve success in any of the sports. Even his mother doubted his talent: "He was boring and incompetent." However, Shakil focused on basketball and started training in the surrounding areas.<br>After three years at Louisiana State University, he was selected number one in the 1992 draft by the Orlando Magic, where he became the "best NBA rookie" and signed a $40 million contract. He was later signed by the Los Angeles Lakers for $120 million.<br>Shakil showed other talents by recording a song with the band "Fu Schnickens" and releasing the album "Shak Diesel". Thanks to successful investments, his income is growing',
    'Говорят, что настоящий талант проявляется во всем. Люди, восхищаясь игрой Шакила О Нила, часто считают, что он с детства был неразлучен с мячом. На самом деле его отец служил в армии, и семья часто переезжала, поэтому у Шакила почти не было друзей.<br>Чтобы привлечь внимание сверстников, он однажды взломал пожарную сигнализацию и был наказан. После этого он переключился на спорт, но не добивался успеха ни в одном из видов. Даже мать сомневалась в его таланте: «Он был скучным и бездарным». Тем не менее, Шакил сосредоточился на баскетболе и начал тренироваться в соседних районах.<br>После трех курсов в Университете Луизиана Стэйт его выбрали первым номером на драфте 1992 года клубом "Орландо Мэджик", где он стал "лучшим новичком НБА" и подписал контракт на 40 миллионов долларов. Позже его подписали "Лос-Анджелес Лэйкерз" за 120 миллионов долларов.<br>Шакил проявил и другие таланты, записав песню с группой "Фу Шниккенс" и выпустив альбом "Шак Дизель". Благодаря удачным инвестициям его доходы продолжали расти.',
    'img/Прямоугольник 4.png'
)
persons.push(person1)
let person2 = new Product(
    'Майкл Джордан',
    'Michael Jordan',
    'In progress',
    'В прогрессе',
    'img/Прямоугольник 5.png'
)
persons.push(person2)
let person3 = new Product(
    'Леброн Джеймс',
    'Lebron James',
    '<ul><li>James Lebron (1984) is a basketball player, born on December 30, 1984 in Akron, Ohio. He is most famous as the young star of the Cleveland Cavaliers. </li><li>James LeBron is known as the star quarterback of the Cleveland Tigers of the National Basketball Association. James was a high schoul phenomenon. He made a quick leap from being on the high schoul team to playing for the NBA. At the same time, the athlete signed a $90 million deal with Phil Knight of Nike (athletic shoe manufacturers). </li></ul><ul><li>Four-time champion </li><li>Four-time most valuable player of the finals </li><li>Four-time regular season MVP </li><li>He was named to the NBA All—Star team 19 times, 13 of which were in the first </li></ul><ul><li>Maintaining good physical shape</li><li>Restoration of the body</li><li>Smart investments</li></ul>',
    '<ul><li>Джеймс Леброн (1984) - баскетболист, родился 30 декабря 1984 года в Акроне, штат Огайо. Он наиболее известен как молодая звезда "Кливленд Кавальерс".</li><li>Джеймс Леброн известен как звездный квотербек "Кливленд Тайгерс" Национальной баскетбольной ассоциации. Джеймс был феноменальным игроком высшей школы. Он быстро перешел из команды высшей школы в НБА. В то же время спортсмен подписал контракт на 90 миллионов долларов с Филом Найтом из Nike (производитель спортивной обуви).</li></ul><ul><li>Четырехкратный чемпион</li><li>Четырехкратный самый ценный игрок финала</li><li>Четырехкратный MVP регулярного чемпионата</li><li>Он 19 раз включался в состав команды всех звезд НБА, 13 из которых были в первом составе.</li></ul><ul><li>Поддержание хорошей физической формы</li><li>Восстановление организма</li><li>Разумные инвестиции</li></ul>',
    'img/Прямоугольник 6.png'
)
persons.push(person3)
let person4 = new Product(
    'Стефан Карри',
    'Stephen Curry',
    'In progress',
    'В прогрессе',
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

let languageBtn = document.querySelector('.language-btn')
let languageContent = ['English','Русский']
let languageTrue=0
let objCount = null

function LanguageChanges(){
    languageTrue++

    if(languageTrue >= languageContent.length){
        languageTrue=0
    }
    if(languageTrue == 0){
        languageBtn.innerHTML = languageContent[languageTrue]
        productConteiner.innerHTML = persons[objCount].DrowWindowE()
    }
    else if(languageTrue == 1){
        languageBtn.innerHTML = languageContent[languageTrue]
        productConteiner.innerHTML = persons[objCount].DrowWindowR()
    }

    consule.log(languageTrue)
}

for(let i=0;i<contentBtn.length;i++){
    contentBtn[i].addEventListener('click',()=>{
        if(languageTrue == 0){
        objCount = i
            productConteiner.innerHTML = persons[i].DrowWindowE()
        }
        if(languageTrue == 1){
        objCount = i
            productConteiner.innerHTML = persons[i].DrowWindowR()
        }
    })
}
// if(languageTrue == 1){
//     for(let i=0;i<contentBtn.length;i++){
//         contentBtn[i].addEventListener('click',()=>{

//         })
//     }
// }