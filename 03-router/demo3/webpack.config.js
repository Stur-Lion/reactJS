const path = require('path');
module.exports = {
    entry: './app/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'), /*输入目录*/
        publicPath:'temp/' /*自动刷新缓存*/
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true, /*是否压缩*/
        port:8000
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/ndoe_modules/,
            loaders:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        }]
    }
}