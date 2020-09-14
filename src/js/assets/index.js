document.addEventListener('DOMContentLoaded', () => {
    const field = document.querySelector('.solutions__field-wrapper'),
          imagesCount = document.querySelectorAll('.solutions__img').length,
          imageWidth = document.querySelector('.solutions__img').offsetWidth,
          imagesTotWidthVal = imagesCount * imageWidth;
          let position = 0;
          console.log(field);
          console.log(imagesTotWidthVal);
          console.log(imageWidth);
    document.querySelector('.solutions__next').addEventListener('click', () => {
        console.log('working');
        position -= imageWidth;
        if(Math.abs(position) >= imagesTotWidthVal) {
            position = 0;
            field.style.transform = `translateX(${position}px)`;
        }  else {
            field.style.transform = `translateX(${position}px)`;
        }
        
        
    });

    document.querySelector('.solutions__prev').addEventListener('click', () => {
        console.log('working');
        position += imageWidth;
        if(position >= imagesTotWidthVal) {
            position = 0;
            field.style.transform = `translateX(-${position}px)`;
        }  else {
            field.style.transform = `translateX(-${position}px)`;
        }
        
        
    });
});


