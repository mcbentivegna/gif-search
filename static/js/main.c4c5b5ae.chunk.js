(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{17:function(e,a,t){e.exports=t(40)},22:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),i=t.n(c),s=t(2),l=t(3),o=t(5),m=t(4),u=(t(22),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={searchText:""},e.onSearchChange=function(a){e.setState({searchText:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSearch(e.query.value),a.currentTarget.reset()},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"is-hidden",htmlFor:"search"},"Search"),r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(a){return e.query=a},placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement("i",{className:"material-icons icn-search"},"search")))}}]),t}(n.Component)),h=function(e){return r.a.createElement("li",{className:"gif-wrap"},r.a.createElement("img",{src:e.url}))},f=function(e){return r.a.createElement("li",{className:"no-gifs"},r.a.createElement("i",{className:"material-icons icon-gif"},"sentiment_very_dissatisfied"),r.a.createElement("h3",null,"Sorry, no GIFs match your search."))},d=function(e){var a,t=e.data;return a=t.length>0?t.map((function(e){return r.a.createElement(h,{url:e.images.fixed_height.url,key:e.id})})):r.a.createElement(f,null),r.a.createElement("ul",{className:"gif-list"},a)},g=t(16),p=t.n(g),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).performSearch=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cats";p.a.get("http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=12&rating=g&q=".concat(a)).then((function(a){e.setState({gifs:a.data.data,loading:!1})})).catch((function(e){return console.log("Error fetching and parsing data ".concat(e))}))},e.state={gifs:[],loading:!0},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"main-title"},"GifSearch"),r.a.createElement(u,{onSearch:this.performSearch}))),r.a.createElement("div",{className:"main-content"},this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(d,{data:this.state.gifs})))}}]),t}(n.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c4c5b5ae.chunk.js.map