// import React, { useState } from "react";
// import styled from "styled-components";
// // import { CreatePost } from "./api"; // Adjust the import path as necessary

// import {SignUpUser} from "../api"
// import Button from "./button"; // Your existing Button component
// import TextInput from "./Textinput"; // Your existing TextInput component

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

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const { name, email, password } = formData;

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     console.log("Form submitted with:", formData); // Debugging line
//     try {
//       const response = await SignUpUser(formData); // Change this if you have a different function for sign-up
//       console.log(response.data);
//       alert("User registered successfully");
//     } catch (error) {
//       if (error.response && error.response.data) {
//         console.error("Error response:", error.response.data);
//         alert(`Signup failed: ${error.response.data.message || "An error occurred"}`);
//       } else {
//         console.error("Error:", error.message);
//         alert("Signup failed: An unexpected error occurred");
//       }
//     }
//   };

//   return (
//     <Container>
//       <div>
//         <Title>Welcome to AI Artistry 👋</Title>
//         <Span>Please sign up with your details here</Span>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
//           <TextInput
//             type="text"
//             name="name"
//             placeholder="Username"
//             value={name}
//             handelChange={handleInputChange}
//           />
//           <TextInput
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             handelChange={handleInputChange}
//           />
//           <TextInput
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             handelChange={handleInputChange}
//           />

//           <TextButton>Forgot Password?</TextButton>

//           <Button
//             type="submit"
//             text="Sign Up"
//             onClick={() => {}}
//           />
//         </div>
//       </form>
//     </Container>
//   );
// };

// export default SignUp;
