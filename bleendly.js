var timer = 15;

$(function() {
	onTimer();
});

function hideContentImages() {
	$('.content img, .content iframe, .content video').remove();
	$('.inlineFrame img, .inlineFrame iframe, .inlineFrame video').remove();
}

function onTimer() {
	hideContentImages();
	setTimeout(onTimer, timer);
}