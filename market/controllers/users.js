const User = require('../models/user')

const show = async (req, res)=>{
  try {
  const user = await User.findById(req.params.id)
  res.render('users/show' , user)
  }
  catch(error){
    res.send('Error:', error)
  }
}
module.exports = { show }