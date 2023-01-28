import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose';
import deptModal from '../modal/departmentModal'

export async function addNewDepartment(req: Request, res: Response) {
    try {
        let { deptName, schemeName } = req.body
        if (!deptName) return res.status(400).send("Kindly send dept Name");

        let isAlreadyExist = deptModal.find({  deptName }).lean() as any;
        if (!(isAlreadyExist.length)) return res.status(400).send("This dept already exist");

        let newDept = new deptModal({ deptName, schemeName })
        await newDept.save();
        return res.status(201).send({ message: "Succesfully created", data: newDept, success: true });
    } catch (error) {
        res.status(500).send(error);
    }


}
export async function updateDepartment(req: Request, res: Response) {
    let { id } = req.params;
    try {
        let filter = { _id: new mongoose.Types.ObjectId(id) };
        let payload = req.body;

        let isExist = await deptModal.findById({ _id: new mongoose.Types.ObjectId(id), 'IsActive': true })
        if (!isExist) return res.status(400).send({ message: 'This id is not exist, Invaild Id' })

        let result = await deptModal.findByIdAndUpdate(filter, payload);
        return res.status(201).send({ message: 'Successfully updated', data: result, success: true });
    } catch (error) {
        res.status(500).send(error);
    }
}
export async function getDepartmentById(req: Request, res: Response) {
    let { id } = req.params;
    try {

        let dept = await deptModal.findById({ _id: new mongoose.Types.ObjectId(id), 'IsActive': true })
        if (!dept) return res.status(400).send({ message: 'This id is not exist, Invaild Id' })

        return res.status(201).send({ message: 'Successfully updated', data: dept, success: true });
    } catch (error) {
        res.status(500).send(error);
    }
}
export async function deleteDepartment(req: Request, res: Response) {
    try {
        let { id } = req.params;
        const dept = await deptModal.findByIdAndDelete(id);

        if (!dept) res.status(404).send({ message: "No item found" });
        res.status(200).send({ message: 'Successfully deleted', success: true });
    } catch (error) {
        res.status(500).send(error);
    }
}
export async function getAllDepartment(req: Request, res: Response) {
    const deptList = await deptModal.find({});
    try {
        res.send({ message: "department list fetched successfully", data: deptList });
    } catch (error) {
        res.status(500).send(error);
    }
}