(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game-cell"],{a0bb:function(e,t,n){},b1ea:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:"","mt-4":"","pl-6":"","mb-4":""}},[n("v-toolbar-title",[e._v("Локация: "+e._s(e.gamePlace.name)+" Ячейка "+e._s(e.infoCoord(e.gameCell)))])],1),n("v-flex",{attrs:{xs12:"",sm6:"",md3:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Хранилище")])]),n("v-card-text",[n("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Элемент")]),n("th",{staticClass:"text-left"},[e._v("Количество")])])]),n("tbody",e._l(e.infoStorage,function(t){return n("tr",{key:t.name},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.val))])])}),0)]},proxy:!0}])})],1)],1)],1),n("v-flex",{attrs:{xs12:"",sm6:"",md3:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Склад")])]),n("v-card-text",[n("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center"}),n("th",{staticClass:"text-center"},[e._v("Предмет")]),n("th",{staticClass:"text-center"},[e._v("Количество")])])]),n("tbody",e._l(e.gameCellInventory,function(t){return n("tr",{key:t._id},[n("td",{staticClass:"text-left",staticStyle:{padding:"0"}},[n("v-icon",{on:{click:function(n){return e.openItem(t)}}},[e._v("\n                      mdi-magnify\n                    ")]),n("v-icon",{on:{click:function(n){return e.takeItem(t)}}},[e._v("\n                      mdi-arrow-up-thick\n                    ")]),n("v-icon",{on:{click:function(n){return e.moveItem(t)}}},[e._v("\n                      mdi-cursor-move\n                    ")]),n("v-icon",{on:{click:function(n){return e.exchangeItem(t)}}},[e._v("\n                      mdi-coin\n                    ")])],1),n("td",{staticClass:"text-left"},[e._v(e._s(t.name))]),n("td",{staticClass:"text-right"},[e._v(e._s(t.count))])])}),0)]},proxy:!0}])}),n("v-select",{attrs:{clearable:"",id:"unit",name:"unit",items:e.gameUnits,"item-text":"name","item-value":"_id",label:"Юнит"},model:{value:e.unit,callback:function(t){e.unit=t},expression:"unit"}}),n("v-text-field",{attrs:{id:"count",name:"count",label:"Количество",type:"number"},model:{value:e.count,callback:function(t){e.count=t},expression:"count"}}),n("v-text-field",{attrs:{id:"price",name:"price",label:"Цена",type:"number"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),n("v-select",{directives:[{name:"validate",rawName:"v-validate.disable",value:{required:!0},expression:"{ required: true }",modifiers:{disable:!0}}],staticClass:"inputTarget",attrs:{clearable:"",id:"target",name:"target",items:e.gameCells,"item-text":e.infoCoord,"item-value":"_id",label:"Ячейка","data-vv-as":"Ячейка",error:e.errors.has("target"),"error-messages":e.errors.collect("target")},model:{value:e.target,callback:function(t){e.target=t},expression:"target"}})],1)],1)],1),n("v-flex",{attrs:{xs12:"",sm6:"",md3:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Аренда")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{id:"amount",name:"amount",label:"Цена за день",autocomplete:"off"},model:{value:e.gameCell.amount,callback:function(t){e.$set(e.gameCell,"amount",t)},expression:"gameCell.amount"}}),n("v-text-field",{attrs:{id:"period",name:"period",label:"Период оплаты",autocomplete:"off"},model:{value:e.gameCell.period,callback:function(t){e.$set(e.gameCell,"period",t)},expression:"gameCell.period"}}),n("v-text-field",{attrs:{id:"busy",name:"busy",label:"Занято до",readonly:""},model:{value:e.gameCell.busy,callback:function(t){e.$set(e.gameCell,"busy",t)},expression:"gameCell.busy"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.setRate}},[e._v("Цена")]),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.setPeriod}},[e._v("Период")]),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.payRent}},[e._v("Оплатить")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.rentCell}},[e._v("Арендовать")]),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.unrentCell}},[e._v("Снять аренду")])],1)],1)],1),n("v-flex",{attrs:{xs12:"",sm6:"",md3:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Здание")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[e.gameBuilding?e._e():n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:e.types,"item-value":"val","item-text":"key",label:"Тип",placeholder:"Select..."},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:e.allFormulas,"item-value":"_id","item-text":e.formulaName,label:"Формула",placeholder:"Select..."},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})],1),1==e.type?n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Название города"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1):e._e(),10==e.type?n("v-flex",{attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:e.allElements,"item-value":"_id","item-text":"name",label:"Элемент",placeholder:"Select..."},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}})],1):e._e()],1),e.gameBuilding?n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{id:"building_type",name:"building_type",label:"Тип здания",readonly:""},model:{value:e.buildingTypeName,callback:function(t){e.buildingTypeName=t},expression:"buildingTypeName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{id:"building_level",name:"building_level",label:"Уровень",readonly:""},model:{value:e.gameBuilding.level,callback:function(t){e.$set(e.gameBuilding,"level",t)},expression:"gameBuilding.level"}})],1)],1):e._e()],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.build}},[e._v("Построить")]),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.upgrade}},[e._v("Улучшить")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.destroy}},[e._v("Разрушить")]),n("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:e.buildingJoin}},[e._v("Войти")])],1)],1)],1),n("v-flex",{attrs:{xs12:"",sm6:"",md6:"","text-center":"","mb-2":"","mt-2":"","pr-2":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Задания на перевозку")])]),n("v-card-text",[n("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"}),n("th",{staticClass:"text-left"},[e._v("Откуда")]),n("th",{staticClass:"text-left"},[e._v("Куда")]),n("th",{staticClass:"text-left"},[e._v("Доступный вес")]),n("th",{staticClass:"text-left"},[e._v("Ставка")])])]),n("tbody",e._l(e.gameTransports,function(t){return n("tr",{key:t._id},[n("td",{staticStyle:{padding:"0"}},[n("v-icon",{on:{click:function(n){return e.startTransport(t)}}},[e._v("\n                      mdi-worker\n                    ")]),n("v-icon",{on:{click:function(n){return e.cancelTransport(t)}}},[e._v("\n                      mdi-close\n                    ")])],1),n("td",[e._v(e._s(t.cell))]),n("td",[e._v(e._s(t.target))]),n("td",[e._v(e._s(t.weight))]),n("td",[e._v("\n                    "+e._s(t.price)+"\n                    "),n("v-icon",{on:{click:function(n){return e.setPriceTransport(t)}}},[e._v("\n                      mdi-check-circle-outline\n                    ")])],1)])}),0)]},proxy:!0}])}),n("v-select",{attrs:{clearable:"",id:"unit",name:"unit",items:e.units,"item-text":"name","item-value":"_id",label:"Юнит"},model:{value:e.unit,callback:function(t){e.unit=t},expression:"unit"}}),n("v-text-field",{attrs:{id:"price",name:"price",label:"Price",type:"number"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1)],1)],1)],1),n("Description",{attrs:{description:"Вы находитесь в ячейке города."}}),n("p",[e._v("В этой локации будет доступен общий чат со всеми игроками которые находятся в данной ячейке. Все функции тут доступны в основном только для арендатора и владельца города.")]),n("v-row",[n("v-col",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"/img/cell_store.jpg"}})])]),n("v-col",[n("p",[e._v("Хранилище элементов в ячейке. Элементы расположены в порядке убывания их количества. Эти элементы доступны для добычи в шахте. Эта информация доступна всем посетителям ячейки.")])])],1),n("v-row",[n("v-col",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"/img/cell_invent.jpg"}})])]),n("v-col",[n("p",[e._v("Склад предметов в ячейке. Для каждого игрока доступны только его собственные предметы. Эта информация доступна всем посетителям ячейки.")]),n("p",[n("v-icon",[e._v("mdi-magnify")]),e._v(" - Открыть детальную информацию о предмете")],1),n("p",[n("v-icon",[e._v("mdi-arrow-up-thick")]),e._v(" - Переложить предмет в инвентарь юнита. Для выполнения действия необходимо указать юнита. Если перемещаются материалы, то также необходимо указать количество.")],1),n("p",[n("v-icon",[e._v("mdi-cursor-move")]),e._v(" - Создать заявку на перемещение предметов или материалов. Для выполнения действия необходимо указать ячейку назначения. Для материалов необходимо указать количество.")],1),n("p",[n("v-icon",[e._v("mdi-coin")]),e._v(" - Выставить предмет или материал на продажу. Для выполнения действия необходимо указать цену. Для материалов необходимо указать количество. Цена указывается за единицу материала или предмета.")],1)])],1),n("v-row",[n("v-col",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"/img/cell_rent.jpg"}})])]),n("v-col",[n("p",[e._v("Интерфейс управления арендой ячейки. Функции различаются для разных игроков. Владелец города может устранавливать параметры аренды, Арендатор может продлять период аренды оплатив один или несколько очередных периодов. Если ячейка не сдана в аренду, доступен метод аренды для всех посетителей. Аренда ячейки игроком позволяет строить на ней доступные здания, в которых можно либо добывать ресурсы либо производить товары.")]),n("p",[e._v("Цена за день / Период оплаты - Устанавливаются владельцем города. Не могут быть изменены если ячейка сдана в аренду и срок оплаты не вышел. Если арендатор не оплатил очередной период, владелец может либо изменить параметры аренды, либо выселить арендатора если они не договорились о продлении сроков оплаты очередного периода.")]),n("p",[e._v('кнопка Цена - установить цену. Должно быть заполнено поле "Цена за день"')]),n("p",[e._v('кнопка Период - установить периодичность платежей. Должно быть заполнено поле "Период оплаты"')]),n("p",[e._v("кнопка Оплатить - Доступна арендатору. При выполнении с баланса списывается Цена*Период монет и продлевается период аренды.")]),n("p",[e._v("кнопка Арендовать - Доступна всем если ячейка не арендована. При выполнении с баланса списывается Цена*Период монет, продлевается период аренды и игрок становится арендатором данной ячейки.")]),n("p",[e._v("кнопка Снять аренду - Доступна владельцу города если арендатор просрочил оплату. При выполнеии сбрасывает параметры аренды и выселяет арендатора. Если в ячейке есть здание, оно переходит в собственность нового арендатора.")])])],1),n("v-row",[n("v-col",{staticStyle:{"max-width":"25%"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"/img/cell_buildung.jpg"}})])]),n("v-col",{staticStyle:{"max-width":"25%"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"/img/cell_buildung_new.jpg"}})])]),n("v-col",{staticStyle:{"max-width":"50%"}},[n("p",[e._v("Интерфейс управления зданием ячейки. Методы постройки, улучшения и разрушения доступны только арендатору ячейки, войти в здание может любой игрок.")]),n("p",[e._v("кнопка Построить - Позволяет строить новое здание в ячейке. Доступно только если в ячейке нет здания. Параметры зависят от тип здания. Для всех зданий указывается формула, согласно которой будут списываться материалы при постройке и улучшении. От выбранной формулы зависит прочность здания. При постройке нового города выбирается Замок и указывается название города. При постройке шахты указывается элемент, который будет добываться в построенной шахте.")]),n("p",[e._v("кнопка Улучшить - Улучшить здание до очередного уровня. Улучшение здания увеличивает его прочность, а также увеличивает параметры здания. Если улучшается замок - увеличивается уровень города и добавляются новые ячейки. Если улучшается лаборатория, шахта или мастерская - увеличивается максимальное количество одновременно работающих юнитов в этом здании. Для мастерских увеличивается количество одновременно запущенных задач в этом здании. Если улучшается Гостиница - увеличивается максимальное количество одновременно одтыхающих юнитов.")]),n("p",[e._v("кнопка Разрушить - Разрушает здание.")]),n("p",[e._v("кнопка Войти - Переход в сцену здания")])])],1),n("ErrorMessage"),n("SuccessMessage")],1)},a=[],i=(n("8e6e"),n("7f7f"),n("96cf"),n("3b8d")),l=(n("55dd"),n("bd86")),c=(n("ac6a"),n("456d"),n("2f62")),s=n("fa7d"),o=n("6bfe");function u(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(l["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d={metaInfo:function(){return{title:this.$store.getters.appTitle,titleTemplate:"%s"}},data:function(){return{dialog:!1,editedItem:{},defaultItem:{},types:Object.keys(o["c"]).map(function(e){return{key:e,val:o["c"][e]}}),type:"",name:"",element:"",formula:"",unit:"",count:"",price:"",target:""}},computed:m({},Object(c["c"])(["profileInfo","gamePlace","gameCell","gameCells","gameCellStorage","gameCellInventory","gameBuilding","allElements","allFormulas","user","gameUnits","gameTransports"]),{infoStorage:function(){var e=this.gameCellStorage.map(function(e,t){return{name:Object(s["e"])(e.template-1),val:e.count}}).sort(function(e,t){return t.val-e.val});return e},units:function(){return this.gameUnits.filter(function(e){return e.type==o["l"].Worker})},isCastlePlace:function(){return Object(s["j"])(this.gamePlace)},isPlaceFree:function(){return!this.gamePlace.acc},isPlaceOwn:function(){return this.gamePlace.acc==user._id},buildingTypeName:function(){return this.gameBuilding?Object.keys(o["c"])[this.gameBuilding.type-1]:""}}),watch:{dialog:function(e){return!!e||this.close()}},methods:m({},Object(c["b"])(["cellJoin","getAllElements","getAllFormulas","cellSetRate","cellSetPeriod","cellPayRent","cellRent","cellUnrent","buildingBuild","buildingDestroy","buildingUpgrade","buildingSelect","itemTake","itemCellStorage","itemCellInventory","transportList","transportCreate","transportSetPrice","transportStart","transportCancel","exchangeCreate"]),{infoCoord:function(e){return e?"".concat(Object(s["i"])(e.coord)," (").concat(e._id,")"):""},formulaName:function(e){return"".concat(Object(s["e"])(e.element1-1)).concat(e.count1).concat(Object(s["e"])(e.element2-1)).concat(e.count2)},infoBuilding:function(e){return e.building?"".concat(e.building.type," (").concat(e.building.level,")"):""},infoRent:function(e){return Object(s["k"])(e.coord)||!e.amount?"not rent":"".concat(e.amount,"/").concat(e.period," (").concat(e.tenant?"rented":"free",")")},openItem:function(e){this.editedItem=Object.assign({},e),this.dialog=!0},takeItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("takeItem",this.unit,t._id,this.count),n={unit:this.unit,item:t._id},"Element"==t.iClass&&(n.count=this.count),e.next=5,this.itemTake(n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=Object.assign({},e.defaultItem)},300)},setRate:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.cellSetRate({cell:this.gameCell._id,amount:this.gameCell.amount});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),setPeriod:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.cellSetPeriod({cell:this.gameCell._id,period:this.gameCell.period});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),payRent:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.cellPayRent({cell:this.gameCell._id,count:1});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),rentCell:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.cellRent({cell:this.gameCell._id});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),unrentCell:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.cellUnrent({cell:this.gameCell._id});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),build:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={cell:this.gameCell._id,type:this.type,formula:this.formula},this.type==o["c"].Castle&&(t.name=this.name),this.type==o["c"].Mine&&(t.element=this.element),e.next=6,this.buildingBuild(t);case 6:console.log("buildingBuild",this.gameBuilding),this.$store.state.cell.gameCell.building=this.gameBuilding,this.type==o["c"].Castle&&(this.$store.state.place.gamePlace.name=this.name),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log("error",e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}(),destroy:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.buildingDestroy({building:this.gameBuilding._id});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),upgrade:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.buildingUpgrade({building:this.gameBuilding._id});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("error",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}(),buildingJoin:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.buildingSelect(this.gameCell.building),this.$router.push({name:"game-building"});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),moveItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={target:this.target,item:t._id},t.iClass==o["f"].Element&&(n.count=this.count),e.next=5,this.transportCreate(n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("error",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),startTransport:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("startTransport",t),e.next=3,this.transportStart({ticket:t._id,unit:this.unit});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),cancelTransport:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("cancelTransport",t),e.next=3,this.transportCancel({ticket:t._id});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),setPriceTransport:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("setPriceTransport",t),e.next=3,this.transportSetPrice({ticket:t._id,price:this.price});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),exchangeItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("exchangeItem",t),e.next=3,this.exchangeCreate({item:t._id,price:this.price,count:this.count});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.gamePlace._id&&this.gameCell._id){e.next=2;break}return e.abrupt("return",this.$router.push({name:"game-map"}));case 2:return this.allElements.length||this.getAllElements(),this.allFormulas.length||this.getAllFormulas(),e.next=6,this.cellJoin({cell:this.gameCell._id});case 6:return e.next=8,this.itemCellStorage({cell:this.gameCell._id});case 8:return e.next=10,this.itemCellInventory({cell:this.gameCell._id});case 10:return e.next=12,this.transportList({place:this.gamePlace._id,cell:this.gameCell._id});case 12:this.$store.state.building.gameBuilding=this.gameCell.building,console.log("buildingTypes",Object.keys(o["c"]).map(function(e){return{key:e,val:o["c"][e]}}));case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},p=d,v=(n("e3d1"),n("2877")),g=n("6544"),h=n.n(g),f=n("c6a6"),b=n("8336"),x=n("b0af"),_=n("99d9"),y=n("62ad"),C=n("a523"),k=n("0e8f"),w=n("132d"),O=n("a722"),j=n("0fd9"),R=n("b974"),S=n("1f4f"),P=n("2fa4"),T=n("8654"),I=n("2a7f"),B=Object(v["a"])(p,r,a,!1,null,null,null);t["default"]=B.exports;h()(B,{VAutocomplete:f["a"],VBtn:b["a"],VCard:x["a"],VCardActions:_["b"],VCardText:_["d"],VCardTitle:_["e"],VCol:y["a"],VContainer:C["a"],VFlex:k["a"],VIcon:w["a"],VLayout:O["a"],VRow:j["a"],VSelect:R["a"],VSimpleTable:S["a"],VSpacer:P["a"],VTextField:T["a"],VToolbarTitle:I["c"]})},e3d1:function(e,t,n){"use strict";var r=n("a0bb"),a=n.n(r);a.a}}]);