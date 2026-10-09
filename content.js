// İŞ BİRLİĞİ — Aqurevive site adresini aşağıdaki boş tırnaklara yazın.
const archiveosPartners = {
  aqureviveUrl: 'https://aquareviveos.netlify.app/' // SITE LİNKİNİ BURAYA YAPIŞTIR (https://...)
};

// YAYIN AYARLARI — yalnız aşağıdaki iki tırnak içini doldurun. / RELEASE SETTINGS
const archiveosRelease = {
  isoUrl: 'https://archive.org/download/archive-os-kde-amd-64-v-2/ArchiveOS-kde-Amd64-V2.iso', // ISO İNDİRME LİNKİNİ BURAYA YAPIŞTIR (https://...)
  sha256: '540c519484e168a7c9496552815f52d3d2869ad1b8d753563304de1b249963b2'  // AYNI ISO'NUN 64 KARAKTERLİ SHA256 DEĞERİNİ BURAYA YAPIŞTIR
};

// Content preserved from https://archive-os.github.io/ on 2026-10-06.
const translations = {
      tr: {
        nav_home: "Ana Sayfa",
        nav_features: "Özellikler",
        nav_requirements: "Gereksinimler",
        nav_screenshots: "Ekran Görüntüleri",
        nav_faq: "SSS",
        nav_download: "İndir",
        hero_subtitle: "Geleceğin sistemine hazır olun.",
        hero_desc: "Modern, hızlı, kullanıcı dostu ve özgür bir Linux deneyimi.",
        download_btn: "ArchiveOS'u İndir",
        explore_btn: "Özellikleri Keşfet",
        about_title: "Linux'un özgürlüğü. ArchiveOS'un sadeliği.",
        about_desc: "ArchiveOS, Linux dünyasına yeni başlayan kullanıcıların kolayca alışabileceği, günlük kullanım için tasarlanmış modern ve kullanıcı dostu bir Linux dağıtımıdır.",
        about_kde: "KDE Plasma tabanlı masaüstü deneyimi ile Linux'un gücünü korur.",
        perf_title: "Akıcı. Hafif. Optimize.",
        zram_title: "ZRAM Optimizasyonu",
        zram_desc: "ArchiveOS, RAM kullanımını daha verimli hale getirmek için ZRAM optimizasyonlarından yararlanır. 1 GB RAM ile yaklaşık 500 MB seviyesinde temel sistem RAM tüketimi.",
        smooth_title: "Akıcı Masaüstü",
        smooth_desc: "KDE Plasma'nın modern masaüstü deneyimi ArchiveOS optimizasyonlarıyla birleşir.",
        resource_title: "Kaynak Dostu",
        resource_desc: "Düşük donanımlı bilgisayarlarda mümkün olduğunca akıcı bir deneyim sunmayı hedefler.",
        modern_hw: "Modern Donanım",
        modern_hw_desc: "Yeni nesil bilgisayarların donanımlarından yararlanabilecek şekilde tasarlanmıştır.",
        req_title: "Sistem Gereksinimleri",
        min_req: "Minimum",
        rec_req: "Önerilen",
        req_min_ram: "4 GB RAM",
        req_min_storage: "32 GB depolama",
        req_min_cpu: "Modern 64-bit işlemci",
        req_min_boot: "UEFI veya BIOS",
        req_rec_ram: "8 GB RAM veya üzeri",
        req_rec_storage: "64 GB / 128 GB depolama",
        req_rec_cpu: "Çok çekirdekli 64-bit işlemci",
        req_rec_boot: "UEFI önerilir",
        req_note: "ArchiveOS düşük donanımlarda çalışabilecek şekilde optimize edilmiştir. Daha rahat çoklu görev ve modern uygulamalar için önerilen sistem gereksinimleri tercih edilir.",
        features_title: "ArchiveOS ile neler geliyor?",
        update_desc: "Güncellemeleriniz burada. ArchiveOS güncellemelerini kolayca kontrol edin.",
        timeshift_desc: "Geri dönmekten korkmayın. Timeshift ile sistem geri yükleme noktaları oluşturun.",
        flatpak_desc: "Uygulamalarınızı kolayca keşfedin. Flatpak desteği hazır gelir.",
        kde_desc: "Modern ve özelleştirilebilir KDE Plasma deneyimi.",
        screenshots_title: "Ekran Görüntüleri",
        screenshots_desc: "ArchiveOS masaüstü deneyiminden görüntüler.",
        screenshot_1: "Ekran Görüntüsü 1",
        screenshot_2: "Ekran Görüntüsü 2",
        screenshot_missing_title: "Ekran görüntüsü yok",
        screenshot_missing_desc: "Bu ekran görüntüsü şu an mevcut değil.",
        faq_title: "Sıkça Sorulan Sorular",
        cta_title: "ArchiveOS'u keşfetmeye hazır mısınız?",
        cta_sub: "Geleceğin sistemine hazır olun.",
        license_text: "Özgür Yazılım. Açık Kaynak.",
        gpl_btn: "GNU General Public License v3",
        footer_tagline: "Geleceğin sistemine hazır olun.",
        close_btn: "Kapat"
      },
      en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_requirements: "Requirements",
        nav_screenshots: "Screenshots",
        nav_faq: "FAQ",
        nav_download: "Download",
        hero_subtitle: "Be ready for the system of the future.",
        hero_desc: "A modern, fast, user-friendly and free Linux experience.",
        download_btn: "Download ArchiveOS",
        explore_btn: "Explore Features",
        about_title: "The freedom of Linux. The simplicity of ArchiveOS.",
        about_desc: "ArchiveOS is a modern and user-friendly Linux distribution designed for everyday use, especially for users who are new to the Linux world.",
        about_kde: "It keeps the power of Linux while providing a KDE Plasma-based desktop experience.",
        perf_title: "Smooth. Lightweight. Optimized.",
        zram_title: "ZRAM Optimization",
        zram_desc: "ArchiveOS uses ZRAM optimizations to improve memory efficiency. Base system memory usage can be around 500 MB on a system with 1 GB of RAM.",
        smooth_title: "Smooth Desktop",
        smooth_desc: "ArchiveOS combines the modern KDE Plasma desktop experience with system optimizations.",
        resource_title: "Resource Friendly",
        resource_desc: "Designed to provide a smooth experience even on lower-end hardware.",
        modern_hw: "Modern Hardware",
        modern_hw_desc: "Designed to take advantage of modern computer hardware.",
        req_title: "System Requirements",
        min_req: "Minimum",
        rec_req: "Recommended",
        req_min_ram: "4 GB RAM",
        req_min_storage: "32 GB storage",
        req_min_cpu: "Modern 64-bit processor",
        req_min_boot: "UEFI or BIOS",
        req_rec_ram: "8 GB RAM or more",
        req_rec_storage: "64 GB / 128 GB storage",
        req_rec_cpu: "Multi-core 64-bit processor",
        req_rec_boot: "UEFI recommended",
        req_note: "ArchiveOS is optimized to work on lower-end hardware. For comfortable multitasking and modern applications, the recommended requirements are preferred.",
        features_title: "What comes with ArchiveOS?",
        update_desc: "Your updates, in one place. Check for ArchiveOS updates easily.",
        timeshift_desc: "Don't be afraid to roll back. Create system restore points with Timeshift.",
        flatpak_desc: "Discover applications with ease. Flatpak support is included out of the box.",
        kde_desc: "A modern and customizable KDE Plasma experience.",
        screenshots_title: "Screenshots",
        screenshots_desc: "A look at the ArchiveOS desktop experience.",
        screenshot_1: "Screenshot 1",
        screenshot_2: "Screenshot 2",
        screenshot_missing_title: "No screenshot",
        screenshot_missing_desc: "This screenshot is currently unavailable.",
        faq_title: "Frequently Asked Questions",
        cta_title: "Ready to discover ArchiveOS?",
        cta_sub: "Be ready for the system of the future.",
        license_text: "Free Software. Open Source.",
        gpl_btn: "GNU General Public License v3",
        footer_tagline: "Be ready for the system of the future.",
        close_btn: "Close"
      }
    };

