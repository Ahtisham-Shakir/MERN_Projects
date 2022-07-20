import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <Video url={'https://v16-webapp.tiktok.com/1a7a15297492bab60dd6c45abd1a1749/62d86ea6/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ec68ec7c85de469e94093cd816c77dab/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1394&bt=697&btag=80000&cs=0&ds=3&ft=eXd.6HKVMyq8Z74Knwe2NyfQml7Gb&mime_type=video_mp4&qs=0&rc=Mzc4OmllO2g2M2RmNzw5Z0BpMzU4OmQ6ZnU8PDMzZjczM0AyLS9gLV4vNTYxMC0vNWMuYSNhbS5rcjRnZy1gLS1kMWNzcw%3D%3D&l=202207201506550102440820401224F415'} 
        channel={'Ahtisham Shakir'}
        description={'Feel This Song just Amazing'}
        song={'Kabira By Mubeen Butt'}
        likes={173}
        messages={128}
        shares={77}
        />

        <Video url={'https://v16-webapp.tiktok.com/f40d24a7413b43d3b9a2f2bdde0afb26/62d8c1f4/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/40cd1b04ded2448cb90f05428fb580af/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1316&bt=658&btag=80000&cs=0&ds=3&ft=eXd.6HKVMyq8ZT3Unwe2Neiaml7Gb&mime_type=video_mp4&qs=0&rc=NjwzZTU2NWZoNTQ1PDw2ZEBpM212bmY6ZjNtODMzZjczM0AyMl5hMWM0X2ExMC5iYS5hYSNlM2s0cjRnZm9gLS1kMWNzcw%3D%3D&l=2022072021025201024501520501539765'} 
        channel={'Ahtisham Shakir'}
        description={'Tag Your Love'}
        song={'Best of Arigit Singh'}
        likes={1003}
        messages={968}
        shares={779}
        />
        
      </div>
    </div>
  );
}

export default App;
