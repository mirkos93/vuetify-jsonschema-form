(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d}));n(48);var o={locale:"en",rootDisplay:"",objectContainerClass:"",sectionsClass:"pl-2 pt-2",sectionsTitlesClasses:["title","subtitle-1","subtitle-2"],childrenClass:"pr-2",fieldProps:{},selectProps:{},tabsProps:{grow:!0},expansionPanelsProps:{mandatory:!0},dialogProps:{maxWidth:500},colorPickerProps:{},timePickerProps:{},datePickerProps:{scrollable:!0},removeAdditionalProperties:!0,disableAll:!1,hideReadOnly:!1,deleteReadOnly:!1,filesAsDataUrl:!1,context:{},rules:{},idPrefix:"",markdownit:{}},r={en:{required:"This information is required",noData:"No matching value found",search:"Search...",minimum:"Value must be more than {minimum}",maximum:"Value must be less than {maximum}",minLength:"{minLength} characters minimum",maxLength:"{maxLength} characters maximum",minItems:"No less than {minItems} items",maxItems:"No more than {maxItems} items",pattern:"The expected pattern is not satisfied"},fr:{required:"Cette information est obligatoire",noData:"Aucun élément correspondant",search:"Recherchez...",minimum:"La valeur doit être supérieure à {minimum}",maximum:"La valeur doit être inférieure à {maximum}",minLength:"{minLength} caractères minimum",maxLength:"{maxLength} caractères maximum",minItems:"Au moins {minItems} éléments",maxItems:"Au plus {maxItems} éléments",pattern:"Le format attendu n'est pas respecté"},es:{required:"Esta información es requerida",noData:"No se encontraron valores coincidentes",search:"Buscar...",minimum:"El valor debe ser mayor que {minimum}",maximum:"El valor debe ser inferior a {maximum}",minLength:"{minLength} caracteres mínimo",maxLength:"{maxLength} caractères máximo",minItems:"Al menos {minItems} articulos",maxItems:"Hasta {maxItems} articulos",pattern:"El formato esperado no se respeta"},de:{required:"Diese Informationen sind erforderlich",noData:"Keine passenden Artikel",search:"Suche...",minimum:"Der Wert muss größer als {minimum} sein",maximum:"Der Wert muss kleiner als {maximum} sein",minLength:"Mindestens {minLength} Zeichen",maxLength:"Maximal {maxLength} Zeichen",minItems:"Mindestens {minItems} Elemente",maxItems:"Bis zu {maxItems} Artikel",pattern:"Das erwartete Format wird nicht eingehalten"}},l={time:function(t,e){var n=new Date("".concat((new Date).toISOString().split("T")[0],"T").concat(t));return new Date(n.getTime()+6e4*n.getTimezoneOffset()).toLocaleTimeString(e)},date:function(t,e){var n=new Date(t);return new Date(n.getTime()+6e4*n.getTimezoneOffset()).toLocaleDateString(e)},"date-time":function(t,e){return new Date(t).toLocaleString(e)}},d={mdi:{calendar:"mdi-calendar",clock:"mdi-clock",info:"mdi-information",add:"mdi-plus",edit:"mdi-pencil",delete:"mdi-delete"},md:{calendar:"event",clock:"clock",info:"info",add:"add",edit:"create",delete:"delete"},fa:{calendar:"fa-calendar",clock:"fa-clock",info:"fa-info",add:"fa-plus",edit:"fa-edit",delete:"fa-trash"}}},411:function(t,e,n){var content=n(412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7c06aa28",content,!0,{sourceMap:!1})},412:function(t,e,n){(e=n(11)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table thead tr th{color:rgba(0,0,0,.6)}.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--light.v-data-table tbody tr:not(:last-child) th:last-child,.theme--light.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr.active{background:#f5f5f5}.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr:last-child th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--dark.v-data-table tbody tr:not(:last-child) th:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table tbody tr.active{background:#505050}.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{max-width:100%}.v-data-table table{width:100%;border-spacing:0}.v-data-table td,.v-data-table th{padding:0 16px}.v-data-table th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table th{text-align:left}.v-application--is-rtl .v-data-table th{text-align:right}.v-data-table td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress .v-progress-linear{position:absolute}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense td{height:24px}.v-data-table--dense th{height:32px}.v-data-table--fixed-header .v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header thead th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header thead tr:nth-child(2) th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th{top:32px}",""]),t.exports=e},611:function(t,e,n){"use strict";n.r(e);var o=n(332),r={data:function(){return{defaultOptions:o.a,formats:o.b,localizedMessages:o.d,descriptions:{rootDisplay:'equivalent of x-display annotation on the root object of the schema, can be "tabs" or "expansion-panels"',fieldProps:"props passed to the underlying components for simple fields (v-text-field, v-select, etc.)",selectProps:"props passed to the underlying components for select fields",tabsProps:"props passed to the underlying v-tabs component when relevant",expansionPanelsProps:"props passed to the underlying v-expansion-panels component when relevant",dialogProps:"props passed to the underlying v-dialog component when relevant",colorPickerProps:"props passed to the underlying v-color-picker component when relevant",timePickerProps:"props passed to the underlying v-time-picker component when relevant",datePickerProps:"props passed to the underlying v-date-picker component when relevant",removeAdditionalProperties:"force the removal of properties found in the model but not defined in the schema",disableAll:"force disabling all fields ignoring the readOnly attributes",hideReadOnly:"by default read-only properties are rendered as disabled fields, set this to true to hide them entirely",deleteReadOnly:"set this to true to not only hide read-only properties, but also remove them from the model",context:"an optional contextual information object, properties from here can be used as variables in URL templates",rules:"some custom rule functions that can be referenced by the x-rules annotation on properties",idPrefix:"a prefix applied to generated ids if you want to prevent potential conflicts",markdownit:"options given to markdownit if you leave the markdown option to its default value"},locale:"en",iconSets:o.c,iconSet:"mdi"}}},l=n(59),d=n(127),c=n.n(d),h=n(593),m=n(329),v=n(594),f=n(384),_=(n(10),n(8),n(5),n(4),n(9),n(2)),x=(n(16),n(411),n(0)),y=n(17),k=n(6);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var O=Object(k.a)(y.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(x.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",{staticClass:"display-1 mb-4"},[t._v("\n    Configuration\n  ")]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n    Options\n  ")]),t._v(" "),n("p",[t._v('Options can be passed to vjsf using the options prop or can be defined more locally on a specific property using the "x-options" annotation. Children properties will inherit from the options defined in their parents.')]),t._v(" "),n("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("\n          Key\n        ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n          Default\n        ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n          Description\n        ")])])]),t._v(" "),n("tbody",[t._l(Object.keys(t.defaultOptions),(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(JSON.stringify(t.defaultOptions[e],null,2)))]),t._v(" "),n("td",[t._v(t._s(t.descriptions[e]))])])})),t._v(" "),n("tr",[n("td",[t._v("markdown")]),t._v(" "),n("td",[t._v("window.markdownit().render if markdownit is available, identity function otherwise")]),t._v(" "),n("td",[t._v("a function that takes a markdown text and returns HTML, used for descriptions and slots")])]),t._v(" "),n("tr",[n("td",[t._v("httpLib")]),t._v(" "),n("td",[t._v("this.axios or this.$http or this.$axios or window.axios")]),t._v(" "),n("td",[t._v("a simple HTTP client used to fetch select options from HTTP requests")])])],2)]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n    Messages\n  ")]),t._v(" "),n("p",[t._v('\n    You can define a special "messages" option to overwrite the default localized messages.\n  ')]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{items:Object.keys(t.localizedMessages),label:"Locale","hide-details":"",dense:""},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}})],1)],1),t._v(" "),n("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("\n          Message key\n        ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n          Default\n        ")])])]),t._v(" "),n("tbody",t._l(Object.keys(t.localizedMessages[t.locale]),(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.localizedMessages[t.locale][e]))])])})),0)]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n    Icons\n  ")]),t._v(" "),n("p",[t._v('\n    You can define a special "icons" option to overwrite the default icons. Default icons are initialized based on current iconfont configured on your Vuetify instance.\n  ')]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{items:Object.keys(t.iconSets),label:"Icon set","hide-details":"",dense:""},model:{value:t.iconSet,callback:function(e){t.iconSet=e},expression:"iconSet"}})],1)],1),t._v(" "),n("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("\n          Icon key\n        ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n          Default\n        ")])])]),t._v(" "),n("tbody",t._l(Object.keys(t.iconSets[t.iconSet]),(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.iconSets[t.iconSet][e]))])])})),0)]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n    Formatting functions\n  ")]),t._v(" "),n("p",[t._v('\n    You can define a special "formats" option to overwrite the default formatting functions that are used to display some field values.\n  ')]),t._v(" "),n("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("\n          Message key\n        ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n          Default\n        ")])])]),t._v(" "),n("tbody",t._l(Object.keys(t.formats),(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",[t._v(t._s(t.formats[e]))])])})),0)]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n    Annotations\n  ")]),t._v(" "),n("p",[t._v('\n    Annotation is the name we give to special attributes defined on properties in your schema.\n    These attributes are prefixed by "x-" to signify that they are not part of the standard JSON schema syntax.\n    They should be ignored by validators and other tools.\n  ')]),t._v(" "),n("p"),t._v(" "),n("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left",staticStyle:{"min-width":"250px"}},[t._v("\n          Annotation key\n        ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n          Usage\n        ")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("x-options")]),t._v(" "),n("td",[t._v("Overwrite some of the options for this property and its children.")])]),t._v(" "),n("tr",[n("td",[t._v("x-display")]),t._v(" "),n("td",[t._v("Used to switch the rendering mode of a property. We try to use as little of these as possible and rely on indications from the standard JSON schema syntax itself to render the form, but sometimes some ambiguity has to be resolved this way. For example this is used to force rendering sections as tabs or expansion panels.")])]),t._v(" "),n("tr",[n("td",[t._v("x-fromUrl / x-fromData")]),t._v(" "),n("td",[t._v("Used to populate selects from the results of HTTP requests or some other part of the model.")])]),t._v(" "),n("tr",[n("td",[t._v("x-itemKey / x-itemTitle / x-itemIcon")]),t._v(" "),n("td",[t._v("Used to configure rendering of options in selects.")])]),t._v(" "),n("tr",[n("td",[t._v("x-props")]),t._v(" "),n("td",[t._v("An object of props to pass directly to the underlying Vuetify component.")])]),t._v(" "),n("tr",[n("td",[t._v("x-slots")]),t._v(" "),n("td",[t._v("An object of textual contents to be displayed before and after the property or to be passed as slots to the underlying vuetify component.")])]),t._v(" "),n("tr",[n("td",[t._v("x-rules")]),t._v(" "),n("td",[t._v("Some custom rule functions for validating this property.")])])])])],1)}),[],!1,null,"621c6811",null);e.default=component.exports;c()(component,{VCol:h.a,VContainer:m.a,VRow:v.a,VSelect:f.a,VSimpleTable:O})}}]);