const licenseTextTr = `GNU GENERAL PUBLIC LICENSE
Sürüm 3, 29 Haziran 2007

Telif Hakkı © 2007 Free Software Foundation, Inc. <https://fsf.org/>
Herkesin bu lisans belgesinin birebir kopyalarını kopyalama ve dağıtma izni vardır, ancak değiştirilmesine izin verilmez.

Önsöz
GNU Genel Kamu Lisansı, yazılım ve diğer türdeki eserler için özgür, copyleft bir lisanstır.

Çoğu yazılımın ve diğer pratik eserlerin lisansları, eserleri paylaşma ve değiştirme özgürlüğünüzü elinizden almak üzere tasarlanmıştır. Buna karşılık, GNU Genel Kamu Lisansı, bir programın tüm sürümlerini paylaşma ve değiştirme özgürlüğünüzü güvence altına almayı - tüm kullanıcıları için özgür yazılım olarak kalmasını sağlamayı amaçlamaktadır. Biz, Free Software Foundation, yazılımlarımızın çoğu için GNU Genel Kamu Lisansını kullanırız; bu lisans, yazarları tarafından bu şekilde yayımlanan diğer tüm eserler için de geçerlidir. Siz de bu lisansı kendi programlarınıza uygulayabilirsiniz.

Özgür yazılımdan söz ettiğimizde, fiyattan değil, özgürlükten bahsediyoruz. Genel Kamu Lisanslarımız, özgür yazılım kopyalarını dağıtma (ve dilerseniz bunun için ücret talep etme), kaynak kodunu alma veya istediğinizde edinebilme, yazılımı değiştirebilme veya onun parçalarını yeni özgür programlarda kullanabilme ve tüm bunları yapabileceğinizi bilme özgürlüğüne sahip olmanızı sağlamak üzere tasarlanmıştır.

Haklarınızı korumak için, başkalarının sizi bu haklardan mahrum bırakmasını veya sizden bu haklardan vazgeçmenizi istemesini engellememiz gerekir. Bu nedenle, yazılımın kopyalarını dağıtırsanız veya onu değiştirirseniz, başkalarının özgürlüğüne saygı gösterme sorumluluğu gibi belirli sorumluluklarınız vardır.

Örneğin, böyle bir programın kopyalarını ister ücretsiz ister ücret karşılığı dağıtırsanız, aldığınız özgürlüklerin aynısını alıcılara da aktarmanız gerekir. Onların da kaynak kodunu alabilmelerini veya edinebilmelerini sağlamalısınız. Ve haklarını bilmeleri için onlara bu koşulları göstermelisiniz.

GNU GPL'yi kullanan geliştiriciler, haklarınızı iki adımla korur: (1) yazılım üzerinde telif hakkı ileri sürmek ve (2) size kopyalama, dağıtma ve/veya değiştirme için yasal izin veren bu Lisansı sunmak.

Geliştiricilerin ve yazarların korunması için, GPL bu özgür yazılım için hiçbir garantinin olmadığını açıkça belirtir. Hem kullanıcılar hem de yazarlar adına, GPL değiştirilmiş sürümlerin değiştirildiği olarak işaretlenmesini şart koşar, böylece sorunları hatalı bir şekilde önceki sürümlerin yazarlarına atfedilmez.

Bazı cihazlar, üretici yapabilse de, kullanıcıların içlerindeki yazılımın değiştirilmiş sürümlerini yükleme veya çalıştırma erişimini reddedecek şekilde tasarlanmıştır. Bu, kullanıcıların yazılımı değiştirme özgürlüğünü koruma amacıyla temelden bağdaşmaz. Bu tür kötüye kullanımın sistematik modeli, bireylerin kullanımına yönelik ürünler alanında ortaya çıkmaktadır ki bu da tam olarak en kabul edilemez olduğu yerdir. Bu nedenle, GPL'nin bu sürümünü, bu tür ürünler için bu uygulamayı yasaklayacak şekilde tasarladık. Bu tür sorunlar diğer alanlarda önemli ölçüde ortaya çıkarsa, kullanıcıların özgürlüğünü korumak için gerektiğinde GPL'nin gelecekteki sürümlerinde bu hükmü bu alanlara genişletmeye hazırız.

Son olarak, her program sürekli olarak yazılım patentleri tarafından tehdit edilmektedir. Devletler, patentlerin genel amaçlı bilgisayarlarda yazılım geliştirme ve kullanımını kısıtlamasına izin vermemelidir, ancak izin verenlerde, özgür bir programa uygulanan patentlerin onu etkin bir şekilde özel mülk haline getirme özel tehlikesinden kaçınmak istiyoruz. Bunu önlemek için GPL, patentlerin programı özgür olmaktan çıkarmak için kullanılamayacağını garanti eder.

Kopyalama, dağıtım ve değiştirme için kesin hüküm ve koşullar aşağıda verilmiştir.

HÜKÜM VE KOŞULLAR
0. Tanımlar.
"Bu Lisans", GNU Genel Kamu Lisansının 3. sürümünü ifade eder.

"Telif hakkı" aynı zamanda yarı iletken maskeleri gibi diğer eser türlerine uygulanan telif hakkı benzeri yasaları da ifade eder.

"Program", bu Lisans kapsamında lisanslanan telif hakkına tabi herhangi bir eseri ifade eder. Her lisans sahibi "siz" olarak adlandırılır. "Lisans sahipleri" ve "alıcılar" bireyler veya kuruluşlar olabilir.

Bir eseri "değiştirmek", birebir kopya yapmak dışında, telif hakkı izni gerektirecek şekilde eserin tamamını veya bir kısmını kopyalamak veya uyarlamak anlamına gelir. Ortaya çıkan eser, önceki eserin "değiştirilmiş sürümü" veya önceki esere "dayanan" bir eser olarak adlandırılır.

"Kapsanan eser", değiştirilmemiş Program veya Programa dayanan bir eser anlamına gelir.

Bir eseri "yaymak", izinsiz olarak, yürürlükteki telif hakkı yasası uyarınca sizi doğrudan veya dolaylı olarak ihlalden sorumlu kılacak herhangi bir şey yapmak anlamına gelir; bir bilgisayarda yürütmek veya özel bir kopyayı değiştirmek hariç. Yayma, kopyalamayı, dağıtmayı (değiştirilmiş veya değiştirilmemiş olarak), kamuya sunmayı ve bazı ülkelerde diğer faaliyetleri de içerir.

Bir eseri "iletmek", diğer tarafların kopya yapmasını veya almasını sağlayan her türlü yayma anlamına gelir. Bir kopyanın transferi olmaksızın, bir bilgisayar ağı üzerinden bir kullanıcıyla salt etkileşim, iletme değildir.

Etkileşimli bir kullanıcı arayüzü, (1) uygun bir telif hakkı bildirimi gösteren ve (2) kullanıcıya eser için hiçbir garantinin olmadığını (garantilerin sağlandığı durumlar hariç), lisans sahiplerinin eseri bu Lisans kapsamında iletebileceğini ve bu Lisansın bir kopyasını nasıl görüntüleyeceğini söyleyen uygun ve belirgin bir şekilde görünür bir özellik içerdiği ölçüde "Uygun Yasal Bildirimleri" görüntüler. Arayüz, bir menü gibi bir kullanıcı komutları veya seçenekleri listesi sunuyorsa, listedeki belirgin bir öğe bu kriteri karşılar.

1. Kaynak Kodu.
Bir eser için "kaynak kodu", eser üzerinde değişiklik yapmak için tercih edilen biçim anlamına gelir. "Nesne kodu", bir eserin kaynak olmayan herhangi bir biçimi anlamına gelir.

"Standart Arayüz", ya tanınmış bir standartlar kuruluşu tarafından tanımlanan resmi bir standart olan ya da belirli bir programlama dili için belirtilen arayüzler söz konusu olduğunda, o dilde çalışan geliştiriciler arasında yaygın olarak kullanılan bir arayüz anlamına gelir.

Yürütülebilir bir eserin "Sistem Kütüphaneleri", bir bütün olarak eser dışında, (a) bir Ana Bileşenin normal paketleme biçimine dahil edilen ancak o Ana Bileşenin parçası olmayan ve (b) yalnızca eserin o Ana Bileşenle kullanılmasını sağlamaya veya kaynak kodu biçiminde kamuya açık bir uygulaması bulunan bir Standart Arayüzü uygulamaya yarayan her şeyi içerir. Bu bağlamda "Ana Bileşen", yürütülebilir eserin üzerinde çalıştığı belirli işletim sisteminin (varsa) ana temel bileşeni (çekirdek, pencere sistemi vb.) veya eseri üretmek için kullanılan bir derleyici veya onu çalıştırmak için kullanılan bir nesne kodu yorumlayıcısı anlamına gelir.

Nesne kodu biçimindeki bir eser için "Karşılık Gelen Kaynak", nesne kodunu oluşturmak, kurmak ve (yürütülebilir bir eser için) çalıştırmak ve eseri değiştirmek için gereken tüm kaynak kodu, bu faaliyetleri kontrol eden komut dosyaları dahil anlamına gelir. Ancak, eserin Sistem Kütüphanelerini veya bu faaliyetleri gerçekleştirmede değiştirilmeden kullanılan ancak eserin parçası olmayan genel amaçlı araçları veya genel olarak kullanılabilir özgür programları içermez. Örneğin, Karşılık Gelen Kaynak, eser için kaynak dosyalarla ilişkili arayüz tanım dosyalarını ve eserin özellikle gerektirecek şekilde tasarlandığı paylaşımlı kütüphaneler ve dinamik olarak bağlanan alt programlar için kaynak kodunu içerir.

Karşılık Gelen Kaynağın, kullanıcıların Karşılık Gelen Kaynağın diğer kısımlarından otomatik olarak yeniden oluşturabileceği hiçbir şeyi içermesi gerekmez.

Kaynak kodu biçimindeki bir eser için Karşılık Gelen Kaynak, o eserin kendisidir.

2. Temel İzinler.
Bu Lisans kapsamında verilen tüm haklar, Program üzerindeki telif hakkı süresi boyunca verilir ve belirtilen koşullar karşılandığı sürece geri alınamaz. Bu Lisans, değiştirilmemiş Programı çalıştırmak için sınırsız izninizi açıkça onaylar. Kapsanan bir eserin çalıştırılmasından elde edilen çıktı, yalnızca içeriği göz önüne alındığında kapsanan bir eser oluşturuyorsa bu Lisans kapsamındadır. Bu Lisans, telif hakkı yasasının sağladığı adil kullanım veya diğer eşdeğer haklarınızı tanır.

Lisansınız başka bir şekilde yürürlükte kaldığı sürece, iletmediğiniz kapsanan eserleri koşulsuz olarak yapabilir, çalıştırabilir ve yayabilirsiniz. Kapsanan eserleri, yalnızca sizin için münhasıran değişiklik yapmaları veya bu eserleri çalıştırmanız için tesisler sağlamaları amacıyla başkalarına iletebilirsiniz; yeter ki telif hakkını kontrol etmediğiniz tüm materyali iletirken bu Lisansın koşullarına uymanız şartıyla. Sizin için kapsanan eserleri bu şekilde yapan veya çalıştıranlar, bunu münhasıran sizin adınıza, sizin yönlendirmeniz ve kontrolünüz altında, sizinle olan ilişkileri dışında telif hakkına tabi materyalinizin herhangi bir kopyasını yapmalarını yasaklayan koşullarla yapmalıdır.

Diğer herhangi bir durumda iletme, yalnızca aşağıda belirtilen koşullar altında izin verilir. Alt lisanslamaya izin verilmez; 10. bölüm bunu gereksiz kılar.

3. Kullanıcıların Yasal Haklarının Anti-Etrafından Dolaşma Yasasından Korunması.
Hiçbir kapsanan eser, 20 Aralık 1996'da kabul edilen WIPO telif hakkı anlaşmasının 11. maddesi kapsamındaki yükümlülükleri yerine getiren herhangi bir yürürlükteki yasa veya bu tür önlemlerin etrafından dolaşılmasını yasaklayan veya kısıtlayan benzer yasalar uyarınca etkili bir teknolojik önlemin parçası olarak kabul edilmeyecektir.

Kapsanan bir eseri ilettiğinizde, kapsanan eserle ilgili olarak bu Lisans kapsamındaki hakların kullanılmasıyla etkilendiği ölçüde, teknolojik önlemlerin etrafından dolaşılmasını yasaklama konusundaki herhangi bir yasal yetkiden feragat edersiniz ve eserin kullanıcılarına karşı, teknolojik önlemlerin etrafından dolaşılmasını yasaklamaya yönelik sizin veya üçüncü tarafların yasal haklarını uygulama aracı olarak eserin işleyişini veya değiştirilmesini sınırlama niyetinde olmadığınızı beyan edersiniz.

4. Birebir Kopyaların İletilmesi.
Programın kaynak kodunun birebir kopyalarını, aldığınız şekilde, herhangi bir ortamda, her kopyada uygun bir telif hakkı bildirimini göze çarpacak ve uygun şekilde yayınlamanız; bu Lisansın ve 7. bölüme uygun olarak eklenen izin vermeyen tüm koşulların kod için geçerli olduğunu belirten tüm bildirimleri olduğu gibi korumanız; herhangi bir garantinin bulunmadığına dair tüm bildirimleri olduğu gibi korumanız ve Programla birlikte tüm alıcılara bu Lisansın bir kopyasını vermeniz koşuluyla iletebilirsiniz.

İlettiğiniz her kopya için herhangi bir fiyat talep edebilir veya hiçbir fiyat talep etmeyebilirsiniz ve bir ücret karşılığında destek veya garanti koruması sunabilirsiniz.

5. Değiştirilmiş Kaynak Sürümlerinin İletilmesi.
Programa dayanan bir eseri veya onu Programdan üretmek için yapılan değişiklikleri, bölüm 4'ün koşulları altında kaynak kodu biçiminde, aşağıdaki koşulların tümünü de karşılamanız şartıyla iletebilirsiniz:

a) Eser, onu değiştirdiğinizi belirten ve ilgili bir tarih veren göze çarpan bildirimler taşımalıdır.
b) Eser, bu Lisans ve bölüm 7 altında eklenen herhangi bir koşul altında yayımlandığını belirten göze çarpan bildirimler taşımalıdır. Bu gereklilik, bölüm 4'teki "tüm bildirimleri olduğu gibi koruyun" gerekliliğini değiştirir.
c) Eserin tamamını, bir bütün olarak, bu Lisans kapsamında, bir kopyayı edinen herkese lisanslamalısınız. Bu nedenle bu Lisans, geçerli tüm bölüm 7 ek koşullarıyla birlikte, eserin tamamı ve nasıl paketlendiklerine bakılmaksızın tüm parçaları için geçerli olacaktır. Bu Lisans, eseri başka bir şekilde lisanslamak için hiçbir izin vermez, ancak ayrıca almışsanız bu tür bir izni geçersiz kılmaz.
d) Eserin etkileşimli kullanıcı arayüzleri varsa, her biri Uygun Yasal Bildirimleri görüntülemelidir; ancak Programın Uygun Yasal Bildirimleri görüntülemeyen etkileşimli arayüzleri varsa, sizin eserinizin bunları yapmasını sağlamanız gerekmez.

Kapsanan bir eserin, doğası gereği kapsanan eserin uzantısı olmayan ve onunla daha büyük bir program oluşturacak şekilde birleştirilmemiş diğer ayrı ve bağımsız eserlerle bir derlemesi, derleme ve onun sonuçta ortaya çıkan telif hakkı, derlemenin kullanıcılarının erişimini veya yasal haklarını bireysel eserlerin izin verdiğinin ötesinde sınırlamak için kullanılmıyorsa, bir "küme" olarak adlandırılır. Kapsanan bir eserin bir kümeye dahil edilmesi, bu Lisansın kümenin diğer kısımlarına uygulanmasına neden olmaz.

6. Kaynak Olmayan Biçimlerin İletilmesi.
Kapsanan bir eseri, bölüm 4 ve 5'in koşulları altında nesne kodu biçiminde, aşağıdaki yollardan biriyle bu Lisansın koşulları altında makine tarafından okunabilir Karşılık Gelen Kaynağı da iletmeniz şartıyla iletebilirsiniz:

a) Nesne kodunu, yazılım değişimi için geleneksel olarak kullanılan dayanıklı bir fiziksel ortamda sabitlenmiş Karşılık Gelen Kaynak eşliğinde fiziksel bir üründe (fiziksel bir dağıtım ortamı dahil) veya onun içinde somutlaşmış olarak iletmek.
b) Nesne kodunu, en az üç yıl geçerli ve o ürün modeli için yedek parça veya müşteri desteği sunduğunuz sürece geçerli olan yazılı bir teklif eşliğinde, nesne koduna sahip olan herkese (1) bu Lisans kapsamındaki üründeki tüm yazılım için Karşılık Gelen Kaynağın bir kopyasını, yazılım değişimi için geleneksel olarak kullanılan dayanıklı bir fiziksel ortamda, bu kaynak iletimini fiziksel olarak gerçekleştirmenin makul maliyetinizden daha fazla olmayan bir fiyata veya (2) bir ağ sunucusundan Karşılık Gelen Kaynağı ücretsiz olarak kopyalama erişimi vermek.
c) Nesne kodunun bireysel kopyalarını, Karşılık Gelen Kaynağı sağlamak için yazılı teklifin bir kopyasıyla birlikte iletmek. Bu alternatife yalnızca ara sıra ve ticari olmayan şekilde ve yalnızca nesne kodunu böyle bir teklifle birlikte, alt bölüm 6b'ye uygun olarak aldıysanız izin verilir.
d) Nesne kodunu belirlenmiş bir yerden erişim sunarak (ücretsiz veya ücret karşılığı) iletmek ve aynı yerden aynı şekilde Karşılık Gelen Kaynağa ek ücret olmaksızın eşdeğer erişim sunmak. Alıcıların Karşılık Gelen Kaynağı nesne koduyla birlikte kopyalamasını zorunlu kılmanız gerekmez. Nesne kodunu kopyalamak için yer bir ağ sunucusuysa, Karşılık Gelen Kaynak, eşdeğer kopyalama tesislerini destekleyen farklı bir sunucuda (sizin veya üçüncü bir tarafça işletilen) olabilir; yeter ki nesne kodunun yanında Karşılık Gelen Kaynağın nerede bulunacağını söyleyen açık yönlendirmeler bulundurasınız. Karşılık Gelen Kaynağı hangi sunucu barındırırsa barındırsın, bu gereklilikleri karşılamak için gerektiği sürece kullanılabilir olmasını sağlamakla yükümlü kalırsınız.
e) Nesne kodunu eşler arası iletim kullanarak iletmek, diğer eşlere nesne kodunun ve eserin Karşılık Gelen Kaynağının alt bölüm 6d uyarınca ücretsiz olarak kamuya sunulduğunu bildirmeniz şartıyla.
Nesne kodunun, kaynak kodu Karşılık Gelen Kaynaktan Sistem Kütüphanesi olarak hariç tutulan ayrılabilir bir kısmının, nesne kodu eserinin iletilmesine dahil edilmesi gerekmez.

"Kullanıcı Ürünü", (1) normalde kişisel, aile veya ev amaçları için kullanılan herhangi bir somut kişisel mülk anlamına gelen "tüketici ürünü" veya (2) bir konuta dahil edilmek üzere tasarlanmış veya satılan herhangi bir şeydir. Bir ürünün tüketici ürünü olup olmadığını belirlemede, şüpheli durumlar kapsam lehine çözülecektir. Belirli bir kullanıcı tarafından alınan belirli bir ürün için, "normalde kullanılır", belirli kullanıcının durumuna veya belirli kullanıcının ürünü gerçekte kullanma veya kullanmayı bekleme ya da kullanmasının beklenme şekline bakılmaksızın, o ürün sınıfının tipik veya yaygın bir kullanımını ifade eder. Bir ürün, önemli ticari, endüstriyel veya tüketici dışı kullanımları olsa bile, bu tür kullanımlar ürünün tek önemli kullanım modunu temsil etmedikçe, bir tüketici ürünüdür.

Bir Kullanıcı Ürünü için "Kurulum Bilgisi", kapsanan bir eserin değiştirilmiş sürümlerini, Karşılık Gelen Kaynağının değiştirilmiş bir sürümünden o Kullanıcı Ürününe kurmak ve yürütmek için gereken herhangi bir yöntem, prosedür, yetkilendirme anahtarı veya diğer bilgiler anlamına gelir. Bilgi, değiştirilmiş nesne kodunun sürekli işleyişinin yalnızca değişiklik yapıldığı için hiçbir durumda engellenmemesini veya müdahale edilmemesini sağlamak için yeterli olmalıdır.

Bu bölüm kapsamında bir nesne kodu eserini bir Kullanıcı Ürününde, onunla birlikte veya özellikle onun içinde kullanılmak üzere iletirseniz ve iletme, Kullanıcı Ürününün zilyetlik ve kullanım hakkının alıcıya sürekli olarak veya sabit bir süre için devredildiği bir işlemin parçası olarak gerçekleşirse (işlemin nasıl nitelendirildiğine bakılmaksızın), bu bölüm kapsamında iletilen Karşılık Gelen Kaynağa Kurulum Bilgisi eşlik etmelidir. Ancak bu gereklilik, ne siz ne de herhangi bir üçüncü taraf, değiştirilmiş nesne kodunu Kullanıcı Ürününe kurma yeteneğini elinde tutmuyorsa (örneğin, eser ROM'a yüklenmişse) geçerli değildir.

Kurulum Bilgisi sağlama gerekliliği, alıcı tarafından değiştirilmiş veya kurulmuş bir eser veya içinde değiştirildiği veya kurulduğu Kullanıcı Ürünü için destek hizmeti, garanti veya güncelleme sağlamaya devam etme gerekliliğini içermez. Değişikliğin kendisi ağın işleyişini maddi ve olumsuz şekilde etkilediğinde veya ağ üzerinden iletişim için kuralları ve protokolleri ihlal ettiğinde bir ağa erişim reddedilebilir.

Bu bölüme uygun olarak iletilen Karşılık Gelen Kaynak ve sağlanan Kurulum Bilgisi, kamuya açık olarak belgelenmiş (ve kaynak kodu biçiminde kamuya açık bir uygulaması bulunan) bir formatta olmalı ve paketten çıkarma, okuma veya kopyalama için özel bir parola veya anahtar gerektirmemelidir.

7. Ek Koşullar.
"Ek izinler", bu Lisansın koşullarından bir veya daha fazlasına istisnalar getirerek bu Lisansın koşullarını tamamlayan koşullardır. Programın tamamına uygulanabilen ek izinler, yürürlükteki yasalar uyarınca geçerli oldukları ölçüde, bu Lisansa dahil edilmiş gibi muamele görecektir. Ek izinler yalnızca Programın bir kısmına uygulanıyorsa, o kısım bu izinler altında ayrı olarak kullanılabilir, ancak Programın tamamı ek izinlere bakılmaksızın bu Lisans tarafından yönetilmeye devam eder.

Kapsanan bir eserin bir kopyasını ilettiğinizde, isteğe bağlı olarak o kopyadan veya onun herhangi bir kısmından herhangi bir ek izni kaldırabilirsiniz. (Ek izinler, eseri değiştirdiğinizde belirli durumlarda kendi kaldırılmalarını gerektirecek şekilde yazılabilir.) Kapsanan bir esere sizin tarafınızdan eklenen ve uygun telif hakkı iznine sahip olduğunuz veya verebileceğiniz materyal üzerine ek izinler yerleştirebilirsiniz.

Bu Lisansın diğer herhangi bir hükmüne bakılmaksızın, kapsanan bir esere eklediğiniz materyal için (bu materyalin telif hakkı sahipleri tarafından yetkilendirilmişseniz) bu Lisansın koşullarını aşağıdaki koşullarla tamamlayabilirsiniz:

a) Bu Lisansın 15. ve 16. bölümlerinin koşullarından farklı şekilde garanti reddi veya sorumluluk sınırlaması; veya
b) O materyalde veya onu içeren eserler tarafından görüntülenen Uygun Yasal Bildirimlerde belirtilen makul yasal bildirimlerin veya yazar atıflarının korunmasını zorunlu kılma; veya
c) O materyalin menşeinin yanlış tanıtılmasını yasaklama veya bu tür materyalin değiştirilmiş sürümlerinin orijinal sürümden farklı olduğunun makul yollarla işaretlenmesini zorunlu kılma; veya
d) Materyalin lisans verenlerinin veya yazarlarının adlarının tanıtım amaçlı kullanımını sınırlama; veya
e) Bazı ticari adların, ticari markaların veya hizmet markalarının kullanımı için marka hukuku kapsamında haklar vermeyi reddetme; veya
f) Materyali (veya değiştirilmiş sürümlerini), alıcıya karşı sözleşmesel sorumluluk üstlenmeleriyle ileten herkes tarafından, bu sözleşmesel üstlenmelerin bu lisans verenlere ve yazarlara doğrudan yüklediği herhangi bir sorumluluk için lisans verenlerin ve yazarların tazmin edilmesini zorunlu kılma.
Diğer tüm izin vermeyen ek koşullar, bölüm 10 anlamında "ilave kısıtlamalar" olarak kabul edilir. Programı aldığınız haliyle veya onun herhangi bir kısmı, bu Lisans tarafından yönetildiğini belirten bir bildirim ve ilave bir kısıtlama olan bir koşul içeriyorsa, o koşulu kaldırabilirsiniz. Bir lisans belgesi ilave bir kısıtlama içeriyor ancak bu Lisans kapsamında yeniden lisanslamaya veya iletmeye izin veriyorsa, kapsanan esere, bu Lisansın koşulları tarafından yönetilen ve ilave kısıtlamanın koşullarına tabi olmayan bir kopya ekleyebilirsiniz. Lisans belgesi ilave bir kısıtlama ise ancak yeniden lisanslamaya veya iletmeye izin vermiyorsa, onu kaldırmalısınız.

Bu bölüm kapsamında kapsanan bir esere ek koşullar koyarsanız, ilgili kaynak dosyalara, bu dosyalar için geçerli olan ek koşulların bir beyanını veya bu koşulların nerede bulunacağını belirten bir bildirim yerleştirmelisiniz.

Ek koşullar, ister izin veren ister izin vermeyen olsun, ayrı bir yazılı lisans olarak veya istisnalar olarak belirtilebilir; yukarıdaki gereklilikler her iki durumda da geçerlidir.

8. Fesih.
Bu Lisans aksini öngörmedikçe, kapsanan bir eseri iletemez veya değiştiremezsiniz. Bunu yapmaya yönelik diğer herhangi bir girişim geçersizdir ve bu Lisans kapsamındaki haklarınızı otomatik olarak fesheder (11. bölümün üçüncü paragrafı uyarınca verilmiş olabilecek patent lisansları dahil).

Ancak, bu Lisansı ihlal etmeyi bırakırsanız, belirli bir telif hakkı sahibinden aldığınız lisans, (a) telif hakkı sahibi lisansınızı açıkça feshedene kadar geçici olarak ve (b) telif hakkı sahibi ihlali durdurduktan sonraki 60 gün içinde makul bir yolla size ihlali bildirmezse kalıcı olarak eski haline gelir.

Ayrıca, belirli bir telif hakkı sahibinden aldığınız lisans, telif hakkı sahibi size makul bir yolla ihlali bildirirse ve bu Lisansı ihlal ettiğinizi telif hakkı sahibinden ilk kez bildirim almanızsa ve bildirimi aldıktan sonraki 30 gün içinde ihlali düzeltirseniz kalıcı olarak eski haline gelir.

Haklarınızın bu bölüm uyarınca feshedilmesi, bu Lisans kapsamında sizden kopya veya hak almış olan tarafların lisanslarını feshetmez. Haklarınız feshedilmiş ve kalıcı olarak eski haline gelmemişse, aynı materyal için bölüm 10 uyarınca yeni bir lisans almaya hakkınız yoktur.

9. Kopya Sahibi Olmak İçin Kabule Gerek Yok.
Kapsanan bir eserin bir kopyasını almak veya çalıştırmak için bu Lisansı kabul etmeniz gerekmez. Kapsanan bir eserin yalnızca eşler arası iletim kullanımı sonucunda ortaya çıkan yardımcı yayılması da kabul gerektirmez. Ancak, bu Lisans dışında hiçbir şey size herhangi bir kapsanan eseri yayma veya değiştirme izni vermez. Telif hakkını ihlal ederseniz, bu eylemler bu Lisansı kabul ettiğinizi gösterir. Buna göre, kapsanan bir eseri değiştirerek veya yayarak, bu Lisansı ve eserle ilgili tüm hüküm ve koşullarını kabul ettiğinizi belirtmiş olursunuz.

10. Aşağı Yöndeki Alıcıların Otomatik Lisanslanması.
Kapsanan bir eseri her ilettiğinizde, alıcı, orijinal lisans verenlerden, bu Lisans uyarınca bu eseri çalıştırma, değiştirme ve yayma lisansını otomatik olarak alır. Alıcıların aldıkları haklara uymasını sağlamaktan sorumlu değilsiniz. Üçüncü taraflara uygunluğu dayatmak için yasal işlem başlatıp başlatmamak size kalmıştır.

Bu Lisans kapsamındaki hakların kullanımına, ilave kısıtlamalar getiren herhangi bir koşulu kabul etmeye zorlanamazsınız. Bir aracı, bir ödeme veya benzeri bir yükümlülük, bu Lisansın ilave bir kısıtlaması değildir.

11. Patentler.
Bir "katkıda bulunan", bu Lisans kapsamında Programın veya Programın dayandığı bir eserin kullanımını yetkilendiren bir telif hakkı sahibidir. Bu şekilde lisanslanan eser, katkıda bulunanın "katkıda bulunulan sürümü" olarak adlandırılır.

Bir katkıda bulunanın "temel patent talepleri", katkıda bulunanın sahip olduğu veya kontrol ettiği, ister halihazırda edinilmiş ister bundan sonra edinilecek olsun, bu Lisans tarafından izin verilen bir şekilde, katkıda bulunulan sürümünü yapmak, kullanmak veya satmakla ihlal edilecek olan tüm patent talepleridir; ancak yalnızca katkıda bulunulan sürümün daha fazla değiştirilmesinin bir sonucu olarak ihlal edilecek olan talepleri içermez. Bu tanımın amaçları doğrultusunda, "kontrol", bir patenti bu Lisansın gereklilikleriyle tutarlı bir şekilde alt lisanslama hakkını içerir.

Her katkıda bulunan, size, katkıda bulunanın temel patent talepleri kapsamında, Programın kapsadığı eserlerin içeriğini yapmak, kullanmak, satmak, satışa sunmak, ithal etmek ve başka şekilde çalıştırmak, değiştirmek ve yaymak için dünya çapında, gayri maddi, telifsiz bir patent lisansı verir.

Aşağıdaki üç paragraf, bir "patent lisansı", bir patent lisansı vermemeye yönelik herhangi bir açık anlaşma veya taahhüt, taahhüt etmeme veya benzeri bir düzenlemedir (bir patent lisansının yazılı bir beyanı, bir patent davası açmama sözleşmesi veya bir patent iddiasında bulunmama sözleşmesi gibi). Bir katkıda bulunanın size böyle bir patent lisansı vermesi veya sizin böyle bir patent lisansını bir katkıda bulunandan almanız, bu Lisans kapsamında size verilen diğer lisansları etkilemez.

Bir patent lisansını, bu Lisansın belirli bir kapsanan eserin belirli bir kullanıcısına veya kullanıcı grubuna karşı belirli bir patent lisansını uygulama veya uygulamama hakkı koşuluna bağlı olarak, bu Lisans kapsamındaki herhangi bir hakkın kullanılmasını veya herhangi bir yükümlülüğün yerine getirilmesini yasaklayan veya engelleyen bir patent lisansı düzenlemesi (bir çapraz lisans veya karşılıklı lisans anlaşması gibi) ile bağlantılı olarak bir kapsanan eseri iletirseniz, bu Lisans kapsamında size verilen patent lisansı ve bu Lisansın kendisi, bu patent lisansı düzenlemesine taraf olmanızın bir sonucu olarak otomatik olarak feshedilir.

Bir patent lisansını, kapsanan bir eserin belirli bir kullanıcısına veya kullanıcı grubuna karşı belirli bir patenti uygulamama konusunda ayrımcılık yapan veya ayrımcı bir şekilde uygulanan bir patent lisansı düzenlemesi ile bağlantılı olarak bir kapsanan eseri iletirseniz, bu Lisans kapsamında size verilen patent lisansı ve bu Lisansın kendisi, bu patent lisansı düzenlemesine taraf olmanızın bir sonucu olarak otomatik olarak feshedilir.

12. Başkalarının Özgürlüğünden Vazgeçmemek.
Size dayatılan koşullar (mahkeme kararı, anlaşma veya başka bir şekilde) bu Lisansın koşullarıyla çelişiyorsa, sizi bu Lisansın koşullarından muaf tutmazlar. Kapsanan bir eseri aynı anda hem bu Lisans kapsamındaki yükümlülüklerinizi yerine getirecek hem de diğer ilgili yükümlülüklere uyacak şekilde iletemiyorsanız, sonuç olarak onu hiç iletemezsiniz. Örneğin, kendilerine Programı ilettiğiniz kişilerden telif hakkı ödemelerini talep etmenizi gerektiren koşulları kabul ederseniz, hem bu koşulları hem de bu Lisansı aynı anda yerine getirmenin tek yolu, Programı iletmekten tamamen kaçınmaktır.

13. GNU Affero Genel Kamu Lisansı ile Kullanım.
Bu Lisansın diğer hükümlerine bakılmaksızın, kapsanan bir eseri, GNU Affero Genel Kamu Lisansının 3. sürümü kapsamında lisanslanan bir eserle bir bağlantılı veya birleşik eser halinde birleştirme veya bağlama izniniz vardır ve ortaya çıkan eseri iletme izniniz vardır. Bu Lisansın koşulları, kapsanan eser olan kısım için geçerli olmaya devam edecektir, ancak etkileşimli kullanıcı arayüzleri aracılığıyla uzaktan ağ etkileşimini yöneten GNU Affero Genel Kamu Lisansının özel gereklilikleri, uygun şekilde kombinasyon için geçerli olacaktır.

14. Bu Lisansın Gözden Geçirilmiş Sürümleri.
Free Software Foundation, zaman zaman GNU Genel Kamu Lisansının gözden geçirilmiş ve/veya yeni sürümlerini yayınlayabilir. Bu tür yeni sürümler, mevcut sürüme ruh olarak benzer olacak, ancak yeni sorunları veya endişeleri ele almak için ayrıntıda farklılık gösterebilir.

Her sürüme ayırt edici bir sürüm numarası verilir. Program, kendisine uygulanan GNU Genel Kamu Lisansının belirli bir numaralı sürümünü veya "herhangi bir sonraki sürümünü" belirtiyorsa, belirtilen sürümün veya Free Software Foundation tarafından yayınlanan herhangi bir sonraki sürümün hüküm ve koşullarına uyma seçeneğiniz vardır. Program, GNU Genel Kamu Lisansının bir sürüm numarası belirtmiyorsa, Free Software Foundation tarafından şimdiye kadar yayınlanmış herhangi bir sürümü seçebilirsiniz.

Program bir vekilin hangi GNU Genel Kamu Lisansı sürümlerinin kullanılabileceğine karar verebileceğini belirtiyorsa, vekilin bir sürümü kamuya açık olarak kabul etme beyanı, sizin o sürümü seçmenize kalıcı olarak izin verir.

Daha sonraki lisans sürümleri size ek veya farklı izinler verebilir. Ancak, daha sonraki bir sürümü takip etmeyi seçmeniz nedeniyle hiçbir yazara veya telif hakkı sahibine ek yükümlülükler yüklenmez.

15. Garanti Reddi.
PROGRAM İÇİN, YÜRÜRLÜKTEKİ YASALARIN İZİN VERDİĞİ ÖLÇÜDE HİÇBİR GARANTİ YOKTUR. AKSİ YAZILI OLARAK BELİRTİLMEDİKÇE, TELİF HAKKI SAHİPLERİ VE/VEYA DİĞER TARAFLAR PROGRAMI "OLDUĞU GİBİ", HERHANGİ BİR TÜRDE AÇIK VEYA ZIMNİ GARANTİ OLMAKSIZIN SAĞLAR; BUNLARA SATILABİLİRLİK VE BELİRLİ BİR AMACA UYGUNLUK GARANTİLERİ DAHİL OLMAK ÜZERE ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE. PROGRAMIN KALİTESİ VE PERFORMANSINA İLİŞKİN TÜM RİSK SİZE AİTTİR. PROGRAMIN KUSURLU OLDUĞUNUN KANITLANMASI DURUMUNDA, GEREKLİ TÜM SERVİS, ONARIM VEYA DÜZELTME MASRAFLARINI SİZ ÜSTLENİRSİNİZ.

16. Sorumluluk Sınırlaması.
YÜRÜRLÜKTEKİ YASALAR TARAFINDAN AKSİ GEREKTİRMEDİKÇE VEYA YAZILI OLARAK KABUL EDİLMEDİKÇE, HİÇBİR DURUMDA HİÇBİR TELİF HAKKI SAHİBİ VEYA PROGRAMI YUKARIDA İZİN VERİLDİĞİ ŞEKİLDE DEĞİŞTİREN VE/VEYA İLETEN BAŞKA BİR TARAF, PROGRAMIN KULLANIMINDAN VEYA KULLANILAMAMASINDAN KAYNAKLANAN GENEL, ÖZEL, ARIZİ VEYA SONUÇTA ORTAYA ÇIKAN ZARARLAR DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE (VERİ KAYBI VEYA VERİLERİN YANLIŞ HALE GELMESİ VEYA SİZİN VEYA ÜÇÜNCÜ TARAFLARIN UĞRADIĞI KAYIPLAR VEYA PROGRAMIN BAŞKA HERHANGİ BİR PROGRAMLA ÇALIŞMAMASI DAHİL), BÖYLE BİR TELİF HAKKI SAHİBİ VEYA DİĞER TARAF BU TÜR ZARARLARIN OLASILIĞI KONUSUNDA BİLGİLENDİRİLMİŞ OLSA BİLE, ZARARLARDAN SİZE KARŞI SORUMLU DEĞİLDİR.

17. 15. ve 16. Bölümlerin Yorumlanması.
Yukarıdaki garanti reddi ve sorumluluk sınırlaması, yerel yasalar uyarınca hükümlerinde yasal olarak geçerli değilse, temyiz mahkemeleri, Programla bağlantılı olarak tüm sivil sorumluluktan mutlak bir feragat anlamına en yakın olan yerel yasayı uygulamalıdır; Programa bir ücret karşılığında bir garanti veya sorumluluk üstlenme eşlik etmedikçe.

HÜKÜM VE KOŞULLARIN SONU

Yukarıdakilerin tümü kopyalama, değiştirme ve dağıtım için geçerlidir. Bu Lisansı ve ilgili tüm bildirimleri görüntüleme hakkı, Lisansın bir kopyasını alan herkese verilir.`;

