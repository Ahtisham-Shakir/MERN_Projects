import React, { useRef, useState } from 'react'
import './Video.css'

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>
            <video
                className='video__player'
                onClick={handleVideoPress}
                loop
                ref={videoRef}
                src='https://v16-webapp.tiktok.com/c4c34d067a31b4f36d9ffbef6597f8e6/62d7012c/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/19a7582766994fd7afd2086b6e0f3578/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3568&bt=1784&btag=80000&cs=0&ds=3&ft=eXd.6HKVMyq8Z3JeIwe2NqiQml7Gb&mime_type=video_mp4&qs=0&rc=ZjQ7aDk5MzczOWU0NDpmNUBpajY0M2Q6ZjZzZDMzZjczM0A2NDNgYTI0NS0xLzJiYzEwYSNsLTA2cjRfajBgLS1kMWNzcw%3D%3D&l=202207191308050102452461052024CE9E'></video>
        </div>
    )

}

export default Video