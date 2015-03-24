$(document).ready(function() {
    console.log( "ready!" );

	$(function() {
		// Config
		var width = 1080;
		var animationSpeed = 700;
		var slideInterval = 3000;
		var currentSlide = 0;

		//cache dom - only search for it once... 
		var $slider = $('.slider');
		var $slideContainer = $slider.find('.img_wrap');
		var $slides = $slideContainer.find('.img');

		//Cache Get Pause button
		var $pauseButton = $('.pause');
		var $startButton = $('.start');
		var $backButton = $('.back');
		var $nextButton = $('.next');


		//Start button
		$pauseButton.hide();
		var interval;

		function startSlider(){
			$startButton.hide();
			$pauseButton.show();
			interval = setInterval(function(){
				$slideContainer.animate({'left': '-='+width}, animationSpeed, function(){
					currentSlide += 1;
					console.log(currentSlide);
						if(currentSlide === ($slides.length - 1)){
						currentSlide = 0;
						$slideContainer.css('left', 0);
						}
					});
				}, slideInterval);
		}
		function stopSlider(){
			$pauseButton.hide();
			$startButton.show();
			clearInterval(interval);
		}

		//Mouse enter and mouseleave events.
		// $slider.on('mouseenter').on('mouseleave', startSlider);

		//PauseButton
		$pauseButton.click(function(){
			stopSlider();
		});

		//StartButton
		$startButton.click(function(){
			startSlider();
		});

		//BackButton
		$backButton.click(function(){
			stopSlider();
			if ($slideContainer.is(':animated'))
			{
			return false;
			}
			$(function backSlide(){
			$slideContainer.animate({'left': '+='+width}, animationSpeed,function(){
					currentSlide -= 1;
					console.log(currentSlide);
						if(currentSlide <= 0){
						currentSlide = ($slides.length -1);
						$slideContainer.css('left', -width * ($slides.length -1));
						}
					});
			}, slideInterval);
		});

		//NextButton
		$nextButton.click(function(){
			stopSlider();
			if ($slideContainer.is(':animated'))
			{
			return false;
			}

			$(function nextSlide(){
			$slideContainer.animate({'left': '-='+width}, animationSpeed,function(){
					currentSlide += 1;
					console.log(currentSlide);
						if(currentSlide >= ($slides.length - 1)){
						currentSlide = 0;
						$slideContainer.css('left', 0);
						}
					});
			}, slideInterval);

	});

		$(document).keyup(function(e) {
		var tag = e.target.tagName.toLowerCase();
		if (e.keyCode == 37 && tag != 'input' && tag != 'textarea') $backButton.click();     // m
		if (e.keyCode == 39) $nextButton.click();   // esc
		});

	}); //function
}); //jquery End