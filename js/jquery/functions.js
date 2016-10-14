
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


