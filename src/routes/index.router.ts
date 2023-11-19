import express from 'express';
import { appUserRoutes } from './appuser.router';

const router = express.Router()

// Users api
router.use('/users', appUserRoutes);

module.exports = router 