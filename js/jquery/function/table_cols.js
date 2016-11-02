/* Управление столбцами таблиц */
function table_cols(
	tables, // селектор для таблиц, с регулировкой колонок
	tableNum, // префикс класса для нумерации таблиц
	thWrapIn, // селектор внутренней обертки заголовка колонки, сожержащий текст
	thExp, // селектор - признак заголовка сворачиваемой колонки
	colExp, // класс кнопки разворачивания свернутой ячейки
	celCont, // селектор содержимого для текста в ячейке
	celContMin, // модификатор установки свернутого состояния блока внутри ячейки
	titlePlus, // подсказка для кнопки свернутого состояния колонки
	titleMinus, // подсказка для кнопки развернутого состояния колонки
	sMin, // класс символа из FontAwesome для индикации свернутого заголовка
	sMax, // класс символа из FontAwesome для индикации развернутого заголовка
	checkHideColWrap, // селектор контейнера чекбоксов для выборочного скрытия колонок
	hideCol, // класс для индикации ячейки скрываемой колонки
	titleColHide, // подсказка по ховеру для скрытого столбца
	titleColShow // подсказка по ховеру для видимого столбца
) {
	$(tables).each(function(ti){
		var table = $(this);
		var ths = table.find('thead th');
		var numCells = ths.length;
		table.addClass(tableNum+ti)
			.find('thead th'+thExp).find(thWrapIn)
			.after('<div class="'+colExp+' fa '+sMin+'" title="'+titleMinus+'"></div>');
		ths.each(function(e){
			var th = $(this);
			var thw = th.find(thWrapIn).width()
			 	+ th.find(thWrapIn+':before').width()
				+ th.find('.'+colExp).width() + 30;
			var flag = true;
			th.closest('table').find(checkHideColWrap).prepend(
				'<label class="label-box form-check">'+
					'<input class="form-check-input pull-left" type="checkbox">'+
				'</label>');
			th.find('.'+colExp).click(function(){
				if (flag) {
					flag = false;
					th.addClass('width-min');
					$(this).removeClass(sMin).addClass(sMax).attr('title',titlePlus);
					table.find('tr').each(function(){
						$(this).find('td').eq(e).find(celCont).addClass(celContMin).css('max-width',thw);
					});
				} else {
					flag = true;
					th.removeClass('width-min');
					$(this).removeClass(sMax).addClass(sMin).attr('title',titleMinus);
					table.find('tr').each(function(){
						$(this).find('td').eq(e).find(celCont).removeClass(celContMin).css('max-width','100%');
					});
				}
			});
		});
		$(checkHideColWrap+' .label-box.form-check').each(function(e){
			var label = $(this);
			var flag = true;
			var th = '.'+tableNum+ti+' thead tr th:nth-child('+(e+1)+')';
			var td = '.'+tableNum+ti+' tbody tr td:nth-child('+(e+1)+')';
			var thText = $(th).find('.th-content').text().replace(/\s+/g,' ');
			label.attr('title',titleColShow+thText);
			label.hover(
				function(){ $(th).addClass(hideCol); $(td).addClass(hideCol); },
				function(){ $(th).removeClass(hideCol); $(td).removeClass(hideCol); }
			);
			label.find('input').change(function(){
				if (flag) {
					flag = false;
					$('.'+tableNum+ti).find('caption').append('<style class="col-num-'+e+'">'+
					th + ' { width: 0.01% !important; padding-left: 0 !important; padding-right: 0 !important; }' +
					th + ' * { display: none!important; }' +
					td + ' { width: 0.01% !important; padding-left: 0 !important; padding-right: 0 !important; }' +
					td + ' * { display: none!important; } </style>');
					label.attr('title',titleColHide+thText);
				} else {
					flag = true;
					$('.'+tableNum+ti+' style.col-num-'+e).remove();
					label.attr('title',titleColShow+thText);
				}
			});
		});
	});
}