/* Установка индикаторов на родителей */
function preset_indicators(
	sel_toRec, // селектор элемента-признака
	sel_parent, // селектор родителя
	sel_parent_in, // селектор внутри родителя
	class_indicator // класс индикатора
	) {
	$(sel_toRec).each(function () {
		$(this).closest(sel_parent).find(sel_parent_in).addClass(class_indicator);
	});
}