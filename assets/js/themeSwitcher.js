const handleSwitchTheme = () => {
	const isDark = window.localStorage.getItem('theme') === 'dark';
	document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');

	localStorage.setItem("theme", document.documentElement.getAttribute('data-theme'));
}

document.addEventListener('DOMContentLoaded', () => {
	const theme = (() => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	})();
	document.documentElement.setAttribute('data-theme', theme);
	window.localStorage.setItem('theme', theme);
	document.querySelector('#theme-switcher').addEventListener('click', handleSwitchTheme);
});