(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game-building"],{"2a36":function(t,e,a){},7514:function(t,e,a){"use strict";var l=a("5ca1"),r=a("0a49")(5),i="find",n=!0;i in[]&&Array(1)[i](function(){n=!1}),l(l.P+l.F*n,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},ba16:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","mt-4":"","pl-6":"","mb-4":""}},[a("v-toolbar-title",[t._v("Здание "+t._s(t.gameBuilding.type)+" "+t._s(t.gameBuilding.level))])],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"","text-center":"","mb-2":"","mt-2":"","pr-2":""}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Задач - "+t._s(t.gameWorks.length+"/"+t.gameBuilding.ticketMax)+" Мест - "+t._s(t.gameWorks.reduce(function(t,e){return t+e.workerMax},0)+"/"+t.gameBuilding.workerMax))])]),a("v-card-text",[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"}),a("th",{staticClass:"text-left"},[t._v("Тип навыка")]),a("th",{staticClass:"text-left"},[t._v("Доступно работы")]),a("th",{staticClass:"text-left"},[t._v("Занято мест")]),a("th",{staticClass:"text-left"},[t._v("Ставка")])])]),a("tbody",t._l(t.gameWorks,function(e){return a("tr",{key:e._id},[a("td",{staticStyle:{padding:"0"}},[a("v-icon",{on:{click:function(a){return t.startWork(e)}}},[t._v("\n                      mdi-worker\n                    ")])],1),a("td",[t._v(t._s(e.skillType))]),a("td",[t._v(t._s(e.points))]),a("td",[t._v("\n                    "+t._s(e.workers.length+" / "+e.workerMax)+"\n                    "),a("v-icon",{on:{click:function(a){return t.setMaxWork(e)}}},[t._v("\n                      mdi-check-circle-outline\n                    ")])],1),a("td",[t._v("\n                    "+t._s(e.price)+"\n                    "),a("v-icon",{on:{click:function(a){return t.setPriceWork(e)}}},[t._v("\n                      mdi-check-circle-outline\n                    ")])],1)])}),0)]},proxy:!0}])}),a("v-select",{attrs:{clearable:"",id:"unit",name:"unit",items:t.units,"item-text":"name","item-value":"_id",label:"Юнит"},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}}),a("v-text-field",{attrs:{id:"count",name:"count",label:"Количество",type:"number"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Новое задание")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-autocomplete",{attrs:{items:t.gameTemplates,"item-value":"_id","item-text":t.templateName,label:"Шаблон",placeholder:"Select..."},model:{value:t.template,callback:function(e){t.template=e},expression:"template"}})],1),"Transport"==t.gameBuilding.type||"Tools"==t.gameBuilding.type?a("v-flex",{attrs:{xs12:""}},[a("v-autocomplete",{attrs:{items:t.allFormulas,"item-value":"_id","item-text":t.formulaName,label:"Формула",placeholder:"Select..."},model:{value:t.formula,callback:function(e){t.formula=e},expression:"formula"}})],1):t._e(),"Laboratory"==t.gameBuilding.type?a("div",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-autocomplete",{attrs:{items:t.allElements,"item-value":"_id","item-text":"name",label:"Элемент 1",placeholder:"Select..."},model:{value:t.element1,callback:function(e){t.element1=e},expression:"element1"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{id:"count1",name:"count1",label:"Количество 1",type:"number"},model:{value:t.count1,callback:function(e){t.count1=e},expression:"count1"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-autocomplete",{attrs:{items:t.allElements,"item-value":"_id","item-text":"name",label:"Элемент 2",placeholder:"Select..."},model:{value:t.element2,callback:function(e){t.element2=e},expression:"element2"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{id:"count2",name:"count2",label:"Количество 2",type:"number"},model:{value:t.count2,callback:function(e){t.count2=e},expression:"count2"}})],1)],1)],1):t._e()],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:t.createWork}},[t._v("Создать")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md9:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Новый макет")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{id:"name",name:"name",label:"Название предмета",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-autocomplete",{attrs:{items:t.allTypes,"item-value":"val","item-text":"key",label:"Тип",placeholder:"Select...",clearable:""},model:{value:t.iType,callback:function(e){t.iType=e},expression:"iType"}}),t.weightWisible?a("v-autocomplete",{attrs:{items:t.allWeights,"item-value":"val","item-text":"key",label:"Вес",placeholder:"Select...",clearable:""},model:{value:t.iWeight,callback:function(e){t.iWeight=e},expression:"iWeight"}}):t._e(),a("v-autocomplete",{attrs:{items:t.allQualities,"item-value":"val","item-text":"key",label:"Качество",placeholder:"Select...",clearable:""},model:{value:t.quality,callback:function(e){t.quality=e},expression:"quality"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md8:""}},[a("v-autocomplete",{attrs:{items:t.allElements,"item-value":"_id","item-text":"name",label:"Элемент 1",placeholder:"Select..."},model:{value:t.element1,callback:function(e){t.element1=e},expression:"element1"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{id:"count1",name:"count1",label:"Количество 1",type:"number"},model:{value:t.count1,callback:function(e){t.count1=e},expression:"count1"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[a("v-autocomplete",{attrs:{items:t.formulaList(null,t.element1,t.count1),"item-value":"_id","item-text":t.formulaName,label:"Формула 1",placeholder:"Select...",clearable:""},model:{value:t.formula1,callback:function(e){t.formula1=e},expression:"formula1"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[a("v-autocomplete",{attrs:{items:t.formulaList(t.formula1),"item-value":"_id","item-text":t.formulaName,label:"Формула 2",placeholder:"Select...",clearable:""},model:{value:t.formula2,callback:function(e){t.formula2=e},expression:"formula2"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[a("v-autocomplete",{attrs:{items:t.formulaList(t.formula2),"item-value":"_id","item-text":t.formulaName,label:"Формула 3",placeholder:"Select...",clearable:""},model:{value:t.formula3,callback:function(e){t.formula3=e},expression:"formula3"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[a("v-autocomplete",{attrs:{items:t.formulaList(t.formula3),"item-value":"_id","item-text":t.formulaName,label:"Формула 4",placeholder:"Select...",clearable:""},model:{value:t.formula4,callback:function(e){t.formula4=e},expression:"formula4"}})],1)],1)],1),a("v-col",{attrs:{md:"8"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Параметр")]),a("th",{staticClass:"text-right"},[t._v("По формуле")]),a("th",{staticClass:"text-right"},[t._v("Модификатор")]),a("th",{staticClass:"text-right"},[t._v("Итоговое")])])]),a("tbody",t._l(t.parameterList,function(e,l){return a("tr",{key:l,style:t.styleColor(e)},[a("td",{staticClass:"text-left"},[t._v(t._s(e.name))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.val))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.bal))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.res))])])}),0)]},proxy:!0}])})],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:t.createTemplate}},[t._v("Создать")])],1)],1)],1)],1),a("Description",{attrs:{description:"Вы находитесь здании."}}),a("p",[t._v("Все функции тут доступны в основном только для арендатора. Методы и данные отличаются для разных типов зданий. Во всех зданиях кроме Гостиницы и прочих социальных зданий доступен механизм создания задач на работу.")]),a("v-row",[a("v-col",[a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"/img/building_works.jpg"}})])]),a("v-col",[a("p",[t._v("Таблица задач отображает списко задач, созданных и еще не завершенных в этом здании. Также отображается допустимое количество одновмеренно созданных задач и одновременно работающих юнитов. Для налача работы юнита над задачей необхоидмо указать для нее количество одновременно работающих юнитов и ставку за единицу работы.")]),a("p",[t._v("кнопка Создать - При выполнеии создается новая задача. Для запуска новой задачи необходимо указать шаблон. Если это мастерская инструментов или транспорта, то дополнительно необходимо указать формулу. От формулы будет зависеть какие материалы будут списаны, а также определяется прочность создаваемого предмета.")])])],1),a("v-row",[a("v-col",[a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"/img/new_template.jpg"}})])]),a("v-col",[a("p",[t._v("Форма создания нового шаблона предмета. Созданный шаблон можно использовать для запуска новых задач по созданию предметов.")]),a("p",[t._v("Подробная инструкция по созданию предметов будет описана позже.")])])],1),a("ErrorMessage"),a("SuccessMessage")],1)},r=[],i=(a("8e6e"),a("96cf"),a("3b8d")),n=(a("7f7f"),a("7514"),a("ac6a"),a("456d"),a("bd86")),s=a("2f62"),o=a("fa7d"),c=a("6bfe");function u(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f={metaInfo:function(){return{title:this.$store.getters.appTitle,titleTemplate:"%s"}},data:function(){return{unit:"",count:"",iClass:"",iType:"",quality:"",iWeight:"",name:"",template:"",formula:"",formula1:"",formula2:"",formula3:"",formula4:"",element1:"",count1:"",element2:"",count2:""}},computed:m({},Object(s["c"])(["gameBuilding","gameCell","gamePlace","user","profileInfo","allFormulas","allElements","allBalances","gameTemplates","gameUnits","gameWorks"]),{units:function(){return this.gameUnits.filter(function(t){return t.type==c["l"].Worker})},weightWisible:function(){return this.gameBuilding.type==c["c"].Weapon||this.gameBuilding.type==c["c"].Armor},allQualities:function(){return Object.keys(c["j"]).map(function(t){return{key:t,val:c["j"][t]}})},allWeights:function(){return Object.keys(c["n"]).map(function(t){return{key:t,val:c["n"][t]}})},parameterList:function(){var t=this,e=[];if(this.formula1){var a=this.allFormulas.filter(function(e){return e._id==t.formula1})[0];if(e=a.parameters.map(function(t,e){return Math.floor(t*a.effect*1e3)/1e3}),this.formula2){var l=this.allFormulas.filter(function(e){return e._id==t.formula2})[0];if(e=l.parameters.map(function(t,a){return Math.floor(1e3*(e[a]+t*l.effect))/1e3}),this.formula3){var r=this.allFormulas.filter(function(e){return e._id==t.formula3})[0];if(e=r.parameters.map(function(t,a){return Math.floor(1e3*(e[a]+t*r.effect))/1e3}),this.formula4){var i=this.allFormulas.filter(function(e){return e._id==t.formula4})[0];e=i.parameters.map(function(t,a){return Math.floor(1e3*(e[a]+t*i.effect))/1e3})}}}}var n=this.allBalances.find(function(e){return e.iClass==t.iClass&&e.iType==t.iType&&e.iWeight==t.iWeight});return n=n?n.parameters:[],e=e.map(function(t,e){var a=n[e]||0;return{bal:a,par:c["i"][e].par,type:c["i"][e].type,used:"",name:"".concat(c["i"][e].name),val:t,res:Math.floor(t*a*1e3)/1e3}}),Object(c["e"])(e,this.iClass,this.iType,this.quality),e},allTypes:function(){var t={};return this.gameBuilding.type==c["c"].Weapon?t=c["m"]:this.gameBuilding.type==c["c"].Armor?t=c["a"]:this.gameBuilding.type==c["c"].Clothing?t=c["d"]:this.gameBuilding.type==c["c"].Jewelry&&(t=c["h"]),Object.keys(t).map(function(e){return{key:e,val:t[e]}})}}),watch:{},methods:m({},Object(s["b"])(["buildingJoin","getAllElements","getAllFormulas","getAllBalances","workList","workStart","workSetPrice","workSetMax","workCreate","templateList","templateCreate"]),{getFormat:function(t){return window.__localeId__=this.$store.getters.locale,Object(o["g"])(t,"DD.MM.YY, hh:mm")},formulaName:function(t){return"".concat(Object(o["e"])(t.element1-1)).concat(t.count1).concat(Object(o["e"])(t.element2-1)).concat(t.count2)},templateName:function(t){return"".concat(t.name," - ").concat(t.material)},styleColor:function(t){var e="primary"==t.used?"color:green; ":"secondary"==t.used?"color:blue; ":"color:grey; ";return e+=t.active?"font-weight: bold;":"",e},formulaList:function(t,e,a){if(!t&&!e)return[];if(t){var l=this.allFormulas.filter(function(e){return e._id==t})[0];e=l.element2,a=l.count2}return this.allFormulas.filter(function(t){return t.element1==e&&(""==a||t.count1==a)})},startWork:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("startWork",e),t.next=3,this.workStart({ticket:e._id,unit:this.unit,count:this.count});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setPriceWork:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("setPriceWork",e),t.next=3,this.workSetPrice({ticket:e._id,price:this.count});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setMaxWork:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("setMaxWork",e),t.next=3,this.workSetMax({ticket:e._id,count:this.count});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),createWork:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("createWork",this.template),e={building:this.gameBuilding._id,template:this.template},this.gameBuilding.type==c["c"].Transport||this.gameBuilding.type==c["c"].Tools?e.formula=this.formula:this.gameBuilding.type==c["c"].Laboratory&&(e.element1=this.element1,e.count1=this.count1,e.element2=this.element2,e.count2=this.count2),t.next=5,this.workCreate(e);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),createTemplate:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("createTemplate",!0),e={building:this.gameBuilding._id,type:this.iType,quality:this.quality,name:this.name},this.gameBuilding.type!=c["c"].Weapon&&this.gameBuilding.type!=c["c"].Armor||(e.weight=this.iWeight),e.formula1=this.formula1,this.formula2&&(e.formula2=this.formula2),this.formula3&&(e.formula3=this.formula3),this.formula4&&(e.formula4=this.formula4),t.next=9,this.templateCreate(e);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.gameBuilding._id){t.next=2;break}return t.abrupt("return",this.$router.push({name:"game-map"}));case 2:return t.next=4,this.buildingJoin({building:this.gameBuilding._id});case 4:this.allElements.length||this.getAllElements(),this.getAllFormulas(),this.getAllBalances(),this.workList({place:this.gamePlace._id,cell:this.gameCell._id}),"Castle"!==this.gameBuilding.type&&this.templateList({building:this.gameBuilding._id}),this.gameBuilding.type==c["c"].Weapon?this.iClass=c["f"].Weapon:this.gameBuilding.type==c["c"].Armor?this.iClass=c["f"].Armor:this.gameBuilding.type==c["c"].Clothing?this.iClass=c["f"].Clothing:this.gameBuilding.type==c["c"].Jewelry&&(this.iClass=c["f"].Jewelry);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},p=f,d=(a("de53"),a("2877")),v=a("6544"),h=a.n(v),g=a("c6a6"),x=a("8336"),b=a("b0af"),y=a("99d9"),k=a("62ad"),_=a("a523"),w=a("0e8f"),C=a("132d"),B=a("a722"),W=a("0fd9"),O=a("b974"),j=a("1f4f"),S=a("2fa4"),T=a("8654"),M=a("2a7f"),V=Object(d["a"])(p,l,r,!1,null,null,null);e["default"]=V.exports;h()(V,{VAutocomplete:g["a"],VBtn:x["a"],VCard:b["a"],VCardActions:y["b"],VCardText:y["d"],VCardTitle:y["e"],VCol:k["a"],VContainer:_["a"],VFlex:w["a"],VIcon:C["a"],VLayout:B["a"],VRow:W["a"],VSelect:O["a"],VSimpleTable:j["a"],VSpacer:S["a"],VTextField:T["a"],VToolbarTitle:M["c"]})},de53:function(t,e,a){"use strict";var l=a("2a36"),r=a.n(l);r.a}}]);