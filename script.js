const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    prompt('Enter your board size by choosing a number between 1 and 50');
});

const container = document.getElementById('container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');

        container.appendChild(grid);
    }
}
