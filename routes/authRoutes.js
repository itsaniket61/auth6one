const express = require('express');
const router = express.Router();
const authService = require('../service/authService');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/register', (req, res) => {
  authService
    .register(req.body)
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(500).json(err));
});

router.post('/login', (req, res) => {
    authService
      .login(req.body)
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err));
});

router.get('/accessToken',authenticateToken, (req, res) => {
   const token = authService.accessToken(req.headers.authorization);
   res.status(200).json({token}); 
});

module.exports = router;