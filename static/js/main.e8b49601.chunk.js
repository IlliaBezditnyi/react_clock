(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),i=c(3),s=c(5),l=c(4),r=c(1),u=c.n(r),m=(c(12),c(13),c(0)),h=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(t){var n;return Object(o.a)(this,c),(n=e.call(this,t)).state={currentTime:(new Date).toLocaleTimeString()},n.timerId=void 0,n.timerId=null,n}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({currentTime:(new Date).toLocaleTimeString()}),console.log(t.state.currentTime)}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.clockName!==t.clockName&&console.log("The Clock was renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){null!==this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"clock","data-cy":"time",children:Object(m.jsx)("p",{className:"clock__time",children:this.state.currentTime})})}}]),c}(u.a.Component),b=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Kyiv",isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){var e=["Kyiv","Helsinki","Jerusalem","Athens","Riga","Vilnius","Tallinn","Chi\u0219in\u0103u ","Bucharest"],c=e[Math.floor(Math.random()*e.length)];t.setState({clockName:c})},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this.state,e=t.clockName,c=t.isClockVisible;return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("h1",{className:"app__title",children:e}),c&&Object(m.jsx)(h,{clockName:e}),Object(m.jsxs)("div",{className:"app__buttons",children:[Object(m.jsx)("button",{className:"app__button",type:"button",onClick:this.showClock,children:"Show"}),Object(m.jsx)("button",{className:"app__button",type:"button",onClick:this.hideClock,children:"Hide"}),Object(m.jsx)("button",{className:"app__button",type:"button",onClick:this.setRandomName,children:"Rename"})]})]})}}]),c}(u.a.Component);a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e8b49601.chunk.js.map