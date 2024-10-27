document.getElementById('register').addEventListener('click', function() {
    document.querySelector('.form-box').classList.add('flipped');
});

document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.form-box').classList.remove('flipped');
});
