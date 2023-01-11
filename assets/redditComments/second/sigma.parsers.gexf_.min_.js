(function(a){"use strict";function b(a){var b={id:a.id,label:a.label};return a.viz&&(b.viz=a.viz),a.attributes&&(b.attributes=a.attributes),b}function c(a){var b={id:a.id,type:a.type||"undirected",label:a.label||"",source:a.source,target:a.target,weight:+a.weight||1};return a.viz&&(b.viz=a.viz),a.attributes&&(b.attributes=a.attributes),b}function d(a){function d(){var a={};return l.els.meta?(a.lastmodifieddate=l.els.meta.getAttribute("lastmodifieddate"),h.nodeListEach(l.els.meta.childNodes,function(b){a[b.tagName.toLowerCase()]=b.textContent}),a):a}function e(a){var b=[];return l.els.model[a]&&h.nodeListEach(l.els.model[a],function(a){var c={id:a.getAttribute("id")||a.getAttribute("for"),type:a.getAttribute("type")||"string",title:a.getAttribute("title")||""},d=h.nodeListToArray(a.childNodes);d.length>0&&(c.defaultValue=d[0].textContent),b.push(c)}),b.length>0?b:!1}function f(a,b){var c={},d=b.getElementsByTagName("attvalue"),e=h.nodeListToHash(d,function(a){var b=h.namedNodeMapToObject(a.attributes),c=b.id||b["for"];return{key:c,value:b.value}});return a.map(function(a){c[a.id]=!(a.id in e)&&"defaultValue"in a?h.enforceType(a.type,a.defaultValue):h.enforceType(a.type,e[a.id])}),c}function g(a){var c=[];return h.nodeListEach(l.els.nodes,function(d){var e={id:d.getAttribute("id"),label:d.getAttribute("label")||""};a&&(e.attributes=f(a,d)),l.hasViz&&(e.viz=i(d)),c.push(b(e))}),c}function i(a){var b={},c=h.getFirstElementByTagNS(a,"viz","color");if(c){var d=["r","g","b","a"].map(function(a){return c.getAttribute(a)});b.color=h.getRGB(d)}var e=h.getFirstElementByTagNS(a,"viz","position");e&&(b.position={},["x","y","z"].map(function(a){b.position[a]=+e.getAttribute(a)}));var f=h.getFirstElementByTagNS(a,"viz","size");f&&(b.size=+f.getAttribute("value"));var g=h.getFirstElementByTagNS(a,"viz","shape");return g&&(b.shape=g.getAttribute("value")),b}function j(a,b){var d=[];return h.nodeListEach(l.els.edges,function(e){var g=h.namedNodeMapToObject(e.attributes);"type"in g||(g.type=b),a&&(g.attributes=f(a,e)),l.hasViz&&(g.viz=k(e)),d.push(c(g))}),d}function k(a){var b={},c=h.getFirstElementByTagNS(a,"viz","color");if(c){var d=["r","g","b","a"].map(function(a){return c.getAttribute(a)});b.color=h.getRGB(d)}var e=h.getFirstElementByTagNS(a,"viz","shape");e&&(b.shape=e.getAttribute("value"));var f=h.getFirstElementByTagNS(a,"viz","thickness");return f&&(b.thickness=+f.getAttribute("value")),b}var l={};l.els={root:a.getElementsByTagName("gexf")[0],graph:a.getElementsByTagName("graph")[0],meta:a.getElementsByTagName("meta")[0],nodes:a.getElementsByTagName("node"),edges:a.getElementsByTagName("edge"),model:h.getModelTags(a)},l.hasViz=!!h.getAttributeNS(l.els.root,"xmlns","viz"),l.version=l.els.root.getAttribute("version")||"1.0",l.mode=l.els.graph.getAttribute("mode")||"static";var m=l.els.graph.getAttribute("defaultedgetype");l.defaultEdgetype=m||"undirected";var n=e("node"),o=e("edge"),p={version:l.version,mode:l.mode,defaultEdgeType:l.defaultEdgetype,meta:d(),model:{},nodes:g(n),edges:j(o,l.defaultEdgetype)};return n&&(p.model.node=n),o&&(p.model.edge=o),p}function e(a,b){var c=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;var a,b;if(window.ActiveXObject){a=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(b in a)try{return new ActiveXObject(a[b])}catch(c){}}return null}();if(!c)throw"XMLHttpRequest not supported, cannot load the file.";var d,e="function"==typeof b;return c.overrideMimeType?(c.overrideMimeType("text/xml"),d=function(a){return a.responseXML}):d=function(a){var b=new DOMParser;return b.parseFromString(a.responseText,"application/xml")},c.open("GET",a,e),e&&(c.onreadystatechange=function(){4===c.readyState&&b(d(c))}),c.send(),e?c:d(c)}function f(a){return d(a)}function g(a,b){return"function"==typeof b?e(a,function(a){b(d(a))}):d(e(a))}var h={getModelTags:function(a){var b,c=a.getElementsByTagName("attributes"),d={},e=c.length;for(b=0;e>b;b++)d[c[b].getAttribute("class")]=c[b].childNodes;return d},nodeListToArray:function(a){for(var b=[],c=0,d=a.length;d>c;++c)"#text"!==a[c].nodeName&&b.push(a[c]);return b},nodeListEach:function(a,b){for(var c=0,d=a.length;d>c;++c)"#text"!==a[c].nodeName&&b(a[c])},nodeListToHash:function(a,b){for(var c={},d=0;d<a.length;d++)if("#text"!==a[d].nodeName){var e=b(a[d]);c[e.key]=e.value}return c},namedNodeMapToObject:function(a){for(var b={},c=0;c<a.length;c++)b[a[c].name]=a[c].value;return b},getFirstElementByTagNS:function(a,b,c){var d=a.getElementsByTagName(b+":"+c)[0];return d||(d=a.getElementsByTagNameNS(b,c)[0]),d||(d=a.getElementsByTagName(c)[0]),d},getAttributeNS:function(b,c,d){var e=b.getAttribute(c+":"+d);return e===a&&(e=b.getAttributeNS(c,d)),e===a&&(e=b.getAttribute(d)),e},enforceType:function(a,b){switch(a){case"boolean":b="true"===b;break;case"integer":case"long":case"float":case"double":b=+b;break;case"liststring":b=b?b.split("|"):[]}return b},getRGB:function(a){return a[3]?"rgba("+a.join(",")+")":"rgb("+a.slice(0,-1).join(",")+")"}};if("undefined"!=typeof this.gexf)throw'gexf: error - a variable called "gexf" already exists in the global scope';this.gexf={parse:f,fetch:g,version:"0.1.1"},"undefined"!=typeof exports&&this.exports!==exports&&(module.exports=this.gexf)}).call(this),function(){"use strict";function a(){return"e"+b++}if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.parsers");var b=0;sigma.parsers.gexf=function(b,c,d){function e(b){for(h=b.nodes,f=0,g=h.length;g>f;f++)i=h[f],i.id=i.id,i.viz&&"object"==typeof i.viz&&(i.viz.position&&"object"==typeof i.viz.position&&(i.x=i.viz.position.x,i.y=-i.viz.position.y),i.size=i.viz.size,i.color=i.viz.color);for(h=b.edges,f=0,g=h.length;g>f;f++)i=h[f],i.id="string"==typeof i.id?i.id:a(),i.source=""+i.source,i.target=""+i.target,i.viz&&"object"==typeof i.viz&&(i.color=i.viz.color,i.size=i.viz.thickness),i.size=i.weight,i.direction=i.type,delete i.type;if(c instanceof sigma){for(c.graph.clear(),h=b.nodes,f=0,g=h.length;g>f;f++)c.graph.addNode(h[f]);for(h=b.edges,f=0,g=h.length;g>f;f++)c.graph.addEdge(h[f])}else"object"==typeof c?(c.graph=b,c=new sigma(c)):"function"==typeof c&&(d=c,c=null);return d?void d(c||b):b}var f,g,h,i;if("string"==typeof b)gexf.fetch(b,e);else if("object"==typeof b)return e(gexf.parse(b))}}.call(this);