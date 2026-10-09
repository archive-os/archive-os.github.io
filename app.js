/* No external dependencies. Works directly from index.html or GitHub Pages. */
const extra = {
  tr: {skip:'İçeriğe geç',desktop_caption:'Günlük kullanım için tasarlandı.',toolkit_title:'ArchiveOS Araç Takımı',toolkit_desc:'Tanıdık bir tasarım. Her iş için kendi aracı.',welcome_desc:'İlk adımlar, görünüm ve bakım tek yerde.',remover_desc:'Uygulamalarını seç, topluca kaldır.',installer_desc:'DEB paketlerini incele ve kur.',updater_tool_desc:'Sürümleri karşılaştır, güncellemeleri denetle.',windows_desc:'Windows uygulamaları için Wine araçları.',aosver_desc:'ArchiveOS sürümü ve sistem bilgileri.',email:'E-posta ↗',theme_label:'Açık veya koyu temayı değiştir',menu_label:'Gezinme menüsü',zoom_label:'Ekran görüntüsünü büyüt',desktop_alt:'ArchiveOS masaüstü'},
  en: {skip:'Skip to content',desktop_caption:'Designed for everyday use.',toolkit_title:'ArchiveOS Toolkit',toolkit_desc:'A familiar design. A dedicated tool for every task.',welcome_desc:'First steps, appearance and maintenance in one place.',remover_desc:'Select your apps and remove them together.',installer_desc:'Inspect and install DEB packages.',updater_tool_desc:'Compare versions and check for updates.',windows_desc:'Wine tools for your Windows applications.',aosver_desc:'ArchiveOS version and system information.',email:'Email ↗',theme_label:'Switch between light and dark themes',menu_label:'Navigation menu',zoom_label:'Enlarge screenshot',desktop_alt:'ArchiveOS desktop'}
};
Object.assign(extra.tr, {touch_title:'Dokunmatik Arayüz Uyumluluğu',touch_desc:'ArchiveOS Dokunmatik Klavye ile fiziksel klavye olmadan yazın. Klavyeyi ihtiyaç duyduğunuzda elle açıp kapatın; Türkçe dahil farklı dil ve düzenler arasından seçim yapın. KDE Plasma Wayland oturumuyla bütünleşen ekran klavyesi, dokunmatik kullanımda metin girişini kolaylaştırır.',iso_label:'ISO bağlantısı',release_pending:'ISO bağlantısı henüz eklenmedi.',sha_pending:'SHA256 değeri henüz eklenmedi.',sha_help:'İndirdiğiniz ISO dosyasının SHA256 değerini buradaki değerle karşılaştırarak dosya bütünlüğünü doğrulayabilirsiniz.'});
Object.assign(extra.en, {touch_title:'Touch Interface Compatibility',touch_desc:'Type without a physical keyboard using the ArchiveOS Touch Keyboard. Open and close it manually whenever needed, and choose from different languages and layouts, including Turkish. The on-screen keyboard integrates with the KDE Plasma Wayland session to make touch-based text entry easier.',iso_label:'ISO download link',release_pending:'The ISO download link has not been added yet.',sha_pending:'The SHA256 checksum has not been added yet.',sha_help:'Compare the SHA256 checksum of your downloaded ISO with the value shown here to verify file integrity.'});
Object.assign(translations.tr,extra.tr);Object.assign(translations.en,extra.en);
function browserLanguage(){return /^tr(?:-|$)/i.test(navigator.language||'en')?'tr':'en'}
let language=browserLanguage();
const systemTheme=matchMedia('(prefers-color-scheme: dark)');
function applyTheme(value){
  document.documentElement.dataset.theme=value;
  document.querySelector('meta[name="theme-color"]').content=value==='dark'?'#16191e':'#f6f8fc';
  document.getElementById('theme').setAttribute('aria-pressed',String(value==='dark'));
  document.getElementById('heroScreenshot').src=value==='dark'?'assets/desktop.png':'assets/desktop-2.png';
}
applyTheme(systemTheme.matches?'dark':'light');
systemTheme.addEventListener('change',()=>applyTheme(systemTheme.matches?'dark':'light'));
function renderFaq(){const container=document.getElementById('faqContainer');container.replaceChildren();faqData[language].forEach(item=>{const details=document.createElement('details');const summary=document.createElement('summary');summary.textContent=item.q;const p=document.createElement('p');p.textContent=item.a;details.append(summary,p);container.append(details)})}
function applyLanguage(){const t=translations[language];document.documentElement.lang=language;document.querySelectorAll('[data-i18n]').forEach(el=>{if(t[el.dataset.i18n]!==undefined)el.textContent=t[el.dataset.i18n]});document.querySelectorAll('[data-alt]').forEach(el=>el.alt=el.dataset.alt==='desktop'?t.desktop_alt:'ArchiveOS '+t[el.dataset.alt]);document.title='ArchiveOS — '+t.hero_subtitle;document.querySelector('meta[name="description"]').content=t.hero_desc;const langButton=document.getElementById('language');langButton.textContent=language==='tr'?'EN':'TR';langButton.setAttribute('aria-label',language==='tr'?'Switch to English':'Türkçeye geç');document.getElementById('theme').setAttribute('aria-label',t.theme_label);document.getElementById('menu').setAttribute('aria-label',t.menu_label);document.getElementById('openScreenshot').setAttribute('aria-label',t.zoom_label);document.getElementById('navigation').setAttribute('aria-label',t.menu_label);document.getElementById('imageModal').setAttribute('aria-label',t.desktop_alt);document.getElementById('licenseText').textContent=language==='tr'?licenseTextTr:licenseTextEn;renderFaq();renderRelease()}
applyLanguage();
window.addEventListener('languagechange',()=>{language=browserLanguage();applyLanguage()});
document.getElementById('language').addEventListener('click',()=>{language=language==='tr'?'en':'tr';applyLanguage()});
document.getElementById('theme').addEventListener('click',()=>{applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark')});
const menu=document.getElementById('menu'),navigation=document.getElementById('navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
function openDialog(id){document.getElementById(id).showModal()}
document.getElementById('openLicense').addEventListener('click',()=>openDialog('licenseModal'));
document.getElementById('openScreenshot').addEventListener('click',()=>openDialog('imageModal'));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()}})});

