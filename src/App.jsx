import { useRef } from "react";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const audioRef = useRef(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <AudioPlayer
        ref={audioRef}
        url={
          "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
        }
      />
      <button onClick={() => audioRef.current.play()}>Tocar</button>
      <button onClick={() => audioRef.current.pause()}>Pausar</button>
      <button onClick={() => audioRef.current.stop()}>Parar</button>
      <button onClick={() => audioRef.current.setVolume(0.1)}>
        Aumentar Volume
      </button>
      <button onClick={() => audioRef.current.setVolume(-0.1)}>
        Diminuir Volume
      </button>
      <button onClick={() => audioRef.current.getCurrentTime()}>
        Conseguir tempo atual da música
      </button>
      <button onClick={() => audioRef.current.setCurrentTime(1.2)}>
        Pular música
      </button>
      <button onClick={() => audioRef.current.isPlaying()}>
        Está tocando?
      </button>
    </div>
  );
}

export default App;
