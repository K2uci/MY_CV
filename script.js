
//icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

//scroll settigns
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

	sections.forEach(sec =>{
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
			})
			sec.classList.add('show-animate')
		} 
		else {
			sec.classList.remove('show-animate')
		}

	});

	let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 100)

	// borrar todo la hacer click

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
}

function descargarArchivo() {
    const enlace = document.createElement('a');
    enlace.href = './my_cv.pdf'; // Reemplaza con el nombre de tu archivo
    enlace.download = './my_cv.pdf'; // Reemplaza con el nombre de tu archivo
    enlace.click();
}

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;
    var topic = document.getElementById("topic").value;

    var emailBody = `Nombre: ${name}\nCorreo Electrónico: ${email}\nTelefono: ${phone}\nAsunto: ${topic}\nMensaje: ${message}`;
    console.log(emailBody)
    window.location.href = `mailto:astroreal031@gmail.com?subject=${topic}&body=${encodeURIComponent(emailBody)}`;
}
