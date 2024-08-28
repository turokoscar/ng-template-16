const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'templateInia',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'templateInia',
      remotes: {},
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};
