(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);a(68),a(93);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),i=a(16),o=a.n(i),s=a(56),m=a(57),u=a(65),p=a(58),d=a(66),f=a(1),E=(a(114),a(115),a(59)),h=a.n(E),v=(a(116),a(117),a(118),a(119),a(120),a(121),a(55),a(122),a(123),a(124),a(125),a(126),a(127),a(60)),b=a.n(v),k=a(61),g=a.n(k),y=a(62),_=a.n(y),x=(a(128),a(63)),I=a.n(x),w=function(e){var t=e.id,a=(e.go,e.fetchedUser);return l.a.createElement(f.Panel,{id:t},l.a.createElement(f.PanelHeader,null,"FastMining"),a&&l.a.createElement(f.Group,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(f.ListItem,{before:a.photo_200?l.a.createElement(f.Avatar,{src:a.photo_200}):null,description:a.id&&a.id.title?a.id.title:""},"".concat(a.first_name," ").concat(a.last_name," ").concat(t)),l.a.createElement(f.ListItem,{before:l.a.createElement(b.a,null)}," \u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f: \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c "),l.a.createElement(f.ListItem,{before:l.a.createElement(g.a,null)},"\u041a\u043b\u0438\u043a\u043e\u0432: "),l.a.createElement(f.ListItem,{before:l.a.createElement(h.a,null)},"\u0411\u0430\u043b\u0430\u043d\u0441:")),l.a.createElement(f.Group,{title:""},l.a.createElement(f.Div,{style:{display:"flex"}},l.a.createElement(f.ListItem,{before:l.a.createElement(_.a,null)},"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0431\u043e\u043d\u0443\u0441: "),l.a.createElement(f.Button,{size:"x3",component:"a",href:"https://vk.me/fast__click",level:"tertiary"},l.a.createElement(I.a,null)))),l.a.createElement(f.Group,{title:"\u0418\u0433\u0440\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"},l.a.createElement(f.Div,{style:{display:"flex"}},"\x02",l.a.createElement(f.Button,{size:"xl",level:"outline",component:"a",href:"https://vk.me/fast__click"},"\u0418\u0433\u0440\u0430\u0442\u044c"),"\x02 \x02",l.a.createElement(f.Button,{size:"xl",level:"outline",component:"a",href:"https://vk.me/fast__click"},"\u0423\u0441\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u0438"))),l.a.createElement(f.Group,{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},l.a.createElement(f.Div,{style:{display:"flex"}},l.a.createElement(f.Button,{size:"xl",level:"1",component:"a",href:"https://vk.me/join/AJQ1d1FTqQ/1F9nzY7tQH1qZ"},"\u0411\u0435\u0441\u0435\u0434\u0430"),"\x02")),l.a.createElement(f.Group,{title:""},l.a.createElement(f.Div,{style:{display:"flex"}},l.a.createElement(f.Button,{size:"xl",level:"1",component:"a",href:"https://vk.com/fast__click"},"\u0413\u0440\u0443\u043f\u043f\u0430"),"\x02 \x02",l.a.createElement(f.Button,{size:"xl",level:"1",component:"a",href:"https://vk.com/supp_fastclick"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"))),l.a.createElement(f.Group,{title:""},l.a.createElement(f.Div,null,"\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u0437\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f FastMining!")))},B=(a(129),a(130),a(64)),G=a.n(B),P=a(32),U=a.n(P),j=Object(f.platform)(),z=function(e){return l.a.createElement(f.Panel,{id:e.id},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},j===f.IOS?l.a.createElement(G.a,null):l.a.createElement(U.a,null))},"\u0423\u0441\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u0438"),"trtrtrtr")},A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(f.View,{activePanel:this.state.activePanel},l.a.createElement(w,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),l.a.createElement(z,{id:"persik",go:this.go}))}}]),t}(l.a.Component);o.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"bright_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),o.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(A,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(131)}},[[67,1,2]]]);
//# sourceMappingURL=main.28c86811.chunk.js.map