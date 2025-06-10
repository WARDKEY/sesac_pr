import { prisma } from "../utils/prisma/index.js";
import express from "express";

const router = express.Router();

// 전체 게시글 조회
router
  .route("/posts")
  .get(async (req, res, next) => {
    try {
      const posts = await prisma.Posts.findMany({
        select: {
          postId: true,
          userId: true,
          title: true,
          content: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return res.status(200).json({ data: posts });
    } catch (error) {
      next(error);
    }
  })
  // 게시글 생성
  .post(async (req, res, next) => {
    try {
      const { title, content, userId } = req.body;

      const newPost = await prisma.Posts.create({
        data: {
          title,
          content,
          userId,
        },
      });

      return res.status(201).json({
        id: newPost.postId,
        title: newPost.title,
        content: newPost.content,
        userId: newPost.userId,
      });
    } catch (error) {
      next(error);
    }
  });

// 특정 게시글 조회
router
  .route("/posts/:id")
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await prisma.Posts.findUnique({
        where: { postId: +id },
      });

      // 해당 게시글이 존재하는지 확인
      if (!post) {
        return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
      }

      return res.status(200).json({ data: post });
    } catch (error) {
      next(error);
    }
  })
  // 게시글 수정
  .put(async (req, res, next) => {
    try {
      const { id } = req.params;
      const { newTitle, newContent } = req.body;

      const post = await prisma.Posts.findUnique({
        where: { postId: +id },
      });

      // 해당 게시글이 존재하는지 확인
      if (!post) {
        return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
      }

      // 해당 게시글을 작성한 유저인지 확인해야하지만 현재 유저 정보가 없음

      await prisma.Posts.update({
        where: { postId: +id },
        data: {
          title: newTitle || post.title,
          content: newContent || post.content,
          updatedAt: new Date(),
        },
      });

      return res.status(200).json({
        message: "게시글이 성공적으로 수정되었습니다.",
      });
    } catch (error) {
      next(error);
    }
  })
  // 게시글 삭제
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;

      const post = await prisma.Posts.findUnique({
        where: { postId: +id },
      });

      // 해당 게시글이 존재하는지 확인
      if (!post) {
        return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
      }

      // 해당 게시글을 작성한 유저인지 확인해야하지만 현재 유저 정보가 없음

      await prisma.Posts.delete({
        where: { postId: +id },
      });

      return res
        .status(200)
        .json({ message: "게시글이 성공적으로 삭제되었습니다." });
    } catch (error) {
      next(error);
    }
  });

export default router;