const licenseTextEn = `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

Preamble
The GNU General Public License is a free, copyleft license for software and other kinds of works.

The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.

The precise terms and conditions for copying, distribution and modification follow.

TERMS AND CONDITIONS
0. Definitions.
"This License" refers to version 3 of the GNU General Public License.

"Copyright" also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.

"The Program" refers to any copyrightable work licensed under this License. Each licensee is addressed as "you". "Licensees" and "recipients" may be individuals or organizations.

To "modify" a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a "modified version" of the earlier work or a work "based on" the earlier work.

A "covered work" means either the unmodified Program or a work based on the Program.

To "propagate" a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.

To "convey" a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.

An interactive user interface displays "Appropriate Legal Notices" to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.

1. Source Code.
The "source code" for a work means the preferred form of the work for making modifications to it. "Object code" means any non-source form of a work.

A "Standard Interface" means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.

The "System Libraries" of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A "Major Component", in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.

The "Corresponding Source" for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.

The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.

The Corresponding Source for a work in source code form is that same work.

2. Basic Permissions.
All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.

You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.

Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.

3. Protecting Users' Legal Rights From Anti-Circumvention Law.
No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.

When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.

4. Conveying Verbatim Copies.
You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.

You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.

5. Conveying Modified Source Versions.
You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:

a) The work must carry prominent notices stating that you modified it, and giving a relevant date.
b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to "keep intact all notices".
c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it.
d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so.
A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an "aggregate" if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.

6. Conveying Non-Source Forms.
You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:

a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange.
b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge.
c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b.
d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements.
e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d.
A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.

A "User Product" is either (1) a "consumer product", which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, "normally used" refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.

"Installation Information" for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.

If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).

The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.

Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.

7. Additional Terms.
"Additional permissions" are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.

When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.

Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:

a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or
b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or
c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or
d) Limiting the use for publicity purposes of names of licensors or authors of the material; or
e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or
f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors.
All other non-permissive additional terms are considered "further restrictions" within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.

If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.

Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.

8. Termination.
You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).

However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.

Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.

Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.

9. Acceptance Not Required for Having Copies.
You are not required to accept this License in order to receive or run a copy of the covered work. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.

10. Automatic Licensing of Downstream Recipients.
Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.

An "entity transaction" is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.

You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

11. Patents.
A "contributor" is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's "contributor version".

A contributor's "essential patent claims" are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, "control" includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.

Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.

In the following three paragraphs, a "patent license" is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To "grant" such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.

If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. "Knowingly relying" means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.

If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.

A patent license is "discriminatory" if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.

Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.

12. No Surrender of Others' Freedom.
If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.

13. Use with the GNU Affero General Public License.
Notwithstanding any other provision of this License, you have permission to link or combine any covered work with a work licensed under version 3 of the GNU Affero General Public License into a single combined work, and to convey the resulting work. The terms of this License will continue to apply to the part which is the covered work, but the special requirements of the GNU Affero General Public License, section 13, concerning interaction through a network will apply to the combination as such.

14. Revised Versions of this License.
The Free Software Foundation may publish revised and/or new versions of the GNU General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the GNU General Public License "or any later version" applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of the GNU General Public License, you may choose any version ever published by the Free Software Foundation.

If the Program specifies that a proxy can decide which future versions of the GNU General Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.

Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.

15. Disclaimer of Warranty.
THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

16. Limitation of Liability.
IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

17. Interpretation of Sections 15 and 16.
If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.

END OF TERMS AND CONDITIONS

All above applies to copying, modification and distribution. The right to view this License and all associated notices is granted to everyone who receives a copy.`;

