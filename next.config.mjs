/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'motorix.themerex.net',
            'localhost',
            'rvrnwheel.com',
            'secure.gravatar.com',
            'static.thenounproject.com'
        ],
    },
};

export default nextConfig;
