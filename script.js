
function submitBtn(){
   
   const vcard = document.getElementById('v-card');
   vcard.click();
};

const btn = document.getElementById('btn-add');
btn.addEventListener('click', submitBtn);