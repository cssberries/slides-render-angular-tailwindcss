const merge = require( 'webpack-merge' );

module.exports = ( config ) => {
  const isProd = config.mode === "production";
  const tailwindConfig = require( "./tailwind.config.js" )( isProd );

  return merge( config, {
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              syntax: 'postcss-less',
              plugins: [
                require( 'postcss-import' ),
                require( 'tailwindcss' )( tailwindConfig ),
                require( 'autoprefixer' ),
              ]
            }
          }
        }
      ]
    }
  } );
};
