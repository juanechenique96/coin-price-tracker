const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
    }
  },
  assetPrefix: !debug ? 'https://juanechenique96.github.io/coin-tracker/' : '',
}


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com'],
  },
}