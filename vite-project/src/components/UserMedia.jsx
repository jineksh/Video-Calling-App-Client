import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react';
const UserMedia = ({ stream }) => {

    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    }, [stream])

    return (
        <div>
            <video
                ref={videoRef}
                muted={true}
                autoPlay
                playsInline
                className="object-cover"
            >
            </video>
        </div>
    )
}

export default UserMedia
