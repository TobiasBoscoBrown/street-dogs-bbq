const MENU = {"Street Dogs": [{"name": "Street Dog", "desc": "Our namesake dog, dressed with the works and street sauce", "price": "$8.00"}, {"name": "House Dog", "desc": "The classic done right, your toppings your way", "price": "$6.00"}, {"name": "Classic Hot Dog", "desc": "A simple all beef dog on a soft bun", "price": "$5.00"}, {"name": "Jalapeno Cheddar Dog", "desc": "Cheddar and fresh jalapenos for a little heat", "price": "$8.50"}, {"name": "Double Dog", "desc": "Two dogs, one bun, twice the toppings", "price": "$8.75"}, {"name": "Chili Dog", "desc": "Smothered in our homemade chili and cheese", "price": "$11.00"}, {"name": "Walking Chili Dog", "desc": "Chili dog served right in the chip bag, grab and go", "price": "$5.00"}, {"name": "Chicago Dog", "desc": "Relish, mustard, onion, green pepper, pickle, tomato and sport peppers", "price": "$8.50"}, {"name": "Irish Dog", "desc": "Topped with sauerkraut and our signature finish", "price": "$8.50"}, {"name": "Street Chorizo", "desc": "Spicy chorizo dressed street style", "price": "$8.00"}, {"name": "Chorizo", "desc": "Grilled chorizo on a bun", "price": "$6.00"}, {"name": "Muglizzy", "desc": "A loaded fan favorite, ask the crew", "price": "$8.00"}], "Smashed Burgers": [{"name": "Bacon Cheeseburger", "desc": "Cheese and crisp bacon on a juicy patty", "price": "$7.75"}, {"name": "Bacon Ranch Burger", "desc": "Bacon, ranch and all the fixings, a guest favorite", "price": "$9.00"}, {"name": "Chili Burger", "desc": "Smothered in homemade chili and cheese", "price": "$11.50"}, {"name": "Street Burger", "desc": "Our signature burger dressed street style", "price": "$8.50"}, {"name": "Cheese Burger", "desc": "The classic cheeseburger done right", "price": "$6.75"}], "Southern BBQ & Smoked": [{"name": "Tri Tip", "desc": "Smoked tri tip, a BBQ Friday and special board favorite", "price": ""}, {"name": "Pork Ribs", "desc": "Pork ribs straight off the BBQ, ask for them fresh", "price": ""}, {"name": "Pulled Pork", "desc": "Slow cooked pulled pork, piled on a plate or in nachos", "price": ""}, {"name": "BBQ Nachos", "desc": "Loaded nachos with BBQ pork, cheese, onions and jalapenos", "price": "$10.99"}, {"name": "Stuffed Meatloaf", "desc": "A hearty rotating dinner special", "price": ""}, {"name": "Mac and Cheese Bowl", "desc": "Creamy mac, great on its own or topped with BBQ", "price": ""}, {"name": "2 BBQ Sides", "desc": "Pick two of our homemade BBQ sides", "price": "$5.00"}], "Baskets & Fryer Foods": [{"name": "Fish and Chips", "desc": "Beer battered fish with a basket of fries", "price": "$14.00"}, {"name": "Finger Steak Basket with Onion Rings", "desc": "Idaho finger steaks with hand cut rings", "price": "$13.50"}, {"name": "Finger Steak Basket", "desc": "A full basket of golden Idaho finger steaks", "price": "$12.50"}, {"name": "Basket of Onion Rings", "desc": "Big, hand cut and perfectly fried", "price": "$7.50"}, {"name": "Basket of Fries", "desc": "A generous basket of crispy fries", "price": "$6.00"}, {"name": "Combo Fries", "desc": "A smaller side of fries", "price": "$3.50"}, {"name": "Combo Rings", "desc": "A smaller side of onion rings", "price": "$5.00"}, {"name": "Fried Mushrooms", "desc": "Crispy battered mushrooms", "price": "$6.00"}, {"name": "Jalapeno Cheese Sticks", "desc": "Gooey jalapeno and cheese, fried golden", "price": "$8.00"}], "Loaded Fries & Nachos": [{"name": "Loaded Street Fries", "desc": "Sliced hot dog, bacon, sauteed onions, green peppers and cream cheese with street sauce", "price": "$11.00"}, {"name": "Chili Cheese Fries", "desc": "Fries topped with homemade chili, cheese and onion", "price": "$12.00"}, {"name": "Half Order Nachos", "desc": "A hearty half order, plenty for one or two", "price": "$10.99"}, {"name": "Full Order Nachos", "desc": "The full pile, made to share", "price": "$14.99"}], "Sides, Kids & Drinks": [{"name": "Side Salad", "desc": "A fresh, simple green side", "price": "$5.00"}, {"name": "Kids Cheeseburger", "desc": "A kid sized cheeseburger", "price": "$6.00"}, {"name": "Kids Dog", "desc": "A kid sized hot dog", "price": "$6.00"}, {"name": "Kids Chicken Nuggets", "desc": "Crispy nuggets for the little ones", "price": "$6.00"}, {"name": "Finger Steaks with Fries", "desc": "Kid sized finger steaks and fries, includes a bottle of water", "price": "$5.00"}, {"name": "Extra Bacon", "desc": "Add crisp bacon to anything", "price": "$1.25"}, {"name": "Sauteed Onions", "desc": "A topping of sauteed onions", "price": "$0.50"}, {"name": "Sauteed Peppers", "desc": "A topping of sauteed green peppers", "price": "$0.50"}, {"name": "Sauerkraut", "desc": "A topping of tangy sauerkraut", "price": "$0.50"}, {"name": "Shredded Cheese", "desc": "Add shredded cheese", "price": "$0.50"}, {"name": "Soda", "desc": "An ice cold fountain soda", "price": "$2.00"}, {"name": "Bottle of Water", "desc": "A cold bottle of water", "price": "$1.00"}]};

