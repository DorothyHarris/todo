import React from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Box maxW={500}>
        <Flex justifyContent={"space-between"} mb={5}>
          <NavLink to={"/"}>
            <Box color={"white"} fontWeight={"bold"} fontSize={30}>
              Sign in
            </Box>
          </NavLink>
          <Button color={"grey"} variant="outline">
            Register
          </Button>
        </Flex>
        <Box>
          <Input mb={5} placeholder={"Name"} />
          <Input mb={5} placeholder={"Email"} />
          <Input placeholder={"Password"} />
        </Box>
        <Button
          mt={5}
          bg={"orange"}
          _hover={{ backgroundColor: "orange" }}
          w={500}
        >
          Sign in
        </Button>
      </Box>
    </Flex>
  );
};

export default Register;
