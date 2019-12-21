import React from 'react';
import Cloud from '../Echarts/cloud'
import '../../scss/Complex.scss'
import { Input } from 'antd';
const { Search } = Input;


class Complex extends React.Component {
    render() {
        return (
            <div id="Complex">
                <div className="chicken-soup">
                    <p className="text-title">
                        每日鸡汤
                    </p>
                    <div className="text-content">
    	                <p>
    	                    每一个你不满意的现在，都有一个你没有努力的曾经。
                        </p>
                    </div>
                </div>
                <div className="search-resource">
                    <p className="text-title">
                        站内搜索
                    </p>
                <div className="text-content">
                    <Search placeholder="请输入关键词" 
                    onSearch={value => console.log(value)} 
                    enterButton />
                </div>
                </div>
                <div className="cloud-picture">
                    <p className="text-title">
                        词云
                    </p>
                    <div className="text-content">
                        <Cloud></Cloud>
                    </div>
                </div>
                <div className="webCount">
                    <p className="text-title">
                        站点统计
                    </p>
                    <div className="text-content">
                        <ul className="statistics">
                            <li>标签：0个</li>
                            <li>文章：0篇</li>
                            <li>分类：0个</li>
                            <li>最后更新：xxxx-xx-xx</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Complex;