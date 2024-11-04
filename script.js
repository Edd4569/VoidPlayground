const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 48; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

gridContainer.style.gridTemplateColumns = 'repeat(8, 50px)';
gridContainer.style.gridTemplateRows = 'repeat(6, 50px)';

const images = document.querySelectorAll('.draggable');
images.forEach(image => {
    image.addEventListener('dragstart', handleDragStart);
});

function handleDragStart(e) {
    if (!e.target.id) {
        e.target.id = 'image-' + Math.random().toString(36).substring(7);
    }
    console.log('e.target.id',e.target.id);
    e.dataTransfer.setData('imageId', e.target.id);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    gridItem.addEventListener('drop', handleDrop);
});

function handleDrop(e) {
    e.preventDefault();
    const imageId = e.dataTransfer.getData('imageId');
    const draggedImage = document.getElementById(imageId);

    console.log("imageId:",imageId);
    console.log("draggedImage:",draggedImage);
    if (!draggedImage) {
        console.error('Dragged image not found!');
        return;
    }

    if (!e.target.hasChildNodes()) {
        if (!draggedImage.classList.contains('on-grid')) {
            let newImage = draggedImage.cloneNode(true);
            newImage.classList.add('on-grid');
            newImage.setAttribute('draggable', true);
            newImage.removeAttribute('id');
            newImage.addEventListener('click', rotateImage);
            newImage.addEventListener('dragstart', handleDragStart);
            newImage.style.width = '50px';
            newImage.style.height = '50px';
            newImage.setAttribute('data-rotation', 0);
            e.target.appendChild(newImage);
        } else {
            draggedImage.parentNode.removeChild(draggedImage);
            e.target.appendChild(draggedImage);
        }
    }
}

function rotateImage(e) {
    let currentRotation = e.target.getAttribute('data-rotation') || 0;
    currentRotation = (parseInt(currentRotation) + 90) % 360;
    e.target.style.transform = `rotate(${currentRotation}deg)`;
    e.target.setAttribute('data-rotation', currentRotation);
}

document.getElementById('clearBtn').addEventListener('click', () => {
    gridItems.forEach(gridItem => {
        if (gridItem.hasChildNodes()) {
            gridItem.innerHTML = '';
        }
    });
});

document.getElementById('loadBtn').addEventListener('click', () => {
    const loadInput = document.getElementById('loadArray').value;
    let inputArray = JSON.parse(loadInput);

    const imageMap = {
        "L": "vw-piece-move-lshapesprite.png",
        "I": "vw-piece-move-straightsprite.png",
        "T": "vw-piece-move-tshapesprite.png",
        "IF": "vw-piece-static-straightsprite.png",
        "EF": "vw-piece-static-endcapsprite.png",
        "XF": "vw-piece-static-crosssprite.png",
        "START": "vw-piece-start.png",
        "END": "vw-piece-endsprite.png"
    };

    gridItems.forEach(gridItem => {
        gridItem.innerHTML = '';
    });

    inputArray.forEach((item, index) => {
        let [pieceType, rotationFactor] = item;
        const imgSrc = imageMap[pieceType];

        if (imgSrc) {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.classList.add('on-grid');
            imgElement.setAttribute('draggable', true);
            imgElement.style.width = '50px';
            imgElement.style.height = '50px';
            imgElement.addEventListener('click', rotateImage);
            imgElement.addEventListener('dragstart', handleDragStart);

            const rotationAngle = rotationFactor * 90;
            imgElement.style.transform = `rotate(${rotationAngle}deg)`;
            imgElement.setAttribute('data-rotation', rotationAngle);

            gridItems[index].appendChild(imgElement);
        }
    });
});

document.getElementById('predefinedArraysDropdown').addEventListener('change', () => {
    const selectedArrayName = document.getElementById('predefinedArraysDropdown').value;

    if (selectedArrayName && predefinedArrays[selectedArrayName]) {
        const selectedArray = predefinedArrays[selectedArrayName];
        
        gridItems.forEach(gridItem => {
            gridItem.innerHTML = '';
        });

        selectedArray.forEach((item, index) => {
            let [pieceType, rotationFactor] = item;
            const imgSrc = imageMap[pieceType];

            if (imgSrc) {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgElement.classList.add('on-grid');
                imgElement.setAttribute('draggable', true);
                imgElement.style.width = '50px';
                imgElement.style.height = '50px';
                imgElement.addEventListener('click', rotateImage);
                imgElement.addEventListener('dragstart', handleDragStart);

                const rotationAngle = rotationFactor * 90;
                imgElement.style.transform = `rotate(${rotationAngle}deg)`;
                imgElement.setAttribute('data-rotation', rotationAngle);

                gridItems[index].appendChild(imgElement);
            }
        });
    } else {
        alert('Please select a valid array from the dropdown.');
    }
});
