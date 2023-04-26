/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['imgs.xkcd.com','i.pinimg.com' , 'techcrunch.com','cdn.mos.cms.futurecdn.net','s.yimg.com', 'media.wired.com', 'cdn.vox-cdn.com', 'www.reuters.com']
  },
  // i18n:{
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en'
  // }
}

module.exports = nextConfig
