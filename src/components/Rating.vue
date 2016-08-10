<template>
  	<div class="movie-rating">
		<img v-for="star in stars" track-by="$index" class="star" src="../assets/star.svg">
	</div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
	score: Number,
	stars: Array
  },
  computed: {

  	stars: function () {

  		// Used link to determine star ratings
  		// https://www.rottentomatoes.com/about/.
  		let stars = [1];

  		if (this.score >= 30) stars.push(1);
  		if (this.score >=59) stars.push(1);
  		if (this.score >= 63) stars.push(1);
  		if (this.score > 75) stars.push(1);

  		return stars;
  	}
  }
}
</script>

<style lang="scss" scoped>

	.movie-rating {
		padding: 0px 16px 16px 16px;

		.star {
			width: 12.4px;
  			height: 11.8px;
  			padding-right: 1.6px;
		}
	}
</style>