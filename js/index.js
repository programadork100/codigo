const images = document.querySelectorAll('.img')
const contenedorImage = document.querySelector('.contenedor-img')
const imagecontenedor = document.querySelector('.img-show')
const copy = document.querySelector('.copy')
const closeModal = document.querySelector('.bx.bx-x')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage)=>{
    contenedorImage.classList.toggle('move');
    imagecontenedor.classList.toggle('show');
    imagecontenedor.src = srcImage;
    copy.innerHTML = altImage;
}

closeModal.addEventListener('click', ()=>{
    contenedorImage.classList.toggle('move');
    imagecontenedor.classList.toggle('show');
})



