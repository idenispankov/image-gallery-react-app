import { useState } from 'react';
import dogs from './images';

function App() {
  const [selectedImage, setSelectedImage] = useState(dogs[0]);

  return (
    <div className='page__container'>
      <div className='main-image__container'>
        <img src={selectedImage} alt='Selected' className='selected-image' />
        <div className='images__container'>
          {dogs.map((image, index) => (
            <img
              style={{
                border: selectedImage === image ? '4px solid purple' : '',
              }}
              key={index}
              src={image}
              alt='dog'
              className='img'
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
