const open=document.getElementById('open');
const cover=document.getElementById('cover');
const main=document.getElementById('main');
const txt=document.getElementById('letter');
const msg=`Dear Pichku 🎀,

Happy Girlfriend's Day ❤️

Every smile of yours makes my day brighter.
Thank you for being my happiness, my peace and my favourite person.

I promise to stand beside you, support you and love you.

Forever yours,
Kusum ❤️`;
open.onclick=()=>{cover.style.display='none';main.classList.remove('hide');let i=0;(function t(){if(i<msg.length){txt.textContent+=msg[i++];setTimeout(t,30);}})();}
const start=new Date('2026-03-15T00:00:00');
setInterval(()=>{let d=new Date()-start;let days=Math.floor(d/86400000);document.getElementById('counter').textContent='💕 Together Since 15 March 2026 • '+days+' days';},1000);
document.getElementById('surprise').onclick=()=>{document.getElementById('msg').innerHTML='💖 You are the most beautiful part of my life, Pichku. Forever and always. 💖';for(let i=0;i<30;i++){let h=document.createElement('div');h.className='heart';h.textContent='💖';h.style.left=Math.random()*100+'vw';h.style.animationDelay=(Math.random()*2)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),5000);}};