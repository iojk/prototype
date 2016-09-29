// versions.js

// переменные из адресной строки браузера
var address_location = window.location.href; // полный адрес экрана
var address_version = address_location.replace(/\/#.*/,'').match(/\/[^/]*$/).toString().replace(/[/]/,''); // имя версии
var address_hash = address_location.match(/\/#.*/).toString().replace(/#[^/].*/,'') // адрес без учета якоря
var address_short = address_hash.replace(/\/#/,'').replace(/\?.+/,''); // короткий адрес экрана
var address_colors_r = address_hash.match(/colors[-][^&]*/);
var address_colors = ''; // имя цветовой модели
// переменные из тела документа
var doc_version = $('base').attr('href').replace(/..\//,'').replace(/\/.*/,''); // имя версии из заголовка документа
var doc_colors = $('body').attr('class').match(/colors-[^ ]*/).toString(); // имя цветовой модели

/* кнопка скрытия нижней панели */
$('.footer-close').click(function(){ $(this).closest('.navbar').hide(); });

/* начальная установка параметров */
$('a[href*="#/"]').each(function(){
	$(this).click(function(){
		address_short = $(this).attr('href').replace(/#/,'').replace(/\?.*/,'');
	});
});
$('#prototype-color-select select').change(function(){
	address_colors = $(this).val();
	doc_colors = address_colors;
	window.location = '../' + address_version + '/#' + address_short + '?' + address_colors;
	colorChange('body',address_colors);
	linkChange('a[href*="#/"]',/(\?.*)|$/,address_colors);
    versionChange('#prototype-version-select select',address_colors);
});

if (address_colors_r) { // цвет объявлен в запросе адресной строки
	address_colors = address_colors_r.toString();
	doc_colors = address_colors;
    colorChange('body',address_colors);
    linkChange('a[href*="#/"]',/(\?.*)|$/,address_colors);
    versionChange('#prototype-version-select select',address_colors);
} else {
	address_colors = doc_colors;
	$('#prototype-color-select select option').removeAttr('selected');
	$('#prototype-color-select select option[value="'+ doc_colors +'"]').attr('selected','selected');
	window.location = '../' + address_version + '/#' + address_short + '?' + doc_colors;
	linkChange('a[href*="#/"]',/(\?.*)|$/,doc_colors);
	versionChange('#prototype-version-select select',doc_colors);
}

/* вставка цветовой модели в ссылки */
function linkChange(selector,mask,modifier) {
	$(selector).each(function(){
		$(this).attr('href',$(this).attr('href').replace(mask,'?'+modifier));
	});
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

/* смена цветовой модели документа */
function colorChange(selector,modifier) {
	$(selector).find('option').each(function(){
		var color = $(this).attr('value');
		if ( address_location.indexOf(color) != -1 ) {
			$(this).attr('selected','selected'); // выбор активной цветовой модели прототипа
        } // если цветовая модель открытого экрана соответствует пункту меню
	});
	$(selector).attr('class',$(selector).attr('class').replace(/colors-[^ ]*/g,'')).addClass(modifier);
}