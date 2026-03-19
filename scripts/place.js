const year = document.querySelector('#currentYear');
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const short = document.getElementById("lastModified").innerHTML = document.lastModified;


const calculateWindChill = (temp, windSpeed) =>{
    return Math.round(
    35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))

)};

function displayWindChill(temp, windSpeed){
    if (temp <= 50 && windSpeed > 3){
        return calculateWindChill(temp, windSpeed);
    }
    else{
        return 'N/A';
    }
};
    
const temperature = 50;
const windSpeed = 5;
const windChill = displayWindChill(temperature, windSpeed);

document.getElementById('windChill').textContent = windChill + '°F';