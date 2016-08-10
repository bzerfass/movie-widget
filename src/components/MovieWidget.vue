<template>
	<div class="widget-container">
		<div class="heading-container">
			<h1>In Theaters</h1>
			<a class="more" href="https://www.rottentomatoes.com/browse/in-theaters/" target="_blank">View More</a>
		</div>
		<h3>Top Movies This Week</h3>
		<swiper v-ref:swiper
				direction="horizontal"
				:mousewheel-control="true"
				:performance-mode="false"
				:pagination-visible="false"
				@slide-change-end="onSlideChangeEnd">
	      			<card v-for="item in items" :item="item" :index="$index"></card>
    	</swiper>
    	<div class="pagination">
    		<template v-for="item of items">
    			<span v-if="slide == $index" class="pagination-bullet active"></span>
    			<span v-else class="pagination-bullet"></span>
    		</template>
    	</div>
  	</div>
</template>

<script>

import Swiper from 'vue-swiper';
import Card from './Card';
import RottenTomatoes from '../store/RottenTomatoes';


export default {
	name: 'MovieWidget',
	props: {
		limit: Number
	},
	components: {
		Swiper, Card
  	},
  	data () {
  		return {
  			items: [],
  			slide: 0
  		}
  	},
  	created () {
  		RottenTomatoes.load({limit: this.limit}, (data) => {
  			return this.items = data.results;
  		});
  	},
	methods: {
		onSlideChangeEnd (currentPage) {
			return this.slide = currentPage - 1;
    	},
	},
}
</script>

<style lang="scss" scoped>
	@import "../variables.scss";

	.widget-container {
		width: inherit;
	}

	.heading-container {
		display: flex;
		justify-content: space-between;

		h1 {
			height: 28.5px;
			font-family: $font-regular;
			font-size: 24px;
			font-weight: 300;
			color: #3b3f47;
			margin: 6px 0px;
		}
		.more {
			height: 16.5px;
	  		font-family: $font-regular;
	  		font-size: 14px;
	  		font-weight: 300;
	  		letter-spacing: 0.5px;
	  		text-align: right;
	  		color: #276cf2;
	  		align-self: center;
	  		text-decoration: none;
		}
	}

	h3 {
		font-family: $font-regular;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0.5px;
		color: #6b6b6b;
		margin: 0px;
		padding: 0px 0px 16px 0px;
	}

	.pagination {
		width: 100%;
		margin-top: 16px;
		text-align: center;

		.pagination-bullet {
			display: inline-block;
			width: 6px;
  			height: 6px;
  			border: solid 1px #979797;
			border-radius: 50%;
			transition: all .5s ease;
			margin: 0 3px;

			&.active {
				background: #979797;
			}
		}
	}

	@media screen and (max-width: 480px) {
		.widget-container {
			width: 400px;
		}
	}

	@media screen and (min-width: 480px) and (max-width: 750px) {
		.widget-container {
			width: 400px;
		}
	}

	@media screen and (min-width: 750px) and (max-width: 1200px) {
		.widget-container {
			width: 600px;
		}
	}
</style>