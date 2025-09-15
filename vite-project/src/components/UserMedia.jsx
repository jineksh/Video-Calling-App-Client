import React, { useRef, useEffect } from 'react';

const UserMedia = ({ stream }) => {
  // Create a reference for the <video> element
  const videoRef = useRef(null);

  useEffect(() => {
    // Whenever "stream" changes, attach it to the video element
    if (videoRef.current) {
      videoRef.current.srcObject = stream; // Assign media stream to <video>
    }
  }, [stream]); // Runs whenever the "stream" prop updates

  return (
    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-video bg-black rounded-xl overflow-hidden shadow-md">
      {/* Video element */}
      <video
        ref={videoRef} // Attach reference
        muted={true} // Mute local stream to avoid feedback loop
        autoPlay // Play video automatically
        playsInline // For iOS Safari compatibility
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default UserMedia;
