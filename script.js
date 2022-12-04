

//creating click button actio
document.querySelector("#search").addEventListener("click", () => {
    // storing the value from my input
    let value = document.querySelector(".search-box").value
    // // fetch URL
    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            //counting data using for loop 
            for (let i = 0; i < data.length; i++) {
                //creating new elements 
                let movies_section = document.querySelector(".movies-section")
                let div2 = document.createElement("div")
                let div3 = document.createElement("div")
                let img = document.createElement("img")
                let h3 = document.createElement("h3")
                //assigning their classes 
                div2.classList.add("movie-card")
                div3.classList.add("movie-image")
                h3.classList.add("movie-heading")
                //giving the value from data object store
                h3.innerText = [data[i].show.name]
                img.src = [data[i].show.image.medium]
                //appending child elements their parent elements
                movies_section.appendChild(div2)
                div2.appendChild(div3)
                div2.appendChild(h3)
                div3.appendChild(img)
            }


        })
        //indecating after not found 
        .catch(() => {
            console.log("sorry we didn't found")

        })

})

