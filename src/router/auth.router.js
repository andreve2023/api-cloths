const {Router} = require('express');
const passport = require('passport');
const {authLogin} = require('../controllers/auth/auth.controller');
const router = Router();

router.post('/login',
    passport.authenticate('local', {session: false}), authLogin);


router.get('/auth', (req, res) => {
    res.send('<a href="auth/google">Atenticate con google</a>')
})

router.get('/auth/google', passport.authenticate( 'google', {scope: ['profile', 'email']}));

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/failed'
}),  (req, res) => {
    res.redirect('/api/v1/success')
})
router.get('/success', (req, res) => {
    res.send('Success')
})

module.exports = router;