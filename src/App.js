import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [subtitles, setSubtitles] = useState([]);
  let srtContent = "";

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      console.log("test message");
      srtContent = content;
      console.log(srtContent);
      const parsedSubtitles = parseSRT(content);
      setSubtitles(parsedSubtitles);
    };
    reader.readAsText(file);
  };

  const parseSRT = (content) => {
    // Implement SRT parsing logic here
    // Return an array of subtitle objects with start time, end time, and text
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My awesome SRT file player</h1>
        <input type="file" onChange={handleFileUpload} accept=".srt" />
        <p>{srtContent}hi</p>
      </header>
    </div>
  );
}

export default App;
