document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('celebration-container').style.display = 'block';
});

document.getElementById('no-button').addEventListener('mouseover', function() {
    const container = document.querySelector('.container');
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
});
