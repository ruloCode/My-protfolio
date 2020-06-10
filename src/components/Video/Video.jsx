import React, {useRef} from 'react';
import useOutsideClick from '../../hooks/useOutsideClick/useOutsideClick';

const Video = (props) => {
  const ref = useRef(null);
  useOutsideClick(ref, props.onClose);
  return (
    <iframe
      title='video'
      src='https://www.youtube.com/embed/rpWsiucQvY8'
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
};

export default Video;
