import React from 'react';

export default class AssetGeneralDetails extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return(
      <div>
        <div><span><b>Employee No. :</b> </span> {this.props.assetInfoProps.empNo}</div><br/>
        <div><span><b>Mentor :</b> </span> {this.props.assetInfoProps.mentor}</div><br/>
        <div><span><b>Allocation Status :</b> </span> {this.props.assetInfoProps.allocationStatus}</div><br/>
        <div><span><b>Employee Band :</b> </span> {this.props.assetInfoProps.empBand}</div><br/>
        <div><span><b>Location :</b> </span> {this.props.assetInfoProps.location}</div><br/>
        <div><span><b>Proposed Location :</b> </span> {this.props.assetInfoProps.proposedLocation}</div><br/>
        <div><span><b>L1 Select:</b> </span> {this.props.assetInfoProps.l1_select}</div><br/>
        <div><span><b>Deployment Ready Time Frame :</b> </span> {this.props.assetInfoProps.deploymentReadyTimeFrame}</div><br/>
      </div>
    )
  }
}
