if(process.env.TRAVIS){
  module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    },
    assetPrefix: "/archery-website/",
    env: {
      BACKEND_URL: "/archery-website"
    },
    basePath: '/archery-website',
  }
}
else{
  module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    },
    assetPrefix: "",
    env: {
      BACKEND_URL: ""
    },
    basePath: '',
  }
}