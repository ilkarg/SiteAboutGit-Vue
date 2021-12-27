<template>
  <div id="nav">
    <router-link to="/">Главная</router-link> |
    <router-link to="/instruction">Инструкция по применению</router-link> |
    <router-link to="/links">Ссылки</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
	text-decoration: none;
	transition: 0.2s;
}

#nav > a:hover {
	color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
