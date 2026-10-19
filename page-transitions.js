/* Keep rapid language/tab changes responsive and respect reduced motion. */
const pageMotion=matchMedia('(prefers-reduced-motion: reduce)');
const pageAnimations=new Set();
function cancelPageAnimations(){pageAnimations.forEach(animation=>animation.cancel());pageAnimations.clear()}
function animateContent(nodes){
  cancelPageAnimations();
  if(pageMotion.matches)return;
  nodes.forEach(node=>{
    if(!node||node.hidden||typeof node.animate!=='function')return;
    const animation=node.animate([{opacity:.25,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.2,.7,.2,1)'});
    pageAnimations.add(animation);
    animation.finished.then(()=>pageAnimations.delete(animation),()=>pageAnimations.delete(animation));
  });
}
pageMotion.addEventListener('change',()=>{if(pageMotion.matches)cancelPageAnimations()});
