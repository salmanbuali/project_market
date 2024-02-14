const User = require('../models/user')

const show = async (req, res) => {
  try {
  const user = await User.findById(req.params.id).populate("items")
      const items = user.items
            res.render('users/show', { user,items });
  } catch (error) {
    res.send('Error:', error);
  }
};

const showOrders = async (req, res)=>{
  try {
  let user = await User.findById(req.params.id).populate('orders')
  for (let i = 0; i < user.orders.length; i++){
    await user.orders[i].populate('item')
    await user.orders[i].populate('buyer')
    await user.orders[i].populate('seller')
  }
  res.render('users/orders' , { user })
  }
  catch(error){
    console.log(error)
  }
}
const showPurchased = async (req, res) => {
  try {
    console.log('in show purchased')
    let user = await User.findById(req.params.id).populate('orders')
    for (let i = 0; i < user.orders.length; i++){
      await user.orders[i].populate('item')
      await user.orders[i].populate('buyer')
      await user.orders[i].populate('seller')
    }
    res.render('users/orders-purchased' , { user })
    }
    catch(error){
      console.log(error)
    }
}

const showSold = async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate('orders')
    for (let i = 0; i < user.orders.length; i++){
      await user.orders[i].populate('item')
      await user.orders[i].populate('buyer')
      await user.orders[i].populate('seller')
    }
    res.render('users/orders-sold' , { user } )
    }
    catch(error){
      console.log(error)
    }
}
module.exports = { show , showOrders, showSold, showPurchased}
