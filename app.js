(function(){
 var b=document.getElementById('mnav'),p=document.getElementById('mpanel');
 if(b&&p){b.addEventListener('click',function(){p.classList.toggle('hidden');});
  p.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){p.classList.add('hidden');});});}
})();