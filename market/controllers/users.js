const User = require('../models/user')

const show = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("items")
      // .then(user => {
      //   Item.find({})
      //     .then(item => {
      //       console.log(item);
      const items=user.items
            res.render('users/show', { user,items });
          // });
      // });
  } catch (error) {
    res.send('Error:', error);
  }
};

module.exports = { show }