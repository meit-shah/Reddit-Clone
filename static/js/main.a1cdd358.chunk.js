(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{239:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(86),c=a.n(r),i=(a(97),a(10)),o=a.n(i),l=a(28),m=a(87),h=a(88),u=a(90),d=a(89),p=a(91),f=(a(99),a(100),a(239),a(15)),v=a(16),w=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={children:"",title:"",upvotes:"",comments:"",showCommentsModal:!1,selectedPostIndex:0},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"getData",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,s,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.url="https://www.reddit.com/r/news/.json?=",e.next=3,fetch(this.url);case 3:return this.response=e.sent,e.next=6,this.response.json();case 6:for(this.data=e.sent,this.title=[],this.upvotes=[],this.children=[],t=!0,a=!1,n=void 0,e.prev=13,s=this.data.data.children[Symbol.iterator]();!(t=(r=s.next()).done);t=!0)c=r.value,this.children.push(c.data),this.title.push(c.data.title),this.upvotes.push(c.data.ups);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(13),a=!0,n=e.t0;case 21:e.prev=21,e.prev=22,t||null==s.return||s.return();case 24:if(e.prev=24,!a){e.next=27;break}throw n;case 27:return e.finish(24);case 28:return e.finish(21);case 29:this.setState({children:this.children,title:this.title,upvotes:this.upvotes});case 30:case"end":return e.stop()}}),e,this,[[13,17,21,29],[22,,24,28]])})));return function(){return e.apply(this,arguments)}}()},{key:"getCommentsData",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=(a=t.permalink).substring(0,a.length-1),this.commenturl="https://www.reddit.com/"+a+".json",e.next=6,fetch(this.commenturl);case 6:return this.commentresponse=e.sent,e.next=9,this.commentresponse.json();case 9:for(this.commentdata=e.sent,n=[],s=0;s<this.commentdata.length;s++)for(r=0;r<this.commentdata[s].data.children.length;r++)this.commentdata[s].data.children[r].data.body&&n.push(this.commentdata[s].data.children[r].data);this.setState({comments:n});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getComments",value:function(){var e=this.state.children[this.state.selectedPostIndex];this.getCommentsData(e);for(var t=[],a=0;a<this.state.comments.length;a++)t.push(s.a.createElement("li",{key:a,className:"card"},s.a.createElement("div",{className:"commentBody"},this.state.comments[a].body),s.a.createElement("div",{className:"flex-justify-between"},s.a.createElement("p",{className:"author"}," posted by ",this.state.comments[a].author),s.a.createElement("p",{className:"author"},s.a.createElement(f.a,{icon:v.a})," ",this.state.comments[a].ups," upvotes"))));return t}},{key:"getListItem",value:function(){for(var e=this,t=[],a=[],n=function(n){a.push(new Date(1e3*e.children[n].created).toDateString()),t.push(s.a.createElement("li",{key:n,className:"card"},s.a.createElement("p",{className:"author"},a[n]),s.a.createElement("div",{className:"updates"},s.a.createElement("a",{className:"newsTitle"},e.children[n].title)),s.a.createElement("p",{className:"author"},"posted by ",e.children[n].author),s.a.createElement("div",{className:"article flex"},s.a.createElement("p",{className:"actualArticle"},s.a.createElement("a",{href:e.children[n].url},"Read Full Article ",s.a.createElement(f.a,{icon:v.c})),"  "),s.a.createElement("div",{className:"flex"},s.a.createElement("p",null,s.a.createElement("a",{className:"num_comments",onClick:function(){e.showComments(n)}},s.a.createElement(f.a,{icon:v.b})," ",e.children[n].num_comments),"  comments"),s.a.createElement("p",{className:"upvotes"},s.a.createElement(f.a,{icon:v.a})," ",e.children[n].ups," upvotes")))))},r=0;r<this.state.children.length;r++)n(r);return t}},{key:"showComments",value:function(e){this.state.children[e];this.setState({showCommentsModal:!0,selectedPostIndex:e})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"text-center page-title"},"Reddit News Client"),s.a.createElement("ul",null,0===this.state.title.length?s.a.createElement("div",null,'"loading news articles from subreddit r/news ..."'):this.state.showCommentsModal?this.getComments():this.getListItem()))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(245)},97:function(e,t,a){},99:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.a1cdd358.chunk.js.map