const WEB3FORMS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY"; // Get a free key for tobiasboscob@gmail.com at https://web3forms.com (no password), then paste it here.
const PICKUP_ADDR = "2 W Owyhee Ave, Suite B, Homedale, ID 83628";

const cart = {};
function money(n){ return "$" + n.toFixed(2); }
function priceNum(p){ const m = String(p||"").match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : 0; }
function isMP(p){ return !String(p||"").trim(); }
function slug(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""); }
function el(html){ const t=document.createElement("template"); t.innerHTML=html.trim(); return t.content.firstElementChild; }

function saveCart(){ try{ localStorage.setItem("sd_cart", JSON.stringify(cart)); }catch(e){} }
function loadCart(){ try{ const d=JSON.parse(localStorage.getItem("sd_cart")||"{}"); Object.assign(cart,d); }catch(e){} }

function findItem(name){
  for(const cat in MENU){ for(const it of MENU[cat]){ if(it.name===name) return it; } }
  return null;
}
function addItem(name){
  const it=findItem(name); if(!it) return;
  if(!cart[name]) cart[name]={name:name, price:priceNum(it.price), mp:isMP(it.price), qty:0};
  cart[name].qty++; saveCart(); renderCart();
}
function setQty(name,q){
  if(!cart[name]) return;
  cart[name].qty=q;
  if(q<=0) delete cart[name];
  saveCart(); renderCart();
}
function items(){ return Object.values(cart); }
function count(){ return items().reduce((a,b)=>a+b.qty,0); }
function subtotal(){ return items().reduce((a,b)=>a+(b.mp?0:b.price*b.qty),0); }
function anyMP(){ return items().some(i=>i.mp); }

