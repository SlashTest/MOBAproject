const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: { type: String },
    password: { type: String,
        select:false,
        set:function(val){
        return require('bcrypt').hashSync(val,10)//生成密码散列值传递给val,第二个参数密码加密指数
    } 
},
})

module.exports = mongoose.model('AdminUser', schema)