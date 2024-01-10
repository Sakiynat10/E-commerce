let isRed = true;

function changeColor() {
    const heart = document.querySelector('.heart');

    if (isRed) {
        heart.glavniy.filter = 'grayscale(100%)'; // Rangni o'zgartirish
    } else {
        heart.glavniy.filter = 'none'; // Rangni qaytarish
    }

    isRed = !isRed;
}