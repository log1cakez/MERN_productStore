//import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
