const { post, user } = require("../models");

class PostController {
  static async getPosts(req, res) {
    try {
      let result = await post.findAll({
        include: [
          {
            model: user,
            attributes: ["id", "username", "image"],
          },
        ],
        order: [["id", "desc"]],
      });

      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const id = +req.userData.id;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      const { title, textPost, image } = req.body;
      const imageUrl = image === "" ? null : image;

      let addPost = await post.create({
        title,
        textPost,
        image: imageUrl,
        userId: id,
      });

      res.status(200).json(addPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.userData.id;
      const postId = req.query.postId;
      const { title, textPost, image } = req.body;
      const imageUrl = image === "" ? null : image;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      let resultPost = await post.update(
        {
          title,
          textPost,
          image: imageUrl,
        },
        {
          where: {
            userId: id,
            id: +postId,
          },
        }
      );

      resultPost === 1
        ? res.status(200).json({ message: `Successfully updated!` })
        : res.status(404).json({ message: `Post with ${id} can not update!` });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async changeStatus(req, res) {
    try {
      const id = +req.userData.id;
      const postId = req.query.postId;
      const status = req.body.status;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      let resultPost = await post.update(
        {
          status,
        },
        {
          where: {
            userId: id,
            id: +postId,
          },
        }
      );

      resultPost[0] === 1
        ? res.status(200).json({ message: `Post status has been updated` })
        : res.status(404).json({ message: `Post with ${id} can not update!` });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.userData.id;
      const postId = req.query;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      let resultPost = await post.destroy({
        where: {
          id: +postId,
          userId: id,
        },
      });

      resultPost === 1
        ? res
            .status(200)
            .json({ message: `Successfully deleted post with id ${postId}` })
        : res.status(404).json({ message: `Can't found post id ${postId}` });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = PostController;
