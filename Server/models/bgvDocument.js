var mongoose=require('mongoose');
var employee=require('./employee.js');
var user=require('./user.js');
var getKeys=require('./getAllTheColumns.js');

var bgvSchema=mongoose.Schema({
    empNo:String,
    indent_Direct_Allocation: String,
  	bgvRequested: String,
  	bgvInitiatedDate: String,
  	bgvCompletionDate: String,
  	bgvStatus: String,
  	bgvExpectedCompletionDate: String,
  	bgvRemarks: String,
  	ct_id_Creation: String,
  	rsaToken: String,
  	desktopAvailable: String
});

bgvSchema.statics.addBgvDetails=function(callback)
  {
    this.create({
      empNo:"326805",
      bgvRequested: "",
      bgvInitiatedDate: "1-09-16",
      bgvCompletionDate: "7-09-16",
      bgvStatus: "completed",
      bgvExpectedCompletionDate: "",
      bgvRemarks:"Cleared on 7-09-16",
      ct_id_Creation: "",
      rsaToken: "",
      desktopAvailable:""
    },
    function(err,data)
    {
      if(!err)
      {
        callback(null,data);
      }
      else {
        console.log("err-----------",err);
      }
    })
};

//get bgvDetails based on employee number....
bgvSchema.statics.getBgvDetails=function(empNo,callback)
{
  this.findOne({
    "empNo":empNo
  },function(err,bgvObject)
    {
      if(!err)
        {
          callback(null,bgvObject);
        }
      else {
        console.log("err---",err);
        callback(err,null);
      }
    }
  )
}

bgvSchema.statics.getBgvDocumentKeys=function(callback)
{
  this.findOne({

  },function(err,data)
  {
    if(!err)
    {
      getKeys.getAllTheKeys({"collectionName":"bgvKeys","data":data},function(err,result)
        {
          if(!err)
            {
              callback(null,result);
            }
            else {
              callback(err,{});
            }
        })
    }
  });
}

bgvSchema.statics.updateBgvDetails=function(empNo,newBgvObject,callback)
{
  this.find({
    "empNo":empNo
  })
  .exec(function(err,oldBgvObject)
  {
  //oldBgvObject.
  })
}

bgvSchema.statics.getAllTheRecords=function(object,callback)
{

    this.find({},
      object,
      function(err,allTheRecords)
      {
        if(!err)
        {
            callback(null,allTheRecords)
        }
        else
          callback(err,{});
      })
}
module.exports=mongoose.model('bgvDocument',bgvSchema,'bgvDocuments');
