
const gallery = document.querySelector('#gallery');
const carousel = document.querySelector('.carousel-inner');


const imageFolder = '../imagesESP'; 
 const images = [
'2026-06-21 (2).jpg',
'2026-06-21 (7).jpg',
'2026-06-21 (1).jpg',
'2026-06-21 (3).jpg',
'2026-06-21 (4).jpg',
'2026-06-21 (5).jpg',
'2026-06-21 (6).jpg',
'2026-06-21 (8).jpg',
'2026-06-21 (9).jpg',
'2026-06-21 (10).jpg',
'2026-06-21 (11).jpg',
'2026-06-21 (12).jpg',
'2026-06-21 (13).jpg',
'2026-06-21 (14).jpg',
'2026-06-21 (15).jpg',
'2026-06-21 (16).jpg',
'2026-06-21 (17).jpg',
'2026-06-21 (18).jpg',
'2026-06-21 (19).jpg',
'2026-06-21 (20).jpg',
'2026-06-21 (21).jpg',
'2026-06-21 (22).jpg',
'2026-06-21 (23).jpg',
'2026-06-21 (24).jpg',
'2026-06-21 (25).jpg',
'2026-06-21 (26).jpg',
'2026-06-21 (27).jpg',
'2026-06-21 (28).jpg',
'2026-06-21 (29).jpg',
'2026-06-21 (30).jpg',
'2026-06-21 (31).jpg',
'2026-06-21 (32).jpg',
'2026-06-21 (33).jpg',
'2026-06-21 (34).jpg',
'2026-06-21 (35).jpg'
]; 




var first = true;
var count = 0;

 images.forEach(image => {

	// ------- Add to gallery
	const gallerydiv = document.createElement('div');
	gallerydiv.classList.add("col-12", "col-sm-6", "col-lg-3");
	
	const img = document.createElement('img');
	img.src = `${imageFolder}/${image}`;
	img.classList.add("w-100","p-1");
	img.setAttribute('data-bs-target','#carouselGallery');
	
	
	img.setAttribute('data-bs-slide-to',count);
	 img.setAttribute('title', image.substring(0, 10)); // Set the first 10 characters of the filename as the tooltip
	count=count+1;

	gallerydiv.appendChild(img);
	gallery.appendChild(gallerydiv);
			
	// ------- Add to Carousel		
	const carouseldiv = document.createElement('div');
	carouseldiv.classList.add("carousel-item");
	
	if(first){
		carouseldiv.classList.add("active");
		first=false;
	}
		
	const img2 = document.createElement('img');
	img2.src = `${imageFolder}/${image}`;
	img2.classList.add("w-100");
 	
    // Create caption element
    const captionDiv = document.createElement('div');
    captionDiv.classList.add("carousel-caption");
    
    const captionText = document.createElement('p');
    captionText.textContent = image.substring(0, 10); // Set the filename as the caption text
    
    captionDiv.appendChild(captionText);
    carouseldiv.appendChild(img2);
    carouseldiv.appendChild(captionDiv); // Append the caption to the carousel item
    
    carousel.appendChild(carouseldiv);
	
			
}); 

