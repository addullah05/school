const Joi = require("joi");
const token = require("../../models/token")

const signOutController = {
  async signOut(req, res, next) {
    try {
      // Validation
      const tokenSchema= Joi.object({
        inToken: Joi.string().required(),
      });
      const { error } = tokenSchema.validate(req.body);

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      // Database operation
      const { inToken } = req.body;
      const deletedToken = await token.deleteOne({ token: inToken });

      if (deletedToken.deletedCount === 0) {
        return res.status(404).json({ error: 'Token not found' });
      }

      res.json({ status: 'Logout successful' });
    } catch (error) {
      // Differentiating between validation and database errors
      if (error.isJoi) {
        return res.status(400).json({ msg: error.message });
      } else {
        return next(new Error(error.message));
      }
    }
  },
};

module.exports = signOutController;
