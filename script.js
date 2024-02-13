document.getElementById('no-button').addEventListener('mouseover', function() {
    const container = this.parentElement;
    const containerRect = container.getBoundingClientRect();

    const buttonWidth = this.offsetWidth;
    const buttonHeight = this.offsetHeight;

    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;

    const newX = Math.random() * maxX + containerRect.left;
    const newY = Math.random() * maxY + containerRect.top;

    this.style.position = "absolute";
    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
});
