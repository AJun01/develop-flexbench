"use strict";(self.webpackChunkflexbench=self.webpackChunkflexbench||[]).push([[430],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(8168),o=(t(6540),t(5680));const s={sidebar_position:2},i="Multi Request",a={unversionedId:"CodeExamples/multi-request",id:"CodeExamples/multi-request",title:"Multi Request",description:"This code example is for standalone script",source:"@site/docs/CodeExamples/multi-request.md",sourceDirName:"CodeExamples",slug:"/CodeExamples/multi-request",permalink:"/develop-flexbench/docs/CodeExamples/multi-request",draft:!1,editUrl:"https://github.com/AJun01/develop-flexbench/docs/CodeExamples/multi-request.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Simple Request",permalink:"/develop-flexbench/docs/CodeExamples/simple-request"},next:{title:"2022",permalink:"/develop-flexbench/docs/GSoC/2022"}},l={},u=[{value:"Create a multiple request script",id:"create-a-multiple-request-script",level:2},{value:"Run script",id:"run-script",level:2}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"multi-request"},"Multi Request"),(0,o.yg)("p",null,"This code example is for standalone script"),(0,o.yg)("h2",{id:"create-a-multiple-request-script"},"Create a multiple request script"),(0,o.yg)("p",null,"Create a file at root ",(0,o.yg)("inlineCode",{parentName:"p"},"multi-request.js"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="multi-request.js"',title:'"multi-request.js"'},"/**\n * Scenario:\n * Generate requests towards specific domain\n **/\nvar trafficSimulator = require('flexbench');\n\n\nfunction runTest() {\n    trafficSimulator.debugMode(true);\n    trafficSimulator.testDuration(5);//-1 for infinite run\n    trafficSimulator.workers(1);\n    trafficSimulator.clients(2)\n    trafficSimulator.throttleRequests_bps(50000);//-1 for no throttling\n    trafficSimulator.randomDelayBetweenRequests('0.5-1.1');\n    trafficSimulator.setFunc('request', requestFunc);\n\n    trafficSimulator.start();\n\n    trafficSimulator.events.on('end', function (msg) {\n        //This function will run on exit/stop, when worker has received a message to offload his stats to his master\n        //Get from msg object all exposed metrics\n        console.log('\\nTraffic Simulator Results');\n        console.log('-------------------------');\n\n        var cArr = Object.keys(msg.counters);\n        for (var i = 0; i < cArr.length; i++) {\n            var key = cArr[i];\n            console.log('counter %s: %s ', key, msg.counters[key]);\n        }\n        console.log(\"Exiting..\");\n        process.exit();\n    });\n\n    //stop test after specific period or condition\\\n    setTimeout(function () {\n        trafficSimulator.stop();\n    }, 20 * 1000);\n\n}\n\n/**\n * Create your generate request function here\n * */\nvar requestFunc = function () {\n    //GENERATE REQUEST FUNCTION\n    //use random or roundrobbin ['random' | 'rr']\n    var req = trafficSimulator.multiRequest(requestOptions, 'random', function (response) {\n        console.log(\"Response: %s\", response.statusCode);\n        //response.setEncoding('utf8');\n        //response.on('data',function(chunk){\n        //    console.log(chunk.length)\n        //});\n    });\n\n    req.on('error', function (err) {\n        console.log('error:' + err.message);\n    });\n}\n\n\n\nvar requestOptions = {\n    '1': {\n        options: {\n            host: 'www.example.com',\n            port: '80',\n            path: '/',\n            method: 'GET',\n            headers: {\n                \"my-dummy-header\": '1'\n            }\n        }\n    },\n    '2': {\n        options: {\n            host: 'www.example.com',\n            port: '80',\n            path: '/dummy',\n            method: 'GET',\n            headers: {\n                \"my-dummy-header\": '1'\n            }\n        }\n    },\n    '3': {\n        options: {\n            host: 'www.example.com',\n            port: '80',\n            path: '/dummy',\n            method: 'GET',\n            headers: {\n                \"my-dummy-header\": '1'\n            }\n        }\n    },\n    '4': {\n        options: {\n            host: 'www.in.gr',\n            port: '80',\n            path: '/',\n            method: 'GET',\n            headers: {\n                \"my-dummy-header\": '1'\n            }\n        }\n    },\n    '5': {\n        options: {\n            host: 'www.mobistuff.net',\n            port: '80',\n            path: '/',\n            method: 'GET',\n            headers: {\n                \"my-dummy-header\": '1'\n            }\n        }\n    }\n}\n\nrunTest();\n")),(0,o.yg)("h2",{id:"run-script"},"Run script"),(0,o.yg)("p",null,"Open terminal in your root directory and execute the below command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"node multi-request.js\n")))}m.isMDXComponent=!0}}]);