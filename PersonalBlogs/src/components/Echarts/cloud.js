import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import '../../scss/Cloud.scss'
class Cloud extends React.Component {
    componentDidMount() {
        //初始化Echarts
        var myChart = echarts.init(document.getElementById('myCloud'));
        //绘制云图
        var option = {

            tooltip: {
                show: true
            },
            series: [{
                type: "wordCloud",
                gridSize:10,
                shape:'diamond',
                sizeRange: [18, 20],
                width:800,
                height:500,
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [
                    
                    {
                        name: "Vue",
                        value: 1
                    },
                    {
                        name: "React",
                        value: 1
                    },
                    {
                        name: "HTML",
                        value: 1
                    },
                    {
                        name: "CSS",
                        value: 1
                    },
                    {
                        name: "BootStrap",
                        value: 1
                    },
                    {
                        name: "Go",
                        value: 1
                    },
                    {
                        name: "网站优化",
                        value: 1
                    },
                    {
                        name: "日志",
                        value: 1
                    },
                    {
                        name: "软件推荐",
                        value: 1
                    },
                    {
                        name: "Http",
                        value: 1
                    },
                    {
                        name: "错误监控",
                        value: 1
                    },
                    {
                        name: "Node",
                        value: 1
                    },
                    {
                        name: "Webpack",
                        value: 1
                    },
                    {
                        name: "Canvas",
                        value: 1
                    }
                ],
            }]
        
        };

        myChart.setOption(option)
    }
    
    render() {
        return (
            <div id="myCloud">

            </div>
        )
    }
}

export default Cloud;