"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user);
    }
  }
  post.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Please enter title",
          },
        },
      },
      textPost: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "Post must not be empty",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Id user must not be empty",
          },
        },
      },
      image: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["0", "1"], //0 = draft, 1 = posting
      },
    },
    {
      hooks: {
        beforeCreate: (post, options) => {
          post.status = post.status || "0";
        },
      },
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
