(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],v=0,p=[];v<a.length;v++)s=a[v],o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],r=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},o={app:0},n=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-time-ranges-picker/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var r=i("e2a1"),o=i.n(r);o.a},"3f8c":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"#app{display:flex;justify-content:center;margin-top:60px;text-align:center}.time-picker-wrapper{position:absolute;top:10%;left:50%;width:420px;height:370px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-width:500px){.time-picker-wrapper{height:320px}}#settings{display:fles;flex-direction:column}#settings>div{display:grid;text-align:left;margin-bottom:10px;grid-template-columns:80px auto}#settings span{margin-left:10px}",""])},"4f8e":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".circular-chart[data-v-12f07f30]{display:block;width:100%;height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.time-pointer[data-v-12f07f30]{cursor:pointer;outline:none;fill:#fff;stroke-width:3px}.chosen-time[data-v-12f07f30]{font-size:7px;font-weight:600}",""])},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"time-picker-wrapper"},[i("TimeRangesPicker",{attrs:{value:e.timeRanges,isTwelfthMode:e.isTwelfthMode,stepOfMoving:parseFloat(e.stepOfMoving),extraPointerRadius:e.extraPointerRadius,viewOptions:e.viewOptions},on:{input:e.handleInput}}),i("div",{attrs:{id:"settings"}},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.stepOfMoving,expression:"stepOfMoving"}],attrs:{type:"number",min:"0.5"},domProps:{value:e.stepOfMoving},on:{input:function(t){t.target.composing||(e.stepOfMoving=t.target.value)}}}),i("span",[e._v("step of moving")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isTwelfthMode,expression:"isTwelfthMode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isTwelfthMode)?e._i(e.isTwelfthMode,null)>-1:e.isTwelfthMode},on:{change:function(t){var i=e.isTwelfthMode,r=t.target,o=!!r.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);r.checked?s<0&&(e.isTwelfthMode=i.concat([n])):s>-1&&(e.isTwelfthMode=i.slice(0,s).concat(i.slice(s+1)))}else e.isTwelfthMode=o}}}),i("span",[e._v("twelfth mode")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.isShowChosenTime,expression:"viewOptions.isShowChosenTime"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.viewOptions.isShowChosenTime)?e._i(e.viewOptions.isShowChosenTime,null)>-1:e.viewOptions.isShowChosenTime},on:{change:function(t){var i=e.viewOptions.isShowChosenTime,r=t.target,o=!!r.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);r.checked?s<0&&e.$set(e.viewOptions,"isShowChosenTime",i.concat([n])):s>-1&&e.$set(e.viewOptions,"isShowChosenTime",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.viewOptions,"isShowChosenTime",o)}}}),i("span",[e._v("show chosen time")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.chosenTimeColor,expression:"viewOptions.chosenTimeColor"}],attrs:{type:"text"},domProps:{value:e.viewOptions.chosenTimeColor},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"chosenTimeColor",t.target.value)}}}),i("span",[e._v("chosen time color")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.isShowQuartersText,expression:"viewOptions.isShowQuartersText"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.viewOptions.isShowQuartersText)?e._i(e.viewOptions.isShowQuartersText,null)>-1:e.viewOptions.isShowQuartersText},on:{change:function(t){var i=e.viewOptions.isShowQuartersText,r=t.target,o=!!r.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);r.checked?s<0&&e.$set(e.viewOptions,"isShowQuartersText",i.concat([n])):s>-1&&e.$set(e.viewOptions,"isShowQuartersText",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.viewOptions,"isShowQuartersText",o)}}}),i("span",[e._v("show quarters text")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.quarterTextColor,expression:"viewOptions.quarterTextColor"}],attrs:{type:"text"},domProps:{value:e.viewOptions.quarterTextColor},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"quarterTextColor",t.target.value)}}}),i("span",[e._v("quarter text color")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.isShowHoursMarks,expression:"viewOptions.isShowHoursMarks"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.viewOptions.isShowHoursMarks)?e._i(e.viewOptions.isShowHoursMarks,null)>-1:e.viewOptions.isShowHoursMarks},on:{change:function(t){var i=e.viewOptions.isShowHoursMarks,r=t.target,o=!!r.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);r.checked?s<0&&e.$set(e.viewOptions,"isShowHoursMarks",i.concat([n])):s>-1&&e.$set(e.viewOptions,"isShowHoursMarks",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.viewOptions,"isShowHoursMarks",o)}}}),i("span",[e._v("show hours marks")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.hoursMarksColor,expression:"viewOptions.hoursMarksColor"}],attrs:{type:"text"},domProps:{value:e.viewOptions.hoursMarksColor},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"hoursMarksColor",t.target.value)}}}),i("span",[e._v("hours marks color")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.pointerColor,expression:"viewOptions.pointerColor"}],attrs:{type:"text"},domProps:{value:e.viewOptions.pointerColor},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"pointerColor",t.target.value)}}}),i("span",[e._v("pointers color")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.activePointerColor,expression:"viewOptions.activePointerColor"}],attrs:{type:"text"},domProps:{value:e.viewOptions.activePointerColor},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"activePointerColor",t.target.value)}}}),i("span",[e._v("active pointers color")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.pointerRadius,expression:"viewOptions.pointerRadius"}],attrs:{type:"number",min:"0"},domProps:{value:e.viewOptions.pointerRadius},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"pointerRadius",t.target.value)}}}),i("span",[e._v("radius of pointers")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.activePointerRadius,expression:"viewOptions.activePointerRadius"}],attrs:{type:"number",min:"0"},domProps:{value:e.viewOptions.activePointerRadius},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"activePointerRadius",t.target.value)}}}),i("span",[e._v("radius of active pointers")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewOptions.circleStrokeWidth,expression:"viewOptions.circleStrokeWidth"}],attrs:{type:"number",min:"0"},domProps:{value:e.viewOptions.circleStrokeWidth},on:{input:function(t){t.target.composing||e.$set(e.viewOptions,"circleStrokeWidth",t.target.value)}}}),i("span",[e._v("width of circle strokes")])]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.extraPointerRadius,expression:"extraPointerRadius"}],attrs:{type:"number",min:"0"},domProps:{value:e.extraPointerRadius},on:{input:function(t){t.target.composing||(e.extraPointerRadius=t.target.value)}}}),i("span",[e._v("extra pointer radius")])])])],1)])},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"range-picker-container"},[i("svg",{ref:"input-viewbox",staticClass:"circular-chart",attrs:{viewBox:"0 0 "+e.viewBoxSize+" "+e.viewBoxSize,"touch-action":"none"},on:{pointerdown:e.handleStartMove,pointermove:e.handleMove,pointerup:e.handleEndMove,mouseleave:e.handleEndMove,mouseup:e.handleEndMove}},[i("RangesScales",{attrs:{ranges:e.ranges,circleStrokeWidth:e.combinedViewOptions.circleStrokeWidth}}),e.combinedViewOptions.isShowHoursMarks?i("HoursMarks",{attrs:{hoursMarksColor:e.combinedViewOptions.hoursMarksColor}}):e._e(),e.combinedViewOptions.isShowQuartersText?i("QuartersTexts",{attrs:{isTwelfthMode:e.isTwelfthMode,quarterTextColor:e.combinedViewOptions.quarterTextColor}}):e._e(),i("ChosenTimePointers",{attrs:{isTwelfthMode:e.isTwelfthMode,movePointers:e.movePointers,chosenTimeColor:e.combinedViewOptions.chosenTimeColor,pointerColor:e.combinedViewOptions.pointerColor,activePointerColor:e.combinedViewOptions.activePointerColor,pointerRadius:e.combinedViewOptions.pointerRadius,activePointerRadius:e.combinedViewOptions.activePointerRadius,isShowChosenTime:e.combinedViewOptions.isShowChosenTime},on:{startMove:e.handleStartMove}}),i("circle",{ref:"input-center",attrs:{cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,r:"0"}})],1)])},a=[],c=(i("55dd"),i("d25f"),i("7f7f"),i("7514"),i("6d67"),i("cebc")),u=(i("c5f6"),360),l=24,v=u/l,p=u/(2*Math.PI),d=180,f={isShowChosenTime:!0,isShowQuartersText:!0,isShowHoursMarks:!0,chosenTimeColor:"grey",pointerColor:"white",activePointerColor:"rgba(240, 240, 240, 0.9)",pointerRadius:6,activePointerRadius:5.5,circleStrokeWidth:8,hoursMarksColor:"grey",quarterTextColor:"grey"},h=70,m=.5,w=i("59ad"),g=i.n(w),x=i("e814"),M=i.n(x),O=(i("28a5"),i("768b")),y=i("9f25"),b=i.n(y),P=i("3752"),T=i.n(P),k=i("41a6"),C=i.n(k),S=function(e,t){var i=e;t&&(i=C()(e));var r=i.split(":"),o=Object(O["a"])(r,2),n=o[0],s=o[1];return M()(n,10)+g()(s/60,10)},_=function(e,t){var i=Math.floor(e),r=e-i,o=60*r,n=b()(i)+":"+b()(o);return t?T()(n):n},R=function(e){var t=(e+90)/v;return t>=l&&(t-=l),t},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e*v-90;i<=0&&(i=360+i);var r=d/2+(p+t)*Math.cos(i*Math.PI/180),o=d/2+(p+t)*Math.sin(i*Math.PI/180);return{degree:i,x:r,y:o}},j=(i("ac6a"),i("f3e2"),i("d225")),q=i("b0b4"),$=function(){function e(t){Object(j["a"])(this,e);var i=t.time,r=t.index,o=t.controller,n=t.coordinates;this.name="point"+r,this.controller=o,this.time=i,this.coordinates=n,this.index=r,this.isActive=!1}return Object(q["a"])(e,[{key:"startMove",value:function(){this.isActive=!0}},{key:"completeMove",value:function(){this.isActive=!1}},{key:"move",value:function(e,t){if(!this.isDisabled){var i=this.controller.basicVector,r=i.centerX,o=i.centerY,n=i.zeroAngleX,s=i.zeroAngleY,a=i.vectorLength,c=[e-r,t-o],u=n*c[0]+s*c[1],l=Math.sqrt(Math.pow(c[0],2)+Math.pow(c[1],2)),v=Math.acos(u/(a*l)),p=180*v/Math.PI;p&&(t<o&&(p=360-p),this.controller.handlePointerMove(this,p))}}},{key:"setRef",value:function(e){this.ref=e}}]),e}(),N=$,B=function(){function e(t){Object(j["a"])(this,e);var i=t.startMovePointer,r=t.endMovePointer,o=t.scaleColor,n=this.createArcs(i,r);this.name=i.name+"-"+r.name+"-range",this.startMovePointer=i,this.endMovePointer=r,this.scaleColor=o,this.arcs=n}return Object(q["a"])(e,[{key:"createArcs",value:function(e,t){var i=e.time,r=t.time,o=[],n=r-i;if(n<0&&(n=l- -n),n<=l/2){var s=e.coordinates,a=t.coordinates;o.push({name:i+"-"+r+"-arc",start:s,end:a})}else{var c=e.time+l/2;c>l&&(c-=l);var u=A(c),v=e.coordinates,p=u,d=u,f=t.coordinates;o.push({name:e.name+"-arc",start:v,end:p}),o.push({name:t.name+"-arc",start:d,end:f})}return o}}]),e}(),V=B,z=function(){function e(t,i){var r=this;Object(j["a"])(this,e),this.stepOfMoving=i;var o=t.map(function(e,t){var i=e.startTime;return new N({time:i,index:t,controller:r,coordinates:A(i)})});this.movePointers=o,this.ranges=t.map(function(e,t){var i=e.scaleColor,r=o[t],n=o[t+1]?o[t+1]:o[0];return new V({startMovePointer:r,endMovePointer:n,scaleColor:i})})}return Object(q["a"])(e,[{key:"setStepOfMoving",value:function(e){this.stepOfMoving=e}},{key:"setBasicVector",value:function(e){var t=Object(O["a"])(e,2),i=t[0],r=t[1],o=[p,0],n=Math.sqrt(Math.pow(o[0],2)+Math.pow(o[1],2));this.basicVector={centerX:i,centerY:r,zeroAngleX:o[0],zeroAngleY:o[1],vectorLength:n}}},{key:"getPointer",value:function(e){var t=this.movePointers.find(function(t){return t.name===e});return t}},{key:"getActiveMovePointers",value:function(){var e=this.movePointers.filter(function(e){return!0===e.isActive});return e}},{key:"handlePointerMove",value:function(e,t){var i=this.getNewPointerData(t),r=i.coordinates,o=i.time,n=this.ranges.find(function(t){return t.startMovePointer.name===e.name}),s=this.ranges.find(function(t){return t.endMovePointer.name===e.name}),a=this.checkIfMovingAllowed(o,s.startMovePointer.time,n.endMovePointer.time);a&&(e.coordinates=r,e.time=o,n.arcs=n.createArcs(e,n.endMovePointer),s.arcs=s.createArcs(s.startMovePointer,e))}},{key:"completeMove",value:function(){var e=this.getActiveMovePointers();e.forEach(function(e){e.completeMove()})}},{key:"getNewPointerData",value:function(e){var t,i=this.stepOfMoving,r=v*i,o=r/2,n=e%r,s=e-n;t=n>o?s+r:s;var a=R(t),c=A(a);return{coordinates:c,time:a}}},{key:"checkIfMovingAllowed",value:function(e,t,i){if(i>=t){if(e<=t||e>=i)return!1}else if(e>=i&&e<=t)return!1;return!0}}]),e}(),H=z,Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("g",e._l(e.ranges,function(t){return i("g",{key:t.name,attrs:{id:t.name}},e._l(t.arcs,function(r){return i("path",{key:r.name,style:{stroke:t.scaleColor},attrs:{id:t.name,d:"\n        M"+r.start.x+","+r.start.y+" \n        A"+e.circleRadius+","+e.circleRadius+" \n        0 0 1 "+r.end.x+", "+r.end.y,"stroke-width":e.circleStrokeWidth,fill:"transparent"}})}),0)}),0)},I=[],E={name:"RangesScales",props:{ranges:{type:Array,required:!0},circleStrokeWidth:{type:Number,required:!0}},data:function(){return{circleRadius:p}}},W=E,D=i("2877"),F=Object(D["a"])(W,Q,I,!1,null,null,null),X=F.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("g",{staticClass:"marks"},e._l(e.marks,function(t){return i("circle",{key:t.name,style:{fill:e.hoursMarksColor,transform:"translate("+e.viewBoxSize/2+"px, "+e.viewBoxSize/2+"px) rotate("+t.index*e.oneHourDegree+"deg)"},attrs:{cy:e.circleRadius+9,cx:"0",r:"1.5"}})}),0)},L=[],G={name:"HoursMarks",props:{hoursMarksColor:{type:String,required:!0}},data:function(){for(var e=[],t=0;t<l;t++)e.push({index:t+1});return{marks:e,circleRadius:p,viewBoxSize:d,oneHourDegree:v}}},J=G,U=Object(D["a"])(J,Y,L,!1,null,null,null),K=U.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("g",{staticClass:"quarter-texts"},e._l(e.quarterTexts,function(t){return i("text",{key:t.name,staticClass:"hour",style:{transform:"translate("+t.x+"px, "+t.y+"px)",fill:e.quarterTextColor},attrs:{"text-anchor":"middle"}},[i("tspan",[e._v(e._s(t.name))])])}),0)},ee=[],te={name:"QuartersTexts",props:{isTwelfthMode:{type:Boolean,default:function(){return!1}},quarterTextColor:{type:String,required:!0}},data:function(){var e=-15;return{viewBoxSize:d,offsetRadius:e}},computed:{quarterTexts:function(){var e=this.offsetRadius,t=[Object(c["a"])({name:"06:00"},A(6,e)),Object(c["a"])({name:"12:00"},A(12,e)),Object(c["a"])({name:"06:00"},A(18,e)),Object(c["a"])({name:"12:00"},A(0,e))];return this.isTwelfthMode&&(t=[Object(c["a"])({name:"6 AM"},A(6,e)),Object(c["a"])({name:"12 PM"},A(12,e)),Object(c["a"])({name:"6PM"},A(18,e)),Object(c["a"])({name:"12 AM"},A(0,e))]),t}}},ie=te,re=(i("c5b6"),Object(D["a"])(ie,Z,ee,!1,null,"bb300ac2",null)),oe=re.exports,ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("g",{staticClass:"time-points",style:{transform:"translate("+e.viewBoxSize/2+"px, "+e.viewBoxSize/2+"px)"}},[i("filter",{attrs:{id:"dropshadow",height:"130%"}},[i("feGaussianBlur",{attrs:{in:"SourceAlpha",stdDeviation:"0.49"}}),i("feOffset",{attrs:{dx:"0",dy:"0",result:"offsetblur"}}),i("feComponentTransfer",[i("feFuncA",{attrs:{type:"linear",slope:"0.35"}})],1),i("feMerge",[i("feMergeNode"),i("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),i("g",[e.isShowChosenTime?i("g",e._l(e.movePointers,function(t){return i("g",{key:t.name+"-text",style:{transform:"rotate("+t.coordinates.degree+"deg) translate("+(e.circleRadius+12)+"px, 0px )","transform-origin":"-7.8% -0.5%"}},[i("text",{staticClass:"chosen-time",style:{"transform-origin":"0 -0.5%",fill:e.chosenTimeColor},attrs:{transform:e.transformStyle(t.coordinates.degree)}},[e._v(e._s(e.timeNumberToText(t.time,e.isTwelfthMode)))])])}),0):e._e(),e._l(e.movePointers,function(t){return i("circle",{key:t.name,ref:t.name,refInFor:!0,class:{"time-pointer":!0,"time-pointer_active":t.isActive},style:{transform:"rotate("+t.coordinates.degree+"deg)",fill:t.isActive?e.activePointerColor:e.pointerColor},attrs:{id:t.name,cx:e.circleRadius,r:t.isActive?e.activePointerRadius:e.pointerRadius,cy:"0",filter:"url(#dropshadow)"},on:{pointerdown:e.handleStartMove}})})],2)])},se=[],ae=i("a4bb"),ce=i.n(ae),ue={name:"ChosenTimePointers",props:{isTwelfthMode:{type:Boolean,default:function(){return!1}},movePointers:{type:Array,required:!0},chosenTimeColor:{type:String,required:!0},pointerColor:{type:String,required:!0},activePointerColor:{type:String,required:!0},pointerRadius:{type:Number,required:!0},activePointerRadius:{type:Number,required:!0},isShowChosenTime:{type:Boolean,required:!0}},data:function(){return{circleRadius:p,viewBoxSize:d,oneHourDegree:v,movePointersLength:0}},beforeUpdate:function(){this.movePointers.length!==this.movePointersLength&&this.updateAbsoluteCoordinates()},mounted:function(){this.updateAbsoluteCoordinates()},methods:{timeNumberToText:_,handleStartMove:function(e){this.$emit("startMove",e)},transformStyle:function(e){var t="rotate(".concat(-e," 0 0)");return t},updateAbsoluteCoordinates:function(){for(var e=this,t=function(t){e.movePointersLength=e.movePointers.length;var i=e.movePointers[t],r=ce()(e.$refs).find(function(e){if(e===i.name)return!0});if(!r)return"continue";var o=e.$refs[r][0];i.setRef(o)},i=0;i<this.movePointers.length;i++)t(i)}}},le=ue,ve=(i("89af"),Object(D["a"])(le,ne,se,!1,null,"12f07f30",null)),pe=ve.exports,de={name:"TimeRangesPicker",components:{RangesScales:X,HoursMarks:K,QuartersTexts:oe,ChosenTimePointers:pe},props:{value:{type:Array,default:function(){}},isTwelfthMode:{type:Boolean,default:function(){return!1}},stepOfMoving:{type:Number,default:function(){return m}},extraPointerRadius:{type:Number,default:function(){return h}},viewOptions:{type:Object,default:function(){return f}}},data:function(){var e=d;return{viewBoxSize:e,innerValue:[],rangesController:null,ranges:[],movePointers:[]}},computed:{combinedViewOptions:function(){return Object(c["a"])({},f,this.viewOptions)}},created:function(){this.getInfoFromValue(this.value)},watch:{value:{handler:function(e){this.getInfoFromValue(e)}},stepOfMoving:function(e){this.rangesController.setStepOfMoving(e)}},methods:{timeNumberToText:_,getInfoFromValue:function(e){var t=this,i=this.isTwelfthMode,r=this.stepOfMoving,o=e.map(function(e){return Object(c["a"])({},e,{startTime:S(e.startTime,i),endTime:S(e.endTime,i)})}),n=new H(o,r);this.innerValue=o,this.rangesController=n,this.ranges=n.ranges;var s=n.movePointers;if(this.movePointers&&this.movePointers.length==s.length)return s.map(function(e){var i=t.movePointers.find(function(t){if(t.name===e.name)return!0});e.setRef(i.ref)}),this.movePointers=s;this.movePointers=n.movePointers},handleStartMove:function(e){var t=e.target.id,i=this.rangesController.getPointer(t);if(i||(i=this.tryToFindPointerNear(e)),i){var r=this.$refs["input-center"],o=r.getBoundingClientRect(),n=o.x,s=o.y;this.rangesController.setBasicVector([n,s]),i.startMove()}},handleMove:function(e){var t=this.rangesController.getActiveMovePointers();if(t.length)for(var i=e.clientX,r=e.clientY,o=0;o<t.length;o++){var n=t[o];n.move(i,r)}},handleEndMove:function(){var e=this.rangesController.getActiveMovePointers();if(e.length){this.rangesController.completeMove();var t=this.rangesController.ranges,i=this.isTwelfthMode,r=t.map(function(e){return{startTime:_(e.startMovePointer.time,i),endTime:_(e.endMovePointer.time,i)}});this.$emit("change",r)}},tryToFindPointerNear:function(e){var t=this,i=e.clientX,r=e.clientY,o=this.movePointers,n=o.map(function(e){var t=e.ref,o=t.getBoundingClientRect(),n=o.x,s=o.y;return{pointer:e,distance:Math.abs(i-n)+Math.abs(r-s)}}).filter(function(e){var i=e.distance;if(i<t.extraPointerRadius)return!0});if(n.length){var s=n.sort(function(e,t){return e.distance-t.distance})[0];return s.pointer}}}},fe=de,he=(i("934e"),Object(D["a"])(fe,s,a,!1,null,"7d8fdae7",null)),me=he.exports,we={name:"App",components:{TimeRangesPicker:me},data:function(){var e=[{startTime:"00:00",endTime:"06:00",scaleColor:"violet"},{startTime:"06:00",endTime:"08:00",scaleColor:"yellow"},{startTime:"18:00",endTime:"00:00",scaleColor:"aquamarine"}];return{timeRanges:e,isTwelfthMode:!0,stepOfMoving:.5,testData:{message:{value:"string"}},extraPointerRadius:70,viewOptions:{isShowChosenTime:!0,isShowQuartersText:!0,isShowHoursMarks:!0,chosenTimeColor:"grey",pointerColor:"white",activePointerColor:"rgba(240, 240, 240, 0.9)",pointerRadius:6,activePointerRadius:5.5,circleStrokeWidth:8,hoursMarksColor:"grey",quarterTextColor:"grey"}}},methods:{handleInput:function(e){console.log(e)}}},ge=we,xe=(i("034f"),Object(D["a"])(ge,o,n,!1,null,null,null)),Me=xe.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Me)}}).$mount("#app")},"5a0f":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".range-picker-container[data-v-7d8fdae7]{height:100%;touch-action:none;-webkit-touch-callout:none}.circular-chart[data-v-7d8fdae7],.range-picker-container[data-v-7d8fdae7]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circular-chart[data-v-7d8fdae7]{display:block;width:100%;height:inherit}",""])},"766f":function(e,t,i){var r=i("5a0f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("499e").default;o("1c675aa6",r,!0,{sourceMap:!1,shadowMode:!1})},"89af":function(e,t,i){"use strict";var r=i("90eb"),o=i.n(r);o.a},"90eb":function(e,t,i){var r=i("4f8e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("499e").default;o("2ab0d970",r,!0,{sourceMap:!1,shadowMode:!1})},"934e":function(e,t,i){"use strict";var r=i("766f"),o=i.n(r);o.a},a68b:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".hour[data-v-bb300ac2],.quarter-texts[data-v-bb300ac2]{-webkit-transform:translateY(3px);transform:translateY(3px)}.hour[data-v-bb300ac2]{font-size:7px}",""])},c5b6:function(e,t,i){"use strict";var r=i("ce53"),o=i.n(r);o.a},ce53:function(e,t,i){var r=i("a68b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("499e").default;o("b75f57a4",r,!0,{sourceMap:!1,shadowMode:!1})},e2a1:function(e,t,i){var r=i("3f8c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("499e").default;o("1f50beb8",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.cd690f25.js.map