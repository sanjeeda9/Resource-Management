module.exports={
  getAllTheKeys:function(object,callback)
  {
    var obj=object.data.toObject();
    var keysArray=[];
    var index=0;
    var length=Object.keys(obj).length-2;
    getKeys(obj);
      // ("insdie funcitn---",data);
      function getKeys(data)
      {
      for(var key in data)
        {
          if(key!='_id' && key!='__v')
          {
            if(typeof data[key]!=='object')
            {
            keysArray.push(key);
            //   (typeof data[key]);
            index++;
            }
            else {
                  //   ("found an object----",data.key);
                  length=length+Object.keys(data[key]).length-1;
                  getKeys(data[key]);
                  //index++;
            }
          }
          //   ("index---",index,"length----",length);
          if(index==length)
          {
            // ("keys array------",keysArray);
            callback(null,{"collectionName":object.collectionName,"data":keysArray});
          }
        }
      }
  }
}
