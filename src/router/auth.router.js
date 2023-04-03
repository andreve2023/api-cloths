const {Router} = require('express');
const passport = require('passport');
const {authLogin} = require('../controllers/auth/auth.controller');
const router = Router();

router.post('/login',
    passport.authenticate('local', {session: false}), authLogin);

//http://localhost:3001/api/v1/auth
//http://localhost:3001/api/v1/auth/google
router.get('/', (req, res) => {
    res.send('<a href="auth/google">Atenticate con google</a>')
})

router.get('/google',
    passport.authenticate( 'google', {scope: ['profile', 'email']}));
// router.get('/google', (req, res) => {
//     res.send("Hola mundo")
// });

// router.get('/google/callback', passport.authenticate('google', {
//     failureRedirect: '/failed'
// }),  (req, res) => {
//     // res.redirect('/api/v1/auth/success')
//     res.redirect('http://localhost:3000')
// })
router.get('/google/callback',
    passport.authenticate('google', {
    failureRedirect: '/failed',
    successRedirect: 'http://localhost:3000/',
}))
//router.get('/google/callback', passport.authenticate('google'))
// router.get('/api/v1/auth/google/callback', passport.authenticate('google'), (req, res) => {
//     // Aquí puedes manejar la respuesta de autenticación de Google y redirigir al usuario a la página correspondiente
// });
// router.get('/google/callback',  (req, res) => {
//     //res.redirect('/api/v1/success')
//     res.send("aqui pasa que se redirecciona")
// })
// router.get('/success', (req, res) => {
//     res.send('Success')
// })

module.exports = router;