/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["via.placeholder.com", "naszsklep-api.vercel.app"],
	},
	experimental: {
		typedRoutes: true,
	},
	redirects: async () => [
		{
			source: "/products",
			destination: "/products/1",
			permanent: false,
		},
	]
};

export default nextConfig;
