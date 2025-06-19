/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps:false,
  transpilePackages: [

    'rc-util',


    "rc-picker",


    "rc-pagination",


    "@ant-design/icons-svg"


  ],
  images:{
    domains:['w7.pngwing.com']
  }
};

export default nextConfig;
