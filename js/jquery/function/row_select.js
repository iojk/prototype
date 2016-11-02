// Выбор строк таблицы
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