function renderCatNav(){
  const nav=document.getElementById("cat-nav"); nav.innerHTML="";
  Object.keys(MENU).forEach(cat=>{
    const a=el('<a href="#cat-'+slug(cat)+'" class="shrink-0 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-600 text-ink/70 hover:text-red hover:border-red transition-colors">'+cat+'</a>');
    nav.appendChild(a);
  });
}
function renderMenu(){
  const root=document.getElementById("menu-root"); root.innerHTML="";
  Object.keys(MENU).forEach(cat=>{
    const sec=el('<section id="cat-'+slug(cat)+'" class="pt-8 scroll-mt-32"></section>');
    sec.appendChild(el('<h2 class="font-display font-700 text-[24px] sm:text-[28px] text-ink mb-4">'+cat+'</h2>'));
    const grid=el('<div class="grid sm:grid-cols-2 gap-3"></div>');
    MENU[cat].forEach(it=>{
      const price = isMP(it.price) ? '<span class="text-[13px] font-600 text-muted">Market price</span>' : '<span class="font-display font-700 text-ink">'+it.price+'</span>';
      const card=el(
        '<div class="bg-white rounded-2xl border border-line p-4 flex flex-col">'
        +'<div class="flex items-baseline justify-between gap-3"><span class="font-display font-600 text-[16px] text-ink">'+it.name+'</span>'+price+'</div>'
        +(it.desc?'<p class="text-[13px] text-ink/55 mt-1 leading-snug flex-1">'+it.desc+'</p>':'<div class="flex-1"></div>')
        +'<button data-add="'+it.name.replace(/"/g,"&quot;")+'" class="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-red text-cream font-700 text-[13px] px-4 py-2 hover:bg-reddark transition-colors">Add <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button>'
        +'</div>');
      grid.appendChild(card);
    });
    sec.appendChild(grid); root.appendChild(sec);
  });
  root.addEventListener("click",e=>{ const b=e.target.closest("[data-add]"); if(b) addItem(b.getAttribute("data-add")); });
}

let checkoutOpen=false;
function renderCart(){
  const c=document.getElementById("cart");
  const its=items();
  let rows = its.length ? its.map(i=>(
    '<div class="flex items-center gap-2 py-2 border-b border-line last:border-0">'
    +'<div class="flex-1 min-w-0"><div class="text-[14px] font-600 text-ink truncate">'+i.name+'</div>'
    +'<div class="text-[12px] text-muted">'+(i.mp?"Market price":money(i.price))+'</div></div>'
    +'<div class="flex items-center gap-1.5">'
    +'<button data-dec="'+i.name.replace(/"/g,"&quot;")+'" class="w-7 h-7 grid place-items-center rounded-full border border-line text-ink hover:border-red">&minus;</button>'
    +'<span class="w-6 text-center font-700">'+i.qty+'</span>'
    +'<button data-inc="'+i.name.replace(/"/g,"&quot;")+'" class="w-7 h-7 grid place-items-center rounded-full border border-line text-ink hover:border-red">+</button>'
    +'</div>'
    +'<div class="w-16 text-right font-display font-700 text-ink">'+(i.mp?"—":money(i.price*i.qty))+'</div>'
    +'</div>'
  )).join("") : '<p class="text-sm text-muted py-6 text-center">Your order is empty. Add some dogs.</p>';

  const totalRow = its.length ? (
    '<div class="flex items-center justify-between pt-3 mt-1 border-t border-line"><span class="font-display font-700 text-ink">Subtotal</span><span class="font-display font-700 text-red text-lg">'+money(subtotal())+'</span></div>'
    +(anyMP()?'<p class="text-[11px] text-muted mt-1">Market-price items (BBQ specials) are confirmed at pickup and not included above.</p>':'')
    +'<p class="text-[11px] text-muted mt-1">Pay when you pick up. Taxes calculated in store.</p>'
  ) : "";

  let actions="";
  if(its.length && !checkoutOpen){
    actions='<button id="toCheckout" class="mt-4 w-full rounded-full bg-red text-cream font-700 py-3 hover:bg-reddark transition-colors">Checkout for pickup</button>';
  }
  let form="";
  if(its.length && checkoutOpen){
    form = (
      '<div class="mt-4 space-y-3">'
      +'<h4 class="font-display font-700 text-ink">Pickup details</h4>'
      +'<input id="f-name" type="text" placeholder="Your name" class="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] focus:outline-none focus:border-red">'
      +'<input id="f-phone" type="tel" placeholder="Phone number" class="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] focus:outline-none focus:border-red">'
      +'<div class="flex gap-2"><input id="f-date" type="date" class="flex-1 rounded-xl border border-line bg-white px-3 py-2.5 text-[15px] focus:outline-none focus:border-red">'
      +'<select id="f-time" class="flex-1 rounded-xl border border-line bg-white px-3 py-2.5 text-[15px] focus:outline-none focus:border-red"></select></div>'
      +'<textarea id="f-notes" rows="2" placeholder="Notes (allergies, no onions, etc.)" class="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] focus:outline-none focus:border-red"></textarea>'
      +'<p id="f-err" class="hidden text-[13px] text-red font-600"></p>'
      +'<button id="placeOrder" class="w-full rounded-full bg-red text-cream font-700 py-3 hover:bg-reddark transition-colors">Place pickup order</button>'
      +'<button id="backCart" class="w-full text-[13px] font-600 text-muted py-1 hover:text-ink">&larr; Back to order</button>'
      +'</div>'
    );
  }

  c.innerHTML =
    '<div class="bg-cream2/60 rounded-2xl border border-line p-5">'
    +'<div class="flex items-center justify-between mb-1"><h3 class="font-display font-700 text-lg text-ink">Your order</h3>'
    +'<span class="text-[12px] font-600 text-muted">'+count()+' item'+(count()===1?"":"s")+'</span></div>'
    +'<div class="mt-2">'+rows+'</div>'+totalRow+actions+form+'</div>';

  // wire
  c.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{ const n=b.getAttribute("data-inc"); setQty(n,(cart[n]?.qty||0)+1); });
  c.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{ const n=b.getAttribute("data-dec"); setQty(n,(cart[n]?.qty||0)-1); });
  const tc=document.getElementById("toCheckout"); if(tc) tc.onclick=()=>{ checkoutOpen=true; renderCart(); fillTimes(); };
  const bc=document.getElementById("backCart"); if(bc) bc.onclick=()=>{ checkoutOpen=false; renderCart(); };
  const po=document.getElementById("placeOrder"); if(po) po.onclick=placeOrder;
  if(checkoutOpen) fillTimes();
  renderBar();
}

function fillTimes(){
  const d=document.getElementById("f-date"); const t=document.getElementById("f-time");
  if(!d||!t) return;
  const today=new Date(); const iso=today.toISOString().slice(0,10);
  if(!d.value){ d.min=iso; d.value=iso; }
  const opts=['<option value="ASAP">ASAP (about 20 min)</option>'];
  for(let h=11; h<=19; h++){ for(const m of ["00","30"]){ if(h===19 && m==="30") continue; const hr=((h+11)%12)+1; const ap=h<12?"AM":"PM"; opts.push('<option>'+hr+":"+m+" "+ap+'</option>'); } }
  if(!t.dataset.filled){ t.innerHTML=opts.join(""); t.dataset.filled="1"; }
}

function orderNumber(){
  const d=new Date(); const p=n=>String(n).padStart(2,"0");
  return "SD-"+String(d.getFullYear()).slice(2)+p(d.getMonth()+1)+p(d.getDate())+"-"+Math.floor(1000+Math.random()*9000);
}

async function placeOrder(){
  const name=(document.getElementById("f-name").value||"").trim();
  const phone=(document.getElementById("f-phone").value||"").trim();
  const date=(document.getElementById("f-date").value||"").trim();
  const time=(document.getElementById("f-time").value||"").trim();
  const notes=(document.getElementById("f-notes").value||"").trim();
  const err=document.getElementById("f-err");
  function fail(m){ err.textContent=m; err.classList.remove("hidden"); }
  if(!name) return fail("Please add your name.");
  if(phone.replace(/\D/g,"").length<7) return fail("Please add a valid phone number.");
  if(!items().length) return fail("Your order is empty.");
  err.classList.add("hidden");

  const orderNo=orderNumber();
  const lines=items().map(i=>"  "+i.qty+" x "+i.name+(i.mp?"  (market price)":"  "+money(i.price*i.qty))).join("\n");
  const summary=
    "NEW PICKUP ORDER\nOrder #: "+orderNo+"\n\nCustomer: "+name+"\nPhone: "+phone+
    "\nPickup: "+(date||"")+" "+(time||"")+"\nNotes: "+(notes||"none")+
    "\n\nItems:\n"+lines+"\n\nSubtotal: "+money(subtotal())+(anyMP()?" (+ market-price items at pickup)":"")+
    "\nPickup at: "+PICKUP_ADDR+"\nPayment: Pay at pickup";

  const btn=document.getElementById("placeOrder"); btn.disabled=true; btn.textContent="Placing order...";
  const payload={
    access_key:WEB3FORMS_KEY,
    subject:"New Online Order "+orderNo+" — "+name,
    from_name:"Street Dogs BBQ Online Order",
    "Order Number":orderNo, "Customer":name, "Phone":phone,
    "Pickup Time":(date+" "+time).trim(), "Notes":notes||"none",
    "Subtotal":money(subtotal()), "Items":lines.replace(/\n/g,"; "),
    message:summary
  };
  let ok=true;
  try{
    if(!WEB3FORMS_KEY.startsWith("REPLACE")){
      const r=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(payload)});
      const j=await r.json(); ok=!!j.success;
    } else {
      console.warn("[Street Dogs] Web3Forms key not set — order not emailed. Add your access key in order.js.");
    }
  }catch(e){ ok=false; }
  confirmOrder(orderNo, name, (date+" "+time).trim());
  // clear
  for(const k in cart) delete cart[k]; saveCart(); checkoutOpen=false; renderCart();
  btn && (btn.disabled=false);
}

function confirmOrder(orderNo, name, pickup){
  const o=document.getElementById("confirm");
  o.innerHTML=
    '<div class="absolute inset-0 bg-ink/70"></div>'
    +'<div class="relative max-w-md mx-auto mt-[12vh] bg-cream rounded-3xl border border-line shadow-2xl p-7 text-center">'
    +'<div class="mx-auto w-14 h-14 grid place-items-center rounded-full bg-red text-cream mb-4"><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg></div>'
    +'<h3 class="font-display font-700 text-2xl text-ink">Order received!</h3>'
    +'<p class="text-ink/70 mt-2 text-[15px]">Thanks '+name+'. We&rsquo;ll have it ready for pickup'+(pickup?(" around <b>"+pickup+"</b>"):"")+' at '+PICKUP_ADDR+'.</p>'
    +'<div class="mt-4 rounded-2xl bg-white border border-line py-4"><div class="text-[12px] uppercase tracking-wide text-muted">Your order number</div><div class="font-display font-700 text-2xl text-red mt-1">'+orderNo+'</div></div>'
    +'<p class="text-[13px] text-muted mt-3">Pay when you pick up. Questions? Call (208) 807-9826.</p>'
    +'<button id="closeConf" class="mt-5 w-full rounded-full bg-red text-cream font-700 py-3 hover:bg-reddark transition-colors">Start a new order</button>'
    +'</div>';
  o.classList.remove("hidden");
  document.getElementById("closeConf").onclick=()=>{ o.classList.add("hidden"); window.scrollTo({top:0,behavior:"smooth"}); };
}

function renderBar(){
  const bar=document.getElementById("cartbar");
  if(!bar) return;
  if(count()===0){ bar.classList.add("hidden"); return; }
  bar.classList.remove("hidden");
  bar.innerHTML='<button class="w-full flex items-center justify-between gap-3 bg-red text-cream font-700 px-5 py-3.5 rounded-full shadow-lg"><span>'+count()+' item'+(count()===1?"":"s")+' · '+money(subtotal())+'</span><span class="inline-flex items-center gap-1">View order <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>';
  bar.firstChild.onclick=()=>document.getElementById("cart").scrollIntoView({behavior:"smooth"});
}

document.addEventListener("DOMContentLoaded",function(){
  loadCart(); renderCatNav(); renderMenu(); renderCart();
});
