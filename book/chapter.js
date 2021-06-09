require(['gitbook', 'jQuery'], function (gitbook, $) {
	var width = 240;
	gitbook.events.bind('page.change', function () {
		var id = 'page-chapter';
		var chapter = $('#' + id);
		if (!chapter.length) {
			chapter = $('<div id="' + id + '" class="page-chapter" />');
			$('.book').append(chapter);

			chapter.css({
				width: width
			});
			$('.book-body').css({
				right: width
			});
		}
		var nodes = document.querySelector('.page-inner')
		.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]');
		$.each(nodes, function(k, v) {
			var item = $('<div class="item-' + v.tagName.toLowerCase() + '" />');
			item.html(v.innerText);
			chapter.append(item);
		});
  	});
});