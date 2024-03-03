import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "../hooks/useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikePost = (post) => {
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
  const showToast = useShowToast();

  const handleLikePost = async () => {
    if (isLoading) return;
    if (!authUser)
      return showToast(
        "error",
        "You must be logged in to like a post",
        "error"
      );
    setIsLoading(true);

    try {
      const postRef = doc(firestore, "posts", post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
      });

      setIsLiked(!isLiked);
      isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    } catch (error) {
      showToast("error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleLikePost, isLiked, likes };
};

export default useLikePost;
