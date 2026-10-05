Promise.all([
  fetch('logo.b64.1.txt').then(r=>r.text()),
  fetch('logo.b64.2.txt').then(r=>r.text())
]).then(([a,b])=>{
  document.getElementById('sd-logo').src = 'data:image/jpeg;base64,' + (a+b).replace(/\s+/g,'');
});
