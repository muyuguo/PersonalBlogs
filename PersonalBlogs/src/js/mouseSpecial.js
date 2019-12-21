import anime from 'animejs/lib/anime.es.js';
//添加按钮点击事件句柄
var event = document.querySelector('body').addEventListener('click', function (e) {
    var addClick = document.createElement('div');   //新建一个div元素
    //addClick.style.backgroundColor = 'red';
    addClick.style.width = '220px';
    addClick.style.height = '100px';
    console.log(addClick);
    addClick.style.zIndex = '1000';
    addClick.innerHTML = '❤٩(๑❛ᴗ❛๑)۶❤'; //设置弹出内容
    addClick.style.fontSize = "18px";
    var clickDiv = document.getElementById("App").appendChild(addClick); //给body节点添加第一个子节点

    var createClickDiv = document.createAttribute('id'); //创建属性节点
    createClickDiv.value = 'mouseClick'; //设置属性节点值class="mouseClick"
    clickDiv.setAttributeNode(createClickDiv); //给addClick增加class属性节点

    //缓动
    var leaderX = 0;
    var leaderY = 0;
    var targetX = 0;
    var targetY = 0;

    document.onclick = function (events) {
        var events = events || window.events;
        targetX = events.clientX - addClick.offsetWidth / 2;
        targetY = events.clientY - addClick.offsetHeight / 2;
        leaderX = targetX;
        leaderY = targetY + 20;
        addClick.style.left = leaderX + "px";
        addClick.style.top = leaderY + "px";
    }

    //值得顶的时间后执行事件
    setTimeout(function () {
       
        setTimeout(function () {
        addClick.style.top =  leaderY - 120 + "px"; 
        addClick.style.opacity = "0";
        }, 200)
        addClick.style.transition = " top, 1.5s, opacity, 1.5s";
        setTimeout(function () {
            document.getElementById("App").removeChild(addClick);
        }, 1500);
    }, 10);
    
})

export default event;