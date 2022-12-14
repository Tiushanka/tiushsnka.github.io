document.addEventListener("DOMContentLoaded", () => {

	window.addEventListener('scroll', function() {
		if(pageYOffset > 300)
		{
			document.getElementById('navbar').classList.add('navbar_scrolled');
		}
		else
		{
			document.getElementById('navbar').classList.remove('navbar_scrolled');
		}
	});

	document.getElementById('toggle_menu').onclick = function() {
		this.classList.toggle('navbar__toggler_active');
	};

	wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animate__animated',
		offset: 0,
		mobile: true,
	});

	wow.init();

	let menu_links = document.querySelectorAll('#mobile-menu a');

	Array.from(menu_links).forEach(link => {
		link.onclick = () => {
			document.getElementById('mobile-menu').classList.remove('mobile-wrap_show');
			document.getElementById('toggle_menu').classList.remove('navbar__toggler_active');
		}
	});


});