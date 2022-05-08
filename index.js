
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    let url = "https://api.thecatapi.com/v1/breeds"
    let container = document.querySelector(".catContainer")
    class Cat {

        constructor(cat) {
            this.cat = cat

            this.makeACat = () => {
                console.log(this)
                let card = document.createElement('div')
                let title = document.createElement("h1")
                let image = document.createElement('img')
                let desc = document.createElement('h3')
                container.appendChild(card).className = "card"
                card.appendChild(title).innerText = this.cat.name
                card.appendChild(image).src = this.cat.image.url
                card.appendChild(desc).innerText = this.cat.description

            }

        }




    }




    const fetchSongs = async () => {
        const response = await fetch(url)
        const cats = await response.json();

        catDisplayer(cats)
    }

    fetchSongs()




    function catDisplayer(cats) {


        cats.forEach(cat => {
            if (cat.image) {
                const catCard = new Cat(cat)
                catCard.makeACat()
            }


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