const msg=`Dear Pichku 🎀,

Every day with you feels special.
Thank you for bringing happiness into my life.

Happy Girlfriend's Day ❤️

Forever Yours,
Kusum 🌸`;

const env=document.getElementById('envelope');
document.getElementById('openBtn').onclick=()=>{
 env.classList.add('open');
 setTimeout(()=>{
   document.getElementById('envelopeBox').style.display='none';
   document.getElementById('letter').classList.remove('hidden');
   let i=0;
   (function type(){
      if(i<msg.length){
        typing.textContent+=msg[i++];
        setTimeout(type,35);
      }
   })();
 },900);
};

setInterval(()=>{
 let p=document.createElement("div");
 p.textContent="🌸";
 p.style.position="fixed";
 p.style.left=Math.random()*100+"vw";
 p.style.top="-20px";
 p.style.fontSize="20px";
 p.animate([{transform:"translateY(0)"},{transform:"translateY(110vh) rotate(360deg)"}],{duration:7000});
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),7000);
},500);
