const express = require('express');
const bcryptjs = require('bcryptjs');
const router = express.Router();
const userService = require('../services/users');
const saveRoutes = require('../utils/middlewares/saveRoutes');
const permisions = require('../utils/middlewares/permisions')

router.get('/profile/getUsers', saveRoutes , (req, res) => {
    const {id} = req.decoded;
    console.log(req.route.path)

    userService.GetUser(id, (contacts) => {
        res.status(200).json({
            contacts: contacts
        });
    });
});

router.get('/profile/getUsers/:userId', (req, res) => {
    const { userId } = req.params;

    userService.GetUser(userId, (user) => {
        res.status(200).json({
            data: user,
            message: 'you have get just one user'
        });
    });
});

router.post('/registrer', async (req, res) => {
    const { name, lastName, username, email, tel, password, rol } = req.body;
    const hasedPassword = await bcryptjs.hash(password, 10);
    const newUser = {
        name,
        lastName,
        username,
        email,
        tel,
        password: hasedPassword,
        rol
    }
    
    userService.CreateUser(newUser, (userCreated) => {
        res.status(200).json({
            data: userCreated,
            message: 'you have created a user'
        });
    });
});

router.post('/profile/create', saveRoutes, permisions, (req, res) => {
    console.log('en create');
})

router.put('profile/getUser/update/:userId', (req, res) => {
    const { userId } = req.params;
    const user = req.body;

    userService.UpdateUser(userId, user, (userUpdated) => {
        res.status(200).json({
            data: userUpdated,
            message:'You have updated a user'
        });
    });
});

router.delete('profile/getUsers/delete/:userId', (req, res) => {
    const { userId } = req.params;

    userService.DeleteUser(userId, (userDeleted) => {
        res.status(200).json({
            data: userDeleted,
            message: 'you have deleted a user'
        });
    });
});


router.post('/logIn', (req, res) => {
    const { username, password } = req.body;

    userService.LogIn(username, password, (token, message) => {
        if(message === 'contraseña invalida') {
            res.status(400).json({
                error: true,
                message: message
            });
            return
        }

        if(message === 'no se encontró un usuario') {
            res.status(400).json({
                error: true,
                message: message
            });
            return
        }
        if(message === 'succes') {
            req.session.token = token;
            res.redirect('/profile');
        }
    });
});

router.get('/profile', saveRoutes, (req, res) => {
    res.send(req.decoded)
});

module.exports = router;