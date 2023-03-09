const request = require('supertest')
const app = require('./app');


describe('GET /', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /tags', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/tags')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /quiz/1', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/quiz/1')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /tag/1', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/tag/1')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /tag/1', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/tag/1')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /signup', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/signup')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /login', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/login')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(200);
        
    });
});

describe('GET /admin', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/admin')
            .set('Accept', 'application/json');
        // on teste si le type du retour est du json
        expect(response.status).toEqual(302);
        
    });
});

describe('POST /login', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/login')
        .send('email=alizeamasse%40gmail.com&password=BJ5xWb7RwBLhprC')
        .set('Accept', 'application/json')
        .expect(302)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('POST /signup', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/signup')
        .send('lastname=Mass%C3%A9&firstname=Aliz%C3%A9a&email=alizea%40gmail.fr&password=BJ5xWb7RwBLhprC&passwordConfirm=BJ5xWb7RwBLhprC')
        .set('Accept', 'application/json')
        .expect(302)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });
