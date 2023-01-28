import express, { application, NextFunction ,Request,Response} from 'express'
import { addNewDepartment, deleteDepartment, getAllDepartment, getDepartmentById, updateDepartment } from '../controller/deptController';
import {checkRole} from '../utils/user-auth'
const router = express.Router();

router.post('/adddepartment', addNewDepartment)
router.post('/updatedepartment/:id', updateDepartment)
router.post('/getalldepartment', getAllDepartment)
router.post('/deletedepartmentbyid/:id', deleteDepartment)
router.post('/getdepartmentbyid/:id', getDepartmentById)


export default router;