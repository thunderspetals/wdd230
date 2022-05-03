let day = new Date();
let year = day.getFullYear();

document.querySelector("#year").textContent = year;

let updated = new Date(document.lastModified);

document.querySelector("#lastUpdate").textContent = updated;