(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);a(68),a(93);var n=a(0),c=a.n(n),l=a(33),r=a.n(l),i=a(16),o=a.n(i),s=a(60),m=a(61),u=a(65),d=a(62),p=a(66),f=a(1),h=(a(114),a(115),a(63)),E=a.n(h),b=(a(116),a(117),a(118),a(119),a(34)),v=a.n(b),g=(a(120),a(58),a(121),a(122),a(123),a(64)),k=a.n(g),y=(a(124),a(125),function(e){var t=e.id,a=(e.go,e.fetchedUser);return c.a.createElement(f.Panel,{id:t},c.a.createElement(f.PanelHeader,null,"FastMining"),a&&c.a.createElement(f.Group,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c:"},c.a.createElement(f.ListItem,{before:a.photo_200?c.a.createElement(f.Avatar,{src:a.photo_200}):null},"".concat(a.first_name," ").concat(a.last_name))),c.a.createElement(f.Group,{title:"\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},c.a.createElement(f.Div,null,c.a.createElement(f.ListItem,{before:c.a.createElement(k.a,null)}," \u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f:    \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c "),c.a.createElement(f.ListItem,{before:c.a.createElement(E.a,null)},"\u0411\u0430\u043b\u0430\u043d\u0441:  100 FC"),c.a.createElement(f.ListItem,{before:c.a.createElement(v.a,null)},"\u041a\u043b\u0438\u043a\u043e\u0432: 313  "))),c.a.createElement(f.Group,{title:""},c.a.createElement(f.Div,{style:{display:"flex"}},c.a.createElement(f.Button,{size:"l",stretched:!0,style:{marginRight:8}},"\u0418\u0433\u0440\u0430\u0442\u044c"),c.a.createElement(f.Button,{size:"l",stretched:!0,style:{marginRight:8}},"\u0423\u0441\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u0438"))),c.a.createElement(f.Group,{title:""},c.a.createElement(f.Div,{style:{display:"flex"}},c.a.createElement(f.Button,{component:"a",href:"https://vk.me/join/AJQ1d1FTqQ/1F9nzY7tQH1qZ"},"\u0411\u0435\u0441\u0435\u0434\u0430"),"\x02",c.a.createElement(f.Button,{component:"a",href:"https://vk.com/fast__click"},"\u0413\u0440\u0443\u043f\u043f\u0430"),c.a.createElement(f.Button,{component:"a",href:"https://vk.com/supp_fastclick"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"))))}),P=a(35),I=a.n(P),w=(a(59),a(23)),j=a.n(w),O=a(18),U=a.n(O),_=Object(f.platform)(),A=function(e){return c.a.createElement(f.Panel,{id:e.id},c.a.createElement(f.PanelHeader,{left:c.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},_===f.IOS?c.a.createElement(j.a,null):c.a.createElement(U.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:I.a,alt:"Persik The Cat"}))},B=(Object(f.platform)(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(f.View,{activePanel:this.state.activePanel},c.a.createElement(y,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(A,{id:"persik",go:this.go}),c.a.createElement("vivod",{id:"vivod",go:this.go}))}}]),t}(c.a.Component));o.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_dark",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(B,null),document.getElementById("root"))},35:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},59:function(e,t,a){},67:function(e,t,a){e.exports=a(126)}},[[67,1,2]]]);
//# sourceMappingURL=main.498f0102.chunk.js.map