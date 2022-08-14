const dmy = new Date();

const locale = navigator.language;

const dateOptions: Intl.DateTimeFormatOptions = {
  day: "numeric", //2-digit
  month: "short", //numeric "2-digit", "narrow", "short" and "long"
  year: "numeric", //2-digit
 // era: "long",
 // weekday: "narrow", //"narrow", "short" and "long"
 // timeZoneName: "short",
 // hour: "numeric",
 // hour12: true,
 // minute: "numeric",
 // second: "numeric"
}

const UserDate = new Intl.DateTimeFormat(locale, dateOptions);
const RUDate = new Intl.DateTimeFormat('ru', dateOptions);
const USDate = new Intl.DateTimeFormat('en-US', dateOptions); 
const UKDate = new Intl.DateTimeFormat('en-UK', dateOptions);
const SDate = new Intl.DateTimeFormat('es-ES', dateOptions);
const IDate = new Intl.DateTimeFormat('hi-IN', dateOptions);
const SYDate  = new Intl.DateTimeFormat('ar-SY', dateOptions);
const CNDate = new Intl.DateTimeFormat('zh-CN', dateOptions);


//const num1 = 123049;
const num2 = 100800800;
//const num3 = 14566.66;

const toUSD = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD"
})

document.getElementById("app")!.innerHTML = `
<ul>
 <li>${UserDate.format(dmy)}
 <li>${RUDate.format(dmy)}
 <li>${USDate.format(dmy)}
 <li>${UKDate.format(dmy)}
 <li>${SDate.format(dmy)}
 <li>${IDate.format(dmy)}
 <li>${SYDate.format(dmy)}
 <li>${CNDate.format(dmy)}

 <h1>NumberFormat</h1>
 <div>
   ${num2.toLocaleString('en', {
     style: "currency",
     currency: "USD",
     //currencyDisplay: "name",
     //useGrouping: false,
     //minimumFractionDigits: 0,

   })}
   <br />
   <br />
   ${toUSD.format(num2)}
 </div>

 `;
 
