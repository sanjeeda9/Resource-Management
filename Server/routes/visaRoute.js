var express=require('express');
var router=express.Router();
var visaDocument=require('../models/visaDocument.js');

router.post('/insertVisaDetails',function(req,res)
  {
    visaDocument.insertVisaDetails(function(err,callback)
    {
      if(!err)
         console.log("visa details are inserted");
    })
  })

router.get('/getVisaDetails/:empNo',function(req,res)
{
  visaDocument.getVisaDetails(req.params.empNo,function(err,data)
  {
    if(!err)
    {
      res.send(data);
    }
  })
});

router.post('/modifyVisaDetails',function(req,res)
{
  visaDocument.modifyVisaDetails(employeeId,visaObject,function(err,data)
  {
    //write code her-------------
  })
});

module.exports=router;
