
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;



const temperature = getElementById('temp').textContent;

function Windchill() {
    let total = 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * (temperature * (windSpeed ** 0.16)));
    return total;
}