/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const webpack = require("webpack");

module.exports = nextConfig

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
				'window.jQuery': 'jquery',
            })
        )
        return config
    }
}


module.exports = {
  images: {
    domains: ['picsum.photos'],
  },
}

module.exports = {
  env: {
    dbname:  ['http://localhost'],
  },
}



