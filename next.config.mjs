import { withNextVideo } from "next-video/process";
import withVideos from "next-videos"
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    }
};

// export default withNextVideo(nextConfig);

export default  withVideos(nextConfig);

