import Post from "../models/postSchema.js";
import User from "../models/userSchema.js";

import { uploadImagesToCloudinary } from "../utils/cloudinaryUpload.js";

//>>======== Create Post controller==========>>
export const createPost = async (req, res) => {
  try {
    const { userId, title, description, images } = req.body;

    //>>======= Validate user exists==========>>
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //>>===== Upload images to Cloudinary and get the Urls========>>
    //>>============================helper function to upload===========>>
    const uploadedImages = await uploadImagesToCloudinary(images);

    //>>=========== Create the post in the database===============>>
    const newPost = await Post.create({
      title,
      description,
      user_id: userId,
      images: uploadedImages,
    });

    // >>===Increment the user's post count as asked in doc=======>>
    user.post_count += 1;
    await user.save(); //save into db

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//>>======== get all Posts controller==========>>
export const getAllPosts = async (req, res) => {
  try {
    //>>==== fetching all posts present in Db========>>
    const posts = await Post.findAll({
      include: [{ model: User, as: "user" }],
    });

    if (posts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts available",
        count: 0,
        data: [],
      });
    }
    // >>=======all posts response===========>>
    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
};

//>>======== get all Posts of specific user by its id==========>>
export const getAllPostsOfUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    //>>==== FetchIng all posts for the specific user======>>
    const posts = await Post.findAll({
      where: { user_id: userId },
      include: {
        model: User,
        as: "user",
        attributes: ["name"],
      },
    });

    //>>========== If no posts found===>>
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this user." });
    }

    // >>======fetched posts======>>
    return res.status(200).json({
      message: "Post fetched",
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

//>>========delete a post by postid and userID==========>>
export const deletePost = async (req, res) => {
  const { userId, postId } = req.params;

  try {
    //>>==== if the userId matches the post's user_id======>>
    const post = await Post.findOne({ where: { id: postId, user_id: userId } });

    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or does not belong to this user." });
    }

    //>>=====delete the post if all checks passes====>>
    await post.destroy();

    return res.status(200).json({
      message: "Post deleted successfully.",
      data: post,
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

//>>======== edit a post by postid and userID==========>>
export const editPost = async (req, res) => {
  const { userId, postId } = req.params;
  const { title, description, images } = req.body;

  try {
    //>>===check if the userId matches the post's user_id====>>
    const post = await Post.findOne({ where: { id: postId, user_id: userId } });

    if (!post) {
      return res.status(404).json({
        message: "Post not found or does not belong to this user.",
      });
    }

    //>>===reupload the new Images to Cloudinary if provided=========>>
    let cloudinaryImageUrls = [];
    if (images && images.length > 0) {
      cloudinaryImageUrls = await uploadImagesToCloudinary(images);
    }

    post.title = title || post.title;
    post.description = description || post.description;
    post.images =
      cloudinaryImageUrls.length > 0 ? cloudinaryImageUrls : post.images;

    //>>====final save into databse========>>
    await post.save();

    return res.status(200).json({
      message: "Post updated successfully.",
      data: post,
    });
  } catch (error) {
    console.error("Error editing post:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
