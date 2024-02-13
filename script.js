document.getElementById('no-button').addEventListener('mouseover', function() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxDistance = 100; // Maximum distance from the center

    const newX = centerX + (Math.random() - 0.5) * 2 * maxDistance;
    const newY = centerY + (Math.random() - 0.5) * 2 * maxDistance;

    this.style.position = "absolute";
    this.style.left = `${Math.max(0, Math.min(newX, window.innerWidth - this.offsetWidth))}px`;
    this.style.top = `${Math.max(0, Math.min(newY, window.innerHeight - this.offsetHeight))}px`;
});
