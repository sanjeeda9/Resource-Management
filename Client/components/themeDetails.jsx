import React from 'react';

export default class ThemeDetails extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div className="well">
        <div><span><b>Recommended Theme :</b> </span> {this.props.themeProps.recommendedTheme}</div><br/>
        <div><span><b>Recommended Sub Theme :</b> </span> {this.props.themeProps.recommendedSubTheme}</div><br/>
        <div><span><b>Recommended Cell Type :</b> </span> {this.props.themeProps.recommendedCellType}</div><br/>
        <div><span><b>Recommended Cell :</b> </span> {this.props.themeProps.recommendedCell}</div><br/>
        <div><span><b>Recommended Role :</b> </span> {this.props.themeProps.recommendedRole}</div><br/>
        <div><span><b>Seed Member :</b> </span> {this.props.themeProps.seedMember}</div><br/>
      </div>
    )
  }
}
