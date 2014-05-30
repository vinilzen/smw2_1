$(function() {

	$('[rel=change-city]').popover({
		html: true,
		container: '.sm_w2_1popover_cont',
		trigger:'click',
		content: function() {
			var el_id = $(this).attr('data-popover-content'),
				html = $(el_id).html();
			return html;
		}
	}).on('shown.bs.popover', function () {

		var $self = $(this),
			container = $self.attr('data-popover-container'),
			close = $self.attr('data-popover-close');

		if ($(container).length){

			$('.sm_w2_1popover').css({
				'width': $(container).width(),
				'height': $(container).height(),
				'top':0,
				'left':0
			});
		}

		if ($(close).length){
			$(close).click(function() {
				$self.popover('hide');
				return false;
			});
		}
	});
});