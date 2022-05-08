
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');



let url = "https://api.thecatapi.com/v1/breeds?limit=10"
let container = document.querySelector(".catContainer")
container.innerText= "hello"

const fetchSongs = async () => {
    const response = await fetch(url)
    const cats = await response.json();
 
     catDisplayer(cats) 
}

fetchSongs()




function catDisplayer(cats){


cats.forEach(cat => {
    console.log(cat, cat.name)
  
    let card = document.createElement('div')
    let title = document.createElement("h1")
    let image = document.createElement('img')
    image.src= cat.image.url
    title.innerText = cat.name
console.log(image)
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(image)
})

}
// class Circle {

//     constructor(radius) {
//         this.radius = radius

//         this.location = {
//             x: 1,
//             y: 2
//         },
//             this.draw = function () {
//                 console.log("hi", this)
//             }
//     }
// }

// const reg = new Circle(2)

// function adder() {

//     this.radius++

// }

// console.log(reg)
// adder.call(reg)
// console.log(reg)

// // 

});