import express from 'express';
import {
    createAppUser,
    getAllAppUsers,
    getAppUser
}  from '../controllers/user.controller'

const router = express.Router()

// create a app user 
router.post('/add', createAppUser)

// get all app users
router.get('/all', getAllAppUsers)

// get a app user
router.get('/:id', getAppUser)

// update a app user

// delete a app user


// export routes
export const appUserRoutes = router