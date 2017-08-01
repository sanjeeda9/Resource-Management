import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {cyan200, brown600, lightBlue300} from 'material-ui/styles/colors';
import AssetGeneralDetails from './assetGeneralDetails.jsx';
import ThemeDetails from './themeDetails.jsx';
import BgvDetails from './bgvDetails.jsx';
import VisaDetails from './visaDetails.jsx';
import QualificationDetails from './qualificationDetails.jsx';

const styles={
  dialogcontent:{
    marginTop:10
  },
  avatar:
  {
    margin: 8
  }
}

export default class Content extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      themeDivState : false,
      bgvDivState : false,
      visaDivState:false,
      qualificationDivState:false,
      bgvData: {},
      visaData:{},
      qualificationData:{},
      digitalAcademyData: {},
    },
    this.handleThemeClick = this.handleThemeClick.bind(this);
    this.handleBgvClick = this.handleBgvClick.bind(this);
    this.handleVisaClick = this.handleVisaClick.bind(this);
    this.handleQualificationClick = this.handleQualificationClick.bind(this);
  };

  handleThemeClick() {
    if(this.state.themeDivState){
      this.setState({themeDivState: false})
    }
    else{
      this.setState({
        themeDivState: true,
        bgvDivState : false,
        visaDivState:false,
        qualificationDivState:false
      })
    }
  };

  handleBgvClick(empNo) {
    if(this.state.bgvDivState){
      this.setState({bgvDivState: false})
    }
    else{
      if(Object.keys(this.state.bgvData).length == 0){
        $.get('/bgvRoute/getBgvDetails/' + empNo, function(result){
          this.setState({
            bgvData: result,
            bgvDivState: true,
            themeDivState : false,
            visaDivState:false,
            qualificationDivState:false
          })
        }.bind(this));
      }
      else{
        this.setState({
          bgvDivState: true,
          themeDivState : false,
          visaDivState:false,
          qualificationDivState:false
        })
      }
    }
  };

  handleVisaClick(empNo) {
    if(this.state.visaDivState){
      this.setState({visaDivState: false})
    }
    else{
      if(Object.keys(this.state.visaData).length == 0){
        $.get('/visaRoute/getVisaDetails/' + empNo, function(result){
        this.setState({
          visaData: result,
          visaDivState: true,
          themeDivState : false,
          bgvDivState : false,
          qualificationDivState:false
        })
        }.bind(this));
      }
      else{
        this.setState({
          visaDivState: true,
          themeDivState : false,
          bgvDivState : false,
          qualificationDivState:false
        })
      }
    }
  };

  handleQualificationClick(empNo) {
    if(this.state.qualificationDivState){
      this.setState({qualificationDivState: false})
    }
    else{
      if(Object.keys(this.state.qualificationData).length == 0){

        $.get('/qualificationRoute/getQualificationDetails/' + empNo, function(result){
        this.setState({
          qualificationData: result,
          digitalAcademyData: result.digitalAcademy,
          qualificationDivState: true,
          themeDivState : false,
          bgvDivState : false,
          visaDivState:false
        })
        }.bind(this));
      }
      else{
        this.setState({
          qualificationDivState: true,
          themeDivState : false,
          bgvDivState : false,
          visaDivState:false
        })
      }
    }
  };

  render(){
    var avatarletterArray= (this.props.assetInfo.empName).split(' ');
    var avatarletter= '';
    avatarletterArray.forEach(function(name){
      avatarletter+= name.substring(0,1).toUpperCase()
    });
    var empname = (this.props.assetInfo.empName).toUpperCase();
    return(
      <div style={styles.dialogcontent} >
          <Avatar
            color={brown600}
            backgroundColor={cyan200}
            size={50}
            style={styles.avatar}
          >
            {avatarletter}
          </Avatar>
          <label> {empname} </label>

          <div className="well">
            <AssetGeneralDetails assetInfoProps={this.props.assetInfo} />
          </div>
          <div>
            <div>
              <Toolbar style={{backgroundColor: lightBlue300}}>
                <ToolbarGroup>
                  <ToolbarTitle style={{color: 'black'}} text="Theme" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true} >
                  <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleThemeClick}><KeyboardArrowDown /></IconButton>
                </ToolbarGroup>
              </Toolbar>
            </div>
            <div className={this.state.themeDivState ? 'active' : 'hidden'}>
              <ThemeDetails themeProps={this.props.assetInfo} />
            </div>
          </div>
          <br />
          <div>
            <div>
              <Toolbar style={{backgroundColor: lightBlue300}}>
                <ToolbarGroup>
                  <ToolbarTitle style={{color: 'black'}} text="Background Verification" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true} >
                  <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleBgvClick.bind(this, this.props.assetInfo.empNo)}><KeyboardArrowDown /></IconButton>
                </ToolbarGroup>
              </Toolbar>
            </div>
            <div className={this.state.bgvDivState ? 'active' : 'hidden'}>
              <BgvDetails bgvProps={this.state.bgvData} />
            </div>
          </div>
          <br />
          <div>
            <div>
              <Toolbar style={{backgroundColor: lightBlue300}}>
                <ToolbarGroup>
                  <ToolbarTitle style={{color: 'black'}} text="Visa Information" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true} >
                  <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleVisaClick.bind(this, this.props.assetInfo.empNo)}><KeyboardArrowDown /></IconButton>
                </ToolbarGroup>
              </Toolbar>
            </div>
            <div className={this.state.visaDivState ? 'active' : 'hidden'}>
              <VisaDetails visaProps={this.state.visaData} />
            </div>
          </div>
          <br />
          <div>
            <div>
              <Toolbar style={{backgroundColor: lightBlue300}}>
                <ToolbarGroup>
                  <ToolbarTitle style={{color: 'black'}} text="Qualification Information" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true} >
                  <IconButton iconStyle={{fontSize:'30px'}} tooltip="Expand" onClick={this.handleQualificationClick.bind(this, this.props.assetInfo.empNo)}><KeyboardArrowDown /></IconButton>
                </ToolbarGroup>
              </Toolbar>
            </div>
            <div className={this.state.qualificationDivState ? 'active' : 'hidden'}>
              <QualificationDetails qualificationProps={this.state.qualificationData} />
            </div>
          </div>
      </div>
    )
  }
}
