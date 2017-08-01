var mongoose=require('mongoose');
var bgv=require('./bgvDocument.js');
var getKeys=require('./getAllTheColumns.js');

var employeeSchema=new mongoose.Schema({
  empNo:{type:String,unique:true},
  empName:String,
  allocationStatus: String,
  empBand:String,
  location:String,
  mentor:String,
  proposedLocation:String,
  bgvStatus:String,
  travelStatus:String,
  visaStatus:String,
  deploymentReadyTimeFrame:String,
  criticality:String,
  visaExpiry:String,
  tower:String,
  l1_select:String,
  recommendedTheme:String,
  recommendedSubTheme:String,
  recommendedCellType:String,
  recommendedCell:String,
  recommendedRole:String,
  seedMember:String

});



employeeSchema.statics.addEmployee=function(callback)
{

  this.create({
    empNo:'326725',
    empName:'Srikanth Y',
    allocationStatus: 'Extended in same project',
    empBand:'Group L1',
    location:'Bangalore',
    mentor:'Gunjan Gupta',
    proposedLocation:'UK',
    travelStatus:'',
    deploymentReadyTimeFrame:'',
    criticality:'Y',
    visaExpiry:'',
    tower:'ADM',
    l1_select:'Y',
    recommendedTheme:'',
    recommendedSubTheme:'',
    recommendedCellType:'',
    recommendedCell:'',
    recommendedRole:'',
    seedMember:''
  },
function(err,data)
{
  if(!err)
  {
    callback(null,data);
  }

  else {
     console.log("err--",err);
  }
})
};


employeeSchema.statics.getEmployees=function(towerType,callback)
{
  this.find({
    "tower":towerType
  }).exec(function(err,data)
  {
    if(!err)
      callback(data);
    else
    callback(null);
  })
};

employeeSchema.statics.getEmployeeKeys=function(callback)
{
  this.findOne({

  },function(err,data)
  {
    if(!err)
    {
      getKeys.getAllTheKeys({"collectionName":"employeeKeys","data":data},function(err,result)
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

employeeSchema.statics.getAllTheRecords=function(object,callback)
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
module.exports=mongoose.model('employee',employeeSchema,'employees');
