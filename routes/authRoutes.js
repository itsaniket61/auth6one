const express = require('express');
const router = express.Router();
const authService = require('../service/authService');
const authenticateToken = require('../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 *  name: auth6one Service
 *  description: API endpoints for auth6one service
 * 
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Add a new user to the list of users
 *     requestBody:
 *       description: User data for registration
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       500:
 *         description: Internal server error
 */
router.post('/register', (req, res) => {
  authService
    .register(req.body)
    .then((response) => res.status(201).json(response))
    .catch((Error) => res.status(500).json(Error));
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Generates a new auth token for the specified email address and password
 *     requestBody:
 *       description: User credentials for login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token generated successfully
 *       500:
 *         description: Internal server error
 */
router.post('/login', (req, res) => {
  authService
    .login(req.body)
    .then((response) => res.status(200).json(response))
    .catch((Error) => res.status(500).json({ Error }));
});

/**
 * @swagger
 * /api/auth/accessToken:
 *   get:
 *     summary: Verify and Generates a new authorization token from an existing authorization token
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           format: "token"
 *     responses:
 *       200:
 *         description: Token generated successfully
 *       500:
 *         description: Internal server error
 *       401:
 *         description: Unauthorized access
 */
router.get('/accessToken', authenticateToken, (req, res) => {
  try {
    const token = authService.accessToken(req.headers.authorization);
    res.status(200).json({ token });
  } catch (Error) {
    res.status(500).json({ Error });
  }
});

module.exports = router;
