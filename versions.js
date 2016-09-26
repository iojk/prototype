// versions.js

var window_location_href = window.location.href; // полный адрес активного экрана
var link_page = window_location_href.match(/\/#\/.*$/).toString().replace(/\/#/,'').replace(/\?.*/,''); // короткий адрес активного экрана
var version_ref = document.referrer.replace(/.*\/prototype\//,'').replace(/\/.*/,'');
var color_model = $('body').attr('class').match(/\S*colors-\S*\s/).toString().replace(/\s/g,''); // имя цветовой модели
//var color_model_ref = window.location.hash.toString().match(/colors-[a-z]+/);

alert(color_model);

/* смена дефолтной цветовой модели при переходе из другой версии */
//if ( color_model_ref != 'null' ) {
//	$('body').attr('class',$('body').attr('class').replace(/colors-[a-z]*/g,'')).addClass(color_model_ref);
//} // добавляем имя цветовой модели от предыдущей версии просмотра

/* корректировка ссылок в выпадающем меню выбора версий пототипа */
$('a[href*="#/"]').each(function(){
	$(this).click(function(){
		var link = $(this).attr('href');
		$('#prototype-version-select option').each(function(){
			$(this).attr('value',$(this).attr('value').replace(/\/#\/.*/,'/'+link));
		});
	});
});

/* в момент загрузки страницы */
$('#prototype-version-select option').each(function(){
	var version = $(this).attr('value').replace(/\.\.\//,'').replace(/\/#\//,'');
	// выбор активной версии прототипа
	if ( window_location_href.indexOf(version) != -1 ) {
		$(this).attr('selected','selected');
	} // если версия открытого экрана соответствует пункту меню
	// навешивание коротких ссылок при переходе внутри версии
	if ( version == version_ref || version_ref == '' ) {
		$(this).attr('value',$(this).attr('value').replace(/\/#\/.*/,'/#'+link));
	}
});