const faqData = {
      tr: [
        { q: "ArchiveOS kimler için?", a: "ArchiveOS özellikle Linux'a yeni başlayan kullanıcılar için tasarlanmıştır. Karmaşık yapılandırmalarla uğraşmadan Linux kullanmak isteyen kullanıcılar için sade ve erişilebilir bir deneyim sunmayı amaçlar." },
        { q: "ArchiveOS hangi masaüstünü kullanıyor?", a: "ArchiveOS, KDE Plasma masaüstü ortamını kullanır." },
        { q: "ArchiveOS güncellemelerini nasıl alıyor?", a: "ArchiveOS güncellemeleri ArchiveOS Update Manager üzerinden kontrol edilebilir ve yüklenebilir." },
        { q: "ArchiveOS düşük sistemlerde çalışır mı?", a: "Evet, minimum 4 GB RAM ve ZRAM optimizasyonu ile düşük donanımlı bilgisayarlarda çalışabilecek şekilde optimize edilmiştir." },
        { q: "Flatpak desteği var mı?", a: "Evet, Flatpak desteği ArchiveOS ile birlikte hazır gelir." },
        { q: "Sistemimi geri yükleyebilir miyim?", a: "Evet, Timeshift ile sisteminizin geri yükleme noktalarını oluşturabilir ve sorun durumunda geri dönebilirsiniz." },
        { q: "ArchiveOS ücretsiz mi?", a: "Evet, ArchiveOS özgür ve açık kaynaklı bir yazılımdır. GNU GPLv3 ile lisanslanmıştır." }
      ],
      en: [
        { q: "Who is ArchiveOS for?", a: "ArchiveOS is especially designed for users who are new to Linux. It aims to provide a simple and accessible experience for people who want to use Linux without dealing with complicated configuration." },
        { q: "Which desktop environment does ArchiveOS use?", a: "ArchiveOS uses the KDE Plasma desktop environment." },
        { q: "How does ArchiveOS receive updates?", a: "ArchiveOS updates can be checked for and installed through the ArchiveOS Update Manager." },
        { q: "Can ArchiveOS run on low-end hardware?", a: "Yes. It is optimized for lower-end hardware and requires at least 4 GB of RAM, with ZRAM optimization enabled." },
        { q: "Does ArchiveOS support Flatpak?", a: "Yes. Flatpak support is included with ArchiveOS." },
        { q: "Can I restore my system?", a: "Yes, you can create system restore points with Timeshift and restore your system if something goes wrong." },
        { q: "Is ArchiveOS free?", a: "Yes. ArchiveOS is free and open-source software licensed under the GNU GPLv3." }
      ]
    };
