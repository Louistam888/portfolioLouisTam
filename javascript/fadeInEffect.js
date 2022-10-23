const scrollReveal = () => {
	const revealPoint = 10;
	const revealElement = document.querySelectorAll(".projectLeft, .projectRight");
	for (let i = 0; i < revealElement.length; i++) {
		const windowHeight = window.innerHeight;
		const revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", scrollReveal);

//based on scroll reveal by Miko https://codepen.io/mikomagni/pen/vYNbrYN