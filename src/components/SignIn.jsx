// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import TextInput from "./Textinput"; // Ensure this component exists
// import Button from "./button"; // Ensure this component exists
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { UserSignIn } from "../api";
// import { loginSuccess } from "../redux/reducers/SnackbarSlice";

// const Container = styled.div`
//   width: 100%;
//   max-width: 500px;
//   display: flex;
//   flex-direction: column;
//   gap: 36px;
// `;

// const Title = styled.div`
//   font-size: 30px;
//   font-weight: 800;
//   color: ${({ theme }) => theme.primary};
// `;

// const Span = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 90};
// `;

// const TextButton = styled.div`
//   width: 100%;
//   text-align: end;
//   color: ${({ theme }) => theme.text_primary};
//   cursor: pointer;
//   font-size: 14px;
//   transition: all 0.3s ease;
//   font-weight: 500;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
// `;

// const SignIn = () => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const validateInputs = () => {
//     if (!email || !password) {
//       alert("Please fill in all fields");
//       return false;
//     }
//     return true;
//   };

//   const handelSignIn = async () => {
//     setLoading(true);
//     setButtonDisabled(true);
//     if (validateInputs()) {
//       await UserSignIn({ email, password })
//         .then((res) => {
//           dispatch(loginSuccess(res.data));
//          alert("Login Success ! welcome to AI Artsitry");
//           setLoading(false);
//           setButtonDisabled(false);
//         })
//         .catch((err) => {
//           alert(err.response.data.message);
//           setLoading(false);
//           setButtonDisabled(false);
//         });
//     }
//   };


//   return (
//     <Container>
      
//       <div>
//         <Title>Welcome to AI Artistry 👋</Title>
//         <Span>Please login with your details here</Span>
//       </div>
//       <form >
//         <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
//           {/* Email Input */}
//           <TextInput
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             handelChange={(e) => setEmail(e.target.value)}
//           />

//           {/* Password Input */}
//           <TextInput
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             handelChange={(e) => setPassword(e.target.value)}
//           />

//           <TextButton>Forgot Password?</TextButton>

//           {/* Submit Button */}
//           <Button type="submit" text="Sign In" 
//           onClick={handelSignIn}/>
//         </div>
//       </form>
//     </Container>
//   );
// };

// export default SignIn;
