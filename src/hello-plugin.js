class HelloWorldPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('HelloWorldPlugin', (compilation) => {
      compilation.errors.push(new Error(`Custom error from plugin, with options: ${JSON.stringify(this.options)}`));
    })
  }
}

module.exports = HelloWorldPlugin
