const User = require('./User');
const Image = require('./Image');

// User has many images 
User.hasMany(Image);
// Image belongs to one user 
Image.belongsTo(User);

module.exports = { User, Image };