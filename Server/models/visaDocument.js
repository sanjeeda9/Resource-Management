var mongoose=require('mongoose');
var getKeys=require('./getAllTheColumns.js');

var visaShcema=mongoose.Schema({
    empNo: String,
  	visaStatus:String,
  	visaInitiated: String,
  	visaType: String,
  	initialTravelValidity: String,
  	plannedTravelDate: String,
  	actualTravelDate: String,
  	ukProjectStartDate: String
});


visaShcema.statics.insertVisaDetails=function(callback)
{
  this.create({
    empNo: '326805',
  	visaStatus:'initiated',
  	visaInitiated: 'initiated',
  	visaType: '',
  	initialTravelValidity: '> 1 year',
  	plannedTravelDate: '21-10-2016',
  	actualTravelDate: '',
  	ukProjectStartDate: ''
  },function(err,result)
  {
    if(!err)
      {
        callback(null,result)
      }
    else {
    }
  })
}

visaShcema.statics.getVisaDetails=function(empNo,callback)
{

  this.findOne({
    "empNo":empNo
  },function(err,visaObject)
  {
    if(!err)
      {
        callback(null,visaObject);
      }
    else {
      callback(err,null);
    }
  })
}

visaShcema.statics.getVisaDocumentKeys=function(callback)
{
  this.findOne({

  },function(err,data)
  {
    if(!err)
    {
      getKeys.getAllTheKeys({"collectionName":"visaKeys","data":data},function(err,result)
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

visaShcema.statics.getAllTheRecords=function(object,callback)
{
  this.find({},
    object,
    function(err,allTheRecords)
    {
    if(!err)
      callback(null,allTheRecords)
    else
      callback(err,{});
    })
}
module.exports=mongoose.model('visaDocument',visaShcema,'visaDocuments');
