document.addEventListener('DOMContentLoaded', () => {


    const solField = document.querySelector('.solutions__field-wrapper'),
          solImagesCount = document.querySelectorAll('.solutions__img').length,
          solImageWidth = document.querySelector('.solutions__img').offsetWidth,
          solImagesTotWidthVal = solImagesCount * solImageWidth;
          let solPosition = 0;

    
        const headField = document.querySelector('.promo__backgrounds'),
              headImagesCount = document.querySelectorAll('.promo__background').length,
              headImageWidth = document.querySelector('.promo__background').offsetWidth,
              headImagesTotWidthVal = (headImagesCount * headImageWidth);
        const headNav = document.querySelectorAll('promo__nav-item');
        let headPosition = 0; 
        
        let currentLayerIdx = 0;

        const dots = document.querySelectorAll('.promo__nav-item');

        dots.forEach((dot, i) => {
            dot.addEventListener('click', ()=>{
                const idx = i;
                
                if (currentLayerIdx === idx) {
                    
                } else {
                    const temp = idx - currentLayerIdx;
                    currentLayerIdx += temp;
                    console.log(temp);
                    headField.style.transform = `translateX(${-(currentLayerIdx * headImageWidth)}px)`;
                }

                dots.forEach((dot, i) => {
                    dot.classList.remove('active');
                    if(i == currentLayerIdx) {
                        dot.classList.add('active');
                    }
                });
            });
        })

       
    document.querySelector('.solutions__next').addEventListener('click', (e) => {
        e.preventDefault();

        solPosition -= solImageWidth;
        if(Math.abs(solPosition) >= solImagesTotWidthVal) {
            solPosition = 0;
            solField.style.transform = `translateX(${solPosition}px)`;
        }  else {
            solField.style.transform = `translateX(${solPosition}px)`;
        }
        
        
    });

    document.querySelector('.solutions__prev').addEventListener('click', (e) => {
        e.preventDefault();

        solPosition += solImageWidth;
        if(solPosition >= solImagesTotWidthVal) {
            solPosition = 0;
            solField.style.transform = `translateX(-${solPosition}px)`;
        }  else {
            solField.style.transform = `translateX(-${solPosition}px)`;
        }
        
        
    });

    document.querySelector('.promo__nav-prev').addEventListener('click', (e) => { 
        e.preventDefault();

        
        currentLayerIdx += 1;
        
        
        if(currentLayerIdx > headImagesCount - 1) {
            currentLayerIdx = 0;
            headField.style.transform = `translateX(${currentLayerIdx}px)`;
        }  else {
            headField.style.transform = `translateX(-${currentLayerIdx * headImageWidth}px)`;
        }
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if(i ===  currentLayerIdx) {
                dot.classList.add('active');
            }
        });
        console.log(currentLayerIdx);
    });

    document.querySelector('.promo__nav-next').addEventListener('click', (e) => {
        e.preventDefault();
        
        currentLayerIdx -= 1;

        

        console.log(currentLayerIdx);
        // headPosition -= headImageWidth;
        // if(Math.abs(headPosition) >= headImagesTotWidthVal) {
        //     headPosition = 0;
        //     headField.style.transform = `translateX(${headPosition}px)`;
        // }  else {
        //     headField.style.transform = `translateX(${headPosition}px)`;
        // }
        if(currentLayerIdx < 0) {
            currentLayerIdx = headImagesCount - 1;
            headField.style.transform = `translateX(-${currentLayerIdx * headImageWidth}px)`;
        }  else {
            headField.style.transform = `translateX(-${currentLayerIdx * headImageWidth}px)`;
        }

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if(i == currentLayerIdx) {
                dot.classList.add('active');
            }
        });
    });
});


