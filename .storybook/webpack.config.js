var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = function (config, env) {
    var config = genDefaultConfig(config, env);

    config.module.loaders.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [/stories/, /components/],
        loader: 'babel-loader!ts-loader'
    })
    
    config.module.loaders.push({
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [/stories/, /components/],
        query: {
            presets: ['react', 'es2015', "stage-0"]
        }
    })
    config.module.loaders.push({
      test: /\.(png|jpg|svg)$/, 
      loader: 'url-loader?limit=8192',
      exclude: /.svg$/
    })
    
    /*
    config.module.loaders.push({
      test: /.svg$/,
      loader: 'svg-url-loader'
    })
    */
    
    config.module.loaders.push({
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        include: [path.resolve(__dirname, '../'), /components/]
    })
    config.resolve.extensions.push(".tsx");
    config.resolve.extensions.push(".ts");
    config.resolve.extensions.push(".js");

    return config;
};


/*
const path = require('path');

module.exports = {
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [/stories/, /components/],
        loader: 'babel-loader!ts-loader'
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [/stories/, /components/],
        query: {
            presets: ['react', 'es2015', "stage-0"]
        }
      },
      {
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        include: [path.resolve(__dirname, '../'), /components/]
      }
    ],
  },
};
*/