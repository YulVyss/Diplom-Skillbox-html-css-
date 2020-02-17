"use strict"
$(function(){
	const div = $('.header__icon, .nav_mobile');
	const button = $('.header__button');
	const menu = $('.nav_mobile');

	div.click(function(){
		button.toggleClass('open');
		menu.slideToggle(600);
	});
	const button_orange = $('.button_orange, .close_form');
	const form_more = $('.form_contact');
	const input = $('input');

	button_orange.click(function(){
		form_more.slideToggle(600);
		input.value = "";
	});

	const button_call = $('.call-block__button, .call-block__icon, .close_call');
	const form_call = $('.form_call');

	button_call.click(function(){
		form_call.slideToggle(600);
		input.value = "";
	});


	const fetchSend = (formData) => {
	    fetch('mail.php', { // файл-обработчик 
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
	        },
	        body: formData
	    .then(response => alert('Сообщение отправлено'))
	    .catch(error => console.error(error))
	})

	const forms = document.getElementsByTagName('form');
	for (let i = 0; i < forms.length; i++) {
	    forms[i].addEventListener('submit', function(e){
	        e.preventDefault();
	        const formData = new FormData(this);
	        fetchSend(formData);
	        this.reset(); // очищаем поля формы 
	        document.location.reload(true);
		    });
		};
	};

	
	if(window.innerWidth > 1024) {
			$('.element_bottom, .element').addClass('active');
		}


	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:30,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:false,
		            dots:true,
		        },
		         580:{
		            items:1,
		            nav:false,
		            dots:true,
		        },
		        765:{
		        	items:2,
		            nav:false,
		            dots:true,
		        },
		        1025:{
		            items:3,
		            nav:true,
		            dots:false,
		        }
		    }
		})
	});
});