"use strict";(self.webpackChunksia_frontend_indexer=self.webpackChunksia_frontend_indexer||[]).push([[29],{7029:(_,l,r)=>{r.r(l),r.d(l,{AdressesModule:()=>T});var d=r(6895),i=r(4564),p=r(5861),u=r(9808),t=r(8274),g=r(3048),h=r(4425),m=r(7161);function A(n,s){if(1&n&&(t.TgZ(0,"div")(1,"tr",12)(2,"td",4),t._uU(3),t.qZA()(),t.TgZ(4,"tr"),t._UZ(5,"td",13),t.TgZ(6,"td"),t._uU(7),t.qZA()(),t.TgZ(8,"tr")(9,"td"),t._uU(10),t.qZA()()()),2&n){const o=s.$implicit,e=s.index;t.xp6(3),t.hij("Bal-",e+1,""),t.xp6(4),t.hij("Denomination : ",o.denom,""),t.xp6(3),t.hij("Amount : ",o.amount,"")}}function v(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"tr",14)(1,"td",4),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"slice"),t.TgZ(6,"i",7),t.NdJ("click",function(){const c=t.CHM(o).$implicit,x=t.oxw();return t.KtG(x.copyText(c.txhash))}),t.qZA()()()}if(2&n){const o=s.$implicit,e=s.index;t.xp6(2),t.hij("Tran-",e+1,""),t.xp6(2),t.hij("",t.Dn7(5,2,o.txhash,0,26),"...")}}const Z=[{path:":address",component:(()=>{class n{constructor(o,e,a,c){this._route=o,this._addressService=e,this._clipboard=a,this._notifier=c}ngOnInit(){this.init()}init(){var o=this;return(0,p.Z)(function*(){const e=o._route.snapshot.params.address;console.log("account Address: "+e);const a=yield(0,u.n)(o._addressService.getSpecificAddress(e));o.address=a.data,console.log("address get: ",o.address),o.transactions=o.address.transactions,console.log("transactions's address: ",o.transactions)})()}copyText(o){this._clipboard.copy(o),this._notifier.onSuccess("Copied !!!")}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(i.gz),t.Y36(g.D),t.Y36(h.TU),t.Y36(m.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-address-detail"]],decls:41,vars:11,consts:[[1,"container-fluid","p-0","m-0"],[1,"h2"],[1,"item","mt-3","p-3"],[1,"table","table-borderless"],[2,"color","var(--hoverColor)"],[1,"value",2,"color","var(--hoverColor)"],[1,"value",2,"color","#fff"],["title","copy",1,"bi","bi-clipboard",3,"click"],[1,"h6",2,"margin-top","15px","color","grey"],[1,"m-0",2,"height","5px","background-color","grey"],[4,"ngFor","ngForOf"],["class","mt-2","style","color: var(--hoverColor);",4,"ngFor","ngForOf"],[1,"mt-2"],["rowspan","2"],[1,"mt-2",2,"color","var(--hoverColor)"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Address Details"),t.qZA(),t.TgZ(3,"div",2)(4,"table",3)(5,"tbody")(6,"tr")(7,"td")(8,"span",4),t._uU(9,"Account Number :"),t.qZA()(),t.TgZ(10,"td")(11,"span",5),t._uU(12),t.qZA()()(),t.TgZ(13,"tr")(14,"td")(15,"span",4),t._uU(16,"Address :"),t.qZA()(),t.TgZ(17,"td")(18,"span",6),t._uU(19),t.ALo(20,"slice"),t.TgZ(21,"i",7),t.NdJ("click",function(){return e.copyText(e.address.address)}),t.qZA()()()(),t.TgZ(22,"tr")(23,"td")(24,"span",4),t._uU(25,"Type :"),t.qZA()(),t.TgZ(26,"td")(27,"span",6),t._uU(28),t.qZA()()()()(),t.TgZ(29,"h6",8),t._uU(30),t.qZA(),t._UZ(31,"hr",9),t.TgZ(32,"table",3)(33,"tbody"),t.YNc(34,A,11,3,"div",10),t.qZA()(),t.TgZ(35,"h6",8),t._uU(36),t.qZA(),t._UZ(37,"hr",9),t.TgZ(38,"table",3)(39,"tbody"),t.YNc(40,v,7,6,"tr",11),t.qZA()()()()),2&o&&(t.xp6(12),t.Oqu(e.address.account_number),t.xp6(7),t.hij("",t.Dn7(20,7,e.address.address,0,16),"..."),t.xp6(9),t.Oqu(e.address.type),t.xp6(2),t.hij("Balance (",e.address.balance.length,")"),t.xp6(4),t.Q6J("ngForOf",e.address.balance),t.xp6(2),t.hij("Transactions (",e.address.transactions.count,")"),t.xp6(4),t.Q6J("ngForOf",e.address.transactions.txs))},dependencies:[d.sg,d.OU],styles:["*[_ngcontent-%COMP%]{background-color:var(--coverColor)}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{color:#fff}.item[_ngcontent-%COMP%]{box-shadow:1px 2px 3px 3px #5a646e9a;border-radius:15px;padding:30px 20px}i[_ngcontent-%COMP%]{margin:auto 5px;cursor:pointer}.mb-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--hoverColor);cursor:pointer}.mb-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:var(--hoverColor)}span[_ngcontent-%COMP%]{color:var(--hoverColor);font-weight:700}.value[_ngcontent-%COMP%]{font-weight:700}"]}),n})(),pathMatch:"full"}];let f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Bz.forChild(Z),i.Bz]}),n})();var C=r(4466);let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,f,C.m]}),n})()}}]);