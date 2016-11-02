/* Преобразование текста в ссылку */
function plain_to_link(el) {
	$(el).each(function(){
		var toCh = $(this);
		var content = toCh.html();
		content = content.replace(/((https?\:\/\/|ftp\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(url) {
			nice = url;
			if( url.match('^https?:\/\/') )
				nice = nice.replace(/^https?:\/\//i,'')
			else
				url = 'http://' + url;
			return '<noindex><a target="_blank" rel="nofollow" href="'+ url +'">'+ nice.replace(/^www./i,'') +'</a></noindex>';
		});
		toCh.html(content);
	});
}