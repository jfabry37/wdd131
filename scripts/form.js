

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];



const year = document.querySelector('#currentYear');
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const short = document.getElementById("lastModified").innerHTML = document.lastModified;


const select = document.getElementById("pName");
    function productList() {
    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

productList();