function renderRelease(){
  const t=translations[language];
  const url=archiveosRelease.isoUrl.trim();
  const ready=/^https?:\/\//i.test(url);
  const hash=archiveosRelease.sha256.trim();
  const hashReady=/^[a-f0-9]{64}$/i.test(hash);
  document.querySelectorAll('.download-link').forEach(link=>{
    link.href=ready?url:'#download';
    if(ready){link.target='_blank';link.rel='noopener noreferrer';link.removeAttribute('aria-disabled')}
    else{link.removeAttribute('target');if(link.closest('#download'))link.setAttribute('aria-disabled','true')}
  });
  const iso=document.getElementById('iso-url');
  iso.textContent=ready?url:t.release_pending;
  if(ready){iso.href=url;iso.target='_blank';iso.rel='noopener noreferrer';iso.removeAttribute('aria-disabled')}
  else{iso.removeAttribute('href');iso.setAttribute('aria-disabled','true')}
  document.getElementById('iso-sha256').textContent=hashReady?hash.toLowerCase():t.sha_pending;
}
document.querySelectorAll('.download-link').forEach(link=>link.addEventListener('click',event=>{if(link.getAttribute('aria-disabled')==='true')event.preventDefault()}));

const secondScreenshot=document.getElementById('secondScreenshot');
function showSecondScreenshot(){const available=secondScreenshot.naturalWidth>0;secondScreenshot.hidden=!available;document.getElementById('secondScreenshotMissing').hidden=available}
secondScreenshot.addEventListener('load',showSecondScreenshot);secondScreenshot.addEventListener('error',showSecondScreenshot);if(secondScreenshot.complete)showSecondScreenshot();

// Animate only visible content; unsupported browsers keep the normal page.
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const entranceAnimations=new Set();
if(typeof IntersectionObserver!=='undefined'){
  const entranceObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entranceObserver.unobserve(entry.target);
      if(motionPreference.matches || typeof entry.target.animate!=='function')return;
      const animation=entry.target.animate(
        [{opacity:0,translate:'0 20px'},{opacity:1,translate:'0 0'}],
        {duration:550,delay:Number(entry.target.dataset.motionDelay||0),easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'}
      );
      entranceAnimations.add(animation);
      animation.finished.then(()=>entranceAnimations.delete(animation),()=>entranceAnimations.delete(animation));
    });
  },{threshold:.08});
  document.querySelectorAll('.about>div,.section-heading,.grid>.card,.grid>.tool,.toolkit-heading,.touch-panel,.faq-section,.download-panel,.license-section,.footer-top').forEach(element=>{
    if(element.matches('.grid>*')){
      element.dataset.motionDelay=String((Array.from(element.parentElement.children).indexOf(element)%4)*65);
    }
    entranceObserver.observe(element);
  });
  motionPreference.addEventListener('change',()=>{
    if(motionPreference.matches){
      entranceAnimations.forEach(animation=>animation.cancel());
      entranceAnimations.clear();
    }
  });
}
