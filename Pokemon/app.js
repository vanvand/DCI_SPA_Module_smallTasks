// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {

    // create div with class "pokemon"
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    // create span element and add #count up
    const label = document.createElement('span');
    label.innerText = `#${i}`;

    // create image with dynamically generated image url
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    
    pokemon.appendChild(newImg); // add new image to div
    pokemon.appendChild(label); // add new span afterwards
    container.appendChild(pokemon) // add created div (with added image & label) to section with id "container"
    /*
    <div>
        <img>
            <span>#2</span>
        </img>
    </div>
    */
}
