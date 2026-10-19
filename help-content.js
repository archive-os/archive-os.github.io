const helpContent = {
  "tr": {
    "help": "Yardım",
    "home": "Ana sayfa",
    "title": "ArchiveOS Yardım",
    "intro": "İlk kurulumdan günlük kullanıma: uygulamalar, kurulum adımları ve bilinen sorunlar.",
    "general": "Genel",
    "errors": "Hatalar",
    "installation": "Kurulum",
    "general_title": "Uygulamalar ve günlük kullanım",
    "general_intro": "Bu bölüm v2.0.3 içindir. Önceki sürümlerde bazı araçlar ayrı uygulamalar olarak bulunabilir.",
    "apps": [
      [
        "ArchiveOS Store",
        "Uygulama kurma, kaldırma ve güncelleme işlemlerini buradan yapın. APT, Flatpak, Snap ve ArchiveOS kaynaklarını yönetin. Update Manager, v2.0.3’te ArchiveOS Store’a entegre edildi; sistem güncellemeleri için mağazanın Güncellemeler bölümünü açın."
      ],
      [
        "Welcome to ArchiveOS",
        "İlk adımlar ve görünüm ayarları için Welcome’ı açın. Sistem güncellemeleri ve uygulama işlemleri için ArchiveOS Store’a geçin."
      ],
      [
        "Timeshift",
        "Sistem geri yükleme noktaları oluşturur. İlk açılışta kurulum sihirbazını tamamlayıp anlık görüntü türünü, kayıt konumunu ve zamanlamayı seçin. Sistem yedeği, kişisel dosyalarınızın ayrı yedeğinin yerini tutmaz."
      ],
      [
        "ArchiveOS Gaming Center",
        "Oyunlarınızı tek kütüphanede toplayın. Masaüstü veya konsol görünümünü kullanın; Windows oyunları için gerekli ortamı ve çalıştırıcıyı oyuna göre seçin."
      ],
      [
        "ArchiveOS Terminal",
        "Komut çalıştırmak ve klasörlerde terminal açmak için kullanın. Sekmelerle farklı işleri ayrı tutabilir, kopyala ve yapıştır kısayollarını kullanabilirsiniz."
      ],
      [
        "Dokunmatik Klavye",
        "Fiziksel klavye olmadan yazmak için klavyeyi elle açın. İhtiyacınıza göre dil ve klavye düzenini seçin; işiniz bitince kapatın."
      ],
      [
        "Windows Uygulama Desteği",
        "EXE dosyalarını seçtiğiniz Wine veya GE-Proton sürümüyle çalıştırın. İndir ve kur bölümünde Wine desteğini kurabilir/onarabilir; UMU, GE-Proton ve ProtonUp-Qt araçlarını hazırlayabilirsiniz. Sürüm seçiminiz saklanır; ek sürümler ayrı ortam kullanır. Oyunlar için Gaming Center’a geçebilirsiniz."
      ],
      [
        "Aosver ve KDE Plasma",
        "ArchiveOS sürümünüzü ve sistem bilgilerinizi Aosver ile görün. Ekran, ağ, klavye ve masaüstü tercihlerini KDE Sistem Ayarları’ndan düzenleyin."
      ]
    ],
    "errors_title": "Bilinen sorunlar ve çözümleri",
    "update_title": "Update Manager çalışmıyor",
    "legacy": "ArchiveOS v2.0.1 ve v2.0.2",
    "legacy_text": "Update Manager, ArchiveOS v2.0.1 ve v2.0.2’de ayrı bir uygulama olarak bulunuyordu. Bu sürümlerden birini kullanıyorsanız ve Update Manager’da “güncelleme yok” görüyorsanız Timeshift’in ilk kurulumunu tamamlayıp yeniden deneyin.",
    "legacy_steps": [
      "Timeshift uygulamasını açın.",
      "İlk kurulum sihirbazını tamamlayın; sisteminize uygun anlık görüntü türünü, kayıt konumunu ve zamanlamayı seçin.",
      "Update Manager’a dönüp güncellemeleri yeniden denetleyin."
    ],
    "legacy_note": "Buradaki “kurulum”, Timeshift’in ilk yapılandırmasıdır; ArchiveOS’u yeniden kurmanız gerekmez.",
    "current_title": "ArchiveOS v2.0.3’te ne değişti?",
    "current_text": "Update Manager, v2.0.3’te ArchiveOS Store’a entegre edildi. Artık ayrı bir Update Manager uygulaması bulunmuyor. Sistem ve uygulama güncellemelerini ArchiveOS Store → Güncellemeler bölümünden yönetin; tümünü güncellemek için “Tümünü seç ve güncelle” seçeneğini kullanın.",
    "unresolved_title": "Sorun devam ediyorsa",
    "unresolved_text": "Aosver’den ArchiveOS sürümünüzü kontrol edin. İnternet bağlantınızı doğrulayın ve görünen hata mesajını kaydedin. Destek isterken sürümünüzü, yaptığınız işlemi ve hata mesajını paylaşın.",
    "install_title": "Dango Loader ile ArchiveOS kurulumu",
    "install_intro": "Canlı ArchiveOS oturumundaki Dango Loader, kurulum boyunca sizi adım adım yönlendirir. Seçenekler, ISO’daki Dango sürümüne ve algılanan disklere göre değişebilir.",
    "prepare_title": "Başlamadan önce",
    "prepare": [
      "Önemli dosyalarınızı ayrı bir diske yedekleyin. Disk ve bölüm seçimleri verileri silebilir.",
      "En az 4 GB RAM ve ArchiveOS için en az 32 GB alan hazırlayın. Uygulamalar ve kişisel dosyalar için daha fazla alan ayırın.",
      "Hazırlık: USB belleğe ISO yazdırma ve USB’den başlatma adımları aşağıdadır."
    ],
    "steps_title": "Kurulum adımları",
    "steps": [
      [
        "Karşılama",
        "Kurulum dilini ve isterseniz görünümü seçin."
      ],
      [
        "Konum",
        "Bölgenizi ve saat diliminizi haritadan veya listeden seçin."
      ],
      [
        "Klavye",
        "Kullanacağınız klavye düzenini ve varsa varyantını seçin."
      ],
      [
        "Depolama",
        "“Disk algılama” ile diskleri tarayın. Önce hedef diski kapasitesi ve modeliyle kontrol edip seçin, ardından aşağıdaki kurulum yöntemlerinden birini kullanın."
      ],
      [
        "Kullanıcı",
        "Adınızı, kullanıcı adınızı ve parolanızı belirleyin. Bu parola oturum açma ve yönetici işlemleri için kullanılır. Güvenilir parola seçeneği açıkken en az 8 karakter kullanın."
      ],
      [
        "Özet",
        "Hedef diski, kurulum yöntemini, bölümleri ve biçimlendirme işlemlerini kontrol edin. Seçiminiz doğruysa kurulumu onaylayın."
      ],
      [
        "Kurulum",
        "Dosyalar kopyalanırken ve sistem hazırlanırken bekleyin. Ayrıntıları “Terminal” düğmesiyle ayrı pencerede takip edebilirsiniz."
      ],
      [
        "Bitiş",
        "Başarı ekranından sonra yeniden başlatın. Yeniden başlatma sırasında kurulum USB’sini çıkarıp kurulu sistemi açın."
      ]
    ],
    "modes_title": "Hangi kurulum yöntemini seçmeliyim?",
    "modes": [
      [
        "Diski silerek kurulum",
        "Seçtiğiniz diski yalnız ArchiveOS için kullanır. O diskteki mevcut işletim sistemleri, bölümler ve dosyalar silinir. Boş bir disk veya içeriğini silmek istediğiniz disk için seçin."
      ],
      [
        "Windows yanına kurulum (dual boot)",
        "Windows’u koruyarak aynı diske ArchiveOS kurmak içindir. Önce Windows’un bulunduğu diski seçin, sonra Windows yanına kurulum seçeneğini açın. Algılanan Windows bölümünü seçip alan kaydırıcısıyla ArchiveOS’a ayıracağınız alanı belirleyin. Windows ve kişisel dosyalar için yeterli boş alan bırakın. Windows bölümü görünmüyorsa veya küçültme reddediliyorsa işlemi zorlamayın; disk seçimini ve Windows’un tamamen kapatıldığını kontrol edin. Kurulumdan sonra önyükleme menüsünden Windows veya ArchiveOS’u seçebilirsiniz."
      ],
      [
        "Mevcut bölümler / elle kurulum",
        "Hazır disk bölümlerini kullanmak isteyen deneyimli kullanıcılar içindir. ArchiveOS kök bölümünü ve UEFI kurulumunda uygun EFI bölümünü seçin. Windows’un EFI bölümünü biçimlendirmeyin. “Gelişmiş” ile KDE Partition Manager’ı açabilirsiniz; yalnız ne işe yaradığını bildiğiniz bölümleri değiştirin."
      ]
    ],
    "disk_title": "Dosya sistemi ve ZRAM",
    "disk_text": "Btrfs varsayılan dosya sistemidir; Ext4 alternatifi de vardır. Btrfs, anlık görüntü araçlarıyla kullanılabilir; kurulum tek başına Timeshift zamanlamasını yapılandırmaz. ZRAM seçeneği bellekte sıkıştırılmış takas alanı sağlar; diskte bir hazırda bekletme bölümü değildir.",
    "boot_note": "Windows ile çift önyükleme için USB’yi Windows’un kullandığı önyükleme modunda başlatın (UEFI veya BIOS). Kurulum özetinde seçili diskin ve korunacak Windows bölümlerinin doğru olduğunu son kez kontrol edin.",
    "back": "Ana sayfaya dön",
    "theme": "Açık veya koyu temayı değiştir",
    "menu": "Gezinme menüsü",
    "dualboot": "Dual boot sonrası sorunlar",
    "dual_title": "Dual boot sonrası Windows görünmüyor mu?",
    "dual_intro": "Dual boot kurulumundan sonra açılış menüsünde Windows seçeneği yoksa panik yapmayın. Menüde görünmemesi tek başına Windows’un silindiği anlamına gelmez. Bilgisayarınızın kendi başlatma menüsünden Windows’u seçmeyi deneyebilirsiniz.",
    "dual_steps_title": "Windows’u başlatma menüsünden açın",
    "dual_steps": [
      "Kurulum USB’sini çıkarın ve bilgisayarı yeniden başlatın.",
      "Marka logosu belirir belirmez aşağıdaki tabloda markanız için yazan Boot Menu tuşuna art arda basın. HP’de önce Esc, ardından F9 kullanın.",
      "Başlatma seçeneklerinde, önyükleme kayıtları korunmuş bir UEFI dual boot kurulumunda “Windows Boot Manager” ve “ArchiveOS” girişlerini görebilirsiniz. Windows için “Windows Boot Manager”ı, ArchiveOS için kendi girişini seçip Enter’a basın.",
      "Bilgisayar her seferinde aynı sistemi açıyorsa BIOS/UEFI içindeki Boot / Boot Priority bölümünden tercih ettiğiniz mevcut önyükleme girişini ilk sıraya alabilirsiniz."
    ],
    "dual_missing_title": "Windows Boot Manager da görünmüyorsa",
    "dual_missing_text": "Listede iki girişin birden görünmesi her bilgisayarda garanti değildir. Giriş adları, kurulumun UEFI/BIOS moduna ve üreticiye göre değişebilir. Windows Boot Manager yoksa yeniden kurulum veya bölüm silme yapmayın; Windows diskinin algılandığını ve kurulumların aynı önyükleme modunda olduğunu kontrol ederek destek alın.",
    "keys_title": "Markaya göre Boot Menu ve BIOS tuşları",
    "keys_intro": "Boot Menu, bu açılışta hangi USB’nin veya işletim sisteminin başlayacağını seçer. BIOS/UEFI ise kalıcı önyükleme sırası dahil ayarları açar. Bilgisayar açılırken marka logosunda ilgili tuşa basın; tuşu kaçırırsanız yeniden başlatıp deneyin.",
    "keys_note": "Tuşlar modele göre değişebilir. Bazı dizüstülerde F tuşuyla birlikte Fn kullanmanız gerekir. Acer’da F12 Boot Menu seçeneğini önce BIOS’tan etkinleştirmek gerekebilir. Markanız yoksa veya tuş çalışmıyorsa cihazınızın model kılavuzuna bakın.",
    "keys_headers": [
      "Marka / model ailesi",
      "Boot Menu (başlatma seçimi)",
      "BIOS / UEFI ayarları",
      "Üretici kaynağı"
    ],
    "keys_rows": [
      [
        "Dell",
        "F12",
        "F2",
        [
          "https://www.dell.com/support/kbdoc/en-us/000126121/access-uefi-bios-system-setup-from-windows-on-your-dell-system"
        ]
      ],
      [
        "HP",
        "Esc → F9",
        "Esc → F10",
        [
          "https://jp.ext.hp.com/v-ivr/common/bios/faq/05/"
        ]
      ],
      [
        "Lenovo",
        "F12 / Fn + F12",
        "IdeaPad: F2 / Fn + F2; ThinkPad ve masaüstü: F1",
        [
          "https://support.lenovo.com/us/en/solutions/ht104668",
          "https://support.lenovo.com/na/uk/solutions/ht500222-recommended-ways-to-enter-bios-boot-menu-thinkpad-thinkcentre-thinkstation"
        ]
      ],
      [
        "ASUS",
        "Esc; BIOS içinden F8",
        "F2; bazı masaüstülerde Del",
        [
          "https://www.asus.com/global/support/faq/1013017/",
          "https://www.asus.com/support/faq/1008829/"
        ]
      ],
      [
        "Acer",
        "F12 (gerekirse BIOS’tan etkinleştirin)",
        "Dizüstü: F2; masaüstü: Del",
        [
          "https://community.acer.com/en/kb/articles/12915-changing-boot-order",
          "https://community.acer.com/tr/kb/articles/563-why-cant-i-get-the-f12-boot-menu-to-work-on-my-notebook-or-net"
        ]
      ],
      [
        "MSI",
        "F11",
        "Del (Delete)",
        [
          "https://us.msi.com/support/technical_details/NB_OS_USB_Device_Detection"
        ]
      ]
    ],
    "source": "Kaynak",
    "usb_title": "1. Kurulum USB’sini hazırlayın",
    "usb_intro": "ArchiveOS ISO dosyasını ana sayfadaki indirme bölümünden indirin. USB’deki dosyaları önceden yedekleyin: Rufus ile yazdırma veya Ventoy’un ilk kurulumu seçtiğiniz USB’nin içeriğini silebilir. Aşağıdaki yöntemlerden birini kullanın.",
    "usb_methods": [
      [
        "Ventoy (Windows / Linux)",
        "Ventoy’u resmi sitesinden indirin. Doğru USB belleği seçip Ventoy’u bu belleğe kurun. Ardından ArchiveOS .iso dosyasını USB’nin büyük veri bölümüne normal bir dosya gibi kopyalayın; ISO’nun içini çıkarmayın. Ventoy zaten kuruluysa ISO’yu kopyalamanız yeterlidir.",
        "https://ventoy.net/en/doc_start.html"
      ],
      [
        "Rufus (Windows)",
        "Rufus’u resmi sitesinden açın. Aygıt bölümünde USB belleğinizi seçin, “SEÇ” ile ArchiveOS ISO dosyasını gösterin. Bölüm düzeni ve hedef sistem ayarlarını bilgisayarınızın UEFI/BIOS moduna uygun seçip “BAŞLAT”a basın. Yazma işlemi tamamlanana kadar bekleyin.",
        "https://rufus.ie/"
      ]
    ],
    "usb_boot_title": "2. USB belleği açılış menüsünden seçin",
    "usb_boot_steps": [
      "Hazırladığınız USB belleği takın ve bilgisayarı yeniden başlatın.",
      "Marka logosu görünürken aşağıdaki tablodaki Boot Menu tuşuna basın. Bu menüden USB belleğinizin adını seçip Enter’a basın. Windows UEFI kullanıyorsa varsa USB’nin “UEFI: …” girişini seçin.",
      "Ventoy kullandıysanız önce Ventoy listesinden ArchiveOS ISO dosyasını seçip Enter’a basın. Mod sorulursa normal başlatma seçeneğiyle devam edin. Rufus ile hazırlanan USB’de Ventoy listesi görünmez.",
      "ArchiveOS’un mavi yazılı başlangıç ekranı geldiğinde en üstte seçili olan ArchiveOS seçeneğine Enter’a basın. Tuşa basmazsanız geri sayımın sonunda kendisi başlar. Bu ekran, bilgisayarınıza kurulum yapmadan önce canlı ArchiveOS oturumunu açar."
    ],
    "usb_live_title": "3. Canlı masaüstünde kurulumu başlatın",
    "usb_live_text": "Masaüstü açılınca Dango Loader’ı açın; istenirse yönetici yetkisini onaylayın. Ardından aşağıdaki dil, konum, klavye ve disk seçimi adımlarını izleyin.",
    "windows_help_title": "Windows Uygulama Desteği nasıl kullanılır?",
    "windows_steps": [
      "“İndir ve kur” sekmesinden Wine desteğini kurun veya onarın. GE-Proton kullanacaksanız UMU’yu da kurun; sürüm indirmek için GE-Proton veya ProtonUp-Qt araçlarını kullanın.",
      "Kurulum veya indirme bitince “Yenile” ile sürüm listesini güncelleyin ve kullanmak istediğiniz Wine/Proton sürümünü seçin.",
      "“Uygulama çalıştır” sekmesinde “EXE dosyası seç ve çalıştır” ile programınızı açın.",
      "Wine sürümlerinde “Wine ortamı” sekmesinden yapılandırmayı, Winetricks’i ve sanal C: sürücüsünü açabilirsiniz. Oyunlarınızı yönetmek için Gaming Center’a geçin."
    ],
    "windows_note": "GE-Proton için UMU gerekir. Wine ortam araçları Wine sürümleri içindir; Proton ile program açmak için Uygulama çalıştır sekmesini kullanın. Uyumluluk uygulamaya göre değişir; her Windows programı veya oyunu çalışmayabilir."
  },
  "en": {
    "help": "Help",
    "home": "Home",
    "title": "ArchiveOS Help",
    "intro": "From your first installation to everyday use: apps, installation steps and known issues.",
    "general": "General",
    "errors": "Errors",
    "installation": "Installation",
    "general_title": "Apps and everyday use",
    "general_intro": "This section covers v2.0.3. Some tools may be separate applications on earlier releases.",
    "apps": [
      [
        "ArchiveOS Store",
        "Install, remove and update applications here. Manage APT, Flatpak, Snap and ArchiveOS sources. Update Manager was integrated into ArchiveOS Store in v2.0.3; open the store’s Updates section for system updates."
      ],
      [
        "Welcome to ArchiveOS",
        "Open Welcome for first steps and appearance settings. Use ArchiveOS Store for system updates and application management."
      ],
      [
        "Timeshift",
        "Create system restore points. Complete the initial setup wizard and choose the snapshot type, storage location and schedule. System snapshots do not replace a separate backup of your personal files."
      ],
      [
        "ArchiveOS Gaming Center",
        "Organize your games in one library. Use desktop or console view and choose the appropriate environment and runner for each Windows game."
      ],
      [
        "ArchiveOS Terminal",
        "Run commands or open a terminal in a folder. Keep tasks in separate tabs and use the copy and paste shortcuts."
      ],
      [
        "Touch Keyboard",
        "Open the keyboard manually to type without a physical keyboard. Choose a language and layout, then close it when finished."
      ],
      [
        "Windows App Support",
        "Run EXE files with your selected Wine or GE-Proton version. In Download and install, install/repair Wine support and prepare UMU, GE-Proton and ProtonUp-Qt. Your runtime choice is saved; additional versions use separate environments. Open Gaming Center for games."
      ],
      [
        "Aosver and KDE Plasma",
        "Check your ArchiveOS version and system information in Aosver. Configure displays, networks, keyboards and the desktop in KDE System Settings."
      ]
    ],
    "errors_title": "Known issues and solutions",
    "update_title": "Update Manager is not working",
    "legacy": "ArchiveOS v2.0.1 and v2.0.2",
    "legacy_text": "Update Manager was a separate application in ArchiveOS v2.0.1 and v2.0.2. If you use either release and Update Manager reports “no updates”, complete Timeshift’s initial setup and try again.",
    "legacy_steps": [
      "Open Timeshift.",
      "Complete the initial setup wizard, selecting a suitable snapshot type, storage location and schedule.",
      "Return to Update Manager and check for updates again."
    ],
    "legacy_note": "“Setup” here means the initial configuration of Timeshift; you do not need to reinstall ArchiveOS.",
    "current_title": "What changed in ArchiveOS v2.0.3?",
    "current_text": "Update Manager was integrated into ArchiveOS Store in v2.0.3. There is no longer a separate Update Manager application. Manage system and app updates in ArchiveOS Store → Updates; use “Select all and update” to update everything.",
    "unresolved_title": "If the issue persists",
    "unresolved_text": "Check your ArchiveOS version in Aosver. Verify your internet connection and save the error message. When asking for help, include your version, the action you tried and the error message.",
    "install_title": "Install ArchiveOS with Dango Loader",
    "install_intro": "Dango Loader guides you through installation from the live ArchiveOS session. Available options depend on the Dango version in your ISO and the detected disks.",
    "prepare_title": "Before you begin",
    "prepare": [
      "Back up important files to a separate drive. Disk and partition choices can erase data.",
      "Prepare at least 4 GB of RAM and at least 32 GB of space for ArchiveOS. Allow more space for apps and personal files.",
      "Preparation: follow the USB creation and startup steps below."
    ],
    "steps_title": "Installation steps",
    "steps": [
      [
        "Welcome",
        "Choose the installation language and, optionally, the appearance."
      ],
      [
        "Location",
        "Select your region and time zone from the map or list."
      ],
      [
        "Keyboard",
        "Select your keyboard layout and, if applicable, its variant."
      ],
      [
        "Storage",
        "Use “Detect disks” to scan for disks. Check the target disk’s capacity and model, select it, then choose one of the installation methods below."
      ],
      [
        "User",
        "Enter your name, username and password. The password is used for login and administrator tasks. Use at least 8 characters when the reliable-password option is enabled."
      ],
      [
        "Summary",
        "Review the target disk, installation method, partitions and formatting operations. Confirm only when the choices are correct."
      ],
      [
        "Installation",
        "Wait while files are copied and the system is configured. Open the separate log window with the “Terminal” button to see details."
      ],
      [
        "Finish",
        "Restart after the success screen. Remove the installation USB during restart and boot the installed system."
      ]
    ],
    "modes_title": "Which installation method should I choose?",
    "modes": [
      [
        "Erase disk",
        "Use the selected disk exclusively for ArchiveOS. Existing operating systems, partitions and files on that disk will be deleted. Choose an empty disk or one whose contents you intend to erase."
      ],
      [
        "Install alongside Windows (dual boot)",
        "Keep Windows and install ArchiveOS on the same disk. Select the disk containing Windows, then open the alongside-Windows option. Select the detected Windows partition and use the space slider to allocate space to ArchiveOS. Leave enough free space for Windows and personal files. If the Windows partition is missing or resizing is refused, stop and check the selected disk and that Windows is fully shut down. After installation, choose Windows or ArchiveOS in the boot menu."
      ],
      [
        "Existing partitions / manual installation",
        "For experienced users who want to use prepared partitions. Select the ArchiveOS root partition and, for UEFI installations, the appropriate EFI partition. Do not format the Windows EFI partition. Open KDE Partition Manager through “Advanced”; only change partitions you understand."
      ]
    ],
    "disk_title": "File system and ZRAM",
    "disk_text": "Btrfs is the default file system; Ext4 is also available. Btrfs can be used with snapshot tools, but installation does not configure a Timeshift schedule automatically. ZRAM provides compressed swap in memory, rather than an on-disk hibernation partition.",
    "boot_note": "For Windows dual boot, start the USB in the same boot mode as Windows (UEFI or BIOS). Before confirming, check the selected disk and the Windows partitions you want to keep.",
    "back": "Back to home",
    "theme": "Switch between light and dark themes",
    "menu": "Navigation menu",
    "dualboot": "After dual boot",
    "dual_title": "Windows missing after dual boot?",
    "dual_intro": "If Windows is missing from the startup menu after a dual boot installation, don’t panic. A missing menu entry alone does not mean Windows was erased. Try selecting Windows from your computer’s own boot menu.",
    "dual_steps_title": "Start Windows from the boot menu",
    "dual_steps": [
      "Remove the installation USB and restart your computer.",
      "As soon as the manufacturer logo appears, repeatedly press the Boot Menu key listed below for your brand. On HP, press Esc, then F9.",
      "On a UEFI dual boot installation with intact boot entries, you may see “Windows Boot Manager” and “ArchiveOS”. Select “Windows Boot Manager” for Windows or the ArchiveOS entry for ArchiveOS, then press Enter.",
      "If the computer always starts the same system, you can put your preferred existing boot entry first under Boot / Boot Priority in BIOS/UEFI settings."
    ],
    "dual_missing_title": "Windows Boot Manager is also missing",
    "dual_missing_text": "Both entries are not guaranteed to appear on every computer. Names depend on the manufacturer and whether the installation uses UEFI or BIOS. If Windows Boot Manager is absent, do not reinstall or delete partitions; check that the Windows disk is detected and both installations use the same boot mode, then seek help.",
    "keys_title": "Boot Menu and BIOS keys by manufacturer",
    "keys_intro": "Boot Menu selects the USB drive or operating system for this startup. BIOS/UEFI opens settings including the permanent boot order. Press the appropriate key at the manufacturer logo during startup; restart and try again if you miss it.",
    "keys_note": "Keys vary by model. Some laptops require Fn together with a function key. On Acer, you may need to enable F12 Boot Menu in BIOS first. If your brand is missing or the key does not work, check the manual for your specific model.",
    "keys_headers": [
      "Brand / product family",
      "Boot Menu (startup selection)",
      "BIOS / UEFI settings",
      "Manufacturer source"
    ],
    "keys_rows": [
      [
        "Dell",
        "F12",
        "F2",
        [
          "https://www.dell.com/support/kbdoc/en-us/000126121/access-uefi-bios-system-setup-from-windows-on-your-dell-system"
        ]
      ],
      [
        "HP",
        "Esc → F9",
        "Esc → F10",
        [
          "https://jp.ext.hp.com/v-ivr/common/bios/faq/05/"
        ]
      ],
      [
        "Lenovo",
        "F12 / Fn + F12",
        "IdeaPad: F2 / Fn + F2; ThinkPad and desktops: F1",
        [
          "https://support.lenovo.com/us/en/solutions/ht104668",
          "https://support.lenovo.com/na/uk/solutions/ht500222-recommended-ways-to-enter-bios-boot-menu-thinkpad-thinkcentre-thinkstation"
        ]
      ],
      [
        "ASUS",
        "Esc; F8 from BIOS",
        "F2; Del on some desktops",
        [
          "https://www.asus.com/global/support/faq/1013017/",
          "https://www.asus.com/support/faq/1008829/"
        ]
      ],
      [
        "Acer",
        "F12 (enable in BIOS if needed)",
        "Laptops: F2; desktops: Del",
        [
          "https://community.acer.com/en/kb/articles/12915-changing-boot-order",
          "https://community.acer.com/tr/kb/articles/563-why-cant-i-get-the-f12-boot-menu-to-work-on-my-notebook-or-net"
        ]
      ],
      [
        "MSI",
        "F11",
        "Del (Delete)",
        [
          "https://us.msi.com/support/technical_details/NB_OS_USB_Device_Detection"
        ]
      ]
    ],
    "source": "Source",
    "usb_title": "1. Prepare your installation USB",
    "usb_intro": "Download the ArchiveOS ISO from the home page. Back up the files on your USB first: writing with Rufus or initially installing Ventoy can erase the selected USB drive. Choose one of these methods.",
    "usb_methods": [
      [
        "Ventoy (Windows / Linux)",
        "Download Ventoy from its official website. Select the correct USB drive and install Ventoy on it. Then copy the ArchiveOS .iso file to its large data partition as a normal file; do not extract the ISO. If Ventoy is already installed, just copy the ISO.",
        "https://ventoy.net/en/doc_start.html"
      ],
      [
        "Rufus (Windows)",
        "Open Rufus from its official website. Choose your USB under Device and use “SELECT” to choose the ArchiveOS ISO. Select a partition scheme and target system suitable for your computer’s UEFI/BIOS mode, then click “START”. Wait for writing to finish.",
        "https://rufus.ie/"
      ]
    ],
    "usb_boot_title": "2. Select the USB in the boot menu",
    "usb_boot_steps": [
      "Connect the prepared USB drive and restart the computer.",
      "Press the Boot Menu key shown below when the manufacturer logo appears. Select your USB drive by name and press Enter. If Windows uses UEFI, select the “UEFI: …” USB entry when available.",
      "With Ventoy, first select the ArchiveOS ISO in the Ventoy list and press Enter. If asked for a mode, continue with normal boot. A USB written with Rufus does not show the Ventoy list.",
      "When the ArchiveOS startup screen with blue text appears, press Enter on the selected ArchiveOS entry at the top. If you do not press a key, it starts automatically when the countdown ends. This opens a live ArchiveOS session before installing anything on your computer."
    ],
    "usb_live_title": "3. Start installation from the live desktop",
    "usb_live_text": "Once the desktop opens, launch Dango Loader and grant administrator access if prompted. Then follow the language, location, keyboard and disk selection steps below.",
    "windows_help_title": "How to use Windows App Support",
    "windows_steps": [
      "Install or repair Wine support in “Download and install”. For GE-Proton, also install UMU; use the GE-Proton or ProtonUp-Qt tools to download versions.",
      "When installation or downloading finishes, refresh the runtime list and select the Wine/Proton version you want to use.",
      "In “Run an application”, use “Choose and run an EXE file” to open your program.",
      "For Wine runtimes, use “Wine environment” to open configuration, Winetricks and the virtual C: drive. Open Gaming Center to manage games."
    ],
    "windows_note": "GE-Proton requires UMU. Wine environment tools apply to Wine runtimes; use the Run page for Proton applications. Compatibility varies; some Windows programs and games may not work."
  }
};
