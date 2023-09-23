let size;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    size = prompt('Enter your board size by choosing a number between 1 and 50');
    if (size >= 1 && size <= 50) {
        createGrid();
    } else {
        alert('Please enter a valid size between 1 and 50. Press button to refresh and enter a new number.');
    }
});


function createGrid(size, size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    container.style.gridTemplateRows = 'repeat(${size}, 1fr)';

    for (let i = 0; i < (size * size); i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = '20px';
            grid.style.height = '20px';
            grid.style['background-color'] = 'red';
            grid.style.border = 'solid';
            grid.display = 'grid';

            container.appendChild(grid);
            container.classList.add('box');

            grid.addEventListener('mouseover', () => {
                grid.style['background-color'] = 'blue';
            });

        }
    }
createGrid(16, 16);
