import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  flex: 1;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  border-radius: 20px;
  position: relative; /* Needed for the absolute positioning of the image */
`;

const Image = styled.img`
  width: 100%; /* Ensures the image takes up the full width */
  height: 100%; /* Ensures the image takes up the full height */
  max-width: 500px; /* Optional: Limit the image size */
  max-height: 500px; /* Optional: Limit the image size */
  object-fit: cover; /* Maintains the aspect ratio and covers the container */
  border-radius: 25px;
  background: ${({ theme }) => theme.black + 50};
  position: relative; /* Changed from absolute to avoid layout issues */
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress style={{ color: 'inherit', width: '24px' }} />
          Generating Your Image...
        </>
      ) : (
        <>
          {src ? (
            <Image src={src} alt="Generated" />
          ) : (
            <>Write a prompt to Generate Image</>
          )}
        </>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
