

$(document).ready(function(){

	$('.sw_wr').click(function(){
		$('.sw_wr').toggleClass('active');
		$('.content_wrapper').toggleClass('active');
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'ajax',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: true,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image'
	});

	$('.choice_cat_label').click(function() {

		$('div.choice_cat_label').removeClass('active');
		$(this).addClass('active');
        var id_prod = $(this).attr('id');


		$.ajax({
            url: '/controller/test.php',
            method: 'POST',
            dataType: "html",
            data : {'id':id_prod},
            success : function (response) {
				$("#wrapper_catalog").html(response);
            }
		})
	});

	$('a[href*=#]').anchor({
			transitionDuration : 1200
	});

	$("input.num").mask("+7 (999) 999-9999");

    $('.callBackBtn').click(function() {
		var callback = $('#feedbackForm').serialize();
        var id_modal = $(this).attr('id');


		if( $('#input_name').val() != "" && $('#input_num').val() != ""){
			$.ajax({
				url: '/controller/index.php',
				method: 'POST',
				dataType: "html",
				data : callback,
				success : function (response) {
					$.magnificPopup.open({
					  items: {
						src: 'modal/thanksModal.php?id='+id_modal
					 },
					  type: 'ajax'
					}, 0);
					setTimeout(function() {
						$.magnificPopup.close();
					}, 3000);

				}
			})
		}
	});

    $('.callBackBtn2').click(function() {
		var callback = $('#feedbackForm2').serialize();
        var id_modal = $(this).attr('id');


		if( $('#input_name2').val() != "" && $('#input_num2').val() != ""){
			$.ajax({
				url: '/controller/index.php',
				method: 'POST',
				dataType: "html",
				data : callback,
				success : function (response) {
					$.magnificPopup.open({
					  items: {
						src: 'modal/thanksModal.php?id='+id_modal
					 },
					  type: 'ajax'
					}, 0);
					setTimeout(function() {
						$.magnificPopup.close();
					}, 3000);

				}
			})
		}
	});

    $('.callBackBtn3').click(function() {
		var callback = $('#feedbackForm3').serialize();
        var id_modal = $(this).attr('id');


		if( $('#input_name3').val() != "" && $('#input_num3').val() != ""){
			$.ajax({
				url: '/controller/index.php',
				method: 'POST',
				dataType: "html",
				data : callback,
				success : function (response) {
					$.magnificPopup.open({
					  items: {
						src: 'modal/thanksModal.php?id='+id_modal
					 },
					  type: 'ajax'
					}, 0);
					setTimeout(function() {
						$.magnificPopup.close();
					}, 3000);

				}
			})
		}
	});

	$.extend(true, $.magnificPopup.defaults, {
		tClose: 'Закрыть (Esc)', // Alt text on close button
		tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
		gallery: {
			tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
			tNext: 'Next (Right arrow key)', // Alt text on right arrow
			tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
		},
		image: {
			tError: '<a href="%url%">Изображение</a> не может быть загружено.' // Error message when image could not be loaded
		},
		ajax: {
			tError: '<a href="%url%">Контент</a> не может быть загружен.' // Error message when ajax request failed
		}
	});

});
