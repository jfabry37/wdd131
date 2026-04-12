const year = document.querySelector('#currentYear');
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const short = document.getElementById("lastModified").innerHTML = document.lastModified;


const mainNav = document.querySelector('#siteNav');
const navButton = document.querySelector('#hamburger-menu');

navButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navButton.classList.toggle('open');
});



const plants = [
    {
        plantName: "Tomatoes",
        plantPlanting: "Start indoors 6-8 weeks before last frost, transplant after last frost",
        plantFrost: "Frost-sensitive",
        image: "images/tomatoes.webp"
    },
    {
        plantName: "Carrots",
        plantPlanting: "Direct sow 2-4 weeks before last frost",
        plantFrost: "Frost-tolerant",
        image: "images/carrot.webp"
    },
    {
        plantName: "Basil",
        plantPlanting: "Start indoors 6-8 weeks before last frost, transplant after last frost",
        plantFrost: "Frost-sensitive",
        image: "images/basil.webp"
    },
    {
        plantName: "Kale",
        plantPlanting: "Direct sow 4-6 weeks before last frost",
        plantFrost: "Frost-tolerant",
        image: "images/kale.webp"
    },
    {
        plantName: "Peppers",
        plantPlanting: "Start indoors 8-10 weeks before last frost, transplant after last frost",
        plantFrost: "Frost-sensitive",
        image: "images/peppers.webp"
    },
    {
        plantName: "Spinach",
        plantPlanting: "Direct sow 4-6 weeks before last frost",
        plantFrost: "Frost-tolerant",
        image: "images/spinach.webp"
    },

];

createPlantsCard(plants);



const coldButton = document.querySelector('.cold');
coldButton.addEventListener('click', () => {
    localStorage.setItem('filter', 'cold');
    createPlantsCard(plants.filter(plant => (plant.plantFrost === "Frost-tolerant")
        
));
});

const allButton = document.querySelector('.all');
allButton.addEventListener('click', () => {
    localStorage.setItem('filter', 'all');
    createPlantsCard(plants);
});

const warmButton = document.querySelector('.warm');
warmButton.addEventListener('click', () => {
    localStorage.setItem('filter', 'warm');
    createPlantsCard(plants.filter(plant => (plant.plantFrost === "Frost-sensitive")
    ));
});

function addLabelText(parent, labelText, value){
    const span = document.createElement("span");
    span.classList.add('label');
    span.textContent = labelText;
    const text = document.createTextNode(`${value}`);
    
    parent.append(span, text);

};



function createPlantsCard(filteredPlants){
    const container = document.querySelector('.plant-info');
    container.innerHTML = "";
    filteredPlants.forEach(plant => {
        if(!plant.plantName)return;
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let planting = document.createElement("p");
        let frost = document.createElement("p");
        let image = document.createElement("img");


        addLabelText(name, "Vegetable: ", plant.plantName);
        addLabelText(planting, "Planting Instructions: ", plant.plantPlanting);
        addLabelText(frost, "Frost Tolerance: ", plant.plantFrost);
        
        image.setAttribute("src", plant.image);
        image.setAttribute("alt", plant.plantName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "150");

        card.append(name, planting, frost, image);
        container.appendChild(card);
    
    });

}

