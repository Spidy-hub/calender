/*!
 * dyCalendar is a JavaScript library for creating Calendar.
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCalendarJS
 *
 * MIT license
 * Copyright (c) 2016 Yusuf Shakeel
 *
 * Date: 2014-08-17 sunday
 * Build: 2017-11-26 12:56:22 
 */
!function(a,t){"use strict";function e(a,e){var d,n,r,o,l,y;for(d=t("<table>"),n=t("<tr>"),l=0;l<=6;l+=1)(r=t("<td>")).html("SMTWTFS"[l]),n.append(r);for(d.append(n),n=t("<tr>"),l=0;l<=6&&l!==a.firstDayIndex;l+=1)r=t("<td>"),n.append(r);for(y=1;l<=6;)(r=t("<td>")).html(y),a.today.date===y&&a.today.monthIndex===a.monthIndex&&!0===e.highlighttoday&&r.addClass("dycalendar-today-date"),e.date===y&&e.month===a.monthIndex&&!0===e.highlighttargetdate&&r.addClass("dycalendar-target-date"),n.append(r),y+=1,l+=1;for(d.append(n),o=3;o<=7;o+=1){for(n=t("<tr>"),l=0;l<=6;l+=1){if(y>a.totaldays)return d.append(n),d;(r=t("<td>")).html(y),a.today.date===y&&a.today.monthIndex===a.monthIndex&&!0===e.highlighttoday&&r.addClass("dycalendar-today-date"),e.date===y&&e.month===a.monthIndex&&!0===e.highlighttargetdate&&r.addClass("dycalendar-target-date"),y+=1,n.append(r)}d.append(n)}return d}function d(a,d){var n,r,o,l;return n=e(a,d),(o=t("<div>")).addClass("dycalendar-month-container"),(r=t("<div>")).addClass("dycalendar-header"),r.attr("data-option",JSON.stringify(d)),"show"===d.prevnextbutton&&((l=t("<span>")).addClass("dycalendar-prev-next-btn prev-btn"),l.attr("data-date",d.date),l.attr("data-month",d.month),l.attr("data-year",d.year),l.attr("data-btn","prev"),l.html("&lt;"),r.append(l)),(l=t("<span>")).addClass("dycalendar-span-month-year"),"mmm"===d.monthformat?l.html(a.monthName+" "+a.year):"full"===d.monthformat&&l.html(a.monthNameFull+" "+a.year),r.append(l),"show"===d.prevnextbutton&&((l=t("<span>")).addClass("dycalendar-prev-next-btn next-btn"),l.attr("data-date",d.date),l.attr("data-month",d.month),l.attr("data-year",d.year),l.attr("data-btn","next"),l.html("&gt;"),r.append(l)),o.append(r),(r=t("<div>")).addClass("dycalendar-body"),r.append(n),o.append(r),o}function n(a,e){var d,n,r;return(n=t("<div>")).addClass("dycalendar-day-container"),(d=t("<div>")).addClass("dycalendar-header"),(r=t("<span>")).addClass("dycalendar-span-day"),"ddd"===e.dayformat?r.html(i.ddd[a.targetedDayIndex]):"full"===e.dayformat&&r.html(i.full[a.targetedDayIndex]),d.append(r),n.append(d),(d=t("<div>")).addClass("dycalendar-body"),(r=t("<span>")).addClass("dycalendar-span-date"),r.html(a.date),d.append(r),n.append(d),(d=t("<div>")).addClass("dycalendar-footer"),(r=t("<span>")).addClass("dycalendar-span-month-year"),"mmm"===e.monthformat?r.html(a.monthName+" "+a.year):"full"===e.monthformat&&r.html(a.monthNameFull+" "+a.year),d.append(r),n.append(d),n}function r(a,t){var e;for(e in t)!1===a.hasOwnProperty(e)&&(a[e]=t[e]);return a}function o(t,e,d){var n,r,o=new Date,l={};return t<h||t>m?(a.console.error("Invalid Year"),!1):e>11||e<0?(a.console.error("Invalid Month"),!1):d>31||d<1?(a.console.error("Invalid Date"),!1):(l.year=t,l.month=e,l.date=d,l.today={},n=o.toString().split(" "),r=i.ddd.indexOf(n[0]),l.today.dayIndex=r,l.today.dayName=n[0],l.today.dayFullName=i.full[r],r=s.mmm.indexOf(n[1]),l.today.monthIndex=r,l.today.monthName=n[1],l.today.monthNameFull=s.full[r],l.today.date=o.getDate(),l.today.year=n[3],o.setDate(1),o.setMonth(e),o.setFullYear(t),n=o.toString().split(" "),r=i.ddd.indexOf(n[0]),l.firstDayIndex=r,l.firstDayName=n[0],l.firstDayFullName=i.full[r],r=s.mmm.indexOf(n[1]),l.monthIndex=r,l.monthName=n[1],l.monthNameFull=s.full[r],o.setFullYear(t),o.setMonth(e+1),o.setDate(0),l.totaldays=o.getDate(),o.setFullYear(t),o.setMonth(e),o.setDate(d),n=o.toString().split(" "),r=i.ddd.indexOf(n[0]),l.targetedDayIndex=r,l.targetedDayName=n[0],l.targetedDayFullName=i.full[r],l)}function l(e){var r;switch(e.type){case"day":r=n(o(e.year,e.month,e.date),e);break;case"month":r=d(o(e.year,e.month,e.date),e);break;default:return a.console.error("Invalid type"),!1}t(e.target).html(r)}var y={},h=(a.document,1900),m=9999,s={full:["January","February","March","April","May","June","July","August","September","October","November","December"],mmm:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},i={full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d:["S","M","T","W","T","F","S"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};y.draw=function(t){if(void 0===t)return a.console.error("Option missing"),!1;var e=new Date;l(t=r(t,{type:"day",month:e.getMonth(),year:e.getFullYear(),date:e.getDate(),monthformat:"full",dayformat:"full",highlighttoday:!1,highlighttargetdate:!1,prevnextbutton:"hide"}))},t("body").on("click",".dycalendar-prev-next-btn",function(a){a.preventDefault();var e=t(this).data("date"),d=t(this).data("month"),n=t(this).data("year"),r=t(this).data("btn"),o=t(this).parent().data("option");"prev"===r?(d-=1)<0&&(n-=1,d=11):"next"===r&&(d+=1)>11&&(n+=1,d=0),o.date=e,o.month=d,o.year=n,l(o)}),t("body").on("click",".dycalendar-span-month-year",function(a){a.preventDefault();var e=t(this).parent().data("option"),d=new Date;e.date=d.getDate(),e.month=d.getMonth(),e.year=d.getFullYear(),l(e)}),a.dycalendar=y}("undefined"!=typeof window?window:this,"undefined"!=typeof jQuery?jQuery:void 0);