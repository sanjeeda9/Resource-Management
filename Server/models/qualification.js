var mongoose=require('mongoose');
var getKeys=require('./getAllTheColumns.js');

var qualificationSchema=mongoose.Schema({
    empNo: String,
  	techSkills: String,
  	digithonCleared:String,
  	trainingComplete: String,
  	trainingType: String,
  	trainingCompletionDate: String,
  	agileTraining: String,
  	bfsiTraining: String,
  	skillGapTrainingComplete: String,
  	skillGap: String
});

qualificationSchema.statics.insetQualificationDetails=function(callback)
{
  this.create({
    empNo: '326805',
    techSkills:'MERN',
    digithonCleared:'yes',
    trainingComplete: 'yes',
    trainingType:'hybrid',
    trainingCompletionDate: '15-6-2016',
    agileTraining: 'yes',
    bfsiTraining: 'no',
    skillGapTrainingComplete: '',
    skillGap: ''
  },function(err,result)
  {
    if(!err)
      callback(null,result);
  })
}

qualificationSchema.statics.getQualificationDetails=function(empNo,callback)
{
  this.findOne({
    "empNo":empNo
  },function(err,result)
  {
    if(!err)
      {
        callback(null,result);
      }
    else {
      callback(err,null);
    }
})
}

qualificationSchema.statics.getQualificationDocumentKeys=function(callback)
{
  this.findOne({

  },function(err,data)
  {
    if(!err)
    {
      getKeys.getAllTheKeys({"collectionName":"qualificationKeys","data":data},function(err,result)
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

qualificationSchema.statics.getAllTheRecords=function(object,callback)
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
qualificationSchema.statics.updateQualificationDetails=function(empNo,newObject,callback)
  {

  }

module.exports=mongoose.model("qualification",qualificationSchema,'qualifications');
