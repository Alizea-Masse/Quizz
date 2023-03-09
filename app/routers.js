const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');
const adminMiddleware = require('./midleware/adminMiddleware')

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/quiz/:id', quizController.quizPage);

router.get('/tags', tagController.tagPage);

router.get('/tag/:id', tagController.tagWhithQuizPage)

// ******************* AUTH **************************** //
router.get('/signup', userController.showSignUp);
router.post('/signup', userController.doSignUp);

router.get('/login', userController.showLogin);
router.post('/login', userController.doLogin);

router.get('/admin', adminMiddleware, adminController.showAdmin);

// router.use('/admin/*', adminMiddleware);

// router.get('/admin/users');



//router.get('/error/:err', errorController.showError);


module.exports = router;