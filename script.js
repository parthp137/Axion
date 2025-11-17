/* Axion — dark theme + images (BE6 + Rover X)
   - navbar change on scroll
   - active link highlighting (IntersectionObserver)
   - smooth scroll accounting for fixed nav
   - mobile drawer toggle and ARIA updates
   - demo form handler (no network)
*/

(function(){
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = Array.from(document.querySelectorAll('.nav-item a'));
  const mobileLinks = Array.from(mobileDrawer.querySelectorAll('a'));
  const SCROLL_THRESHOLD = 48;

  function debounce(fn, wait=40){
    let t;
    return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), wait); };
  }

  // Toggle scrolled class
  function onScroll(){
    if (window.scrollY > SCROLL_THRESHOLD) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', debounce(onScroll, 16));
  onScroll();

  // Smooth scroll helper that accounts for nav height
  function smoothScrollTo(targetId){
    const el = document.getElementById(targetId);
    if (!el) return;
    const navHeight = navbar.getBoundingClientRect().height;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Desktop nav clicks
  navLinks.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = a.dataset.target;
      smoothScrollTo(target);
      setActiveLink(a);
    });
  });

  // Mobile nav clicks
  mobileLinks.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = a.dataset.target;
      toggleMobile(false);
      setTimeout(()=> smoothScrollTo(target), 120);
    });
  });

  // Active link sync
  function setActiveLink(activeAnchor){
    document.querySelectorAll('.nav-item a').forEach(a=>a.classList.remove('active'));
    document.querySelectorAll('#mobileDrawer a').forEach(a=>a.classList.remove('active'));
    if (!activeAnchor) return;
    const target = activeAnchor.dataset.target || activeAnchor.getAttribute('href').replace('#','');
    document.querySelectorAll(`[data-target="${target}"]`).forEach(a=>a.classList.add('active'));
  }

  // IntersectionObserver for active link
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const ioOptions = { root: null, rootMargin: '-35% 0px -40% 0px', threshold: 0 };
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        const id = entry.target.id;
        const anchor = document.querySelector(`.nav-item a[data-target="${id}"]`) || document.querySelector(`#mobileDrawer a[data-target="${id}"]`);
        setActiveLink(anchor);
      }
    });
  }, ioOptions);
  sections.forEach(s=>io.observe(s));

  // Mobile drawer toggle
  function toggleMobile(open){
    const isOpen = mobileDrawer.classList.contains('open');
    const willOpen = typeof open === 'boolean' ? open : !isOpen;
    if (willOpen){
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden','false');
      hamburger.setAttribute('aria-expanded','true');
      hamburger.setAttribute('aria-label','Close menu');
      // animate bars
      const bars = hamburger.querySelectorAll('.bar');
      bars[0].style.transform = 'translateY(6px) rotate(45deg)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden','true');
      hamburger.setAttribute('aria-expanded','false');
      hamburger.setAttribute('aria-label','Open menu');
      const bars = hamburger.querySelectorAll('.bar');
      bars[0].style.transform = '';
      bars[1].style.opacity = '';
      bars[2].style.transform = '';
    }
  }

  hamburger.addEventListener('click', ()=> toggleMobile());

  // Close drawer on outside click
  document.addEventListener('click', (e)=>{
    if (!mobileDrawer.contains(e.target) && !hamburger.contains(e.target) && mobileDrawer.classList.contains('open')){
      toggleMobile(false);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) toggleMobile(false);
  });

  // If page loads with a hash, scroll to it after small delay
  if (location.hash){
    const id = location.hash.replace('#','');
    setTimeout(()=> smoothScrollTo(id), 80);
  }

  // Demo-only test drive form handler (no server)
  const form = document.getElementById('testDriveForm');
  const formMsg = document.getElementById('formMsg');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'Guest';
      formMsg.textContent = `Thanks, ${name}. Your test drive request is recorded — we'll contact you shortly.`;
      form.reset();
      setTimeout(()=> { formMsg.textContent = ''; }, 7000);
    });
  }

  // expose for quick debugging
  window._axion_nav = { setActiveLink };
})();
