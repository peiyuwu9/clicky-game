(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bowser","image":"./images/Bowser.png"},{"id":2,"name":"Donkey Kong","image":"./images/DonkeyKong.png"},{"id":3,"name":"Kirby","image":"./images/Kirby.png"},{"id":4,"name":"Luigi","image":"./images/Luigi.png"},{"id":5,"name":"Mario","image":"./images/Mario.png"},{"id":6,"name":"PrincessPeach","image":"./images/PrincessPeach.png"},{"id":7,"name":"Toad","image":"./images/Toad.png"},{"id":8,"name":"Waluigi","image":"./images/Waluigi.png"},{"id":9,"name":"Yoshi","image":"./images/Yoshi.png"}]')},,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),o=t(7),s=t(3),m=t(4),l=t(8),h=t(5),g=t(9),d=t(6);var u=function(e){var a=e.children;return c.a.createElement("div",{className:"container"},a)};var f=function(e){var a=e.score,t=e.highScore;return c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement("h5",{className:"display-4"}," Your Score: ",a," High Score: ",t))};var v=function(e){var a=e.children;return c.a.createElement("div",{className:"row justify-content-center"},a)};var p=function(e){var a=e.key,t=e.size,n=e.children;return c.a.createElement("div",{key:a,className:t},n)};t(15);var k=function(e){var a=e.name,t=e.children;return c.a.createElement("div",{className:"card text-white bg-info"},c.a.createElement("div",{className:"card-header"},a),c.a.createElement("div",{className:"card-body"},t))};var E=function(e){var a=e.id,t=e.name,n=e.image,r=e.onClick;return c.a.createElement("img",{id:a,src:n,alt:t,onClick:function(){return r(a)}})},y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(c)))).state={charactors:d,highScore:0,clicked:[]},t.randomize=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.handleOnClickImage=function(e){t.state.clicked.includes(e)?(alert("You loss the game!"),t.resetGame()):t.setState((function(a){return{clicked:[].concat(Object(o.a)(a.clicked),[e]),charactors:t.randomize(t.state.charactors)}}),(function(){t.checkHighScore(),t.handleWin()}))},t.checkHighScore=function(){t.state.clicked.length>t.state.highScore&&t.setState({highScore:t.state.clicked.length})},t.handleWin=function(){t.state.clicked.length===t.state.charactors.length&&(alert("You Win!"),t.resetGame())},t.resetGame=function(){t.setState({charactors:t.randomize(t.state.charactors),clicked:[]})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({charactors:this.randomize(this.state.charactors)})}},{key:"render",value:function(){var e=this,a=this.state,t=a.charactors,n=a.highScore,r=a.clicked;return c.a.createElement(u,null,c.a.createElement(f,{score:r.length,highScore:n}),c.a.createElement(v,null,t.map((function(a){var t=a.id,n=a.name,r=a.image;return c.a.createElement(p,{key:t,size:"col-4"},c.a.createElement(k,{name:n},c.a.createElement(E,{id:t,name:n,image:r,onClick:e.handleOnClickImage})))}))))}}]),a}(n.Component);t(16);i.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.749cd5aa.chunk.js.map