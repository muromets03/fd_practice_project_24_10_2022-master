const { Users } = require('../models')

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password }
    } = req

    const user = Users.findOne({
      where: { email }
    })
  } catch (error) {
    next(error)
  }
}

module.exports.signUp = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
