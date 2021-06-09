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
		chapter.html('');
		var nodes = document.querySelector('.page-inner')
		.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
		var items = [];
		$.each(nodes, function(k, v) {
			var item = $('<div class="item item-' + v.tagName.toLowerCase() + '" />');
			var a = $('<a href="#' + v.id + '" />');
			a.html(v.innerText);
			item.append(a);
			chapter.append(item);
			items.push(item);
		});

		$('.body-inner').unbind('scroll').bind('scroll', function (e) {
			for (var i = 0; i < nodes.length; i++) {
				var v = nodes[i].getBoundingClientRect().top;
				if (v >= 0 && v <= 10) {
					$.each(items, function (k2, item) {
						item.removeClass('active');
					});
					items[i].addClass('active');
					break;
				}
			}
		});
  	});
});