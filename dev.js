const slidesListRender = require( './generate-slides' );
const treePath = '../';

module.exports = {

	update: function update() {
		slidesListRender.generate( this.getTree( treePath ) );
	},

	getTree: function getTree( path ) {
		return JSON.parse( fs.readFileSync( path, 'utf8' ) )[0];
	}
};
module.exports.update();