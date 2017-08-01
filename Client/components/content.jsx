import React from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Search from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import {teal800, orange700, green500, amber500, lightBlue900} from 'material-ui/styles/colors';
import AssetTable from './assetTable.jsx';
import AssetInfoDialog from './assetInfo.jsx';
import TableColumnModal from './tableColumnModal.jsx';

const customContentStyle = {
  width: '100%',
  maxWidth: 650,
};

var columns= {
            employeeKeys:['empName', 'empBand', 'location', 'mentor'],
            bgvKeys:[],
            visaKeys:[],
            qualificationKeys:[]
          };

export default class Content extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      assetTotalList: [],
      assetList: [],
      assetObject: {},
      searchId: "",
      open: false,
      columnDialogState: false,
      selectedTower: 'ADM',
      confirmedColumns: {
                          employeeKeys:['empName', 'empBand', 'location', 'mentor'],
                          bgvKeys:[],
                          visaKeys:[],
                          qualificationKeys:[]
                        },
    },
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getAssetDetails = this.getAssetDetails.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTableColumnModalOpen = this.handleTableColumnModalOpen.bind(this);
    this.handleTableColumnModalClose = this.handleTableColumnModalClose.bind(this);
    this.handleChosenKeysSubmit = this.handleChosenKeysSubmit.bind(this);
    this.handleSearchId = this.handleSearchId.bind(this);
    this.handleClearedSearch = this.handleClearedSearch.bind(this);

  };

  componentDidMount() {

    $.get('/lbgRoute/modifyTable/'+ JSON.stringify(this.state.confirmedColumns), function(result){
      this.setState({
         assetTotalList: result,
      })
      this.handleTabClick('ADM');
      }.bind(this));

  };

  handleTabClick(label){

  /*
 //insert details ---visa
      $.post('/visaRoute/insertVisaDetails', function(result){

        }.bind(this));

      //insert details ---qualification
      $.post('/qualificationRoute/insetQualificationDetails', function(result){

        }.bind(this));

      //insert details ---employee
    $.post('/lbgRoute/addEmployees', function(result){

        }.bind(this));

     //insert details ---bgv
      $.post('/bgvRoute/insertBgvDetails', function(result){

        }.bind(this));

  */
  /*
   $.get('/lbgRoute/getEmployees/'+towerType, function(result){
      this.setState({
        assetList: result
      })
    }.bind(this));
  */

      var assetArray = [];
      this.state.assetTotalList.forEach(function(assetObj){
        if(assetObj.tower===label)
        {
         assetArray.push(assetObj);
        }
      });

      this.setState({
          assetList: assetArray,
          selectedTower: label,
      })
  };

  getAssetDetails(asset){
     (asset);
    this.setState({
      assetObject: asset,
      open: true,
    })
  };

  handleSearchId()
  {
    var searchID = this.refs.searchField.getValue();
    var selectedTower = this.state.selectedTower;
    var assetArray = [];
    this.state.assetTotalList.forEach(function(assetObj){
      if(assetObj.empNo === searchID && assetObj.tower === selectedTower)
      {
       assetArray.push(assetObj);
      }
    });

    this.setState({
        assetList: assetArray,
    })
  };

  handleClearedSearch(){
    var searchID = this.refs.searchField.getValue();
    var selectedTower = this.state.selectedTower;
    var assetArray = [];
    if(searchID === ""){
      this.state.assetTotalList.forEach(function(assetObj){
        if(assetObj.tower === selectedTower)
        {
         assetArray.push(assetObj);
        }
      });
      this.setState({
        assetList: assetArray,
      })
    }
  };

  //Asset Dialog Method

  handleClose() {
    this.setState({open: false});
  };

  //TableColumn Dialog Methods

  handleTableColumnModalOpen() {
    this.setState({
                    columnDialogState: true,
                    //confirmedColumns:this.state.columns,
                  })
  };

  handleTableColumnModalClose() {
    var unchangedKeysList = JSON.parse(JSON.stringify(columns));
    this.setState({
      columnDialogState: false,
      confirmedColumns: unchangedKeysList,
      })
  };

  //Change Columns Calls

  handleChosenKeysSubmit()
  {

    $.get('/lbgRoute/modifyTable/'+ JSON.stringify(this.state.confirmedColumns), function(result){
      var assetArray = [];
      var selectedTower = this.state.selectedTower;
      var confirmedColumns = this.state.confirmedColumns;
      result.forEach(function(assetObj){
        if(assetObj.tower === selectedTower)
        {
         assetArray.push(assetObj);
        }
      });

      columns = JSON.parse(JSON.stringify(this.state.confirmedColumns));
      this.setState({
          assetTotalList: result,
          assetList: assetArray,
          columnDialogState: false,
      })
    }.bind(this));
  };

  render() {
    const styles={
        flatButtonStyle:{
                         fontWeight: 550, fontSize: 18, color: '#b31144'
                        },
        toolbarSeparatorStyle:
                        {   marginLeft: 0,
                            backgroundColor:teal800
                        }
    };

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const tableColumnModalActions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleTableColumnModalClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleChosenKeysSubmit}
      />
    ];

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <FlatButton label="ADM" labelStyle={styles.flatButtonStyle} onClick={this.handleTabClick.bind(this, 'ADM')} />
            <ToolbarSeparator style={styles.toolbarSeparatorStyle} />
            <FlatButton label="ASM" labelStyle={styles.flatButtonStyle} onClick={this.handleTabClick.bind(this, 'ASM')} />
            <ToolbarSeparator style={styles.toolbarSeparatorStyle}  />
            <FlatButton label="QA" labelStyle={styles.flatButtonStyle} onClick={this.handleTabClick.bind(this, 'QA')} />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
              <TextField
                ref="searchField"
                hintText="Search Emp No"
                style={{marginTop: '8px'}}
                hintStyle={{fontWeight: 'bold'}}
                onChange={this.handleClearedSearch}
              />
              <IconButton style={{height: '100%'}} iconStyle={{color: lightBlue900, fontSize: '30px'}}tooltip="Search" onClick={this.handleSearchId}>
                <Search />
              </IconButton>

              <Dialog
                title="Choose Columns to Display"
                contentStyle={customContentStyle}
                titleStyle={{backgroundColor: amber500, color: 'white'}}
                modal={false}
                actions={tableColumnModalActions}
                open={this.state.columnDialogState}
                autoScrollBodyContent={true}
                onRequestClose={this.handleTableColumnModalClose}
              >
                <TableColumnModal previouslyCheckedKeys={this.state.confirmedColumns} />
              </Dialog>
              <FlatButton
                 label="Choose Columns"
                 icon={<Edit />}
                 onClick={this.handleTableColumnModalOpen}
               />
          </ToolbarGroup>
        </Toolbar>

        <div className="well">
          <Paper zDepth={2}>
            <AssetTable assetListArray={this.state.assetList} chosenAssetView={this.getAssetDetails} />
            <Dialog
              title="Asset Details"
              contentStyle={customContentStyle}
              titleStyle={{backgroundColor: green500, color: 'white'}}
              modal={false}
              actions={actions}
              open={this.state.open}
              autoScrollBodyContent={true}
              onRequestClose={this.handleClose}
            >
                <AssetInfoDialog assetInfo={this.state.assetObject} />
            </Dialog>
          </Paper>
        </div>
      </div>
    );
  }
}
