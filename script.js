document.getElementById('no-button').addEventListener('mouseover', function() {
    const title = document.getElementById('title');
    const titleRect = title.getBoundingClientRect();

    const maxX = titleRect.right - this.offsetWidth;
    const maxY = titleRect.bottom - this.offsetHeight;

    const newX = titleRect.left + Math.random() * (maxX - titleRect.left);
    const newY = titleRect.top + Math.random() * (maxY - titleRect.top);

    this.style.position = "absolute";
    this.style.left = `${Math.max(titleRect.left, newX)}px`;
    this.style.top = `${Math.max(titleRect.top, newY)}px`;
});
