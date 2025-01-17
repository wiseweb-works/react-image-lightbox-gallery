import React, { useState } from 'react';

function Picture({ src, photographer }) {
  const [isFull, setIsFull] = useState(false);

  const tamEkranYap = () => {
    setIsFull(!isFull);
  };
  return (
    <div className="picture">
      <div className="imageContainer">
        <img
          src={src}
          alt="img"
          className={isFull ? 'fullscreen' : ''}
          onClick={tamEkranYap}
        />
      </div>
      <div className="info">
        <p>{photographer}</p>
      </div>
    </div>
  );
}

export default Picture;
