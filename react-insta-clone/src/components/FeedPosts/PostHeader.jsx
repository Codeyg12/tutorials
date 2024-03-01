import {
  Avatar,
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isLoading } = useFollowUser(
    post.createdBy
  );
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicURL}
              alt="user profile pic"
              size={"sm"}
            />
          </Link>
        ) : (
          <SkeletonCircle size={10} />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile ? (
            <>
              <Link to={`/${creatorProfile.username}`}>
                {creatorProfile.username}
              </Link>
              <Box color={"gray.500"}>• 1w</Box>
            </>
          ) : (
            <Skeleton height={"10px"} w={"100px"} />
          )}
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          fontSize={12}
          color={"blue.500"}
          bg={"transparent"}
          size={"xs"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isLoading}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
