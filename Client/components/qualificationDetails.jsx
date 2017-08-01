import React from 'react';

export default class QualificationDetails extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div className="well">
        <div><span><b>Technology/Skills :</b> </span> {this.props.qualificationProps.techSkills}</div><br/>
        <div><span><b>Digithon Cleared? :</b> </span> {this.props.qualificationProps.digithonCleared}</div><br/>
        <div><span><b>Digital Academy Training Completed? :</b> </span> {this.props.qualificationProps.trainingComplete}</div><br/>
        <div><span><b>Digital Academy Training Type :</b> </span> {this.props.qualificationProps.trainingType}</div><br/>
        <div><span><b>Digital Academy Training Completion Date :</b> </span> {this.props.qualificationProps.trainingCompletionDate}</div><br/>
        <div><span><b>Agile Training :</b> </span> {this.props.qualificationProps.agileTraining}</div><br/>
        <div><span><b>BFSI Training :</b> </span> {this.props.qualificationProps.bfsiTraining}</div><br/>
        <div><span><b>Skill Gap :</b> </span> {this.props.qualificationProps.skillGap}</div><br/>
        <div><span><b>Skill Gap Training Complete? :</b> </span> {this.props.qualificationProps.skillGapTrainingComplete}</div><br/>
      </div>
    )
  }
}
