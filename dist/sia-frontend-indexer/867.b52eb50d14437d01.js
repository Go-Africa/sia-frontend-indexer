"use strict";(self.webpackChunksia_frontend_indexer=self.webpackChunksia_frontend_indexer||[]).push([[867],{2867:(U,g,r)=>{r.r(g),r.d(g,{TransactionsListModule:()=>S});var s=r(6895),c=r(4564),u=r(5861),h=r(7579),m=r(9808),t=r(8274),f=r(6867),v=r(6233),p=r(433),d=r(4333);const T=function(o){return[o]};function C(o,a){if(1&o&&(t.TgZ(0,"tr",19)(1,"td"),t._uU(2),t.ALo(3,"slice"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t._UZ(8,"td"),t.qZA()),2&o){const n=a.$implicit,e=t.oxw();t.Q6J("routerLink",t.VKq(8,T,n.id)),t.xp6(2),t.hij("",t.Dn7(3,4,n.id,0,16),"..."),t.xp6(3),t.Oqu(n.height),t.xp6(2),t.Oqu(e.formatTimestamp(+n.timestamp))}}function Z(o,a){1&o&&(t.TgZ(0,"tr")(1,"td",20),t._UZ(2,"span",21),t.qZA()())}const x=function(o,a,n){return{itemsPerPage:o,currentPage:a,totalItems:n}},b=[{path:"",component:(()=>{class o{constructor(n,e){this._transactionService=n,this._blockService=e,this.page=1,this.count=0,this.pageSize=10,this.destroy$=new h.x}ngOnInit(){console.log("Ma page: ",this.page),this.stopSpolling(),this.loading=!0,this.init(this.page,this.pageSize)}init(n,e){console.log("Ma page: ",this.page),this.loading=!0,this._transactionService.getAllTransactions(n,e).subscribe(i=>{this.transactions=i.docs,this.count=i.totalDocs,this.loading=!1}),console.log("Mes transactions : ",this.count,this.transactions)}handlePageChange(n){this.page=n,this.loading=!0,this.transactions=[],this.init(n,this.pageSize)}blockInfo(){var n=this;return(0,u.Z)(function*(){const e=yield(0,m.n)(n._blockService.getSpecificBlock(n.transactions[0].height.toString()));n.block=e,console.log("Mon lbock : ",n.block)})()}stopSpolling(){this.destroy$.next(),this.destroy$.complete()}formatTimestamp(n){const e=new Date(1e3*n);return`Le ${e.getDate().toString().padStart(2,"0")}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getFullYear().toString()} \xe0 ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}ngOnDestroy(){this.stopSpolling()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(f.p),t.Y36(v.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-transactions-list"]],decls:47,vars:10,consts:[[1,"container-fluid","p-0","m-0"],[1,"d-flex","justify-content-between"],[1,"d-flex"],["type","date","name","","id","","placeholder","Pick From Date",1,"tab"],["type","date","name","","id","","placeholder","Pick To Date",1,"tab",2,"margin-left","10px"],[1,"tab"],[1,"d-flex","justify-content-end"],["name","","id",""],["value",""],[1,"item","mt-4","p-4"],[1,"h3"],[1,"tableau"],[1,"table","table-borderless","mt-4","tb2"],[1,"p-3","text-center"],["scope","col"],[3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-md-12"],["previousLabel","Prev","nextLabel","Next",1,"my-pagination",3,"responsive","pageChange"],[3,"routerLink"],["colspan","5",1,"text-center","py-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"input",3)(4,"input",4),t.TgZ(5,"button",5),t._uU(6,"Apply"),t.qZA()(),t.TgZ(7,"div",6)(8,"select",7)(9,"option",8),t._uU(10,"All Types"),t.qZA(),t.TgZ(11,"option",8),t._uU(12,"All Types"),t.qZA(),t.TgZ(13,"option",8),t._uU(14,"All Types"),t.qZA(),t.TgZ(15,"option",8),t._uU(16,"All Types"),t.qZA()(),t.TgZ(17,"select",7)(18,"option",8),t._uU(19,"All Status"),t.qZA(),t.TgZ(20,"option",8),t._uU(21,"All Status"),t.qZA(),t.TgZ(22,"option",8),t._uU(23,"All Status"),t.qZA(),t.TgZ(24,"option",8),t._uU(25,"All Status"),t.qZA()()()(),t.TgZ(26,"div",9)(27,"h3",10),t._uU(28,"Transactions"),t.qZA(),t.TgZ(29,"div",11)(30,"table",12)(31,"thead")(32,"tr",13)(33,"th",14),t._uU(34,"Signature"),t.qZA(),t.TgZ(35,"th",14),t._uU(36,"Block"),t.qZA(),t.TgZ(37,"th",14),t._uU(38,"Time"),t.qZA(),t.TgZ(39,"th",14),t._uU(40,"By"),t.qZA()()(),t.TgZ(41,"tbody"),t.YNc(42,C,9,10,"tr",15),t.ALo(43,"paginate"),t.YNc(44,Z,3,0,"tr",16),t.qZA()()(),t.TgZ(45,"div",17)(46,"pagination-controls",18),t.NdJ("pageChange",function(l){return e.handlePageChange(l)}),t.qZA()()()()),2&n&&(t.xp6(42),t.Q6J("ngForOf",t.xi3(43,3,e.transactions,t.kEZ(6,x,e.pageSize,e.page,e.count))),t.xp6(2),t.Q6J("ngIf",e.loading),t.xp6(2),t.Q6J("responsive",!0))},dependencies:[s.sg,s.O5,c.rH,p.YN,p.Kr,d.LS,s.OU,d._s],styles:["*[_ngcontent-%COMP%]{background-color:var(--coverColor)}select[_ngcontent-%COMP%]{color:#fff;border-radius:10px;padding:3px;border:1px solid var(--hoverColor);margin-left:10px}button.tab[_ngcontent-%COMP%]{color:var(--hoverColor)}input[_ngcontent-%COMP%]{border-radius:10px;padding:3px;border:1px solid var(--hoverColor);text-align:center;color:#fff}button[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;padding:3px 7px;margin-left:10px;border:none}button[_ngcontent-%COMP%]:hover{background-color:var(--hoverColor);color:var(--coverColor)}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{color:#fff}.item[_ngcontent-%COMP%]{box-shadow:1px 2px 3px 3px #5a646e9a;border-radius:15px;padding:30px 20px}i[_ngcontent-%COMP%]{margin-left:5px;cursor:pointer}.tb2[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{text-align:center;padding:15px auto;cursor:pointer;border-radius:15px}.tb2[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--hoverColor) 85}.tb2[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:var(--hoverColor);color:var(--coverColor);border-radius:15px}span[_ngcontent-%COMP%]{color:var(--hoverColor)}.value[_ngcontent-%COMP%]{font-weight:700}.tableau[_ngcontent-%COMP%]{overflow-x:auto}.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .current{background:var(--hoverColor)!important}@media (max-width: 768px){.tab[_ngcontent-%COMP%]{display:none}}"]}),o})()},{path:"**",redirectTo:""}];let M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]}),o})();var A=r(4466);let S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,M,A.m]}),o})()}}]);