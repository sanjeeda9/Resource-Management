import React from 'react';

export default class BgvDetails extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div className="well">
        <div><span><b>BGV Requested :</b> </span> {this.props.bgvProps.bgvRequested}</div><br/>
        <div><span><b>BGV Initiated Date :</b> </span> {this.props.bgvProps.bgvInitiatedDate}</div><br/>
        <div><span><b>BGV Completion Date :</b> </span> {this.props.bgvProps.bgvCompletionDate}</div><br/>
        <div><span><b>BGV Status :</b> </span> {this.props.bgvProps.bgvStatus}</div><br/>
        <div><span><b>BGV Expected Completion Date :</b> </span> {this.props.bgvProps.bgvExpectedCompletionDate}</div><br/>
        <div><span><b>BGV Remarks :</b> </span> {this.props.bgvProps.bgvRemarks}</div><br/>
        <div><span><b>RSA Token :</b> </span> {this.props.bgvProps.rsaToken}</div><br/>
        <div><span><b>Desktop Available :</b> </span> {this.props.bgvProps.desktopAvailable}</div><br/>
      </div>
    )
  }
}
