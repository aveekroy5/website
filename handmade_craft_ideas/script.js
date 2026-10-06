document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.getElementById('menu'), nav=document.getElementById('nav');
 if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
 const header=document.getElementById('header');
 window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>30),{passive:true});
 document.querySelectorAll('.share-btn').forEach(btn=>btn.addEventListener('click',async()=>{
   const product=btn.dataset.product||'Handmade jewellery', price=btn.dataset.price||'';
   const data={title:product,text:`${product} ${price} — DazzleDrip`,url:location.href};
   try{if(navigator.share) await navigator.share(data);else await navigator.clipboard.writeText(`${data.title} ${price} — ${location.href}`);}
   catch(e){}
 }));
 document.getElementById('year').textContent=new Date().getFullYear();
});
