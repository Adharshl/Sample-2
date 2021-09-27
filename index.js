function navOpen() {
    document.getElementById('nav').style.display = 'block';
    document.querySelector('.menu-open').style.display = 'none';
    document.querySelector('.menu-close').style.display = 'block';

}

function navClose() {
    document.getElementById('nav').style.display = 'none';
    document.querySelector('.menu-open').style.display = 'block';
    document.querySelector('.menu-close').style.display = 'none';
}