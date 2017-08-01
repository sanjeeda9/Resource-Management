import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {deepPurple300} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const styles = {
  dialogcontent: {
    marginTop:10,
    height: 500,
  },
  block: {
    maxWidth: '100%',
  },
  checkbox: {
    marginBottom: 16,
    display: 'inline-block',
    width: '50%',
  },
};

export default class TableColumnModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      generalInfoDivState: false,
      bgvDivState : false,
      visaDivState:false,
      qualificationDivState:false,
      checkedKeys: [],
      keysObj: {},
    },

    this.handleGeneralInfoClick = this.handleGeneralInfoClick.bind(this);
    this.handleBgvClick = this.handleBgvClick.bind(this);
    this.handleVisaClick = this.handleVisaClick.bind(this);
    this.handleQualificationClick = this.handleQualificationClick.bind(this);
    this.handleEmployeeCheckbox = this.handleEmployeeCheckbox.bind(this);
    this.handleBGVCheckbox = this.handleBGVCheckbox.bind(this);
    this.handleVisaCheckbox = this.handleVisaCheckbox.bind(this);
    this.handleQualificationCheckbox = this.handleQualificationCheckbox.bind(this);
  };

  componentDidMount() {

    $.get('/lbgRoute/getAllTheKeys/', function(result){
      this.setState({
      keysObj: result,
      checkedKeys: this.props.previouslyCheckedKeys,
      })
    }.bind(this));
  };

  handleGeneralInfoClick() {
    if(this.state.generalInfoDivState){
      this.setState({generalInfoDivState: false})
    }
    else{
      this.setState({
        generalInfoDivState: true,
        bgvDivState : false,
        visaDivState:false,
        qualificationDivState:false
      })
    }
  };

  handleBgvClick() {
    if(this.state.bgvDivState){
      this.setState({bgvDivState: false})
    }
    else{
      this.setState({
        generalInfoDivState: false,
        bgvDivState: true,
        visaDivState:false,
        qualificationDivState:false
      })
    }
  };

  handleVisaClick() {
    if(this.state.visaDivState){
      this.setState({visaDivState: false})
    }
    else{
      this.setState({
        generalInfoDivState: false,
        visaDivState: true,
        bgvDivState : false,
        qualificationDivState:false
      })
    }
  };

  handleQualificationClick() {
    if(this.state.qualificationDivState){
      this.setState({qualificationDivState: false})
    }
    else{
      this.setState({
        generalInfoDivState: false,
        qualificationDivState: true,
        bgvDivState : false,
        visaDivState:false
      })
    }
  };

  //employee.js keys
  handleEmployeeCheckbox(keyValue, event, checked){
    var keyString = keyValue;
    var checkedList = this.state.checkedKeys;
    if(checked)
    {
      checkedList['employeeKeys'].push(keyValue);
      this.setState({checkedKeys: checkedList})
    }
    else{
      var index = checkedList['employeeKeys'].indexOf(keyValue);
      checkedList['employeeKeys'].splice(index, 1);
      this.setState({checkedKeys: checkedList})
    }
  };

  //bgv keys
  handleBGVCheckbox(keyValue, event, checked){
    var keyString = keyValue;
    var checkedList = this.state.checkedKeys;
    if(checked)
    {
      checkedList['bgvKeys'].push(keyValue);
      this.setState({checkedKeys: checkedList})
    }
    else{
      var index = checkedList['bgvKeys'].indexOf(keyValue);
      checkedList['bgvKeys'].splice(index, 1);
      this.setState({checkedKeys: checkedList})
    }
  };

  //visa keys
  handleVisaCheckbox(keyValue, event, checked){
    var keyString = keyValue;
    var checkedList = this.state.checkedKeys;
    if(checked)
    {
      checkedList['visaKeys'].push(keyValue);
      this.setState({checkedKeys: checkedList})
    }
    else{
      var index = checkedList['visaKeys'].indexOf(keyValue);
      checkedList['visaKeys'].splice(index, 1);
      this.setState({checkedKeys: checkedList})
    }
  };

  //qualifiation keys
  handleQualificationCheckbox(keyValue, event, checked){
    var keyString = keyValue;
    var checkedList = this.state.checkedKeys;
    if(checked)
    {
      checkedList['qualificationKeys'].push(keyValue);
      this.setState({checkedKeys: checkedList})
    }
    else{
      var index = checkedList['qualificationKeys'].indexOf(keyValue);
      checkedList['qualificationKeys'].splice(index, 1);
      this.setState({checkedKeys: checkedList})
    }
  };

  render(){
    var employeeKeys=[];
    var visaKeys=[];
    var bgvKeys=[];
    var qualificationKeys=[];

    for(var keySet in this.state.keysObj)
    {
      if(keySet=='employeeKeys')
      {
        for(var index=0; index<this.state.keysObj[keySet].length; index++)
        {
          if(this.state.keysObj[keySet][index] !== 'empNo'){
            employeeKeys.push(
              <Checkbox
                key={index}
                label={this.state.keysObj[keySet][index]}
                defaultChecked={(this.state.checkedKeys[keySet].indexOf(this.state.keysObj[keySet][index]) === -1) ? false: true}
                style={styles.checkbox}
                onCheck={this.handleEmployeeCheckbox.bind(this, this.state.keysObj[keySet][index])}
              />
            );
          }
        }
      }
      else if(keySet=='visaKeys')
      {
        for(var index=0;index<this.state.keysObj[keySet].length;index++)
        {
          if(this.state.keysObj[keySet][index] !== 'empNo'){
            visaKeys.push(
              <Checkbox
                key={index}
                label={this.state.keysObj[keySet][index]}
                defaultChecked={(this.state.checkedKeys[keySet].indexOf(this.state.keysObj[keySet][index]) === -1) ? false: true}
                style={styles.checkbox}
                onCheck={this.handleVisaCheckbox.bind(this, this.state.keysObj[keySet][index])}
              />
            );
          }
        }
      }
      else if(keySet=='bgvKeys')
      {
        for(var index=0;index<this.state.keysObj[keySet].length;index++)
        {
          if(this.state.keysObj[keySet][index] !== 'empNo'){
            bgvKeys.push(
              <Checkbox
                key={index}
                label={this.state.keysObj[keySet][index]}
                defaultChecked={(this.state.checkedKeys[keySet].indexOf(this.state.keysObj[keySet][index]) === -1) ? false: true}
                style={styles.checkbox}
                onCheck={this.handleBGVCheckbox.bind(this, this.state.keysObj[keySet][index])}
              />
            );
          }
        }
      }
      else if(keySet=='qualificationKeys')
      {
        for(var index=0;index<this.state.keysObj[keySet].length;index++)
        {
          if(this.state.keysObj[keySet][index] !== 'empNo'){
            qualificationKeys.push(
              <Checkbox
                key={index}
                label={this.state.keysObj[keySet][index]}
                defaultChecked={(this.state.checkedKeys[keySet].indexOf(this.state.keysObj[keySet][index]) === -1) ? false: true}
                style={styles.checkbox}
                onCheck={this.handleQualificationCheckbox.bind(this, this.state.keysObj[keySet][index])}
              />
            );
          }
        }
      }
    }
    return(
     <div style={styles.dialogcontent}>
         <div style={styles.block}>
           <div>
             <Toolbar style={{backgroundColor: deepPurple300}}>
               <ToolbarGroup>
                 <ToolbarTitle style={{color: 'black'}} text="Asset General Info" />
               </ToolbarGroup>
               <ToolbarGroup lastChild={true} >
                 <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleGeneralInfoClick}><KeyboardArrowDown /></IconButton>
               </ToolbarGroup>
             </Toolbar>
           </div>
           <div className={this.state.generalInfoDivState ? 'active well' : 'hidden well'}>
             {employeeKeys}
           </div>
         </div>
         <br />
         <div style={styles.block}>
           <div>
             <Toolbar style={{backgroundColor: deepPurple300}}>
               <ToolbarGroup>
                 <ToolbarTitle style={{color: 'black'}} text="Background Verification" />
               </ToolbarGroup>
               <ToolbarGroup lastChild={true} >
                 <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleBgvClick}><KeyboardArrowDown /></IconButton>
               </ToolbarGroup>
             </Toolbar>
           </div>
           <div className={this.state.bgvDivState ? 'active well' : 'hidden well'}>
             {bgvKeys}
           </div>
         </div>
         <br />
         <div style={styles.block}>
           <div>
             <Toolbar style={{backgroundColor: deepPurple300}}>
               <ToolbarGroup>
                 <ToolbarTitle style={{color: 'black'}} text="Visa Information" />
               </ToolbarGroup>
               <ToolbarGroup lastChild={true} >
                 <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleVisaClick}><KeyboardArrowDown /></IconButton>
               </ToolbarGroup>
             </Toolbar>
           </div>
           <div className={this.state.visaDivState ? 'active well' : 'hidden well'}>
             {visaKeys}
           </div>
         </div>
         <br />
         <div style={styles.block}>
           <div>
             <Toolbar style={{backgroundColor: deepPurple300}}>
               <ToolbarGroup>
                 <ToolbarTitle style={{color: 'black'}} text="Qualification Information" />
               </ToolbarGroup>
               <ToolbarGroup lastChild={true} >
                 <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleQualificationClick}><KeyboardArrowDown /></IconButton>
               </ToolbarGroup>
             </Toolbar>
           </div>
           <div className={this.state.qualificationDivState ? 'active well' : 'hidden well'}>
             {qualificationKeys}
           </div>
         </div>
     </div>
    )
  }
}
