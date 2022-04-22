const img = document.querySelectorAll('.img');

//Intersection
function intersection(entries,observer){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.src = entry.target.dataset.src;
		}
	})
}

//Options for intersections observer
const options = {
	root:null,
	rootMaegin:'0px',
	threshold:0,
}

//Initialized and observer for each elemtent HTML
const observer = new IntersectionObserver(intersection, options);
img.forEach(imgs =>{
	observer.observe(imgs)
})