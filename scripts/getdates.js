const year = document.querySelector('#currentYear');
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const short = document.getElementById("lastModified").innerHTML = document.lastModified;