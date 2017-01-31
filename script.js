(function(unicorns) {
	window.document.onkeydown = function(e) {
		if (e.keyCode == 85) {
			var unicornStyles = document.createElement('style');
			unicornStyles.type = 'text/css';
			unicornStyles.innerHTML = '.unicornImage{animation:shake-shake 7s infinite ease-in-out;position:fixed;top:50px;visibility:visible;z-index:5000}@keyframes shake-shake{from{left:-50%}to{left:120%}10%,30%,50%,70%,90%{transform:rotate(10deg)}100%,20%,60%{transform:rotate(-30deg)}40%,80%{transform:rotate(-20deg)}}';
			document.head.appendChild(unicornStyles);

			var currentTime = new Date();
			var submitTime = currentTime.getTime();
			var unicorn = document.createElement('img');
			unicorn.src = 'https://www.cornify.com/getacorn.php?r='+submitTime;
			unicorn.alt = 'Unicorns are awesome.';
			unicorn.className = 'unicornImage';	
			document.body.appendChild(unicorn);

			setTimeout(function(){
				document.head.removeChild(unicornStyles);
				document.body.removeChild(unicorn);
			}, 7000);
		}
	};
	return "YAY";
})();