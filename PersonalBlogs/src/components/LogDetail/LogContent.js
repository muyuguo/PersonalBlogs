import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/LogContent.scss'
import { Icon } from 'antd';
const images = {
    bgImage: require('../../images/list-1.jpg')
}

var blogText = `为什么写这篇文章？

数组去重应该是面试必考问题之一。
虽然它是一道并不复杂的问题，但是也能看出面试者的广度和深度，还有考虑问题的全面性。
实际开发中我们应该选择哪种方式数组去重，本文告诉你。
你以为的不一定你以为，面试官不只是让你去重一个数组，他想知道的有点多，包括你的思想。
你以为的不一定你以为，面试官不只是让你去重一个数组，他想知道的有点多，包括你的思想。

当面试官问到时怎么回答？
首先:我知道多少种去重方式
双层 for 循环
function distinct(arr) {
    for (let i=0, len=arr.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr;

}
复制代码这种方法是利用一个空的 Object 对象，我们把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的,但是最后请注意这里obj[typeof item + item] = true没有直接使用obj[item],是因为
因为 123 和 '123' 是不同的，直接使用前面的方法会判断为同一个值，因为对象的键值只能是字符串，所以我们可以使用 typeof item + item 拼成字符串作为 key 值来避免这个问题。
然后:询问面试官具体场景
(如果你考虑的这些和你问的，面试官不以为然，可能自己都没想，随便让你数组去重，可能这个面试官也...)

性能考虑(是想要最快的速度查到数据吗？)
为了测试这些解法的性能，我写了一个测试模版，用来计算数组去重的耗时。
模版代码如下:
// distinct.js

let arr1 = Array.from(new Array(100000), (x, index)=>{
    return index
})

let arr2 = Array.from(new Array(50000), (x, index)=>{
    return index+index
})

let start = new Date().getTime()
console.log('开始数组去重')

let arr = a.concat(b);

function distinct(arr) {
    // 数组去重
}

console.log('去重后的长度', distinct(arr).length)

let end = new Date().getTime()
console.log('耗时', end - start)

作者：ikoala
链接：https://juejin.im/post/5e02110ee51d4557f046147b
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`;

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
                  <div className="middle-content">
                      <div className="blogs-title">
                            <img src={images.bgImage} alt=""/>
                            <div className="title-introduce">
                                <p className="titleTxt">这是博文标题</p>
                                <p className="titleDate">发布于2019 - 12 -24</p>
                                <div className="titleLabel">
                                    <a href=""><Icon type="tag" theme="filled" /><span>Vue</span></a>
                                    <a href=""><Icon type="tag" theme="filled" /><span>Node</span></a>
                                </div>
                            </div>
                           
                      </div> 
                      <div className="cutLine"></div>
                        <div className="blogText">
                            {blogText}
                        </div>
                    </div>
                  <div className="right-function"></div>
                </div>
            </div>
        )
    }
}

export default LogContent;