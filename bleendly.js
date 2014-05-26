var timer = 15;

$(function() {
	onTimer();
});

function hideContentImages() {
	$('.content img, .content iframe').remove();
}

function onTimer() {
	hideContentImages();
	setTimeout(onTimer, timer);
}