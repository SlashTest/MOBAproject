module.exports = options => {
    return async (req, res, next) => {//自动获取模型中间件
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}