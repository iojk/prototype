// app-derectives.js

/* установка модификатора родителю по клику на дочернем элементе */
prototypeApp.directive('jq.indicator', function() {
    return { restrict: 'A', link: function() { click_indicator('.jq-indicator','active'); } };
});
/* распознавание и оформление текстовых ссылок в документе */
prototypeApp.directive('jq.textlink', function() {
    return { restrict: 'A', link: function() { window.onload = plain_to_link('.jq-textlink'); } };
});
/* пейджинг таблиц */
prototypeApp.directive('jq.tablepaging', function() {
    return { restrict: 'A', link: function() { $('.jq-tablepaging').oneSimpleTablePagination( {
    	topNav: true,
		rowsPerPage: 10
    } ); } };
});
/* расстановка индикаторов на ярлыки обязательных полей */
prototypeApp.directive('jq.preindicators', function() {
    return { restrict: 'A', link: function() { preset_indicators('[required]','.form-group','.col-form-label','required'); } };
});
/* валидация форм data-bv-validator=""
	formvalidation.io/examples
	bv.doc.javake.cn/examples
*/
prototypeApp.directive('jq.validate', function() {
    return { restrict: 'A', link: function() { $('form').bootstrapValidator( {
		feedbackIcons: {
			valid: 'fa fa-check-circle',
			invalid: 'fa fa-exclamation-circle',
			validating: 'fa fa-repeat'
		}
    } ); } };
});
/* маски полей ввода
	itchief.ru/lessons/javascript/input-mask-for-html-input-element
	jsfiddle.net/itchief/9faffnof
*/
prototypeApp.directive('jq.maskinput', function() {
    return { restrict: 'A', link: function() {
    	$('.mask-phone').mask('8(999) 999-9999');
    	$.mask.definitions['M'] = "[0-1]"; // месяц - первая цифра
		$.mask.definitions['m'] = "[0-2]"; // месяц - вторая цифра
		$.mask.definitions['w'] = "[0-5]"; // недель - первая цифра 52 недели
		$.mask.definitions['D'] = "[0-2]"; // день - первая цифра
        $.mask.definitions['d'] = "[0-9]"; // день - вторая цифра
		$.mask.definitions['Ч'] = "[0-2]"; // час - первая цифра
		$.mask.definitions['ч'] = "[0-9]"; // час - вторая цифра
		$.mask.definitions['М'] = "[0-5]"; // минуты и секунды - первая цифра
		$.mask.definitions['м'] = "[0-9]"; // минуты и секунды - вторая цифра
		$.mask.definitions['h']='[A-Fa-f0-9]'; // шестнадцатеричные числа
		$('.mask-datetime').mask('9999-Mm-DdTЧч:Мм:Мм',{placeholder:'гггг-мм-ддT__:__:__'});
		$('.mask-month').mask('9999-Mm',{placeholder:'гггг-мм'});
		$('.mask-week').mask('9999-Ww9',{placeholder:'гггг-W__'});
		$('.mask-date').mask('9999-Mm-Dd',{placeholder:'гггг-мм-дд'});
		$('.mask-time').mask('Чч:Мм:Мм');
		$('.mask-timerange').mask('с Чч:Мм по Hh:Мм');
		$('.mask-color').mask('#hhhhhh');
    } };
});
/* скрытие колонок в таблицах */
prototypeApp.directive('jq.tablecols', function() {
    return { restrict: 'A', link: function() { table_cols(
    	'.jq-tablecols', // селектор для таблиц, с регулировкой колонок
    	'table-col-n-', // префикс класса для нумерации таблиц
    	'.th-content', // селектор внутренней обертки заголовка колонки, сожержащий текст
    	'.expandable', // селектор - признак заголовка сворачиваемой колонки
    	'col-expand', // класс кнопки разворачивания свернутой ячейки
    	'.cell-content', // селектор содержимого для текста в ячейке
    	'cell-content-min', // модификатор установки свернутого состояния блока внутри ячейки
    	'развернуть колонку', // подсказка для кнопки свернутого состояния колонки
    	'свернуть колонку', // подсказка для кнопки развернутого состояния колонки
    	'fa-minus', // класс символа из FontAwesome для индикации свернутого заголовка
    	'fa-plus', // класс символа из FontAwesome для индикации развернутого заголовка
    	'.col-checks', // селектор контейнера чекбоксов для выборочного скрытия колонок
    	'jq-hover-col', // класс для индикации ячейки скрываемой колонки
    	'Показать столбец', // подсказка по ховеру для скрытого столбца
    	'Скрыть столбец' // подсказка по ховеру для видимого столбца
    ); } };
});
prototypeApp.directive('jq.rowselect', function() {
    return { restrict: 'A', link: function() { row_select(
    	'thead .jq-rowselect input',
    	'tbody .jq-rowselect input',
    	'.jq-rowselect',
    	'row-select'
    ); } };
});
prototypeApp.directive('jq.formservice', function() {
	return { restrict: 'A', link: function() {
		input_width_auto('onkeyup','.input-width-auto',0.62,0.75*2);
		input_width_auto('onkeyup','.number-width-auto',0.62,0.75*2+0.3);
		input_width_auto('onclick','.number-width-auto',0.62,0.75*2+0.3);
	} };
});
/* ленивая подгрузка картинок */
prototypeApp.directive('jq.lazyload', function() {
    return { restrict: 'A', link: function() { $('.jq-lazyload').lazyload( { effect: 'fadeIn', event: 'scroll' } ); } };
});
/* select2 */
prototypeApp.directive('jq.select2', function() {
    return { restrict: 'A', link: function() { $('.jq-select2').select2( {
    	maximumSelectionLength: 2
    } ); } };
});
/* тултипы qtip2.com */
prototypeApp.directive('jq.qtip', function() {
    return { restrict: 'A', link: function() { $('[title!=""]').qtip( {
		position: { target: 'mouse', adjust: { x: -10, y: 20 } },
		style: { classes: 'qtip-youtube qtip-rounded' }} ); }
	};
});
/* выбор даты и времени eonasdan.github.io/bootstrap-datetimepicker */
prototypeApp.directive('jq.datetimepicker', function() {
    return { restrict: 'A', link: function() { $('.jq-datetimepicker').datetimepicker( {
    	locale: 'ru',
    	icons: {
			time: "fa fa-clock-o",
			date: "fa fa-calendar",
			up: "fa fa-arrow-up",
			down: "fa fa-arrow-down"
		}
    } ); } };
});
/* перемещаемые элементы amitgharat.wordpress.com/2013/02/03/an-approach-to-use-jquery-plugins-with-angularjs  */
prototypeApp.directive('jq.draggable', function() {
    return { restrict: 'A', link: function() {
		$('.jq-draggable').draggable( {
			cursor: 'move',
			grid: [ 20, 20 ]
		} ); // для сплошных перемещаемых элементов
		$('.jq-drag-handle').draggable( {
			cursor: 'move',
			grid: [ 20, 20 ],
			handle: '.jq-drag-handler'
    	} ); // для перемещаемых элементов с хваталками
    } };
}); /* api.jqueryui.com/draggable */



