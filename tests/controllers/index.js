const helloWorld = (req, res) => {
  res.send('Hello!')
}

const hello = (req, res) => {
  const name = req.params.name ?? 'world'
  res.send(`hello ${name}`)
} 

module.exports = {
  helloWorld,
  hello
}