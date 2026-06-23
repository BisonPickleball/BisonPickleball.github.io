/* ============================================================
   GALLERY.JS — Main gallery page image loader
   Builds:
   - Thumbnail grid
   - Carousel slides
   ============================================================ */

const gallery = document.querySelector('#gallery');
const carousel = document.querySelector('.carousel-inner');

const imageFolder = '../images';

const images = [
    '2026-06-21b.jpg', '2026-06-21.jpg', '2026-06-06.jpg',
    '2026-05-24b.jpg', '2026-05-24.jpg', '2026-05-23.jpg',
    '2026-04-29b.jpg', '2026-04-29.jpg', '2026-04-26b.jpg',
    '2026-04-26.jpg', '2026-04-19b.jpg', '2026-04-19.jpg',
    '2026-04-12.jpg', '2026-03-29.jpg', '2026-03-22.jpg',
    '2026-03-15b.jpg', '2026-03-15.jpg', '2026-03-08b.jpg',
    '2026-03-08.jpg', '2026-02-01b.jpg', '2026-02-01.jpg',
    '2026-01-31.jpg', '2026-01-18b.jpg', '2026-01-18.jpg',
    '2026-01-11.jpg', '2026-01-04.jpg', '2025-12-20b.jpg',
    '2025-12-20.jpg', '2025-12-15.jpg', '2025-12-04.jpg',
    '2025-11-30.jpg', '2025-11-16.jpg', '2025-10-05b.jpg',
    '2025-10-05.jpg', '2025-10-04b.jpg', '2025-10-04.jpg',
    '2025-09-28.jpg', '2025-09-27b.jpg', '2025-09-27.jpg',
    '2025-09-21.jpg', '2025-09-20.jpg', '2025-09-13.jpg',
    '2025-09-08.jpg', '2025-09-01.jpg', '2025-04-27.jpg',
    '2025-04-26.jpg', '2025-04-25d.jpg', '2025-04-25c.jpg',
    '2025-04-25b.jpg', '2025-04-25a.jpg', '2025-04-20.jpg',
    '2025-04-13.jpg', '2025-04-12.jpg', '2025-04-06.jpg',
    '2025-03-30.jpg', '2025-03-29.jpg', '2025-03-23.jpg',
    '2025-03-22.jpg', '2025-03-16.jpg', '2025-03-09.jpg',
    '2025-02-01b.jpg', '2025-02-01.jpg', '2025-01-25c.jpg',
    '2025-01-25b.jpg', '2025-01-25.jpg', '2025-01-18.jpg',
    '2025-01-11.jpg', '2025-01-04.jpg', '2024-12-10.jpg',
    '2024-12-09.jpg', '2024-11-30b.jpg', '2024-11-30.jpg',
    '2024-11-24.jpg', '2024-11-23b.jpg', '2024-11-23.jpg',
    '2024-11-17.jpg', '2024-10-25.jpg', '2024-10-13b.jpg',
    '2024-10-13.jpg', '2024-10-11b.jpg', '2024-10-11.jpg',
    '2024-10-09.jpg', '2024-10-02.jpg', '2024-09-29.jpg',
    '2024-09-14.jpg', '2024-09-08b.jpg', '2024-09-08.jpg',
    '2024-09-05.jpg', '2024-08-11b.jpg', '2024-08-11.jpg',
    '2024-08-10.jpg', '2024-08-09.jpg', '2024-07-16.jpg',
    '2024-07-14b.jpg', '2024-07-14.jpg', '2024-07-07b.jpg',
    '2024-07-07.jpg', '2024-07-02b.jpg', '2024-07-02.jpg',
    '2024-06-30b.jpg', '2024-06-30.jpg', '2024-06-09.jpg',
    '2024-05-19b.jpg', '2024-05-19.jpg', '2024-05-18.jpg',
    '2024-05-08.jpg', '2024-05-06.jpg', '2024-05-05.jpg',
    '2024-04-28b.jpg', '2024-04-28.jpg', '2024-04-24.jpg',
    '2024-04-21b.jpg', '2024-04-21.jpg', '2024-04-17.jpg',
    '2024-04-15b.jpg', '2024-04-15.jpg', '2024-04-14b.jpg',
    '2024-04-14.jpg', '2024-04-07d.jpg', '2024-04-07c.jpg',
    '2024-04-07b.jpg', '2024-04-07.jpg', '2024-04-05b.jpg',
    '2024-04-05.jpg', '2024-03-24.jpg', '2024-03-02.jpg',
    '2024-02-03.jpg', '2024-01-28.jpg', '2024-01-21.jpg',
    '2024-01-14.jpg', '2023-12-17b.jpg', '2023-12-17.jpg',
    '2023-12-02b.jpg', '2023-12-02.jpg', '2023-11-25.jpg',
    '2023-11-11b.jpg', '2023-11-11.jpg', '2023-11-05b.jpg',
    '2023-11-05.jpg', '2023-10-22b.jpg', '2023-10-22.jpg',
    '2023-10-21b.jpg', '2023-10-21.jpg', '2023-10-07b.jpg',
    '2023-10-07.jpg', '2023-10-01b.jpg', '2023-10-01.jpg',
    '2023-09-24.jpg', '2023-09-23.jpg', '2023-09-17b.jpg',
    '2023-09-17.jpg', '2023-09-16b.jpg', '2023-09-16.jpg',
    '2023-08-20.jpg', '2023-08-19.jpg', '2023-08-13b.jpg',
    '2023-08-13.jpg', '2023-06-24.jpg', '2023-06-17.jpg',
    '2023-06-10.jpg', '2023-05-07c.jpg', '2023-05-07b.jpg',
    '2023-05-07.jpg', '2023-05-03.jpg', '2023-04-19.jpg',
    '2023-04-16b.jpg', '2023-04-16.jpg', '2023-04-15b.jpg',
    '2023-04-15.jpg', '2023-03-26b.jpg', '2023-03-26.jpg',
    '2023-03-25b.jpg', '2023-03-25.jpg', '2023-03-04b.jpg',
    '2023-03-04.jpg', '2023-02-25c.jpg', '2023-02-25b.jpg',
    '2023-02-25.jpg', '2023-02-04c.jpg', '2023-02-04b.jpg',
    '2023-02-04.jpg', '2023-01-28b.jpg', '2023-01-28.jpg'
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
