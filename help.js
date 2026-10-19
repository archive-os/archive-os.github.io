/* Shared appearance and language conventions with the main site. */
const browserLanguage=()=>/^tr(?:-|$)/i.test(navigator.language||'en')?'tr':'en';
let language=browserLanguage();
const systemTheme=matchMedia('(prefers-color-scheme: dark)');
const tabs=[...document.querySelectorAll('[role="tab"]')];
const panelIds=tabs.map(tab=>tab.getAttribute('aria-controls'));
function element(tag,text,className){const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node}
function list(items,ordered=false){const node=element(ordered?'ol':'ul');items.forEach(text=>node.append(element('li',text)));return node}
function article(title,text){const node=element('article',null,'card');node.append(element('h3',title),element('p',text));return node}
function heading(title,intro){const node=element('div',null,'section-heading');const copy=element('div');copy.append(element('h2',title));if(intro)copy.append(element('p',intro));node.append(copy);return node}
function applyTheme(dark){document.documentElement.dataset.theme=dark?'dark':'light';document.querySelector('meta[name="theme-color"]').content=dark?'#16191e':'#f6f8fc';document.getElementById('theme').setAttribute('aria-pressed',String(dark))}
function selectPanel(animate=true){const id=panelIds.includes(location.hash.slice(1))?location.hash.slice(1):'general';const changed=tabs.some(tab=>tab.getAttribute('aria-selected')==='true'&&tab.getAttribute('aria-controls')!==id);tabs.forEach(tab=>{const active=tab.getAttribute('aria-controls')===id;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!active});if(animate&&changed)animateContent([document.getElementById(id)])}
function activateTab(tab,focus=false){history.replaceState(null,'','#'+tab.getAttribute('aria-controls'));selectPanel();if(focus)tab.focus()}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();activateTab(tabs[next],true)})});
function sourceLink(label,url){const link=element('a',label,'text-link');link.href=url;link.target='_blank';link.rel='noopener noreferrer';return link}
function bootTable(t){
  const card=element('article',null,'card');card.append(element('h3',t.keys_title),element('p',t.keys_intro));
  const scroll=element('div',null,'boot-table-scroll');scroll.tabIndex=0;scroll.setAttribute('role','region');scroll.setAttribute('aria-label',t.keys_title);
  const table=element('table',null,'boot-table');table.append(element('caption',t.keys_title));const head=element('thead'),row=element('tr');t.keys_headers.forEach(label=>{const cell=element('th',label);cell.setAttribute('scope','col');row.append(cell)});head.append(row);table.append(head);
  const body=element('tbody');t.keys_rows.forEach(([brand,boot,bios,urls])=>{const row=element('tr'),brandCell=element('th',brand);brandCell.setAttribute('scope','row');row.append(brandCell,element('td',boot),element('td',bios));const refs=element('td');urls.forEach((url,index)=>refs.append(sourceLink(t.source+' '+(index+1),url)));row.append(refs);body.append(row)});table.append(body);scroll.append(table);card.append(scroll,element('p',t.keys_note,'help-callout'));return card;
}
function render(){
  const t=helpContent[language];document.documentElement.lang=language;document.title=t.title+' — ArchiveOS';document.querySelector('meta[name="description"]').content=t.intro;
  document.querySelectorAll('[data-help]').forEach(node=>node.textContent=t[node.dataset.help]);
  document.querySelector('[role="tablist"]').setAttribute('aria-label',t.help);
  const lang=document.getElementById('language');lang.textContent=language==='tr'?'EN':'TR';lang.setAttribute('aria-label',language==='tr'?'Switch to English':'Türkçeye geç');
  document.getElementById('theme').setAttribute('aria-label',t.theme);document.getElementById('menu').setAttribute('aria-label',t.menu);document.getElementById('navigation').setAttribute('aria-label',t.menu);
  const general=document.getElementById('general');general.replaceChildren(heading(t.general_title,t.general_intro));const apps=element('div',null,'grid two');const appIcons=['archive-store.svg','welcome.png','timeshift.png','gaming-center.svg','terminal.svg','touch-keyboard.svg','windows-support.png','about.svg'];t.apps.forEach(([title,text],index)=>{const card=article(title,text);const icon=element('img',null,'app-icon');icon.src='assets/'+appIcons[index];icon.alt='';icon.width=48;icon.height=48;card.prepend(icon);apps.append(card)});general.append(apps);const windowsGuide=element('article',null,'card windows-guide');windowsGuide.append(element('h3',t.windows_help_title),list(t.windows_steps,true),element('p',t.windows_note,'help-callout'));general.append(windowsGuide);
  const errors=document.getElementById('errors');errors.replaceChildren(heading(t.errors_title));const issue=element('article',null,'card help-issue');issue.append(element('h3',t.update_title),element('span',t.legacy,'help-badge'),element('p',t.legacy_text),list(t.legacy_steps,true),element('p',t.legacy_note,'help-callout'));errors.append(issue,article(t.current_title,t.current_text),article(t.unresolved_title,t.unresolved_text));
  const installation=document.getElementById('installation');installation.replaceChildren(heading(t.install_title,t.install_intro));const prep=element('article',null,'card');prep.append(element('h3',t.prepare_title),list(t.prepare));installation.append(prep);
  const usb=article(t.usb_title,t.usb_intro);t.usb_methods.forEach(([title,text,url])=>{const method=element('div',null,'usb-method');method.append(element('h4',title),element('p',text),sourceLink(t.source,url));usb.append(method)});installation.append(usb);
  const usbBoot=element('article',null,'card');usbBoot.append(element('h3',t.usb_boot_title),list(t.usb_boot_steps,true));installation.append(usbBoot,bootTable(t),article(t.usb_live_title,t.usb_live_text));
  const steps=element('article',null,'card');steps.append(element('h3',t.steps_title));const stepList=element('ol',null,'install-steps');t.steps.forEach(([title,text])=>{const step=element('li');step.append(element('h4',title),element('p',text));stepList.append(step)});steps.append(stepList);installation.append(steps);
  const methods=element('div',null,'help-methods');methods.append(element('h3',t.modes_title));t.modes.forEach(([title,text])=>methods.append(article(title,text)));installation.append(methods,article(t.disk_title,t.disk_text),element('p',t.boot_note,'help-callout'));
  const dual=document.getElementById('dualboot');dual.replaceChildren(heading(t.dual_title,t.dual_intro));const dualSteps=element('article',null,'card');dualSteps.append(element('h3',t.dual_steps_title),list(t.dual_steps,true));dual.append(dualSteps,bootTable(t),article(t.dual_missing_title,t.dual_missing_text));selectPanel(false);
}
const menu=document.getElementById('menu'),navigation=document.getElementById('navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{menu.setAttribute('aria-expanded',String(navigation.classList.toggle('open')))});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});navigation.addEventListener('click',closeMenu);
document.getElementById('language').addEventListener('click',()=>{language=language==='tr'?'en':'tr';render();animateContent([document.querySelector('.help-heading'),...panelIds.map(id=>document.getElementById(id)).filter(node=>!node.hidden),...tabs])});window.addEventListener('languagechange',()=>{language=browserLanguage();render();animateContent(panelIds.map(id=>document.getElementById(id)).filter(node=>!node.hidden))});
document.getElementById('theme').addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme!=='dark'));systemTheme.addEventListener('change',()=>applyTheme(systemTheme.matches));window.addEventListener('hashchange',()=>selectPanel());
applyTheme(systemTheme.matches);render();
