import * as $ from 'jquery'
import "@fancyapps/fancybox";
import Inputmask from "inputmask";
import 'owl.carousel';
import './styles/styles.css'
import './styles/scss.scss'



$(document).ready(function () {

	$('.menu-header__icon').click(burgerClick);
	$('.menu__title').click(burgerClick);
	function burgerClick() {
		$(this).toggleClass('active');
		$('.menu-header__menu').toggleClass('active')
		if ($(this).hasClass('active')) {
			$('body').data('scroll', $(window).scrollTop());
		}
		$('body').toggleClass('lock');
		if (!$(this).hasClass('active')) {
			$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	}

	let tel = document.querySelector(".forms__number");

	let im = new Inputmask();
	im.mask(tel);
	$('.modal-window__call').click(function () {
		let tel = document.querySelector(".forms__number");
		let lastLetter = tel.value.split('');
		console.log(lastLetter[17]);
		if (lastLetter[17] == '_' || lastLetter[17] == undefined) {
			$(".text-tel").addClass('error')
		}
		if ($('.forms__name').val() == '') {
			$(".text-name").addClass('error')
		}

		if (lastLetter[17] !== '_' && lastLetter[17] !== undefined && $('.forms__name').val() !== '') {
			$.fancybox.close();
			$.fancybox.open($('.modal-window_thx'))
		}
	})

	$('.owl-carousel').owlCarousel({
		margin: 10,
		dots: true,
		responsive: {
			0: {
				items: 1
			}
		}
	})
});

