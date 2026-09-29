(function(){
  var root=document.documentElement;
  document.getElementById('year').textContent=new Date().getFullYear();

  document.getElementById('theme').addEventListener('click',function(){
    var cur=root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark';
    root.dataset.theme=next;
    try{localStorage.setItem('theme',next)}catch(e){}
  });

  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});

  var links=[].slice.call(document.querySelectorAll('.nav nav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  var so=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){
      links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)});
    }});
  },{rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(function(s){s&&so.observe(s)});
})();
