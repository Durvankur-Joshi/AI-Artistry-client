import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Authentication from "./pages/Authentication";
import Chatbot from "./pages/Chatbot";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { open, message, severity } = useSelector((state) => state.snackbar);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <Navbar
            setOpenAuth={setOpenAuth}
            openAuth={openAuth}
            currentUser={currentUser}
          />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/chat" element={<Chatbot />} />
              <Route path="/post" element={<CreatePost />} exact />
            </Routes>
            {/* {openAuth && (
            <Authentication setOpenAuth={setOpenAuth} openAuth={openAuth} />
          )} */}
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
