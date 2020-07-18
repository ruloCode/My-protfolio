import React, { useState } from 'react';

const Upload = () => {
  const [state, setState] = useState({
    selectedFile: null,
  });
  const handleSelectedFile = (event) => {
    setState({
      selectedFile: event.target.files[0],
    });
  };
  const handleUpload = () => {
    const data = new FormData();
    data.append(
      'file',
      state.selectedFile,
      state.selectedFile.name,
    );
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then((response) => response.json())
      .then((filename) => console.log(filename))
      .catch((error) => console.errors(error));
  };
  return (
    <div>
      <p>
        Upload photo profile:
        <input type='file' onChange={handleSelectedFile} />
        <button type='button' onClick={handleUpload}>
          upload
        </button>
      </p>
    </div>
  );
};
export default Upload;
