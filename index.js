module.exports = function useLessLoader(config, handleLessRule) {
  const cssModel = config.module.rules.find(i => i.test.toString() === "/\\.css$/")
  let lessRule = {
    test: /\.less$/,
    sideEffects: true,
    use: [
      ...cssModel.use,
      {
        loader: 'less-loader'
      }
    ]
  }
  if (handleLessRule) lessRule = handleLessRule(lessRule)
  config.module.rules.push(lessRule)
  return config
}