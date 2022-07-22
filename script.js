const app = {
   btnAdd : document.getElementById('btn-add'),
   btnLinkedIn: document.getElementById('btn-linked-in'),
   btnGithub : document.getElementById('btn-github'),
   avcard : document.getElementById('v-card'),
   aLinkedIn : document.getElementById('a-linked-in'),
   agithub: document.getElementById('a-github')
};
app.btnAdd.addEventListener('click',()=> submitBtn(app.avcard));
app.btnLinkedIn.addEventListener('click',()=> submitBtn(app.aLinkedIn));
app.btnGithub.addEventListener('click',()=> submitBtn(app.agithub));


function submitBtn(link){
   
  
   link.click();
};