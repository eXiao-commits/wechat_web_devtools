;!function(require, directRequire){;"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tools=require('./84b183688a46c9e2626d3e6f83365e13.js');exports.config={"0.0.1":{version:/^(\d+).(\d+).(\d+)$/,toolbar_icon:"",permission:{newwindow:["string"],download:["string"],xmlhttprequest:["string"]}}};function checkObject(a,b,c=""){for(const d in b)if(a[d]){let e=tools.getType(b[d]),f=tools.getType(a[d]);if("regexp"==e&&"string"==f){if(!b[d].test(a[d]))throw new Error(`manifest.json ${c}.${d} should match ${b[d].toString()}`);}else if(e!=f)throw new Error(`manifest.json ${c}.${d} should be ${e}`);"object"==f&&checkObject(a[d],b[d],c+d),"array"==f&&checkArray(a[d],b[d],c+d)}}function checkArray(a,b,c=""){for(let d,e=0,f=a.length;e<f;e++)if(d=tools.getType(a[e]),-1==b.indexOf(d))throw new Error(`manifest.json ${c}[${e}] not valid`)}function check(a){const b=exports.config[a.manifest_version];if(!b)throw new Error(`manifest.json manifest_version not valid`);return checkObject(a,b)}exports.check=check;function compareVersion(a,b){const c=a.split("."),d=b.split("."),e=Math.min(c.length,d.length);if(c.length>e)return 1;if(d.length>e)return-1;for(let f=0;f<e;f++){let a=parseInt(c[f]),b=parseInt(d[f]);if(a>b)return 1;if(a<b)return-1}return 0}exports.compareVersion=compareVersion;
;}(require("lazyload"), require);