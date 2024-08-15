import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const TodoInput = () => {
  const [task, setTask] = useState<string>("");

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      p={10}
      maxWidth={1000}
      margin={"auto"}
    >
      <Box color={"white"} mb={10} fontSize={30}>
        TodoInput
      </Box>
      <Flex
        borderWidth={1} // Добавляем обводку
        borderColor={"white"} // Задаём цвет обводки белым
        borderRadius={5} // При необходимости можно задать радиус границ
        p={2}
      >
        <EditIcon borderRadius={5} bg={"orange"} boxSize={10} color={"white"} />
        <Input
          value={task}
          color={"white"}
          outline={"none"}
          border={"none"} // Убираем обводку поля
          focusBorderColor={"transparent"}
          width={1000}
          placeholder="What need to be done?"
          onChange={(event) => setTask(event.target.value)}
        />
      </Flex>
      <Button width={850} bg={"orange"} color={"white"} mt={30}>
        Add new task
      </Button>
    </Box>
  );
};

export default TodoInput;
