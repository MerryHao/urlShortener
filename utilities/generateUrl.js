const url = 'https://localhost:3000/'

//console.log(`urlSeeder: ${urlSeeder}`)
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
//console.log(characters.length)

let arr = ''
function shortenUrlGenerator() {
  //尚未做防呆

  for (let i = 0; i < 5; i++) {
    const randomNumberIndex = Math.floor(Math.random() * characters.length)
    arr += characters[randomNumberIndex]
  }

}
shortenUrlGenerator()
//console.log(url + arr)

module.exports = shortenUrlGenerator