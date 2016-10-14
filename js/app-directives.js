// app-derectives.js

/* установка модификатора родителю по клику на дочернем элементе */
prototypeApp.directive('jq.indicator', function() {
    return { restrict: 'A', link: function() { click_indicator('.jq-indicator','active'); } };
});
/* пейджинг таблиц */
prototypeApp.directive('jq.tablepaging', function() {
    return { restrict: 'A', link: function() { $('.jq-tablepaging').oneSimpleTablePagination( {
    	topNav: true,
		rowsPerPage: 10
    } ); } };
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



