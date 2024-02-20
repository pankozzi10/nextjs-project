/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["via.placeholder.com", "naszsklep-api.vercel.app", "static-ourstore.hyperfunctor.com"],
	},
	experimental: {
		typedRoutes: true,
	},
	env: {
		GRAPHQL_URL: process.env.GRAPHQL_URL,
	},
	redirects: async () => [
		{
			source: "/products",
			destination: "/products/1",
			permanent: false,
		},
		{
			source: `/categories`,
			destination: `/categories/t-shirts/1`,
			permanent: false,
		},
	]
};

export default nextConfig;