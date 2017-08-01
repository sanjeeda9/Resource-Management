var express=require('express');
var router=express.Router();
var employee=require('../models/employee.js');
var bgvDocument=require('../models/bgvDocument.js');
var visaDocument=require('../models/visaDocument.js');
var qualificationDocument=require('../models/qualification.js');
var merge=require('merge');
var extend=require('extend');

router.post('/addEmployees',function(req,res)
{
    employee.addEmployee(function(err,data)
   {
     if(!err)
        console.log("added");
     else {
        console.log("errr----",err);
     }
   })
  res.send("inside the route");
});

router.get('/getEmpById',function(req,res)
{

});


router.get('/getEmployees/:towerType',function(req,res)
{
  employee.getEmployees(req.params.towerType,function(data)
{
  if(data!=null)
    res.send(data);
})
 });


//to get allTheKeys from different collections.....
router.get('/getAllTheKeys',function(req,res)
{
var index=0;
var object={};

visaDocument.getVisaDocumentKeys(handleResponse);
bgvDocument.getBgvDocumentKeys(handleResponse);
qualificationDocument.getQualificationDocumentKeys(handleResponse);
employee.getEmployeeKeys(handleResponse)

function handleResponse(err,responseObject)
{
  if(!err)
    {
        if(!object.hasOwnProperty(responseObject.collectionName))
        {
          object[responseObject.collectionName]=responseObject.data;
          index++;
          if(index==4)
          giveResponse();
        }
    }
}

function giveResponse()
{
  res.send(object);
}
});
//end of getAllTheKeys route.............



//to modify no of columns in the table...
router.get('/modifyTable/:requestObject',function(req,res)
{
var allObjects=[];

makeKeyObjects(JSON.parse(req.params.requestObject),function(reqObj)
{
  if(reqObj.count==0)
  {
    res.send([]);
  }
  else
  {
    var keysObject=reqObj.keysObject;
    var index=0;
    for(var keyName in keysObject)
    {
        if(keyName=="bgvKeys")
        {
          bgvDocument.getAllTheRecords(keysObject[keyName],handleResponse);
        }
        else if(keyName=="visaKeys")
        {
          visaDocument.getAllTheRecords(keysObject[keyName],handleResponse);
        }
        else if(keyName=="qualificationKeys")
        {
          qualificationDocument.getAllTheRecords(keysObject[keyName],handleResponse);
        }
        else if(keyName=="employeeKeys")
        {
          employee.getAllTheRecords(keysObject[keyName],handleResponse);
        }
    }
}

function handleResponse(err,bgvData)
{
  if(!err)
  {
  allObjects.push(bgvData);
  index++;
  if(index==reqObj.count)
    {
    makeASingleObject(allObjects,reqObj.newRow,function(singleObject)
    {
      res.send(singleObject);
    })
    }
  }
}

function makeASingleObject(allObjects,newRow,callback)
{
  var singleObject=[];
  var count=0
  var object=newRow;
  if(allObjects.length>0)
  {
    for(objectIndex=0;objectIndex<allObjects[0].length;objectIndex++)
      {

        var object={};
        for(var arrayIndex=0;arrayIndex<allObjects.length;arrayIndex++)
        {
          for(var key in allObjects[arrayIndex][objectIndex].toObject())
            {
              object[key]=allObjects[arrayIndex][objectIndex][key];
            }
        }
        singleObject.push(object);
      }
  }
  callback(singleObject);
}

});

function makeKeyObjects(data,callback)
{
  data['employeeKeys'].push('tower');
  var keysObject={};
  var holdKeys={};
  var flag=true;
  var count=0;
  for(var key in data)
  {
    if(data[key].length>0)
    {
      var object={};
      if(flag)
      {
      object['empNo']=1;
      flag=false;
      }
      for(var i=0;i<data[key].length;i++)
        {
          object[data[key][i]]=1;
          holdKeys[data[key][i]]=1;
        }
        object["_id"]=0;
      keysObject[key]=object;
      count++;
    }
  }

  callback({"count":count,"keysObject":keysObject,"newRow":holdKeys});
}


});
//end of modify table route..


function sendResponse(err,data)
{
  if(!err)
  res.send(data)
  else {
    res.send({});
  }
}
module.exports = router;
