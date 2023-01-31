// Hacer visible la división de Reconocimientos oculto ------------------------------->
document.getElementById('anclaReconocimientos').addEventListener('click', function() {
	document.getElementById('reconocimientos').style.display = "block";
})



// Hacer visible la división de Contacto oculto ------------------------------->
document.getElementById('anclaContacto').addEventListener('click', function() {
	document.getElementById('contacto').style.display = "block";
})



// Notificación al enviar formulario ------------------------------------------>
document.getElementById('enviar-mensaje').addEventListener('click', function() {
		if (confirm("¿Está seguro que desea enviar el mensaje?")) {
			txt = "El mensaje se envió correctamente.";
			alert("El mensaje se envió correctamente.");
		} else {
			txt  = "Mensaje no enviado.";
			alert("Mensaje no enviado.")
		}
})



// B O T Ó N  S C R O L L  T O  T O P -------------------------------------------------->

let scrollButton = document.getElementById('scroll-boton');

// Habilitar botón cuando el usuario scrollee unos 30px hacia abajo --->
window.onscroll = function() {
	scrollTop();
};

function scrollTop() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		scrollButton.style.display = "block";
	} else {
		scrollButton.style.display = "none";
	}
}

// Scrollear hacia arriba --->
function scrollFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



// T E M A S -------------------------------------------------->

const categorias = document.querySelectorAll("#informacion-personal, #experiencia, #formacion, #habilidades, #contacto, #formulario, #reconocimientos");
const body = document.body.style;
const nav = document.getElementById('barra-navegacion').style;
const navIcons = document.getElementById('theme-toggle');
const moonIcon = "https://cdn-icons-png.flaticon.com/512/5400/5400774.png";
const sunIcon = "https://cdn-icons-png.flaticon.com/512/4059/4059880.png";
let dayMode = localStorage.getItem("day-theme");


// Constante con las modificaciones para el tema claro --->

const enableDayTheme = () => {
	body.backgroundColor = "#e3e0d7";
	body.color = "#111";
	document.getElementById('avatar').style.border = "solid 2px #1b1b1b";
	navIcons.src = moonIcon; 
	nav.backgroundColor = "transparent";
	nav.boxShadow = "5px 5px 0px rgba(0,0,0,0.15)";
	nav.borderLeft = "solid 1px rgba(0,0,0,0.15)";
	nav.borderTop = "solid 1px rgba(0,0,0,0.15)";
	categorias.forEach((element) => {
		element.style.backgroundColor = "#e3e0d7";
		element.style.color = "rgba(0,0,0,0.5)";
		element.style.boxShadow = "5px 5px 0px rgba(0,0,0,0.15)";
		element.style.borderLeft = "solid 1px rgba(0,0,0,0.15)";
		element.style.borderTop = "solid 1px rgba(0,0,0,0.15)";
	});
	document.querySelectorAll('#reconocimientos li a, #barra-navegacion a').forEach((element) => {
		element.style.color = "rgba(0,0,0,0.5)";
	})

	localStorage.setItem("day-theme", "enabled");
}


// Constante que restaura las modificaciones del tema por defecto --->

const disableDayTheme = () => {
	body.backgroundColor = "";
	body.color = "";
	document.getElementById('avatar').style.border = "";
	navIcons.src = sunIcon; 
	nav.backgroundColor = "";
	nav.boxShadow = "";
	nav.borderLeft = "";
	nav.borderTop = "";
	categorias.forEach((element) => {
		element.style.backgroundColor = "";
		element.style.color = "";
		element.style.boxShadow = "";
		element.style.borderLeft = "";
		element.style.borderTop = "";
	});
	document.querySelectorAll('#reconocimientos li a, #barra-navegacion a').forEach((element) => {
		element.style.color = "";
	})

	localStorage.setItem("day-theme", "disabled");
}


if (dayMode === "enabled") {
	enableDayTheme();
}


document.getElementById('theme-toggle').addEventListener('click', function(){
	dayMode = localStorage.getItem("day-theme");
	if (dayMode === "disabled") {
		enableDayTheme();
	} else {
		disableDayTheme();
	}
})