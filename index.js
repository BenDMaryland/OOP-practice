
window.addEventListener('DOMContentLoaded', () => {
    let url = "https://api.thecatapi.com/v1/breeds"
    let container = document.querySelector(".catContainer")
    let search = document.querySelector(".search")
    let searchBar = document.querySelector(".searchBar")
    let allCats
    let filteredCats=[]
    search.addEventListener("keypress", searchHandler)

    fetch(url)
        .then(r => r.json())
        .then(data => allCats = data)

    function searchHandler(e) {
        searchBar.innerHTML = ``
      filteredCats = allCats.filter(cat =>  cat.name.includes(e.target.value)  )
 filteredCats.map(cat=>{
     let desc = document.createElement('h3')
     searchBar.appendChild(desc).innerText=cat.name

 })
      

    }


    class Cat {
        constructor(cat,location) {
            this.cat = cat
            this.makeACat = () => {
                let card = document.createElement('div')
                let title = document.createElement("h1")
                let image = document.createElement('img')
                let desc = document.createElement('h3')
                container.appendChild(card).className = location
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
        return await cats
    }
    fetchSongs()

    function catDisplayer(cats) {
        cats.forEach(cat => {
            if (cat.image) {
                if (cat.image.url) {

                    const catCard = new Cat(cat,"card")
                    catCard.makeACat()
                }
            }
        })

    }

});