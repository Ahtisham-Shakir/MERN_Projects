import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';

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
                src='https://v16-webapp.tiktok.com/1a7a15297492bab60dd6c45abd1a1749/62d86ea6/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ec68ec7c85de469e94093cd816c77dab/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1394&bt=697&btag=80000&cs=0&ds=3&ft=eXd.6HKVMyq8Z74Knwe2NyfQml7Gb&mime_type=video_mp4&qs=0&rc=Mzc4OmllO2g2M2RmNzw5Z0BpMzU4OmQ6ZnU8PDMzZjczM0AyLS9gLV4vNTYxMC0vNWMuYSNhbS5rcjRnZy1gLS1kMWNzcw%3D%3D&l=202207201506550102440820401224F415'></video>

                <VideoFooter/>
        </div>
    )

}

export default Video