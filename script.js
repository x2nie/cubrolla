const cube = document.querySelector('.cube');
const scene = document.querySelector('.scene');

const gridSize = 50; // Ukuran kubus dan grid isometrik
const step = 1; // Langkah pergerakan dalam jumlah sel grid

let posX = 0; // Posisi kubus di grid
let posY = 0;
let angleX = 0; // Sudut rotasi kubus
let angleY = 0;

function updateCubeTransform() {
    const x = posX * gridSize;
    const y = posY * gridSize;

    // Perhitungan posisi dalam koordinat isometrik
    const isometricX = x - y;
    const isometricY = (x + y) / 2;

    // cube.style.transform = `translate(${isometricX}px, ${isometricY}px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    cube.style.transform = `translate(${x}px, ${y}px) rotateX(${angleX}deg) rotateY(${angleY}deg) `;
}

function rollCube(axis, direction) {
    if (axis === 'x') {
        angleX += 90 * direction *-1;
        // if (angleX % 360 === 0) {
            posY += direction * step; // Perpindahan vertikal berdasarkan sumbu X
        // }
    } else if (axis === 'y') {
        angleY += 90 * direction *-1;
        // if (angleY % 360 === 0) {
            posX += direction * step; // Perpindahan horizontal berdasarkan sumbu Y
        // }
    }

    // Update transform untuk posisi baru
    updateCubeTransform();
}

document.addEventListener('keydown', (event) => {
    event.stopPropagation()
    event.preventDefault()
    switch (event.key) {
        case 'ArrowUp':
            rollCube('x', -1);
            break;
        case 'ArrowDown':
            rollCube('x', 1);
            break;

        case 'ArrowLeft':
            rollCube('y', -1);
            break;
        case 'ArrowRight':
            rollCube('y', 1);
            break;
        default:
            return;
    }
});
