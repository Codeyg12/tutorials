import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>

        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Ben Driller"
        followers={154}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Micheal Cannon"
        followers={57}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Brenda Wong"
        followers={3}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &copy; 2023 Built By{" "}
        <Link
          href="https://www.youtube.com/watch?v=RMScMwY2B6Q&list=PLYdoPVW80hjev--FpHxN89AynTWCRwR1n"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          This Tutorial
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
