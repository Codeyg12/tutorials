import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar
            name="As a Programmer"
            size={"lg"}
            src={authUser.profilePicURL}
          />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        isLoading={isLoggingOut}
        onClick={handleLogout}
        cursor={"pointer"}
      >
        Log Out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
