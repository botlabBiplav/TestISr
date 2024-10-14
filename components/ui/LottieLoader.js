import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/your-animation.json'; // Path to your Lottie JSON file

const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieLoader;