const {Router} = require('express');
const {createNewUser} = require('../controllers/users/POST/createUser.controller');
const {getUserAll} = require('../controllers/users/GET/getAllUsers.controller');
const {validatorHandlers} = require('../middlewares/validatorHandler');
const {userSchema} = require('../schemas/user.schema');

const router = Router();

router.get('/all-users', getUserAll)
router.post('/create_user',
    validatorHandlers(userSchema, 'body'),
    createNewUser
);

module.exports = router;