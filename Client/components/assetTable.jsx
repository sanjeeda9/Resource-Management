import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Error from 'material-ui/svg-icons/alert/error';
import {teal500, yellow600} from 'material-ui/styles/colors';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class AssetTable extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      headerRowObj: {
        empName: 'Emp Name',
        allocationStatus: 'Allocation Status',
        empBand: 'Emp_Band',
        location: 'Location',
        mentor: 'Mentor',
        proposedLocation: 'Proposed Location',
        bgvStatus: 'BGV Status',
        travelStatus: 'Travel Status',
        visaStatus: 'Visa Status',
        deploymentReadyTimeFrame: 'Deployment Ready Time Frame',
        criticality: 'Criticality',
        visaExpiry: 'Visa Expiry',
        tower: 'Tower',
        l1_select: 'L1 Select',
        recommendedTheme: 'Recommended Theme',
        recommendedSubTheme: 'Recommended Sub Theme',
        recommendedCellType: 'Recommended Cell Type',
        recommendedCell: 'Recommended Cell',
        recommendedRole: 'Recommended Role',
        seedMember: 'Seed Member',

        visaInitiated: 'Visa Initiated',
        visaType: 'Visa Type',
        initialTravelValidity: 'Initial Travel Validity',
        plannedTravelDate: 'Planned Travel Date',
        actualTravelDate: 'Actual Travel Date',
        ukProjectStartDate: 'UK Project Start Date',

        techSkills: 'Technology/Skills',
        digithonCleared: 'Digithon Cleared',
        trainingComplete: 'Training Complete',
        trainingType: 'Training Type',
        trainingCompletionDate: 'Training Completion Date',
        agileTraining: 'Agile Training',
        bfsiTraining: 'Bfsi Training',
        skillGapTrainingComplete: 'Skill Gap Training Complete',
        skillGap: 'Skill Gap',

        indent_Direct_Allocation: 'Indent Direct Allocation',
      	bgvRequested: 'BGV Requested',
      	bgvInitiatedDate: 'BGV Initiated Date',
      	bgvCompletionDate: 'BGV Completion Date',
      	bgvExpectedCompletionDate: 'BGV Expected Completion Date',
      	bgvRemarks: 'BGV Remarks',
      	ct_id_Creation: 'CT ID Creation',
      	rsaToken: 'RSA Token',
      	desktopAvailable: 'Desktop Available',
      },
      rowArray: [],
    },

    this.handleIdClick = this.handleIdClick.bind(this);
  };

  componentDidUpdate(){
    var rowArrayCheck = this.state.rowArray;
    if(this.props.assetListArray.length != 0){
      var rowArrayProps = Object.keys(this.props.assetListArray[0]);
      if(rowArrayCheck.toString() != rowArrayProps.toString()){
        this.setState({
          rowArray: Object.keys(this.props.assetListArray[0]),
        })
      }
    }
  };

  handleIdClick(rowIndex) {
  console.log(rowIndex);
    return this.props.chosenAssetView(this.props.assetListArray[rowIndex]);
  };

  render () {
    var rows=[];
    var headerRow=[];

    this.state.rowArray.forEach(function(colname, i){
      if(colname !== 'empNo'){
        headerRow.push(
           <TableHeaderColumn key={i} style={{whiteSpace: 'pre-line', width:150, fontSize:18, color: 'black'}} >{this.state.headerRowObj[colname]}</TableHeaderColumn>
        )
      }
    }.bind(this));

    if(this.props.assetListArray.length == 0)
    {
      rows.push(
        <TableRow key="emptyList">
          <TableRowColumn>
            <h1 style={{textAlign: 'center', color: 'firebrick'}}><Error style={{color: yellow600, width: '40px', height: '40px'}} />No Data Found..!!</h1>
          </TableRowColumn>
        </TableRow>
      );
    }
    else
    {
        this.props.assetListArray.forEach(function (record, i) {

          var rowcol=[];
          this.state.rowArray.forEach(function(colname, j){
            if(colname == 'empNo'){
              rowcol.push(
                <TableRowColumn key={j} style={{whiteSpace: 'pre-line', width:150}}>
                  <button className="btn btn-primary" onClick={this.handleIdClick.bind(this, i)}>{record['empNo']}</button>
                </TableRowColumn>
              );
            }
            else{
              rowcol.push(
                <TableRowColumn key={j} style={{whiteSpace: 'pre-line', width:150}} >
                  {record[colname]}
                </TableRowColumn>
              );
            }
          }.bind(this));

          rows.push(
            <TableRow key={i} value={record['empNo']} >
              {rowcol}
            </TableRow>
          );
        }.bind(this));
    }

    return(
        <Table bodyStyle={{overflow:'visible'}}>
             <TableHeader style={{backgroundColor: teal500}} displaySelectAll={false} adjustForCheckbox={false} >
               <TableRow>
                  <TableHeaderColumn style={{whiteSpace: 'pre-line', width:150, fontSize:18, color: 'black'}} >Emp No</TableHeaderColumn>
                  {headerRow}
               </TableRow>
             </TableHeader>

             <TableBody displayRowCheckbox={false} >
                 {rows}
             </TableBody>
        </Table>
      )
  }
};
