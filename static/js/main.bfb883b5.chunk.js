(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={feedback_title:"Statistics_feedback_title__1OnGm",feedback_notification:"Statistics_feedback_notification__2V5Mh",feedback_buttons:"Statistics_feedback_buttons__6sv1z",feedback_ratio_list:"Statistics_feedback_ratio_list__wj6FY"}},,function(e,t,a){e.exports={feedback_buttons:"FeedbackOptions_feedback_buttons__2emd-",custom_btn:"FeedbackOptions_custom_btn__IddO7",feedback_button_item:"FeedbackOptions_feedback_button_item__1P1zX"}},,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(2),i=a.n(c),n=a(6),s=a.n(n),o=(a(12),a(13),a(4)),b=a(1),r=a.n(b),d=a(16),l=a(0);function j(e){var t=e.good,a=e.neutral,c=e.bad,i=e.total,n=e.positivePercentage;return Object(l.jsx)("div",{className:r.a.feedback_ratio_container,children:Object(l.jsxs)("ul",{className:r.a.feedback_ratio_list,children:[Object(l.jsx)("li",{className:r.a.feedback_ratio_item,children:Object(l.jsxs)("p",{className:r.a.feedback_ratio_title,children:["Good: ",t]})},Object(d.a)()),Object(l.jsx)("li",{className:r.a.feedback_ratio_item,children:Object(l.jsxs)("p",{className:r.a.feedback_ratio_title,children:["Neutral: ",a]})},Object(d.a)()),Object(l.jsx)("li",{className:r.a.feedback_ratio_item,children:Object(l.jsxs)("p",{className:r.a.feedback_ratio_title,children:["Bad: ",c]})},Object(d.a)()),Object(l.jsx)("li",{className:r.a.feedback_ratio_item,children:Object(l.jsxs)("p",{className:r.a.feedback_ratio_title,children:["Total: ",i]})},Object(d.a)()),Object(l.jsx)("li",{className:r.a.feedback_ratio_item,children:Object(l.jsxs)("p",{className:r.a.feedback_ratio_title,children:["Positive feedback: ",n,"%"]})},Object(d.a)())]})})}var _=a(3),u=a.n(_);function f(e){var t=e.options,a=e.onLeaveFeedback;return Object(l.jsx)("div",{className:u.a.feedback_container,children:Object(l.jsx)("ul",{className:u.a.feedback_buttons,children:t.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",className:[u.a.feedback_button_item,u.a.custom_btn].join(" "),onClick:a,children:Object(l.jsxs)("span",{id:e,children:[e," vote"]})})},Object(d.a)())}))})})}function O(e){var t=e.title,a=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),a]})}function k(e){var t=e.message;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:t})})}function h(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(0),s=Object(o.a)(n,2),b=s[0],r=s[1],d=Object(c.useState)(0),_=Object(o.a)(d,2),u=_[0],h=_[1],m=function(){return a+b+u};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{title:"Please, leave your feedback",children:Object(l.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.id){case"good":console.log("in good case"),i((function(e){return e+1}));break;case"neutral":console.log("in neutral case"),r((function(e){return e+1}));break;case"bad":console.log("in bad case"),h((function(e){return e+1}));break;default:return}}})}),Object(l.jsx)(O,{title:"Statistics",children:m()?Object(l.jsx)(j,{good:a,neutral:b,bad:u,total:m(),positivePercentage:Math.round(100*a/m())}):Object(l.jsx)(k,{message:"No feedback given"})})]})}var m=function(){return Object(l.jsx)(h,{})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.bfb883b5.chunk.js.map