const msg=`Dear Pichku 🎀,

Happy Girlfriend's Day ❤️

You make every ordinary day feel magical.
Thank you for being my happiness, my comfort and my favourite person.

I hope this little website makes you smile.

Forever Yours,
Kusum ❤️`;

const start=new Date('2026-03-15T00:00:00');
function update(){
 const now=new Date();
 let days=Math.max(0,Math.floor((now-start)/86400000));
 document.getElementById('counter').textContent='💕 Together Since 15 March 2026 • '+days+' days';
}
setInterval(update,1000);update();

document.getElementById('open').onclick=()=>{
 document.getElementById('env').classList.add('open');
 setTimeout(()=>{
  overlay.style.display='none';
  main.classList.remove('hidden');
  let i=0;
  (function t(){
    if(i<msg.length){
      letter.textContent+=msg[i++];
      setTimeout(t,28);
    }
  })();
 },900);
};

setInterval(()=>{
 let e=document.createElement('div');
 e.className=Math.random()>.5?'heart':'petal';
 e.textContent=e.className=='heart'?'💖':'🌸';
 e.style.left=Math.random()*100+'vw';
 e.style.animationDuration=(4+Math.random()*4)+'s';
 document.body.appendChild(e);
 setTimeout(()=>e.remove(),9000);
},250);

document.getElementById('surprise').onclick=()=>{
 surpriseText.innerHTML="<h2>💖 You are my favourite person. I LOVEEEEEE YOUUUUUUU SOOOOOO MUCHHHHHHHH BABYYYYYY ❤️</h2>";
 for(let i=0;i<60;i++){
   let h=document.createElement('div');
   h.className='heart';h.textContent='💖';
   h.style.left=Math.random()*100+'vw';
   h.style.animationDuration=(2+Math.random()*3)+'s';
   document.body.appendChild(h);
   setTimeout(()=>h.remove(),6000);
 }
};