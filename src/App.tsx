import React from 'react';
import './App.css';
import PostPreviewContainer from './PostPreviewContainer';
import circularPfp from './pfp-circular.png'
function App() {
  return (
    <div className="App">
      <header className="text-start m-4">
        <p>
          <h1>
            <img src={circularPfp} alt="Logo" className="me-2" style={{width: 75, height: 75}}/>
            <span>
              abeloscher
            </span>
          </h1>
        </p>
      </header>
      <hr className="border border-dark border-5"/>
      <PostPreviewContainer />
    </div>
  );
}

export default App;
