/* ============================================================
   ESP.JS — ESP gallery page image loader
   Builds:
   - Thumbnail grid
   - Carousel slides
   ============================================================ */

const gallery = document.querySelector('#gallery');
const carousel = document.querySelector('.carousel-inner');

const imageFolder = '../imagesESP';

const images = [
    '2026-06-21 (2).jpg', '2026-06-21 (7).jpg', '2026-06-21 (1).jpg',
    '2026-06-21 (3).jpg', '2026-06-21 (4).jpg', '2026-06-21 (5).jpg',
    '2026-06-21 (6).jpg', '2026-06-21 (8).jpg', '2026-06-21 (9).jpg',
    '2026-06-21 (10).jpg', '2026-06-21 (11).jpg', '2026-06-21 (12).jpg',
    '2026-06-21 (13).jpg', '2026-06-21 (14).jpg', '2026-06-21 (15).jpg',
    '2026-06-21 (16).jpg', '2026-06-21 (17).jpg', '2026-06-21 (18).jpg',
    '2026-06-21 (19).jpg', '2026-06-21 (20).jpg', '2026-06-21 (21).jpg',
    '2026-06-21 (22).jpg', '2026-06-21 (23).jpg', '2026-06-21 (24).jpg',
    '2026-06-21 (25).jpg', '2026-06-21 (26).jpg', '2026-06-21 (27).jpg',
    '2026-06-21 (28).jpg', '2026-06-21 (29).jpg', '2026-06-21 (30).jpg',
    '2026-06-21 (31).jpg', '2026-06-21 (32).jpg', '2026-06-21 (33).jpg',
    '2026-06-21 (34).jpg', '2026-06-21 (35).jpg'
];


/* ============================================================
   BUILD GALLERY + CAROUSEL
   ============================================================ */

let isFirst = true;
let index = 0;

images.forEach(filename => {

    /* ------------------------------
       Thumbnail Grid
       ------------------------------ */
    const thumbWrapper = document.createElement('div');
    thumbWrapper.classList.add('col-12', 'col-sm-6', 'col-lg-3');

    const thumb = document.createElement('img');    
	thumb.src = `${imageFolder}/thumbs/${filename}`;
    thumb.classList.add('w-100', 'p-1');
    thumb.dataset.bsTarget = '#carouselGallery';
    thumb.dataset.bsSlideTo = index;
    thumb.title = filename.substring(0, 10);

    thumbWrapper.appendChild(thumb);
    gallery.appendChild(thumbWrapper);


    /* ------------------------------
       Carousel Slide
       ------------------------------ */
    const slide = document.createElement('div');
    slide.classList.add('carousel-item');
    if (isFirst) {
        slide.classList.add('active');
        isFirst = false;
    }

    const slideImg = document.createElement('img');
    slideImg.src = `${imageFolder}/${filename}`;
    slideImg.classList.add('w-100');

    const caption = document.createElement('div');
    caption.classList.add('carousel-caption');

    const captionText = document.createElement('p');
    captionText.textContent = filename.substring(0, 10);

    caption.appendChild(captionText);
    slide.appendChild(slideImg);
    slide.appendChild(caption);

    carousel.appendChild(slide);

    index++;
});
