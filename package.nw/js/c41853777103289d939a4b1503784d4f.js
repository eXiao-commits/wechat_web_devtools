'use strict';!function(require,directRequire){function a(a){let c=a.headers.host,d=!a.connection.encrypted||/^http:/.test(a.url)?'http':'https',e='http'==d?a.url:d+'://'+c+a.url,f=b.parse(e);return f.pureHref=f.href.replace(/\?.*/,'').replace(/\#.*/,''),f}const b=require('url'),c=require('path'),d=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),e='https://clients1.google.com/tbproxy/af/',f='http://aboutblank',{weappURLRegular:g,weappASURLRegular:h,weappLocalIdRegular:i,weappEditorServiceRegular:j,weappWidgetPageRegular:k,weappWidgetServiceRegular:l,weappTraceRegular:m,weappUsrFileReqular:n,weappStoreFileReqular:o,weappTmpFileReqular:p}=d,q=require('./3bfffbe88b3d923921f851c0697974fe.js'),r=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),s=require('./730f2a99f4d5cff2946dd0a3bad0a600.js'),t=require('./07af6655c180a0694f993b79d5b077df.js');module.exports={forceLocalProxy:[g,h,i,f,e,j,k,l,m,n,o,p],dealLocalResponse:function(b,d,q){var r=a(b),u=r.pureHref;if(0===u.indexOf(e))q(400,{},'');else if(0===u.indexOf(f))q(200,{},'');else if(g.test(u)){let a=r.href;s.getWebviewSource(a).then((b)=>{const d={};'.svg'===c.extname(a)&&(d['Content-Type']='image/svg+xml'),q(200,d,b)}).catch(()=>{q(404,{},'')})}else h.test(u)?s.getAppServiceSource(u).then((a)=>{q(200,{},a)}).catch(()=>{q(404,{},'')}):j.test(u)?s.getEditorSource(u).then((a)=>{q(200,a.headers||{},a.body)}).catch(()=>{q(404,{},'')}):i.test(u)||p.test(u)||o.test(u)?s.getLocalIdResponse(u.replace(i,'wxfile://')).then((a)=>{q(200,{},a)}).catch(()=>{q(404,{},'')}):k.test(u)?s.getWidgetWebviewResource(u).then((a)=>{q(200,{},a)}).catch(()=>{q(404,{},'')}):l.test(u)?s.getWidgetServiceResource(u).then((a)=>{q(200,{},a)}).catch(()=>{q(404,{},'')}):m.test(u)?t.getTraceRoute(r,(a,b)=>{a?q(500,{},JSON.stringify(a.message)):q(200,{},JSON.stringify(b))}):n.test(u)&&s.getUsrFileResponse(u).then((a)=>{q(200,{},a)}).catch(()=>{q(404,{},'')})}}}(require('lazyload'),require);