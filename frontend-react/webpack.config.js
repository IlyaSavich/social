const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const ROOT_PATH = path.resolve(__dirname);
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');

module.exports = {
    mode: 'development',

    entry: [
        `${SRC_PATH}/index.tsx`,
    ],

    output: {
        path: DIST_PATH,
        filename: 'main.js',
    },

    devtool: 'eval-cheap-module-source-map',

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    filename: 'commons/commons.min.js',
                    chunks: 'all',
                    minChunks: 2,
                },
            },
        },

        minimize: false,
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-react',
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'entry',
                                        corejs: 3,
                                        modules: 'auto',
                                    },
                                ],
                            ],
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({ before: [createStyledComponentsTransformer()] }),
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({ template: `${PUBLIC_PATH}/index.html`, inject: 'body' }),
        new ForkTsCheckerWebpackPlugin({ eslint: { enabled: true, files: `${SRC_PATH}/**/*.{ts,tsx}` } }),
    ],

    stats: true,
};
