/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import gql from 'graphql-tag';
import { client } from '../../utils/ApolloProvider';

const Upload = () => {
  // get profileID
  // 5f10ccadbef0ef600980fd8e
  const uploadFile = gql`
    mutation($profileId: ID! $filename: String! ){
      uploadImage(profileId: $profileId, filename: $filename)
    }
  `;
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
      .then(async (filename) => {
        const profileId = '5f10ccadbef0ef600980fd8e';
        await client.mutate({
          variables: { profileId, filename },
          mutation: uploadFile,
        });
      })
      .catch((error) => console.error(error));
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
