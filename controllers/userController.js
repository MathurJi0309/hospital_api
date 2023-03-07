const Doctor=require('../models/Doctor');
const Patient=require('../models/Patient');



module.exports.registerDoc=async function(req,res){
    try{
        const doctor=await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor register"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error in registering"
        })
    }
}


module.exports.registerPatient=async function(req,res){
    try{
        // req.body.doctor=Doctor.find({});
        const patient =await Patient.create(req.body);
        res.status(200).json({
            success:true,
            message:"created patient successfully"
        })
    } catch(error){
        res.status(500).json({
            success:false,
            message:"error in creating the patient"
        })
    }
}


module.exports.createReport=async function(req,res){
    try{
        const patient=await Patient.findById(req.params.id)
        req.body.date=Date.now();
        patient.reports.push(req.body);
        patient.save();
        res.status(200).json({
            success:true,
            message:"report submit"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error in creating the report"
        })
    }
}