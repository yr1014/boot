// var webpack = require('webpack');
//
// module.exports = {
//     entry:{
//         bundle:['./src/app.js']
//     },
//     output:{
//         path:__dirname,
//         publicPath:'/',
//         filename:'dist/[name].js'
//     },
//     module:{
//         loaders:[
//             {test:/\.html$/, loaders:['html']},
//             {
//                 test:/\.js$/,
//                 loaders:['babel'],
//                 exclude:/node_moudules/,
//                 query:{
//                     preset:['es2015']
//                 }
//             }
//         ]
//     },
//     resolve:{},
//     plugins:[
//         /*
//         new webpack.optimize.UglifyJsPlugin({
//             compress:{
//                 warnings:false
//             }
//         })
//         */
//     ]
// }

var webpack= require("webpack");

module.exports={
    entry:{
        bundle:[ "./src/app.js"]
    },
    output:{
        path:__dirname,
        publicPath:"/",
        filename:"dist/[name].js"
    },
    module:{
        loaders:[{
                test: /\.html$/,
                loaders: ['html']
            },{
                test: /(\.js)$/,
                loader:["babel"],
                exclude:/node_modules/,
                query:{
                    presets:["es2015"]
                 }
             }]
    },
    resolve:{
    },
    plugins:[
         /*
         new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
               */
    ]
}