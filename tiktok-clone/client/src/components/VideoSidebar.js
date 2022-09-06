import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {
    const [liked, setLiked] = useState(false);
    return (
        <div className='videoSidebar'>
            <div className='videoSidebar__button'>
                {
                    liked ? (<FavoriteIcon fontSize='large' onClick={() => setLiked(false)} />) :
                        (<FavoriteBorderIcon fontSize='large' onClick={() => setLiked(true)} />)
                }
                <p>{liked? likes +1: likes}</p>
            </div>
            <div className='videoSidebar__button'>
                <CommentIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar