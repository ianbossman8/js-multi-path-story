process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const { firstKey, sentenciesStore } = require('../../store/sentenciesStore')
const { SENTENCE_POSITION } = require('../../constant')
const { clean } = require('../../testUtil')
const app = require('../../app')

chai.use(require('chai-match'))
chai.use(chaiHttp)
const should = chai.should()
const expect = chai.expect

describe('story update', () => {
  afterEach(() => {
    clean()
  })

  describe('when a sentence link is clicked /:id/story-top/:topId', () => {
    it('should return clean starting sentence', (done) => {
      const secondId = 'secondId'
      const sentence = 'second sentence'
      sentenciesStore[firstKey][SENTENCE_POSITION.TOP] = {
        id: secondId,
        sentence,
      }

      chai
        .request(app)
        .get(`/story-update/${firstKey}/story-top/${secondId}`)
        .end((_, res) => {
          res.should.have.status(200)
          expect(res.text).to.match(/second sentence/)
          done()
        })
    })
  })
})
