const path = require('path')
module.exports = {
  compiler: {
  styledComponents: true,
},
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles/scss')],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
  images: {
    loader: "imgix",
    path: "",
  },
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    svgo: false, // Optimization caused bugs with some of my SVGs
                },
            },
        ],
    });
    return config;
  }
}
// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   webpack(config, options) {
//     return config
//   }
// })