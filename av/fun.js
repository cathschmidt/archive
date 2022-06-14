$(document).ready(function(){

$(".leaves").hide();
$(".hero-image").hide();

//$(".tiles").css({opacity: 0});

$(".hero-image").fadeIn(6000, function(){
	$(".enter").animate({opacity: 1}, 400);
});

var scrolled = false;

var heroVisible = $(".hero-image").is(":visible");

// $("body").css({overflow: "hidden"});

$(".enter").click(function(){

	contentFadeIn();

});

scrollFadeIn();


// TO DO :
// intro fade on scroll

// fades out splash stuff and fades in content
function contentFadeIn() {
	$(".hero-image").fadeOut(400);
		$(".enter").fadeOut(400, function(){
			$(".content").animate({opacity: 1}, 600, function(){
				$(".trees").animate({opacity: 1}, 2000, function(){
					infoFadeIn();
				});
			});
		});
}

function scrollFadeIn() {
	$(document).scroll(function(){

		var scrollTop = $(document).scrollTop();


		if (heroVisible) {
			console.log("hero is visible");
			contentFadeIn();
		} else {
			console.log("hero is hidden");
		}

	});
}

function infoFadeIn() {
	$(document).scroll(function(){

		var scrollTop = $(document).scrollTop();

		console.log("scrollTop is "+scrollTop);
		
		if (scrollTop > 150) {
			$(".info-card").animate({opacity: 1}, 600);
			console.log('yes');
		} else {
			console.log('else');	
		}

	});

}


});