// navbar
let search = document.getElementById('search');
let input= document.getElementById('input');
search.addEventListener('click', () =>  {
    if (input.style.display === 'block') {
        input.style.display = 'none';
    } else {
        input.style.display = 'block';
    }
})


// about counteruup
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$('.counter1').counterUp({
    delay: 10,
    time: 2000
});
$('.counter2').counterUp({
    delay: 10,
    time: 2000
});