

import React from 'react'
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
width:100%;
height:100%;
min-height:300px;
 flex: 1;
 display:flex;
 gap: 16px;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding:  16px;
 border: 2px dashed ${({ theme }) => theme.yellow};

 border-radius:20px;
`;

const Image = styled.img`
 position:absolute;
 object-fit: cover;
  border-radius:25px;
  background:${({ theme }) => theme.black + 50};
`;

const GeneratedImageCard = ({ src, loading }) => {
    return (
        <Container>
            {loading ? (
                <>
                    <CircularProgress
                     style = {{color : "inherit", width:"24px" , height:""}}
                    />
                    Gererate Your Image...
                </>

            ) : (
                <>

                    {

                        src ? <img src={src} /> : <>Write a prompt to Generate Image</>
                    }
                </>
            )
            }
            <Image />
        </Container>
    )
}

export default GeneratedImageCard