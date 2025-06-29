import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, cyan.400, blue.500)"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          bgClip={"text"}
          textAlign={"center"}
        >
          <Link to={"/"}> J Sari-sari Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaRegSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode !== "light" ? <FaSun /> : <FaRegMoon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
