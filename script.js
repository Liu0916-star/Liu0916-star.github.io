(function(){
  var root=document.documentElement;
  document.getElementById('year').textContent=new Date().getFullYear();

  // theme toggle
  document.getElementById('theme').addEventListener('click',function(){
    var cur=root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark';
    root.dataset.theme=next;
    try{localStorage.setItem('theme',next)}catch(e){}
  });

  // Melbourne clock
  var clock=document.getElementById('clock');
  function tick(){
    try{
      clock.textContent='MEL '+new Intl.DateTimeFormat('en-AU',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Australia/Melbourne'}).format(new Date());
    }catch(e){clock.style.display='none'}
  }
  tick(); setInterval(tick,15000);

  // nav state + scroll progress
  var nav=document.getElementById('nav'), bar=document.getElementById('progress');
  function onScroll(){
    var y=window.scrollY, h=document.documentElement.scrollHeight-innerHeight;
    nav.classList.toggle('scrolled',y>12);
    bar.style.transform='scaleX('+(h>0?y/h:0)+')';
  }
  addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // reveal on scroll
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});

  // active section in nav
  var links=[].slice.call(document.querySelectorAll('.nav nav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  var so=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){
      links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)});
    }});
  },{rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(function(s){s&&so.observe(s)});
})();
