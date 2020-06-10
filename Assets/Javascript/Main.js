//----------buttons----------\\
function HomePage() {
	let home_page = document.getElementById("Home_content");
	let about = document.getElementById("About_content");
	let images = document.getElementById("Images_content");
    let Links = document.getElementById("Links_content");
	if (home_page.style.display !== "grid") {

		home_page.style.display = "grid";
		about.style.display = "none";
		images.style.display = "none";
        Links.style.display = "none";

		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
}

function About() {
	let home_page = document.getElementById("Home_content");
	let about = document.getElementById("About_content");
	let images = document.getElementById("Images_content");
    let Links = document.getElementById("Links_content");
	if (about.style.display !== "grid") {

		about.style.display = "grid";
		home_page.style.display = "none";
		images.style.display = "none";
        Links.style.display = "none";                

		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
}

function Images() {
	let home_page = document.getElementById("Home_content");
	let about = document.getElementById("About_content");
	let images = document.getElementById("Images_content");
    let Links = document.getElementById("Links_content");

	if (images.style.display !== "grid") {

		images.style.display = "grid";
		about.style.display = "none";
		home_page.style.display = "none";
        Links.style.display = "none";

		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
}

function usefulLinks() {
	let home_page = document.getElementById("Home_content");
	let about = document.getElementById("About_content");
	let images = document.getElementById("Images_content");
    let Links = document.getElementById("Links_content");

        if (Links.style.display = "grid"); {
		images.style.display = "none";
		about.style.display = "none";
		home_page.style.display = "none";
        Links.style.display = "grid";

		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera   
        } 
}

//----------end of buttons----------\\