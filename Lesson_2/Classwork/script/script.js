window.onload = function() {
	alert('Файл скриптов подключен верно!');
	var a = document.querySelector('p');
	a.onclick = function() {
		alert('Клик на текст!');
	};
};
