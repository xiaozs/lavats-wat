import * as path from "path";
import * as webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/index.ts",
    resolve: { extensions: [".ts", ".js"] },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "lavatsWat",
        libraryTarget: "umd",
        globalObject: "this"
    },
    externals: ["lavats", "lavats-wasm"],
    plugins: [new CleanWebpackPlugin()],
    devtool: "source-map"
};

export default config;