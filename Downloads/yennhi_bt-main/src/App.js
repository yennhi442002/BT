import React from 'react';
import MyAvatar from './Hinh-anh-xin-chao-ngo-nghinh.png';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={MyAvatar} alt="My Avatar" width={500} height={500} />
          <p>Xin chao moi nguoi</p>
          <a
              className="App-link"
              href="https://www.facebook.com/yennhi.vuong.547"
              target="_blank"
              rel="noopener noreferrer"
          >
            You can contact me through facebook here
          </a>
          <h2>This is my favorite song, enjoy it!!! :)))</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ecBco63zvas?si=ifz5dhKWaHCfpggS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </header>

        {/* Footer */}
        <footer className="App-footer">
          {/* Add your footer content here */}
          <p>Vuong Thi Yen Nhi_20521721</p>
        </footer>
      </div>
  );
}

export default App;
