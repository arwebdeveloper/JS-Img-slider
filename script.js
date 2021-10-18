let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let images = document.querySelectorAll('#img-container img');
// console.log(images);
let totalImages = images.length;
let index = 0;

nextButton.addEventListener('click',() => {
    // console.log('nextButton clicked')
    if (index === totalImages - 1) {
        index = 0;
    }
    else {
        index += 1;
    }
    // console.log(index);
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
})

prevButton.addEventListener('click', () => {
    // console.log('prevButton clicked')
    if (index === 0) {
        index = totalImages - 1;
    } else {
        index--;
    }
    // console.log(index);
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
})
