//year with Java
const d = new Date();
const year = d.getFullYear();
document.querySelector('#year').textContent = year;

//last updated date
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = document.lastModified;