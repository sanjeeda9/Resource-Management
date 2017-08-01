import React from 'react';
import {grey800} from 'material-ui/styles/colors';

const styles = {
tabColor :{backgroundColor: grey800}
};

export default class Footer extends React.Component {

  render() {
    return (
        <div className="container-fluid" id="footerAsset" style = {styles.tabColor}>
          <div className="row">
            <div className="container">
              <div className="text-center" style={{marginBottom: 15}}>

                <div style={{color: 'white'}}>
                  <h3>Wipro Digital</h3><br/>
                  <p>Wipro Ltd. &copy; 2015</p>
                </div>

                <div>
                  <a href="#">www.wiprodigital.com</a>
                </div>

              </div>

            </div>
          </div>
        </div>
    )
  }
}
