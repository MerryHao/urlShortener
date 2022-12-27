const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const shortenUrlGenerator = require('../../utilities/generateUrl')

router.get('/', (req, res) => {
  res.render('index')
})

router.post("/", (req, res) => {
  if (!req.body.url) return res.redirect("/")
  const shortUrlGnt = shortenUrlGenerator

  URL.findOne({ originalURL: req.body.url })
    .then(data => data ? data : URL.create({ shortUrlGnt, originalURL: req.body.url }))
    .then(data => res.render("index", { originHostPath: req.headers.origin, shortURL: data.shortURL }))
    .catch(error => console.error(error))
})

router.get("/:shortURL", (req, res) => {
  const { shortURL } = req.params
  URL.findOne({ shortURL })
    .then(data => {
      if (!data) {
        return res.render("error", {
          errorMsg: "Can't found the URL",
          errorURL: req.headers.host + "/" + shortURL,
        })
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.error(error))
})

module.exports = router