const buttonNo = document.querySelector('#buttonNo');
const buttonYes = document.querySelector('#buttonYes');
console.log(buttonNo);
buttonNo.addEventListener('mouseover', () => {
    buttonNo.style.position = 'absolute';
    const yRandom = Math.random() * window.innerHeight - buttonNo.offsetHeight;
    const xRandom = Math.random() * window.innerWidth - buttonNo.offsetWidth;
    console.log({yRandom, xRandom});
    buttonNo.style.top = (yRandom >= 0 ? yRandom : 0) + 'px';
    buttonNo.style.left = (xRandom >= 0 ? xRandom : 0) + 'px';
});

buttonYes.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por el contrato',
        html: 'Haz click <a href="https://api.whatsapp.com/send/?phone=51927848384&text&type=phone_number&app_absent=0" target="_blank">aquí</a> para terminar de contactarme: '
    });
})
