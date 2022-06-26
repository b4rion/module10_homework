const btn = document.querySelector('.btn');

const arr = document.querySelectorAll('path');

btn.addEventListener('click', () => {
    arr.forEach((i) => {
        i.classList.toggle('active');
    })
})