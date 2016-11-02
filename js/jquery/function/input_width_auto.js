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