let i = 0
const h = 16;
while (i < (h*h)) {
    const rc = 660/h; 
    const divs = document.createElement('div');
    divs.classList.add('grids');
    divs.style.cssText = `height: ${rc}px; width :${rc}px`;
    const container = document.querySelector('.container');
    container.appendChild(divs);
    i++;
}
const grid = document.querySelectorAll('.grids');
grid.forEach(function(e) {
    e.addEventListener('', function() {
        e.style.backgroundColor = "black"; // Directly apply styles to the clicked element
    });
});