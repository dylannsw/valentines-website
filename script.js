document.getElementById('no-button').addEventListener('mouseover', function() {
    const maxDistance = 100; // Maximum distance from the center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Randomize a position near the center
    const randomX = (Math.random() - 0.5) * 2 * maxDistance;
    const randomY = (Math.random() - 0.5) * 2 * maxDistance;

    // Calculate new position ensuring the button stays within the viewport
    const newX = Math.max(0, Math.min(centerX + randomX, window.innerWidth - this.offsetWidth));
    const newY = Math.max(0, Math.min(centerY + randomY, window.innerHeight - this.offsetHeight));

    this.style.position = "absolute";
    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
});
