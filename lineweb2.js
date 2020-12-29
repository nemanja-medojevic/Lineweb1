var prosiri = document.getElementById('prosiri');
var viseTeksta = document.getElementById('vise-teksta');
var skupi = document.getElementById('skupi');

prosiri.style.cursor = 'pointer';
skupi.style.cursor = 'pointer';
viseTeksta.style.display = 'none';
prosiri.addEventListener('click', function() {
    viseTeksta.style.display = 'inline';
    prosiri.style.display = 'none';
});

skupi.addEventListener('click', function () {
    viseTeksta.style.display = 'none';
    prosiri.style.display = 'inline';
});

////PRIKAZ NAVIGACIJE 

var nav = document.getElementById('nav');
function prikaziNavigaciju () {
    nav.classList.toggle('nav-active');
}