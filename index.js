
document.getElementById('btn').addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/ArturoHuber55.github.io-main/Geolicalizacion.html';
});


document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        alert('Has hecho clic en una caja');
    });
})

