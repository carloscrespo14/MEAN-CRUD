'use strict'

const EmployeeModel = require('../models/employee')

const employeeCtrl = {}

employeeCtrl.getEmployees = async (req, res) => {
     const employees = await EmployeeModel.find();
     res.status(200).json({ response:'OK', items:employees })
}

employeeCtrl.getEmployee = async (req, res) => {
    await EmployeeModel.findById(req.params.id, (err, objeto)=>{
        if (err) return res.status(404).json({response:'fail', message:'employee no found' })
        res.status(200).json({response:'OK', objeto })
    })   
}

employeeCtrl.createEmployee = async (req, res) => {
    const employee = new EmployeeModel(req.body)
    await employee.save()
    res.status(200).json({response:'OK',message:'Saved'})
}

employeeCtrl.updateEmployee =  async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary:req.body.salary
    }
    await EmployeeModel.findByIdAndUpdate(req.params.id,{$set:employee}, {new: true})
    res.status(200).json({response:'ok',message:'employee ready updated',employee})
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await EmployeeModel.findByIdAndRemove(req.params.id)
    res.status(200).json({response:'ok',message:'employee ready deleted'})

}

module.exports = employeeCtrl