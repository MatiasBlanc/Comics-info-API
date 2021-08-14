const API_URL = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=5f31ad52ccd8b08d766afcbb3503e032&hash=c9a824b4aca58463255beb56becbe9a7';
const container = document.getElementById('cardRow');
const cardTemplate = document.getElementById('cardTemplate').content;

fetch(`${API_URL}`)
.then(res => res.json())
.then(json => {
    console.log(json.data)
    for (let counter = 3; counter < json.data.count; counter++) {
        const clone = cardTemplate.cloneNode(true);
        const imgLink = json.data.results[counter].images[0].path;
        const imgExtension = json.data.results[counter].images[0].extension;
        // Elements
        const name = clone.querySelector(".comic--name");
        const description = clone.querySelector(".comic--description");
        const img = clone.querySelector(".comic--img");
        const price = clone.querySelector(".comic--price");
        const link = clone.querySelector(".comic--link");
        // assign value
        description.textContent = json.data.results[counter].description;
        name.textContent = json.data.results[counter].title
        img.src = `${imgLink}.${imgExtension}`
        link.href = json.data.results[counter].urls[0].url
        price.textContent = `$${json.data.results[counter].prices[0].price}`;
        container.appendChild(clone);
    }
})
