// versions.js

var doc_location = window.location.href; // полный адрес экрана
var doc_version  = doc_location.replace(/\/#.*/,'').match(/\/[^/]*$/).toString().replace(/[/]/,''); // имя версии
var doc_hash     = doc_location.match(/\/#.*/).toString().replace(/#[^/].*/,'') // адрес без учета якоря
var doc_address  = doc_hash.replace(/\/#/,'').replace(/\?.+/,''); // короткий адрес экрана
var doc_search   = doc_hash.match(/\?[^#]*/).toString().replace(/\?/,''); // строка поискового запроса
var doc_colors   = doc_search.match(/colors[-][^&]*/); // имя цветовой модели

alert(doc_colors);