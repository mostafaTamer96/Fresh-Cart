import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
      // https://ecommerce.routemisr.com/api/v1/products 
        protocol:"https",
        hostname:"ecommerce.routemisr.com",
        pathname:"/**"
      }
    ]
  }
};

export default nextConfig;
