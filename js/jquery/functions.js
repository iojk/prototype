
/* Установка индикатора по клику */
function click_indicator(
	sel_toСlick, // селектор элемента для клика
	class_indicator // css-класс активного индикатора
	) {
	$(sel_toСlick).each(function () {
		// проверка начального состояния флага
		if ($(this).is('.'+class_indicator)) {
			var clickFlag = false;
		} else {
			var clickFlag = true;
		}
		$(this).click(function () {
			if (clickFlag) {
				clickFlag = false;
				$(this).addClass(class_indicator);
			} else {
				clickFlag = true;
				$(this).removeClass(class_indicator);
			}
		});
	});
}

/* Скрытие столбцов таблицы */
function table_cols(
	tables,
	thExp,
	colExp,
	celCont,
	celContMin,
	titlePlus,
	titleMinus
) {
	$(tables).each(function(){
		var table = $(this);
		var ths = table.find('thead th');
		var numCells = ths.length;
		table.find('thead th'+thExp).find('.th-content').after('<div class="col-expand fa fa-minus" title="'+titleMinus+'"></div>');
		ths.each(function(e){
			var th = $(this);
			var thw = th.find('.th-content').width()
			 	+ th.find('.th-content:before').width()
				+ th.find('.col-expand').width() + 30;
			var flag = true;
			th.closest('table').find('.col-checks').prepend(
				'<label class="label-box form-check">'+
					'<input class="form-check-input pull-left" type="checkbox">'+
				'</label>');
			th.find(colExp).click(function(){
				if (flag) {
					flag = false;
					th.addClass('width-min');
					$(this).removeClass('fa-minus').addClass('fa-plus').attr('title',titlePlus);
					table.find('tr').each(function(){
						$(this).find('td').eq(e).find(celCont).addClass(celContMin).css('max-width',thw);
					});
				} else {
					flag = true;
					th.removeClass('width-min');
					$(this).removeClass('fa-plus').addClass('fa-minus').attr('title',titleMinus);
					table.find('tr').each(function(){
						$(this).find('td').eq(e).find(celCont).removeClass(celContMin).css('max-width','100%');
					});
				}
			});
		});
		$('.col-checks .label-box.form-check').each(function(e){
			var flag = true;
			$(this).find('input').change(function(){
				if (flag) {
					flag = false
					table.find('tr').each(function(){
						$(this).find('td,th').eq(e).hide();
					});
				} else {
					flag = true
					table.find('tr').each(function(){
						$(this).find('td,th').eq(e).show();
					});
				}
			});
		});
	});
}

// выбор строк таблицы
function row_select(
	selControl,
	selChecks,
	selRow,
	rowMark
) {
	$(selControl).each(function(){
		var chek = true;
		var thistable = $(this).closest('table');
		$(this).change(function(){
			if (chek) {
				chek = false;
				thistable.find(selChecks).prop({"checked":true});
				thistable.find(selRow).closest('tr').addClass(rowMark)
			} else {
				chek = true;
				thistable.find(selChecks).prop({"checked":false});
				thistable.find(selRow).closest('tr').removeClass(rowMark)
			}
		});
	});
	$(selRow+' input').each(function(){
		$(this).change(function(){
			if ($(this).is(':checked')) {
				$(this).closest('tr').addClass(rowMark);
			} else {
				$(this).closest('tr').removeClass(rowMark);
			}
		});
	});
}

/* Автоподбор ширины инпута */
function input_width_auto(
	ev,
	sel_input,
	letter_width,
	padding_width
	) {
	$(sel_input).each(function(){
		$(this).attr(ev,'this.style.width = this.value.length*'
		+letter_width // ширина моноширинного символа в REM
		+' + '+padding_width // ширина внутреннего отступа в поле формы
		+'*2 + "rem";');
		var ph_width = $(this).attr('placeholder').length*0.9+'rem';
		$(this).css({'width':ph_width,'min-width':ph_width});
	});
}
