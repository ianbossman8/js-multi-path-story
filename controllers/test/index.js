process.env.NODE_ENV = 'test'

const chai = require('chai')
const { getFirstKey, getSentence, isStoryStored, storeSentence, storeUpdatedStory } = require('../sentencies')
const { clean } = require('../../testUtil')
const { SENTENCE_POSITION } = require('../../constant')
const { firstKey, sentenciesStore } = require('../../store/sentenciesStore')

let expect = chai.expect

describe('Sentence Controller', () => {
  afterEach(() => {
    clean()
  })

  describe('get first key', () => {
    it('should return the key of first sentence', () => {
      expect(getFirstKey()).to.equal(firstKey)
    })
  })

  describe('get sentence at different position', () => {
    it('should return starting sentence', () => {
      expect(getSentence(firstKey, SENTENCE_POSITION.STARTING)).to.equal(
        sentenciesStore[firstKey][SENTENCE_POSITION.STARTING]
      )
    })
  })

  describe('sentence storing', () => {
    it('should store new sentence', () => {
      const exampleSentence = 'example'
      const store = storeSentence(firstKey, SENTENCE_POSITION.TOP, exampleSentence)

      expect(store[firstKey][SENTENCE_POSITION.TOP].sentence).to.equal(exampleSentence)
    })
  })

  describe('check if sentence is stored', () => {
    it('should return true', () => {
      expect(isStoryStored(firstKey)).to.be.true
    })

    it('should return false', () => {
      const fakeKey = 'false'
      expect(isStoryStored(fakeKey)).to.be.false
    })
  })

  describe('story update', () => {
    it('should store a new story starter', () => {
      const dummyKey = 'dummyKey'
      sentenciesStore[firstKey][SENTENCE_POSITION.TOP] = {
        sentence: 'hi',
        id: dummyKey,
      }

      storeUpdatedStory(dummyKey, firstKey, SENTENCE_POSITION.TOP)
      expect(sentenciesStore[dummyKey][SENTENCE_POSITION.STARTING]).to.equal('hi')
    })
  })
})
