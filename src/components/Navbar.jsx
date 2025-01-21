import React, { useState } from "react";
import styled from "styled-components";
import { AddRounded, ExploreRounded, MenuRounded, ChatRounded } from "@mui/icons-material";
import Button from "./button";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/UserSlice";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 660px) {
    padding: 10px 12px;
  }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TextButton = styled.span`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function Navbar({ setOpenAuth, openAuth, currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Container>
      <NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        AI Artistry
      </NavLogo>

      <ButtonContainer>
        {path[1] === "post" ? (
          <Button
            onClick={() => navigate("/")}
            text="Explore Posts"
            leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
            type="secondary"
          />
        ) : (
          <Button
            onClick={() => navigate("/post")}
            text="Create New Post"
            leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          />
        )}

        {/* Chat with AI Button */}
        <Button
          onClick={() => navigate("/chat")}
          text="Chat with AI"
          leftIcon={<ChatRounded style={{ fontSize: "18px" }} />}
          type="primary"
        />

        {/* Conditional Rendering for User Actions */}
        {/* {currentUser ? (
          <>
            <Avatar
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/profile")}
              alt={currentUser.name}
              src={currentUser.avatar}
            />
            <TextButton onClick={handleLogout}>Log Out</TextButton>
          </>
        ) : (
          <TextButton onClick={() => setOpenAuth(!openAuth)}>Sign In</TextButton>
        )} */}
      </ButtonContainer>
    </Container>
  );
}

export default Navbar;
