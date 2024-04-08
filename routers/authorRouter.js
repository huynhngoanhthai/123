const { Router } = require('express');
const authorRouter = Router();

authorRouter.get('/', (req, res) => {
    res.statusCode(200).send('User homepage');
});

authorRouter.get('/profile', (req, res) => {
    res.send('User profile page');
});

module.exports = authorRouter;
