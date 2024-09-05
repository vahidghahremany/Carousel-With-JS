const images = [
    "./3398604.jpg", 
    "./3409297.jpg",   
    "./3415073.jpg",   
    "./5156047.jpg"    
];

const prev = document.querySelector(".btn-1");
const next = document.querySelector(".btn-2");
const imgElement = document.querySelector(".container img");
const indexDivs = document.querySelectorAll(".index");

let currentIndex = 0; 

const updateImage = () => {
    imgElement.src = images[currentIndex];


    indexDivs.forEach((indexDiv, index) => {
        indexDiv.style.width = (index === currentIndex) ? '16px' : '8px';
    });
};

const changeImage = (direction) => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateImage();
};

prev.addEventListener("click", () => changeImage(-1));
next.addEventListener("click", () => changeImage(1));

updateImage();