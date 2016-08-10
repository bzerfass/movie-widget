<template>
	<div id="app">
		<movie-widget :limit="5"></movie-widget>
	</div>
</template>

<script>
import MovieWidget from './components/MovieWidget'

export default {
  components: {
	MovieWidget
  }
}
</script>

<style>

@import "./variables.scss";

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  max-width: 600px;
}
</style>
