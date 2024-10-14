import React from 'react';
import LottieLoader from './LottieLoader';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <LottieLoader />
    </div>
  );
};

export default LoadingScreen;