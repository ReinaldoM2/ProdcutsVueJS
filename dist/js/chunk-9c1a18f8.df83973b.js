(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c1a18f8"],{2440:function(t,e,r){},"68d8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("section",{staticClass:"container__section"},[r("article",{staticClass:"container__article"},[r("h1",{staticClass:"container__article__tittle"},[t._v("IMPORTACION DE MARCAS MASIVAS")]),r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.postImportBrand(e)}}},[r("v-container",{staticClass:"container__rows"},[r("v-row",[r("v-col",[r("v-file-input",{attrs:{multiple:"",label:"File input"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1),r("v-row",[r("v-col",[r("v-btn",{staticStyle:{"background-color":"#2ecc71",color:"white"},attrs:{type:"submit"}},[t._v("Enviar")]),r("v-btn",{staticClass:"mr-4",staticStyle:{"margin-left":"1em","background-color":"#2ecc71",color:"white"},on:{click:function(e){return t.$router.push("/index")}}},[t._v(" Volver ")])],1)],1)],1)],1)],1)])])},o=[],a={data:function(){return{errorEnvio:!1,file:""}},methods:{postImportBrand:function(){var t=this,e=new FormData;e.append("ahjdad",12),e.append("file",this.file[0]),console.log(e),this.$http.post("https://pure-stream-75584.herokuapp.com//brands/import_from_file",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(201===e.status)return alert("Importado Con Exito"),t.$router.push("/index");alert("Error al Importar")})).catch((function(e){t.errorEnvio=!0,alert("Error de Importado",e.message)}))}}},i=a,c=(r("eac4"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"8a9e1e76",null);e["default"]=s.exports},eac4:function(t,e,r){"use strict";var n=r("2440"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-9c1a18f8.df83973b.js.map