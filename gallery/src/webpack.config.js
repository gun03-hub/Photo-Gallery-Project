module.exports = {
    // ... other configurations ...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
  };