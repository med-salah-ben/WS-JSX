 import './App.css';
import Comments from './Components/Comments';
import MainVideo from "./Components/MainVideo"
import SuggestionVideos from './Components/SuggestionVideos/SuggestionVideos.js';

function App() {
  return (
    <div className="container-fluid">
    <div className="row mt-3">    
      <MainVideo />
      <SuggestionVideos />

    </div>
     <div>
       <Comments />
     </div>
    </div>

  );
}

export default App;
