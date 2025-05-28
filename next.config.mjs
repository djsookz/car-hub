/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        serverComponentsHmrCache: false,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "yilzdbqsxzvusfqwiukz.supabase.co"
            }
        ]
    },

    async header(){
        return [
            {
                source:"/embed",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frane-src 'self' https://roadsidecoder.created.app;" 
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
