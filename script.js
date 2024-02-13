document.getElementById('no-button').addEventListener('mouseover', function() {
    const viewportWidth = window.innerWidth - this.offsetWidth;
    const viewportHeight = window.innerHeight - this.offsetHeight;

    const newX = Math.random() * viewportWidth;
    const newY = Math.random() * viewportHeight;

    this.style.position = "absolute";
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
});
