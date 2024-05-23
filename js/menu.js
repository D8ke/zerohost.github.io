var h1 = document.querySelector('.score');
var btn = document.getElementById('btn');
var counter = 0;

btn.addEventListener('click', function(){
    counter++;
    h1.innerHTML = '<img src="/images/photo_2024-04-21_09-43-24.jpg" alt=""> ' + counter;
    
    // Изменяем стиль кнопки на время анимации
    btn.style.transform = 'scale(1.05)';
    setTimeout(function() {
        btn.style.transform = 'scale(1)';
    }, 100); 
});


const getClicks = async () => {
    try {
        const response = await fetch('http://api.example.com/clicks');
        const data = await response.json();
        
        return data.clicks;
    } catch(error) {
        console.error('Error fetching data: ', error);
        return 0; // Если возникла ошибка при получении данных, возвращаем 0
    }
}

const updateScore = async () => {
    const score = await getClicks();
    
    h1.innerHTML = `<img src="/images/photo_2024-04-21_09-43-24.jpg" alt=""> ${score}`;
}

const button = document.getElementById('btn');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('http://api.example.com/click', { method: 'POST' });
        if (response.ok) {
            updateScore();
            button.classList.add('enlarged');
            setTimeout(() => {
                button.classList.remove('enlarged');
            }, 500); // увеличить время анимации если не подходит 200
        } else {
            console.error('Error updating score');
        }
    } catch(error) {
        console.error('Error updating score: ', error);
    }
});

updateScore(); // Первичный вызов для отображения текущего счета при загрузке страницы

