// the ui-resizable-handles are added here
$('.resizable').resizable();

// makes GSAP Draggable avoid clicks on the resize handles
$('.ui-resizable-handle').attr('data-clickable', true);

// make the element draggable
Draggable.create('.draggable');


(function($) {
		$(document).ready(function() {

			// Pause/Play functionality
			var playButton = $('.control-play'),
				album = $('.album');

			playButton.on('click', function() {
				$('.music-player-container').toggleClass('is-playing');
			});
		});
	})(jQuery);