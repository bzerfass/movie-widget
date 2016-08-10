import $ from 'jquery';

const KEY = '6czx2pst57j3g47cvq9erte5';
const PUBLIC_URL = 'http://api.rottentomatoes.com/api/public/v1.0';
const PRIVATE_URL = 'https://www.rottentomatoes.com/api/private/v1.0';

let RottenTomato = {

  	load : (options, cb) => {

  		options = {
  			limit: options.limit || 5,
  		};

  		$.getJSON(`${PRIVATE_URL}/m/list/find?page=1&limit=${options.limit}&type=in-theaters&sortBy=popularity`, (data) => {
  			cb(data);
  		});
  	},
}

export default RottenTomato