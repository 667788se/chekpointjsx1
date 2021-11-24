import hapy from './hapy.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">HappyAsfor</h1>
          <br />
              </div>
            
          <img src="/hape.jpg"/>
          <br />
          <img src={hapy} alt="hape" />
          <br />
          <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
