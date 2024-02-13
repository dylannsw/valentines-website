document.getElementById('no-button').addEventListener('mouseover', function() {
    const title = document.getElementById('title');
    const titleRect = title.getBoundingClientRect();
    const buffer = 50; // Additional space around the title for button movement

    const minX = Math.max(0, titleRect.left - buffer);
    const maxX = Math.min(window.innerWidth, titleRect.right + buffer) - this.offsetWidth;
    const minY = Math.max(0, titleRect.top - buffer);
    const maxY = Math.min(window.innerHeight, titleRect.bottom + buffer) - this.offsetHeight;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    this.style.position = "absolute";
    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
});
