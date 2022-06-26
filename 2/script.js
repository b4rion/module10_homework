const btn  = document.querySelector('.btn');


const screenWidth = window.screen.width,
      screenHeight = window.screen.height;

btn.addEventListener('click', () => {
    alert(`Ширина экрана - ${screenWidth}, Высота экрана - ${screenHeight}`)
});
      

