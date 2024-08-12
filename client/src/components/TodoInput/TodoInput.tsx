import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const TodoInput = () => {
  const [task, setTask] = useState<string>("");

  return (
    <Box border="1px" borderColor="gray.200" p={5}>
      <Box mb={10} fontSize={30}>
        TodoInput
      </Box>
      <Flex>
        <EditIcon bg="#18B6F4" boxSize={10} color={"white"} />
        <Input
          value={task}
          width={1000}
          placeholder="What need to be done?"
          onChange={(event) => setTask(event.target.value)}
        />
      </Flex>
      <Button width={850} bg="#18B6F4" color={"white"} mt={30}>
        Add new task
      </Button>
    </Box>
  );
};

export default TodoInput;
