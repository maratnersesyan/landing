

	$(document).ready(function () {
		$('.slickslider').slick({
			
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: '.arrow_right',
			prevArrow: '.arrow_left',
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
                    }
				}]
		});
	});


