import React from 'react';
import {teal800, grey100} from 'material-ui/styles/colors';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';


export default class Header extends React.Component {
    render() {
    const styles={
        toolbarstyle: {backgroundColor:teal800,
        height: 85
      },
      imgstyle: {
        height: 50,
        width: 50,
        float: 'left'
      },
      headerdiv: {
        margin: 15
      },
      titlestyle: {
        marginLeft: 15,
        marginTop: 10,
        color: grey100,
        fontSize: 30
      }
    }

      var LBGLogo = "../img/logo.jpg";

      return (
                       <Toolbar style={styles.toolbarstyle}>
                          <div style={styles.headerdiv}>
                            <img src={LBGLogo} type="image/jpg" style={styles.imgstyle} />
                            <ToolbarTitle style={styles.titlestyle} text="LBG Asset Management" />
                          </div>
                       </Toolbar>

      );
    }
}
