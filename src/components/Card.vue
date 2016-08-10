<template>
  	<div class="card card-{{index}}">
  		<div class="movie-info">
  			<div class="movie-title">{{item.title}}</div>
  			<div class="movie-description">{{item.synopsis}}</div>
  			<rating :score="item.tomatoScore"></rating>
  		</div>
  		<div class="movie-poster">
  			<img class="poster" :src="item.posters.primary" alt={{item.title}} />
  		</div>
	</div>
</template>

<script>

import Rating from './Rating';

export default {
	name: 'Card',
	props: {
		item: Object,
		index: Number
	},
	components: {
		Rating
	}
}
</script>

<style lang="scss" scoped>

	@import "../variables.scss";

	.card {
		height: 156px !important;
		border-radius: 2.5px;
		background-color: #f2f3f5;
		position: relative;

		.movie-info {
			float: left;
			position: relative;
			margin-right: 125px;

			.movie-title {
				font-family: $font-regular;
				font-size: 16px;
				font-weight: 400;
				line-height: 1.25;
				letter-spacing: 0.4px;
				padding: 16px 16px 8px 16px;
			}

			.movie-description {
				height: 72px;
				font-family: Roboto;
				font-size: 14px;
				font-weight: 400;
				line-height: 1.29;
				letter-spacing: 0.5px;
				color: #6b6b6b;
				padding: 0px 16px;
				-webkit-line-clamp: 4;
      			-webkit-box-orient: vertical;
      			overflow: hidden;
      			text-overflow: ellipsis;
				display: -webkit-box;
			}
		}

		.movie-poster {
			position: absolute;
			right: 0;
			width: 105px;
			height: 156px;
			img {
				width: inherit;
  				height: inherit;
			}
		}
	}
</style>