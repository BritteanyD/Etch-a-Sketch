const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    prompt('Enter your board size by choosing a number between 1 and 50');
});

const container = document.getElementById('container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
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