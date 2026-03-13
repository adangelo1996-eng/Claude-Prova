import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Claude-Prova" : "",
  assetPrefix: isProd ? "/Claude-Prova/" : "",
};

export default nextConfig;
