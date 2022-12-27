function shortenUrlGenerator() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let arr = ''
  for (let i = 0; i < 5; i++) {
    const randomNumberIndex = Math.floor(Math.random() * characters.length)
    arr += characters[randomNumberIndex]
  }
  return arr
}
module.exports = shortenUrlGenerator()