const { resolve } = require('path');
module.exports = {
    entry: resolve('./ToDo.js'),
    mode: 'development',
    output: {
        path: resolve('./'),
        filename: 'ToDo.min.js',
            },
            module: {
                rules: [
                            {
                            test: /\.(js)$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader"
                                }
                            },
                            {
                                test: /\.(png|jpg|gif)$/i,
                                use: [
                                  {
                                    loader: 'url-loader', //si la limite est depassé (8192) alors, on utilise file-loader par defaut
                                    //loader: 'file-loader',
                                    options: {
                                      limit: 8192,
                                    },
                                  },
                                ],
                            },
                            {
                                test: /\.css$/i,
                                use: ['style-loader', 'css-loader'],
                            }

                        ]
                    }
        }
