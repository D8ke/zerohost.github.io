var h1 = document.querySelector('.score');
var btn = document.getElementById('btn');
var counter = 0;

btn.addEventListener('click', function(){
    counter++;
    h1.innerHTML = '<img src="/images/photo_2024-04-21_09-43-24.jpg" alt=""> ' + counter;
});

const button = document.getElementById('btn');
        
button.addEventListener('click', function() {
    button.classList.add('enlarged');

    setTimeout(() => {
        button.classList.remove('enlarged');
    }, 200);
});

