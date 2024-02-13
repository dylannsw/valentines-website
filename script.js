document.getElementById('no-button').addEventListener('mouseover', function() {
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - this.clientWidth;
    const maxY = container.clientHeight - this.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
});