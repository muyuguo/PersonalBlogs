import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/LogContent.scss'

class LogContent extends React.Component {
    render() {
        return (
            <div id="log-content">
                <div className="log-content-main">
                  <div className="left-menu">
                      <ul className="menu-ul">
                          <li className="menu-item">111
                              <ul className="child-menu-ul">
                                  <li>111-1</li>
                                  <li>111-2</li>
                                  <li>111-3</li>
                                  <li>111-4</li>
                                  <li>111-5</li>
                              </ul>
                          </li>
                          <li>222</li>
                          <li>333</li>
                          <li>444</li>
                      </ul>
                  </div>
                  <div className="middle-content"></div>
                  <div className="right-function"></div>
                </div>
            </div>
        )
    }
}

export default LogContent;