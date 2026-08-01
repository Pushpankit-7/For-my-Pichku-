const btn=document.getElementById('openBtn');
const env=document.getElementById('env');
const screen=document.getElementById('screen');
const letter=document.getElementById('letter');
const text=document.getElementById('text');
const msg=`Dear Pichku 🎀,

Happy Girlfriend's Day ❤️

You make my world brighter every day.
Thank you for being you.

Forever yours,
Kusum 🌸`;
btn.addEventListener('click',()=>{
 env.classList.add('open');
 setTimeout(()=>{
   screen.style.display='none';
   letter.classList.remove('hide');
   let i=0;
   (function type(){
      if(i<msg.length){
        text.textContent+=msg.charAt(i++);
        setTimeout(type,35);
      }
   })();
 },900);
});
