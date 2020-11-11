const express = require('express')
const { body, validationResult } = require('express-validator')
const { SENTENCE_POSITION } = require('../constant')
const { storeSentence, getFirstKey } = require('../controllers/sentencies')
const { sentencesGenerator } = require('./utils')

const router = express.Router()

router.get('/:id?', (req, res) => {
  if (req.params.id) {
    res.render('index', sentencesGenerator(req.params.id))
  } else {
    const firstKey = getFirstKey()

    res.render('index', sentencesGenerator(firstKey))
  }
})

router.post('/:id/top-sentence', [body('sentence').isEmpty()], (req, res) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return res.status(400).render('index', {
      [`${SENTENCE_POSITION.TOP}Error`]: 'can not be empty',
      ...sentencesGenerator(req.params.id),
    })
  }

  storeSentence(req.params.id, SENTENCE_POSITION.TOP, req.body.sentence)

  res.render('index', sentencesGenerator(req.params.id))
})

router.post('/:id/left-sentence', [body('sentence').isEmpty()], (req, res) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return res.status(400).render('index', {
      [`${SENTENCE_POSITION.LEFT}Error`]: 'can not be empty',
      ...sentencesGenerator(req.params.id),
    })
  }

  storeSentence(req.params.id, SENTENCE_POSITION.LEFT, req.body.sentence)

  res.render('index', sentencesGenerator(req.params.id))
})

router.post('/:id/right-sentence', [body('sentence').isEmpty()], (req, res) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return res.status(400).render('index', {
      [`${SENTENCE_POSITION.RIGHT}Error`]: 'can not be empty',
      ...sentencesGenerator(req.params.id),
    })
  }

  storeSentence(req.params.id, SENTENCE_POSITION.RIGHT, req.body.sentence)

  res.render('index', sentencesGenerator(req.params.id))
})

router.post('/:id/bottom-sentence', [body('sentence').isEmpty()], (req, res) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return res.status(400).render('index', {
      [`${SENTENCE_POSITION.BOTTOM}Error`]: 'can not be empty',
      ...sentencesGenerator(req.params.id),
    })
  }

  storeSentence(req.params.id, SENTENCE_POSITION.BOTTOM, req.body.sentence)

  res.render('index', sentencesGenerator(req.params.id))
})

module.exports = router
