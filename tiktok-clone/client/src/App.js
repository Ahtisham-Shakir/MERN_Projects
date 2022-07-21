import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get('/getvideos');
      setVideos(response.data);

      return response
    }
    fetchVideos();
  }, [])


  return (
    <div className="app">
      <div className='app__videos'>
        {
          videos.map((video) => (
            <Video {...video} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
