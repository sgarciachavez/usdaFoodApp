(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"ct+p":function(n,t,o){"use strict";o.r(t),o.d(t,"HomePageModule",(function(){return l}));var e=o("ofXK"),i=o("TEn/"),c=o("3Pt+"),r=o("tyNb"),s=o("fXoL"),b=o("Bplh");function a(n,t){if(1&n){const n=s.Nb();s.Mb(0,"ion-card"),s.Mb(1,"ion-card-content",8),s.Ub("click",(function(){s.bc(n);const o=t.$implicit;return s.Wb().onCardClick(o.fdcId)})),s.Mb(2,"p"),s.fc(3,"FDCID:"),s.Lb(),s.Kb(4,"p"),s.Mb(5,"h3",9),s.fc(6),s.Lb(),s.Mb(7,"p"),s.fc(8,"Description:"),s.Lb(),s.Mb(9,"h3"),s.fc(10),s.Lb(),s.Mb(11,"p"),s.fc(12,"Brand Owner:"),s.Lb(),s.Mb(13,"h3"),s.fc(14),s.Lb(),s.Mb(15,"p"),s.fc(16,"Ingredients:"),s.Lb(),s.Mb(17,"h3"),s.fc(18),s.Lb(),s.Lb(),s.Lb()}if(2&n){const n=t.$implicit,o=t.index;s.zb(1),s.Zb("ngClass",o%2==0?"odd":"even"),s.zb(5),s.gc(n.fdcId),s.zb(4),s.gc(n.description),s.zb(4),s.gc(n.brandOwner),s.zb(4),s.gc(n.ingredients)}}const d=[{path:"",component:(()=>{class n{constructor(n,t){this.usdaService=n,this.router=t}onInput(n){const t=n.srcElement.value;t.length>2&&this.usdaService.getFoodItems(t).subscribe(n=>{this.foodlist=n.foods,this.foodlist.sort((n,t)=>n.description>t.description?1:-1)})}onClear(){this.foodlist=[]}onCardClick(n){this.router.navigate([`food-item/${n}`])}}return n.\u0275fac=function(t){return new(t||n)(s.Jb(b.a),s.Jb(r.g))},n.\u0275cmp=s.Db({type:n,selectors:[["app-home"]],decls:9,vars:2,consts:[[3,"translucent"],["color","tertiary"],["href","./favorites","slot","end","color","tertiary",1,"ion-padding-end"],["name","heart","color","danger"],[1,"ion-text-center"],["fixed",""],["placeholder","Enter a food name","debounce","1500",3,"ionChange","ionClear"],[4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"info"]],template:function(n,t){1&n&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar",1),s.Mb(2,"ion-button",2),s.Kb(3,"ion-icon",3),s.Lb(),s.Mb(4,"ion-title",4),s.fc(5," USDA Food App "),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content",5),s.Mb(7,"ion-searchbar",6),s.Ub("ionChange",(function(n){return t.onInput(n)}))("ionClear",(function(){return t.onClear()})),s.Lb(),s.ec(8,a,19,5,"ion-card",7),s.Lb()),2&n&&(s.Zb("translucent",!0),s.zb(8),s.Zb("ngForOf",t.foodlist))},directives:[i.k,i.q,i.d,i.l,i.p,i.i,i.o,i.u,e.i,i.f,i.g,e.h],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}h3[_ngcontent-%COMP%]{margin-left:1em;font-weight:700}"]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(d)],r.i]}),n})(),l=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[e.b,c.a,i.r,f]]}),n})()}}]);