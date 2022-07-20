import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@Ahtisham_Shakir</h3>
        <p>This is description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className='videoFooter__icon' />
          <Ticker mode='smooth' move={true}>
            {({ index }) => (
              <>
                <p>Kabira By Mubeen Butt</p>
              </>

            )}
          </Ticker>
        </div>
      </div>
      <img className='videoFooter__record' src='https://static.thenounproject.com/png/934821-200.png' alt='disc' />
    </div>
  )
}

export default VideoFooter