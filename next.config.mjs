/** @type {import('next').NextConfig} */
const nextConfig = {
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
