module.exports = {
    css:{
        loaderOptions:{
            scss:{
                data:`@import "~@/assets/css/variables.scss";`
            }
        }
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}