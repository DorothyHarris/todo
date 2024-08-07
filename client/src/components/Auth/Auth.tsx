import React from 'react';
import {Box, Button, Center, Flex, Input} from "@chakra-ui/react";

const Auth = () => {
    return (
        <Flex  h="100vh" alignItems="center" justifyContent="center">
            <Box maxW={500}>
                <Flex justifyContent={"space-between"} mb={5}>
                    <Box color={"white"} fontWeight={'bold'} fontSize={30}>Sign in</Box>
                    <Button color={"grey"}  variant='outline'>Register</Button>
                </Flex>
                <Box>
                    <Input mb={5} placeholder={'Email'} />
                    <Input placeholder={'Password'}/>
                </Box>
                <Button mt={5} bg={"orange"} _hover={{ backgroundColor: "orange" }}  w={500}>Sign in</Button>
            </Box>
        </Flex>
    );
};

export default Auth;