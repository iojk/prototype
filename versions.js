// versions.js

// переменные из адресной строки браузера
var address_location = window.location.href; // полный адрес экрана
var address_version = address_location.replace(/\/#.*/,'').match(/\/[^/]*$/).toString().replace(/[/]/,''); // имя версии
var address_hash = address_location.match(/\/#.*/).toString().replace(/#[^/].*/,'') // адрес без учета якоря
var address_short = address_hash.replace(/\/#/,'').replace(/\?.+/,''); // короткий адрес экрана
var address_search_r = address_hash.match(/\?[^#]*/);
var address_search = '';
var address_colors_r = address_hash.match(/colors[-][^&]*/);
var address_colors = ''; // имя цветовой модели
// переменные из тела документа
var doc_version = $('base').attr('href').replace(/..\//,'').replace(/\/.*/,''); // имя версии из заголовка документа
var doc_colors = $('body').attr('class').match(/colors-[^ ]*/).toString(); // имя цветовой модели

$('a[href*="#/"]').each(function(){
	$(this).click(function(){
		address_short = $(this).attr('href').replace(/#/,'').replace(/\?.*/,'');
	});
});

if (address_colors_r) { // цвет объявлен в запросе адресной строки
	address_search = address_search_r.toString();
	address_colors = address_colors_r.toString();
    colorChange('body',address_colors);
    linkChange('a[href*="#/"]',/$/,address_colors);
    versionChange('#prototype-version-select select',address_colors);
} else {
	linkChange('a[href*="#/"]',/$/,doc_colors);
	versionChange('#prototype-version-select select',doc_colors);
}

/* вставка цветовой модели в нижнее меню */
function versionChange(selector,colors) {
	$(selector).find('option').each(function(){
		var version = $(this).attr('value').replace(/\.\.\//,'').replace(/\/#\//,'');
		if ( address_location.indexOf(version) != -1 ) {
        	$(this).attr('selected','selected'); // выбор активной версии прототипа
        } // если версия открытого экрана соответствует пункту меню
	});
	$(selector).change(function(){
		window.location = '../' + this.value + '/#' + address_short + '?' + colors;
	});
}

/* вставка цветовой модели в ссылки */
function linkChange(selector,mask,modifier) {
	$(selector).each(function(){
		$(this).attr('href',$(this).attr('href').replace(mask,'?'+modifier));
	});
}

/* смена цветовой модели документа */
function colorChange(selector,modifier) {
	$(selector).attr('class',$(selector).attr('class').replace(/colors-[^ ]*/g,'')).addClass(modifier);
}

