process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const { firstKey } = require('../../store/sentenciesStore')
const { clean } = require('../../testUtil')
const app = require('../../app')

chai.use(require('chai-match'))
chai.use(chaiHttp)
const should = chai.should()
const expect = chai.expect

describe('index', () => {
  afterEach(() => {
    clean()
  })

  describe('/GET index', () => {
    it('should return clean starting sentence', (done) => {
      chai
        .request(app)
        .get('/')
        .end((_, res) => {
          res.should.have.status(200)
          expect(res.text).to.match(/Once upon a time, there was a big bad wolf/)
          done()
        })
    })
  })

  describe('/POST /:id/top-sentence', () => {
    it('should response back with error if sentence is empty', (done) => {
      chai
        .request(app)
        .post(`/${firstKey}/top-sentence`)
        .send()
        .end((_, res) => {
          res.should.have.status(400)
          expect(res.text).to.match(/can not be empty/)
          done()
        })
    })

    it('should return top sentence', (done) => {
      const sentence = 'an amazing journey'
      chai
        .request(app)
        .post(`/${firstKey}/top-sentence`)
        .send({
          sentence,
        })
        .end((_, res) => {
          res.should.have.status(200)
          expect(res.text).to.match(/an amazing journey/)
          done()
        })
    })
  })
})
