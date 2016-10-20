/* подключение метатегов, скриптов, иконок */

$('head').prepend('\
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><!-- эта meta должна быть первой, иначе не сработает! -->\
	<meta content="width=device-width, initial-scale=1.0" name="viewport"><!-- frontender.com.ua/mobile-web/wtf-viewport -->\
	<meta content="true" name="HandheldFriendly"><!-- frontender.com.ua/mobile-web/useful-mobile-head-elements -->\
	<title>Prototype</title>\
	<link rel="shortcut icon" href="../favicon.ico">\
	<link rel="icon" href="../favicon.ico">\
	<!--[if lt IE 9]>\
    <script defer src="//html5shiv/3.7.3/html5shiv.min.js"></script>\
    <![endif]-->\
	<script defer src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>\
<!-- jQuery -->\
	<script defer src="//cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js"></script><!-- индикатор загрузки github.hubspot.com/pace/docs/welcome -->\
	<script defer src="../js/jquery/functions.js"></script>\
<!-- Bootstrap bootstrap-ru.com/203/javascript.php -->\
	<script defer src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/js/bootstrap.min.js"></script>\
	<script defer src="//cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js"></script><!-- требуется для бутстрапа -->\
<!-- Application -->\
	<script defer src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min.js"></script>\
	<link rel="stylesheet/less" href="style/app.less">');