let isDark = false;

const buttonDark = document.getElementById('button-dark');
const description = document.getElementById('description');

buttonDark.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    if(!isDark){
        buttonDark.innerHTML = '<i class="fa-solid fa-sun fa-sm"></i>';
        description.innerText = 'Modo noche';
        isDark = true;
    } else {
        buttonDark.innerHTML = '<i class="fa-solid fa-moon fa-lg"></i>';
        description.innerText = 'Modo día';
        isDark = false;
    }
})