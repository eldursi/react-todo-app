(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{160:function(e,t,a){},161:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n,s,i=a(0),o=a.n(i),c=a(13),r=a.n(c),d=(a(160),a(161),a(22)),l=a(65);(s=n||(n={}))[s.new=0]="new",s[s.done=1]="done";var j=function e(t,a,n,s){Object(l.a)(this,e),this.id=void 0,this.name="",this.date=void 0,this.status=void 0,this.id=t,this.name=a,this.date=s,this.status=n},b=a(111),u=a.n(b),h=a(51),g=a.n(h),k=a(115),O=a.n(k),m=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(l.a)(this,e),this.id=void 0,this.name="",this.color="",this.tasks=[],this.active=void 0,this.icon=void 0,this.components={BookmarkBorderIcon:u.a,LocalOfferOutlinedIcon:g.a,InboxIcon:O.a},this.id=t,this.name=a,this.color=n,this.tasks=s,this.active=i,this.icon=o},f=a(241),x=a(54),p=a(219),C=a(239),v="19rem",y=Object(p.a)((function(e){return Object(C.a)({toolbar:{minHeight:"3rem"},header:{"& > *":{marginLeft:e.spacing(2.9)}},drawer:{width:v,height:"100vh"},taskCategories:{display:"flex",flexWrap:"wrap"},taskCategoriesContainer:{paddingLeft:e.spacing(1.5),paddingRight:e.spacing(1.5)},taskCategory:{margin:e.spacing(1.2),width:e.spacing(15),height:e.spacing(15),backgroundColor:"white",borderRadius:"3%"},taskCategoryInactive:{backgroundColor:"white"},taskCategoryActive:{backgroundColor:"#ededee"},addCategory:{width:e.spacing(15),marginLeft:e.spacing(1.2),borderRadius:"4%"},addCategoryListItem:{backgroundColor:"#7bbb5e",color:"white",textAlign:"center","& *":{fontSize:"1.3rem"}},addCategoryDialogAction:{padding:0,"& button":{borderRadius:"0"}},addCategoryInput:{"&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},taskCategoryListItem:{height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0.7rem"},taskCategoryTitle:{marginTop:"auto","& *":{fontSize:"0.8rem",fontWeight:"bold"}},drawerPaper:{width:v,borderRight:"none",backgroundColor:"#fafafa"}})})),T=a(58),w=Object(p.a)((function(e){return Object(C.a)({taskCategories:{display:"flex",flexWrap:"wrap"},taskCategoriesContainer:{paddingLeft:e.spacing(1.5),paddingRight:e.spacing(1.5)},taskCategory:{margin:e.spacing(1.2),width:e.spacing(15),height:e.spacing(15),backgroundColor:"white",borderRadius:"3%"},taskCategoryInactive:{backgroundColor:"white"},taskCategoryActive:{backgroundColor:"#ededee"},addCategory:{width:e.spacing(15),marginLeft:e.spacing(1.2),borderRadius:"4%"},addCategoryListItem:{backgroundColor:"#7bbb5e",color:"white",textAlign:"center","& *":{fontSize:"1.3rem"}},addCategoryDialogAction:{padding:0,"& button":{borderRadius:"0"}},addCategoryInput:{"&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},taskCategoryListItem:{height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0.7rem"},taskCategoryTitle:{marginTop:"auto","& *":{fontSize:"0.8rem",fontWeight:"bold"}}})})),N=a(220),I=a(221),S=a(237),D=a(222),L=a(223),A=a(224),B=a(236),F=a(230),W=a(225),R=a(226),z=a(227),M=a(229),E=a(71),P=a(4),Y=function(e){var t=w(),a=e.taskCategories,n=e.setTaskCategories;return Object(P.jsxs)(N.a,{className:t.taskCategoriesContainer,children:[Object(P.jsx)(I.a,{className:t.taskCategories,children:a.map((function(e,t){return Object(P.jsx)(H,{taskCategory:e,taskCategories:a,setTaskCategories:n},t)}))}),Object(P.jsx)(S.a,{className:t.addCategory,children:Object(P.jsx)(J,{addTaskCategory:n})})]})},H=function(e){var t=w(),a=e.taskCategories,n=e.taskCategory,s=n.name,i=n.active,o=n.components,c=n.icon,r=n.id,d=n.tasks,l=o[c];return Object(P.jsx)(S.a,{className:"".concat(t.taskCategory," ").concat(i?t.taskCategoryActive:t.taskCategoryInactive),boxShadow:i?0:1,children:Object(P.jsxs)(D.a,{id:r,button:!0,className:t.taskCategoryListItem,onClick:function(){a.forEach((function(e){e.id===r?e.active=!0:e.active=!1})),e.setTaskCategories(Object(T.a)(a))},children:[Object(P.jsx)(S.a,{children:Object(P.jsx)(L.a,{children:null!=l?Object(P.jsx)(l,{style:{height:"1.2rem"}}):Object(P.jsx)(g.a,{style:{height:"1.2rem"}})})}),Object(P.jsxs)(S.a,{className:t.taskCategoryTitle,children:[Object(P.jsx)(A.a,{primary:s}),Object(P.jsxs)(x.a,{component:"span",style:{fontSize:"0.7rem",color:"#7c7d7d"},children:[d.length," tasks"]})]})]})})},J=function(e){var t=w(),a=Object(i.useState)(!1),n=Object(d.a)(a,2),s=n[0],o=n[1],c=Object(i.useState)(""),r=Object(d.a)(c,2),l=r[0],j=r[1],b=function(){o(!1)};return Object(P.jsxs)("div",{children:[Object(P.jsx)(U,{handleOnClick:function(){o(!0)}}),Object(P.jsxs)(W.a,{open:s,onClose:b,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:[Object(P.jsx)(R.a,{id:"form-dialog-title",children:"New List"}),Object(P.jsx)(z.a,{children:Object(P.jsx)(B.a,{autoFocus:!0,margin:"dense",id:"name",type:"text",fullWidth:!0,multiline:!0,rows:10,InputProps:{className:t.addCategoryInput},onChange:function(e){j(e.target.value)}})}),Object(P.jsx)(M.a,{className:t.addCategoryDialogAction,children:Object(P.jsx)(U,{handleOnClick:function(){var t=e.addTaskCategory,a=new m(E.Guid.create().toString(),l);t((function(e){return[].concat(Object(T.a)(e),[a])})),b()}})})]})]})},U=function(e){var t=w();return Object(P.jsx)(F.a,{onClick:e.handleOnClick,color:"primary",fullWidth:!0,className:t.addCategoryListItem,children:"+"})},G=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date;return e?t[e.getMonth()]:t[a.getMonth()]},K=function(e){var t=e.taskCategories,a=e.setTaskCategories,n=y();return Object(P.jsxs)(f.a,{className:n.drawer,variant:"permanent",classes:{paper:n.drawerPaper},anchor:"left",children:[Object(P.jsx)("div",{className:n.toolbar}),Object(P.jsx)(V,{}),Object(P.jsx)(Y,{taskCategories:t,setTaskCategories:a})]})},V=function(){var e=function(e){var t=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],a=new Date;return e?t[e.getDay()]:t[a.getDay()]}(),t=G(),a=y();return Object(P.jsxs)("div",{className:a.header,children:[Object(P.jsx)(x.a,{component:"span",style:{fontSize:"0.7rem",color:"#7c7d7d"},children:e}),Object(P.jsxs)(x.a,{component:"h3",variant:"h6",style:{fontWeight:"bold"},children:[(new Date).getDate().toString()," ",t]})]})},q=a(238),Q=a(228),X=a(233),Z=a(234),$=Object(p.a)((function(e){return Object(C.a)({toolbar:{minHeight:"3rem"},taskListContainer:{padding:0,marginLeft:e.spacing(4),marginRight:e.spacing(4),width:"100%"},header:{height:e.spacing(8)},taskListTitleHeader:{display:"inline-flex"},taskListTitle:{"& h1":{fontWeight:"bold"},"& span":{fontSize:"0.7rem",color:"#7c7d7d"},marginLeft:e.spacing(1.2)},taskListIcon:{marginTop:e.spacing(.5),color:"#0000008a"},addNewTaskButton:{padding:e.spacing(.25),color:"#0000008a",display:"flex",justifyContent:"flex-start",alignItems:"flex-end",position:"absolute",bottom:"10px"},addTask:{width:e.spacing(15),marginLeft:e.spacing(1.2),borderRadius:"4%"},addTaskListItem:{backgroundColor:"#7bbb5e",color:"white",textAlign:"center","& *":{fontSize:"1.3rem"}},addTaskDialogAction:{padding:0,"& button":{borderRadius:"0"}},addTaskInput:{"&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},taskCheckboxActive:{textDecoration:"line-through"},taskCheckbox:{},taskDate:{fontSize:"0.8rem",marginLeft:"2rem",color:"#7c7d7d",display:"block",marginTop:"-10px"},overdueMessage:{fontSize:"0.8rem",color:"red"},taskItem:{flexDirection:"row",width:"100%",justifyContent:"space-between"},taskForm:{width:"100%"},actionButton:{color:"#0000008a",minWidth:"fit-content"}})})),_=a(136),ee=a.n(_),te=a(137),ae=a.n(te),ne=a(231),se=a(18),ie=a(235),oe=a(116),ce=function(e){var t=$(),a=e.open,n=e.handleClose,s=e.handleOnClick,i=e.title,o=e.buttonText,c=e.handleOnChange,r=e.value;return Object(P.jsxs)(W.a,{open:a,onClose:n,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:[Object(P.jsx)(R.a,{id:"form-dialog-title",children:i}),Object(P.jsx)(z.a,{children:Object(P.jsx)(B.a,{autoFocus:!0,margin:"dense",id:"name",type:"text",fullWidth:!0,multiline:!0,rows:10,InputProps:{className:t.addTaskInput},onChange:function(e){c(e.target.value)},defaultValue:r})}),Object(P.jsx)(M.a,{className:t.addTaskDialogAction,children:Object(P.jsx)(F.a,{onClick:s,color:"primary",fullWidth:!0,className:t.addTaskListItem,children:o})})]})},re=function(e){var t=$(),a=e.open,n=e.handleClose,s=e.handleOnClick,i=e.buttonText,o=e.handleOnChange,c=e.value;return Object(P.jsxs)(W.a,{open:a,onClose:n,"aria-labelledby":"form-dialog-title",fullWidth:!0,children:[Object(P.jsx)(z.a,{children:Object(P.jsx)(se.a,{utils:oe.a,children:Object(P.jsx)(ne.a,{container:!0,justify:"space-around",children:Object(P.jsx)(ie.a,{disableToolbar:!0,variant:"static",format:"MM/dd/yyyy",margin:"normal",id:"date-picker",label:"Date Picker",value:c,onChange:o,KeyboardButtonProps:{"aria-label":"change date"}})})})}),Object(P.jsx)(M.a,{className:t.addTaskDialogAction,children:Object(P.jsx)(F.a,{onClick:s,color:"primary",fullWidth:!0,className:t.addTaskListItem,children:i})})]})},de=a(138),le=a.n(de),je=a(135),be=a.n(je),ue=function(e){var t=e.taskCategories;console.log("in TaskList"),console.log(t);var a=t.filter((function(e){return e.active}))[0],n=a.tasks,s=a.components,i=a.icon,o=a.name,c=s[i],r=function(n){console.log("in handleTaskListUpdate"),a.tasks=n,console.log(n),t.forEach((function(n){n.id===a.id&&(n=a,e.setTaskCategories(Object(T.a)(t)))}))},d=$();return Object(P.jsxs)("div",{className:d.taskListContainer,children:[Object(P.jsx)("div",{className:d.toolbar}),Object(P.jsx)(S.a,{className:d.header,children:Object(P.jsxs)(S.a,{className:d.taskListTitleHeader,children:[Object(P.jsx)(S.a,{className:d.taskListIcon,children:null!=c?Object(P.jsx)(c,{}):Object(P.jsx)(g.a,{})}),Object(P.jsxs)(S.a,{className:d.taskListTitle,children:[Object(P.jsx)(x.a,{component:"h1",variant:"h6",children:o}),Object(P.jsxs)(x.a,{component:"span",variant:"subtitle1",style:{display:"block"},children:[n.length," tasks"]})]})]})}),Object(P.jsx)(S.a,{children:Object(P.jsx)(Q.a,{className:d.taskForm,children:n.map((function(e){return Object(P.jsx)(X.a,{className:d.taskItem,children:Object(P.jsx)(he,{task:e,tasks:n,setTasks:r})},e.id)}))})}),Object(P.jsx)(S.a,{children:Object(P.jsx)(me,{addTask:r,tasks:n})})]})},he=function(e){var t=e.task,a=e.setTasks,n=e.tasks;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(ge,{task:t,tasks:n,updateTask:function(e){n.forEach((function(t){t.id===e.id&&(console.log(e),t=e,a(n))}))},setTasks:a})})},ge=function(e){var t=Object(i.useState)(e.task.status===n.done),a=Object(d.a)(t,2),s=a[0],o=a[1],c=e.task,r=$(),l=c.date?"".concat(c.date.getDate()," ").concat(G(c.date)):"",j=c.date<new Date,b=s?r.taskCheckboxActive:r.taskCheckbox;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(S.a,{children:[Object(P.jsx)(Z.a,{control:Object(P.jsx)(q.a,{onChange:function(t){t.target.checked?(c.status=n.done,o(!0)):(c.status=n.new,o(!1)),e.updateTask(c)},checked:s,name:"done"}),className:b,label:c.name}),Object(P.jsxs)(x.a,{component:"span",variant:"subtitle1",className:r.taskDate,children:[j&&Object(P.jsx)("b",{className:r.overdueMessage,children:"Overdue: "})," ",l]})]}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(xe,{task:c,updateTask:e.updateTask}),Object(P.jsx)(Ce,{task:c,tasks:e.tasks,setTasks:e.setTasks}),Object(P.jsx)(ke,{task:c,updateTask:e.updateTask})]})]})},ke=function(e){var t=e.task,a=e.updateTask,n=Object(i.useState)(!1),s=Object(d.a)(n,2),o=s[0],c=s[1],r=Object(i.useState)(new Date),l=Object(d.a)(r,2),j=l[0],b=l[1],u=function(){c(!1)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Oe,{handleOnClick:function(){c(!0)}}),Object(P.jsx)(re,{open:o,handleClose:u,handleOnChange:function(e){console.log("in handleOnChange"),b(e)},handleOnClick:function(e){t.date=j,a(t),u(),console.log("in handleClick, date is "+t.date.toString())},buttonText:"Save",value:j})]})},Oe=function(e){var t=$();return Object(P.jsx)(F.a,{onClick:e.handleOnClick,startIcon:Object(P.jsx)(be.a,{}),className:t.actionButton})},me=function(e){var t=Object(i.useState)(!1),a=Object(d.a)(t,2),s=a[0],o=a[1],c=Object(i.useState)(""),r=Object(d.a)(c,2),l=r[0],b=r[1],u=function(){o(!1)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(fe,{handleOnClick:function(){o(!0)}}),Object(P.jsx)(ce,{open:s,handleClose:u,handleOnChange:b,handleOnClick:function(){var t=e.addTask,a=e.tasks,s=new j(E.Guid.create().toString(),l,n.new);a.push(s),t(a),u()},buttonText:"+",title:"New task"})]})},fe=function(e){var t=$();return Object(P.jsx)(F.a,{onClick:e.handleOnClick,startIcon:Object(P.jsx)(ee.a,{}),className:t.addNewTaskButton,children:"Add New Task"})},xe=function(e){var t=e.task,a=e.updateTask,n=Object(i.useState)(!1),s=Object(d.a)(n,2),o=s[0],c=s[1],r=Object(i.useState)(t.name),l=Object(d.a)(r,2),j=l[0],b=l[1],u=function(){c(!1)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(pe,{handleOnClick:function(){c(!0)}}),Object(P.jsx)(ce,{open:o,handleClose:u,handleOnChange:function(e){console.log("in handleOnChange"),b(e)},handleOnClick:function(e){t.name=j,a(t),u()},buttonText:"Save",title:"Edit task",value:j})]})},pe=function(e){var t=$();return Object(P.jsx)(F.a,{onClick:e.handleOnClick,startIcon:Object(P.jsx)(ae.a,{}),className:t.actionButton})},Ce=function(e){var t=$(),a=e.task,n=e.tasks,s=e.setTasks;return Object(P.jsx)(F.a,{onClick:function(){var e=n.filter((function(e){return e.id!==a.id}));s(e)},startIcon:Object(P.jsx)(le.a,{}),className:t.actionButton})},ve=function(){var e=[new m("1","Today","red",[new j("1","Test task",n.new)],!0,"BookmarkBorderIcon"),new m("2","Inbox","red",[],!1,"InboxIcon")],t=Object(i.useState)(e),a=Object(d.a)(t,2),s=a[0],o=a[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(K,{taskCategories:s,setTaskCategories:o}),Object(P.jsx)(ue,{setTaskCategories:o,taskCategories:s})]})};var ye=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(ve,{})})},Te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))};r.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(ye,{})}),document.getElementById("root")),Te()}},[[189,1,2]]]);
//# sourceMappingURL=main.d6ebc0d5.chunk.js.map