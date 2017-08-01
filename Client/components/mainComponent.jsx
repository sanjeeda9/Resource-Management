import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';


export default class Tour extends React.Component{
  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>  
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
