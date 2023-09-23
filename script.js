let size;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    size = prompt('Enter your board size by choosing a number between 1 and 50');
    if (size >= 1 && size <= 50) {
        createGrid(size);
    } else {
        alert('Please enter a valid size between 1 and 50');
    }
})

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    container.style.gridTemplateRows = 'repeat(${size}, 1fr)';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = '20px';
            grid.style.height = '20px';
            grid.style['background-color'] = 'red';
            grid.style.border = 'solid';
            grid.style.display = 'flex';

            container.appendChild(grid);

            grid.addEventListener('mouseover', () => {
                grid.style['background-color'] = 'blue';
            });

        }
    }
}
createGrid(16);
