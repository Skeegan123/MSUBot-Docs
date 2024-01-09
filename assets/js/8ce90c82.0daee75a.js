"use strict";(self.webpackChunkmsu_bot_docs=self.webpackChunkmsu_bot_docs||[]).push([[703],{7291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(5893),i=n(1151);const r={sidebar_position:3},d="Due Date Reminders",o={id:"usage/Features/due-date-reminders",title:"Due Date Reminders",description:"Overview",source:"@site/docs/usage/Features/due-date-reminders.md",sourceDirName:"usage/Features",slug:"/usage/Features/due-date-reminders",permalink:"/MSUBot-Docs/docs/usage/Features/due-date-reminders",draft:!1,unlisted:!1,editUrl:"https://github.com/Skeegan123/MSUBot-Docs/docs/usage/Features/due-date-reminders.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"AI Teaching Assistant",permalink:"/MSUBot-Docs/docs/usage/Features/ai-ta"},next:{title:"Troubleshooting",permalink:"/MSUBot-Docs/docs/troubleshooting"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"How to Use",id:"how-to-use",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"due-date-reminders",children:"Due Date Reminders"}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"This section provides a detailed look at the due date reminders feature. This feature is meant to give students a way to get reminders about upcoming due dates for the class."}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.p,{children:"This section will explain how to setup the feature in your server."}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["If you did not use the template when creating your server, you will need to manually set the due date channel. You do this by going to the channel you want to use, and using the ",(0,s.jsx)(t.code,{children:"/set_assignment_channel"})," command."]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Bot Initialization"}),": Follow the steps in the ",(0,s.jsx)(t.a,{href:"/docs/usage/setup",children:"Setup"})," section to initialize the bot in your server."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Enable the Feature"}),": Use the ",(0,s.jsx)(t.code,{children:"/enable_reminders"})," command to enable the feature in your server."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Upload the Schedule"}),": Use the ",(0,s.jsx)(t.code,{children:"/upload_schedule"})," command to upload the schedule for the class. The schedule must be in a csv or xlsx file with the following format:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Due Date"}),(0,s.jsx)(t.th,{children:"Assignment"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1/1/2021"}),(0,s.jsx)(t.td,{children:"Assignment 1"}),(0,s.jsx)(t.td,{children:"Homework"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1/2/2021"}),(0,s.jsx)(t.td,{children:"Assignment 2"}),(0,s.jsx)(t.td,{children:"Homework"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1/3/2021"}),(0,s.jsx)(t.td,{children:"Quiz 1"}),(0,s.jsx)(t.td,{children:"Quiz/Test"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1/4/2021"}),(0,s.jsx)(t.td,{children:"Reading 1"}),(0,s.jsx)(t.td,{children:"Reading"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Note: The type can be anything. The bot will group assignments by type when sending reminders."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Disable the Feature"}),": Use the ",(0,s.jsx)(t.code,{children:"/disable_reminders"})," command to disable the feature in your server."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsxs)(t.p,{children:["The bot will parse the given schedule, and will send reminders to the due date channel. These reminders consist of two different types, daily reminders, and weekly reminders. Daily reminders will be sent every day at 8:00 AM. Weekly reminders will be sent every Monday at 8:00 AM. The reminders will contain all of the assignments due that day/week. You can also add and remove assignments from the schedule using the ",(0,s.jsx)(t.code,{children:"/add_assignment"})," and ",(0,s.jsx)(t.code,{children:"/remove_assignment"})," commands."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var s=n(7294);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);