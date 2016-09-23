// versions.js

var window_location_href = window.location.href; // полный адрес активного экрана
var link_page = window_location_href.match(/\/#\/.*$/).toString().replace(/\/#/,''); // короткий адрес активного экрана
var link_version; // активная версия прототипа

/* выбор активной версии прототипа */
$('#prototype-version-select option').each(function(){
	var link_v = $(this).attr('value').replace(/\.\.\//,'').replace(/\/#\//,'');
	if ( window_location_href.indexOf(link_v) != -1 ) {
		$(this).attr('selected','selected');
		link_version = link_v;
	}
});

/* корректировка ссылок в выпадающем меню выбора версий пототипа */
$('a[href*="#/"]').each(function(){
	$(this).click(function(){
		var link = $(this).attr('href');
		$('#prototype-version-select option').each(function(){
			$(this).attr('value',$(this).attr('value').replace(/\/#\/.*/,'/'+link));
		});
	});
});