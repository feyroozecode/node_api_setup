import {Request, Response } from 'express'
import { AppUserModel } from '../db/documents/appuser.document'
import { HTTP_CODES } from '../static_datas/http_codes';


//Crete one 
export const createAppUser = async (req: Request, res: Response) => {

    const {userName, lastName, age, email, password, role} = req.body;
            
    // check if user don't exist in the db
    const appUser = await AppUserModel.findOne({ userName: userName })

    if(appUser){
        const error: Error = new Error(`This user already exist`)
            
        return res.status(HTTP_CODES.BAD_REQUEST).json({message: error.message})
    }
    
    try {
        
        await AppUserModel.create({
            userName, lastName, age, email, role, password, 
        }).then((appuser: any) => {
            res.status(HTTP_CODES.OK).json({
                message: 'AppUser created successfully',
                datas: appuser
            })
    })

    } catch (error: any) {
        res.status(HTTP_CODES.BAD_REQUEST).json({
            message: 'Error creating a new app user',
            error: error.message
        })
    }

}


/// Get ALL
export const getAllAppUsers = async (req: Request, res: Response) => {

    try {
        const appUsers = await AppUserModel.find()

        res.status(HTTP_CODES.OK).json({
            message: 'fetch all app users ',
            datas: appUsers
        })

    }catch (error: any) {
        res.status(HTTP_CODES.BAD_REQUEST).json({
            message: 'Error fetch app users',
            error: error.message
        })
    }
}

/// Get one
export const getAppUser = async (req: Request, res: Response) => {

    const { id }=   req.params
    
    try {
        
        const appUser = await AppUserModel.findOne( id )

        res.status(HTTP_CODES.OK).json({
            message: 'fetch all app users ',
            data: appUser
        })

    }catch (error: any) {
        res.status(HTTP_CODES.BAD_REQUEST).json({
            message: 'Error fetch app user',
            error: error.message
        })
    }
}