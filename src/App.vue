<template>
<div id="app">
    <router-view />
</div>
</template>

<style lang="scss">
// ----------------------------------------------
// FIX BODY MARGIN & APP HEIGHT -----------------
body {
    margin: 0;
    background:
        linear-gradient(rgba($color-black, 0.8), rgba($color-black, 0.8)),
        url('https://i.imgur.com/G40dzV7.jpg');
}
#app { min-height: 100vh; }
</style>
