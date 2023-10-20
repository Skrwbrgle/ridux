const { user, post } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { decrypt, encrypt } = require("../helpers/bcrypt");

class UserController {
  static async getUser(req, res) {
    try {
      const id = +req.userData.id;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      let data = await user.findOne({
        where: {
          id,
        },
        include: { model: post, required: true },
      });

      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const emailFound = await user.findOne({
        where: { email },
      });

      if (emailFound) {
        if (decrypt(password, emailFound.password)) {
          const access_token = generateToken(emailFound);
          res.status(200).json({ access_token });
        } else {
          res.status(401).json({
            message: "Wrong password!",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password } = req.body;

      let resultUser = await user.create({
        username,
        email,
        password,
      });

      res.status(200).json(resultUser);
    } catch (err) {
      res.status(500).son(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.userData.id;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      const {
        username,
        email,
        password,
        image,
        address,
        age,
        education,
        gender,
        organization,
        work_exp,
      } = req.body;
      const imageUrl = image === "" ? null : image;
      const ageVal = age === "" ? 0 : age;

      let resultUser = await user.update(
        {
          username,
          email,
          password: encrypt(password),
          image: imageUrl,
          address,
          age: ageVal,
          education,
          gender,
          organization,
          work_exp,
        },
        { where: { id } }
      );

      resultUser[0] === 1
        ? res
            .status(200)
            .json({ message: `Data ${username} has been  updated` })
        : res.status(403).json({ message: `User with ${id} cannot found` });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.userData.id;

      if (id === 0) {
        res.status(401).json({ message: `Access denied` });
        return;
      }

      let resultUser = await user.destroy({ where: { id } });
      let resultPost = await post.destroy({ where: { userId: id } });

      resultUser === 1
        ? res.status(200).json({ message: `Successfully deleted user` })
        : res.status(404).json({ message: `User can't found` });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
