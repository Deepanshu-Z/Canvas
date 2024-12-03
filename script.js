let i = 0
while (i < (16*16)) {
    const divs = document.createElement('div');
    divs.classList.add('grid');
    const container = document.querySelector('.container');
    container.appendChild(divs);
    i++;
}