import React from 'react';

export default class VisaDetails extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div className="well">
        <div><span><b>Visa Status:</b> </span> {this.props.visaProps.visaStatus}</div><br/>
        <div><span><b>Visa Initiated Date :</b> </span> {this.props.visaProps.visaInitiated}</div><br/>
        <div><span><b>Visa Type :</b> </span> {this.props.visaProps.visaType}</div><br/>
        <div><span><b>Initial Travel Validity :</b> </span> {this.props.visaProps.initialTravelValidity}</div><br/>
        <div><span><b>Planned Date :</b> </span> {this.props.visaProps.plannedTravelDate}</div><br/>
        <div><span><b>Actual Travel Date :</b> </span> {this.props.visaProps.actualTravelDate}</div><br/>
        <div><span><b>UK Project Start Date :</b> </span> {this.props.visaProps.ukProjectStartDate}</div><br/>
      </div>
    )
  }
}
