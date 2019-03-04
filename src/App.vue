<template>
<div
	id="app"
	:class="{'-customCursors': $store.state.customCursors}"
>
    <router-view />
</div>
</template>

<style lang="scss">
// ----------------------------------------------
// INITIALIZE FONT ------------------------------
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
* { font-family: "Roboto", sans-serif; }


// ----------------------------------------------
// FIX BODY MARGIN & APP HEIGHT -----------------
body {
    margin: 0;
    background:
        linear-gradient(rgba($color-black, 0.8), rgba($color-black, 0.8)),
        url('http://all4desktop.com/data_images/original/4175653-skyrim-HD.jpg');
}
#app {
	min-height: 100vh;
	&.-customCursors {
		cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjcwNzYgMjUuNTc1MUwzNS40Njc2IDI0LjgxMTZMMzguNTA3NyAyNS4xNTA5TDM0LjcwNzYgMjUuNTc1MVpNMjQuNTQyMiAzNi41OTc1TDI0LjIwODkgMzkuNjA5OUwyMy45MTI3IDM3LjIyOTdMMjQuNTQyMiAzNi41OTc1Wk0zMy4xMzAxIDI2LjM1OEwyNi4yMzA4IDMzLjI4ODNWMjguMzk2MlYyNy4zNDhMMjcuNzQ1NiAyNy4xMzA3TDMzLjEzMDEgMjYuMzU4Wk0yNS40NzE0IDI0Ljk1MjhMMjUuMzM5OCAyNi4yNzQ4TDI0LjAzMDkgMjYuNDA2MkwxNy4yNjU5IDI3LjA4NThMNS4zNjU1MyA1LjU2ODk0TDI2LjE1MzggMTguMDk3OUwyNS40NzE0IDI0Ljk1MjhaIiBzdHJva2U9IiNGMkYyRjIiIHN0cm9rZS13aWR0aD0iNCIvPgo8L3N2Zz4K'), auto;
		
		.-pointer {
			cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjcwNzYgMjUuNTc1MUwzNS40Njc2IDI0LjgxMTZMMzguNTA3NyAyNS4xNTA5TDM0LjcwNzYgMjUuNTc1MVpNMjQuNTQyMiAzNi41OTc1TDI0LjIwODkgMzkuNjA5OUwyMy45MTI3IDM3LjIyOTdMMjQuNTQyMiAzNi41OTc1Wk0zMy4xMzAxIDI2LjM1OEwyNi4yMzA4IDMzLjI4ODNWMjguMzk2MlYyNy4zNDhMMjcuNzQ1NiAyNy4xMzA3TDMzLjEzMDEgMjYuMzU4Wk0yNS40NzE0IDI0Ljk1MjhMMjUuMzM5OCAyNi4yNzQ4TDI0LjAzMDkgMjYuNDA2MkwxNy4yNjU5IDI3LjA4NThMNS4zNjU1MyA1LjU2ODk0TDI2LjE1MzggMTguMDk3OUwyNS40NzE0IDI0Ljk1MjhaIiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNGMkYyRjIiIHN0cm9rZS13aWR0aD0iNCIvPgo8L3N2Zz4K'), auto;
		}
	}
}


// ----------------------------------------------
// FANCY SCROLLBARS -----------------------------
*::-webkit-scrollbar {
    width: 8px;
    background: transparent;
}
*::-webkit-scrollbar-thumb {
    background: rgba($color-white, 0.1);
    transition: background 0.1s ease;
}
*:hover::-webkit-scrollbar-thumb {
    background: rgba($color-white, 0.5);
}


// ----------------------------------------------
// DISABLED -------------------------------------
.disabled {
	opacity: 0.5;
	pointer-events: none;
}
</style>
