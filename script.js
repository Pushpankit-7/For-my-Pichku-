const msg=`Dear Pichku 🎀,

Happy Girlfriend's Day ❤️

Every smile of yours makes my day brighter.
This is only the beginning of a surprise made especially for you.

Forever yours,
Kusum 🌸`;

document.getElementById('openBtn').onclick=()=>{
document.getElementById('intro').style.display='none';
document.getElementById('content').classList.remove('hidden');
let i=0;
(function t(){
 if(i<msg.length){
  document.getElementById('typing').textContent+=msg[i++];
  setTimeout(t,35);
 }
})();
};

setInterval(()=>{
 let s=document.createElement('div');
 s.className='star';
 s.innerHTML='✦';
 s.style.left=Math.random()*100+'vw';
 s.style.top=Math.random()*100+'vh';
 s.style.opacity=Math.random();
 document.body.appendChild(s);
 setTimeout(()=>s.remove(),3000);
},180);

setInterval(()=>{
 let p=document.createElement('div');
 p.className='petal';
 p.innerHTML='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.top='-20px';
 p.animate([{transform:'translateY(0px)'},{transform:'translateY(110vh) rotate(360deg)'}],{duration:7000});
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),7000);
},450);
