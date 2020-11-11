const express = require('express')

const { SENTENCE_POSITION } = require('../constant')
const { storeUpdatedStory, isStoryStored } = require('../controllers/sentencies')
const { sentencesGenerator } = require('./utils')

const router = express.Router()

router.get('/:id/story-top/:topId', (req, res) => {
  if (!isStoryStored(req.params.topId)) {
    storeUpdatedStory(req.params.topId, req.params.id, SENTENCE_POSITION.TOP)
  }

  res.render('index', sentencesGenerator(req.params.topId))
})

router.get('/:id/story-bottom/:bottomId', (req, res) => {
  if (!isStoryStored(req.params.bottomId)) {
    storeUpdatedStory(req.params.bottomId, req.params.id, SENTENCE_POSITION.BOTTOM)
  }

  res.render('index', sentencesGenerator(req.params.bottomId))
})

router.get('/:id/story-left/:leftId', (req, res) => {
  if (!isStoryStored(req.params.leftId)) {
    storeUpdatedStory(req.params.leftId, req.params.id, SENTENCE_POSITION.LEFT)
  }

  res.render('index', sentencesGenerator(req.params.leftId))
})

router.get('/:id/story-right/:rightId', (req, res) => {
  if (!isStoryStored(req.params.rightId)) {
    storeUpdatedStory(req.params.rightId, req.params.id, SENTENCE_POSITION.RIGHT)
  }

  res.render('index', sentencesGenerator(req.params.rightId))
})

module.exports = router
