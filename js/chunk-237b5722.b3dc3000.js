(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-237b5722"],{"8c89":function(e,t,a){},"9a3a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"worklist"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"id",label:"用户ID",align:"center"}}),t("el-table-column",{attrs:{prop:"userId",label:"所属班级",align:"center"}}),t("el-table-column",{attrs:{prop:"title",label:"作业名称",align:"center"}}),t("el-table-column",{attrs:{prop:"completed_text",label:"作业完成情况",align:"center"}})],1),t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,40,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[];function r(e,t,a,l){e.service.get(t,{params:a||{}}).then(t=>{200===t.data.status&&(console.log(t),e.tableData=t.data.data,e.total=t.data.total,e.tableData.map(e=>{l.map(t=>{e[t]?e[t+"_text"]="是":e[t+"_text"]="否"})}),e.loading=!1)})}var i={data(){return{tableData:[],currentPage:1,pageSize:10,total:0,loading:!0}},methods:{getData(){r(this,"/works",{page:this.currentPage,size:this.pageSize},["completed"])},handleCurrentChange(e){this.currentPage=e,r(this,"/works",{page:e,size:this.pageSize},["completed"])},handleSizeChange(e){this.pageSize=e,this.currentPage=1,r(this,"/works",{page:this.currentPage,size:e},["completed"])}},created(){this.getData()}},s=i,o=(a("dca2"),a("2877")),c=Object(o["a"])(s,l,n,!1,null,null,null);t["default"]=c.exports},dca2:function(e,t,a){"use strict";a("8c89")}}]);
//# sourceMappingURL=chunk-237b5722.b3dc3000.js.map