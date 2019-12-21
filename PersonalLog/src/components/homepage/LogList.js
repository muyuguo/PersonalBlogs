/*
 * @Author: 谷锦涛 
 * @Date: 2019-10-29 12:25:13 
 * @Last Modified by: 谷锦涛
 * @Last Modified time: 2019-11-10 18:48:35
 */

import React from 'react';

import {Link} from "react-router-dom";
import About from '../../../src/components/About';
import '../../scss/LogList.scss'
import { Icon } from 'antd';
const images = {
    test: require('../../images/dog.png'),
    list1: require('../../images/list-1.jpg'),
    list2: require('../../images/list-2.jpg'),
    list3: require('../../images/list-3.jpg')
}

class LogList extends React.Component {
    
    render() {
        return (
        
            <div id="log-list">
                <ul className="list-wrapper">
                    <li className="card">
                      <div className="right-scroll-wrapper">
                          <div className="top-text">
                              <img src={images.list1} alt="list1"/>
                              <p>每一个你不满意的现在，都有一个你没有努力的曾经。每一个你不满意的现在，都有一个你没有努力的曾经。</p>
                          </div>
                      </div>
                      <div className="right-content-description">
                          <div className="top-title">
                              <p><Link to="/about">这是一个测试样例</Link></p>
                          </div>
                          <div className="bottom-complex">
                              <div className="time">
                              <Icon type="clock-circle" />
                              <p>2019/11/03</p>
                              </div>
                              <div className="tags">
                              <ul>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Vue</p>
                                  </li>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Webpack</p>
                                  </li>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Axios</p>
                                  </li>
                              </ul>
                              </div>
                          </div>
                      </div>
                    </li>
                    <li className="card">
                    <div className="right-scroll-wrapper">
                          <div className="top-text">
                              <img src={images.list2} alt="list1"/>
                              <p>每一个你不满意的现在，都有一个你没有努力的曾经。</p>
                          </div>
                      </div>
                    <div className="right-content-description">
                          <div className="top-title">
                          <p><Link to="/about">这是一个测试样例</Link></p>
                          </div>
                          <div className="bottom-complex">
                              <div className="time">
                              <Icon type="clock-circle" />
                              <p>2019/11/03</p>
                              </div>
                              <div className="tags">
                              <ul>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Vue</p>
                                  </li>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Webpack</p>
                                  </li>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Axios</p>
                                  </li>
                              </ul>
                              </div>
                          </div>
                      </div>
                    </li> 
                    <li className="card">
                    <div className="right-scroll-wrapper">
                          <div className="top-text">
                              <img src={images.list3} alt="list1"/>
                              <p>每一个你不满意的现在，都有一个你没有努力的曾经。</p>
                          </div>
                      </div>
                    <div className="right-content-description">
                          <div className="top-title">
                          <p><Link to="/about">这是一个测试样例</Link></p>
                          </div>
                          <div className="bottom-complex">
                              <div className="time">
                              <Icon type="clock-circle" />
                              <p>2019/11/03</p>
                              </div>
                              <div className="tags">
                              <ul>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Vue</p>
                                  </li>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Webpack</p>
                                  </li>
                                  <li>
                                      <Icon type="tag" theme="twoTone" twoToneColor="#52c41a"/>
                                      <p>Axios</p>
                                  </li>
                              </ul>
                              </div>
                          </div>
                      </div>
                    </li>
                </ul>
            </div>
      
        
        )
    }
}

export default LogList;