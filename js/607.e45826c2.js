"use strict";(self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[]).push([[607],{7607:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=a(3396),l=a(9242);const n=(0,i._)("h1",null,"Создать новую задачу",-1),r={class:"form-control"},s=(0,i._)("label",{for:"title"},"Название",-1),o={class:"form-control"},d=(0,i._)("label",{for:"date"},"Дата дэдлайна",-1),u={class:"form-control"},c=(0,i._)("label",{for:"description"},"Описание",-1),p=["disabled"];function v(t,e,a,v,m,b){return(0,i.wg)(),(0,i.iD)("form",{class:"card",onSubmit:e[3]||(e[3]=(0,l.iM)(((...t)=>v.submit&&v.submit(...t)),["prevent"]))},[n,(0,i._)("div",r,[s,(0,i.wy)((0,i._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>v.title=t)},null,512),[[l.nr,v.title]])]),(0,i._)("div",o,[d,(0,i.wy)((0,i._)("input",{type:"date",id:"date","onUpdate:modelValue":e[1]||(e[1]=t=>v.date=t)},null,512),[[l.nr,v.date]])]),(0,i._)("div",u,[c,(0,i.wy)((0,i._)("textarea",{id:"description","onUpdate:modelValue":e[2]||(e[2]=t=>v.description=t)},null,512),[[l.nr,v.description]])]),(0,i._)("button",{class:"btn primary",disabled:!v.isValid},"Создать",8,p)],32)}var m=a(4870),b=a(65),f=a(678),_={setup(){const t=(0,b.oR)(),e=(0,f.tv)(),a=(0,m.iH)(""),l=(0,m.iH)(null),n=(0,m.iH)(""),r=()=>{const i={id:Date.now().toString(),title:a.value,date:new Date(l.value).setHours(23,59,59,999),description:n.value,status:"active"};t.dispatch("createTask",i),e.push("/")},s=(0,i.Fl)((()=>""!==a.value&&l.value&&""!==n.value));return{submit:r,title:a,date:l,description:n,isValid:s}}},w=a(89);const k=(0,w.Z)(_,[["render",v]]);var h=k}}]);
//# sourceMappingURL=607.e45826c2.js.map