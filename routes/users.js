const { celebrate, Joi } = require("celebrate");
const router = require("express").Router();
const {
  getUsers,
  getUser,
  getCurrentUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

router.get("/", getUsers);
router.get(
  "/:userId",
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string(),
    }),
  }),
  getUser
);
router.get(
  "/me",
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string(),
    }),
  }).unknown(true),
  getCurrentUser
);
router.patch(
  "/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }).unknown(true),
  updateProfile
);
router.patch(
  "/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().uri(),
    }),
  }).unknown(true),
  updateAvatar
);

module.exports = router;
