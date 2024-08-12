import React from "react";
import { Box, Button, Center, Flex, Input } from "@chakra-ui/react";
import { Form, NavLink } from "react-router-dom";

const Login = (props) => {
  const { setEmail, setPassword, handleSubmit } = props;

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Box maxW={500}>
        <Flex justifyContent={"space-between"} mb={5}>
          <Box color={"white"} fontWeight={"bold"} fontSize={30}>
            Sign in
          </Box>
          <NavLink to={"/register"}>
            {" "}
            <Button color={"grey"} variant="outline">
              Register
            </Button>
          </NavLink>
        </Flex>
        <form onSubmit={handleSubmit}>
          <Box>
            <Input
              color={"white"}
              mb={5}
              placeholder={"Email"}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              color={"white"}
              placeholder={"Password"}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>
          <Button
            mt={5}
            bg={"orange"}
            _hover={{ backgroundColor: "orange" }}
            w={500}
            type={"submit"}
          >
            Sign in
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
