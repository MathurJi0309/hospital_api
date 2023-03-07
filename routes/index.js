const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')



router.post('/doctors/register',userController.registerDoc)
router.post('/patients/register',userController.registerPatient)
router.post('/patients/:id/create_report',userController.createReport)

module.exports=router