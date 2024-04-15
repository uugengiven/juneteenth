/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sequelize'],
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.s3.us-east-2.amazonaws.com',
          pathname: '/photos/**'
        }
      ]
    }
};

export default nextConfig;
