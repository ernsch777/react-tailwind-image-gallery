import autoprefixer from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './components/imageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  // useEffect(() => {
  //   fetch
  // })
  return (
    <ImageCard />
  );
}

export default App;
