export interface Job {
  title: string;
  link: string;
}

export interface Company {
  id: string;
  booth_id: string;
  company_name: string;
  industry: string;
  booth_location: string;
  company_logo?: string;
  short_description?: string;
  full_description?: string;
  official_website?: string;
  careers_page?: string;
  tags?: string[];
  featured_jobs?: Job[];
}

const rawData = `攤位編號,產業區域,企業名稱（中/英）,攤位位置
1 - 4,資訊科技區,GARMIN,椰林大道右側
5,資訊科技區,亞馬遜 Amazon,椰林大道右側
6 - 7,資訊科技區,群創光電股份有限公司 innolux corporation,椰林大道右側
8 - 9,資訊科技區,晶豪科技 ESMT,椰林大道右側
10 - 13,資訊科技區,Acer 宏碁,椰林大道右側
14 - 17,資訊科技區,瑞昱半導體 Realtek,椰林大道右側
18 - 19,資訊科技區,宏正自動科技 ATEN,椰林大道右側
20,資訊科技區,友訊科技 D-Link,椰林大道右側
21 - 22,資訊科技區,鈊象電子 IGS,椰林大道右側
23 - 25,資訊科技區,AUO 友達光電 AUO Corporation,椰林大道右側
26 - 28,資訊科技區,聯發科技集團 MTK,椰林大道右側
29,資訊科技區,達發科技 AIROHA,椰林大道右側
30 - 32,資訊科技區,ASML 艾司摩爾,椰林大道右側
33 - 34,資訊科技區,廣達電腦 Quanta Computer,椰林大道右側
35 - 36,資訊科技區,趨勢科技 Trend Micro,椰林大道右側
37 - 38,資訊科技區,台灣大哥大 Taiwan Mobile,椰林大道右側
39 - 40,資訊科技區,WorldQuant 美商世坤,椰林大道右側
41 - 42,資訊科技區,麒方有限公司 Kronos,椰林大道右側
43 - 44,資訊科技區,緯穎科技 Wiwynn,椰林大道右側
45 - 46,資訊科技區,啟碁科技 WNC,椰林大道右側
47 - 48,資訊科技區,台灣康寧 CORNING,椰林大道右側
49 - 50,資訊科技區,遠傳電信 FET,椰林大道右側
51 - 52,資訊科技區,TVBS 聯利媒體,椰林大道右側
53 - 54,資訊科技區,104 人力銀行 104 Job Bank,椰林大道右側
55 - 56,資訊科技區,街口集團 JKO Group,椰林大道右側
107 - 108,資訊科技區,上銀科技 HIWIN,椰林大道左側
109 - 112,資訊科技區,台積電 TSMC,椰林大道左側
113 - 116,資訊科技區,鴻海科技集團 Hon Hai,椰林大道左側
117 - 118,資訊科技區,中華電信 CHT,椰林大道左側
119 - 122,資訊科技區,華碩電腦 ASUS,椰林大道左側
123 - 126,資訊科技區,光寶科技 LITE-ON,椰林大道左側
127 - 128,資訊科技區,台灣應材 AMAT,椰林大道左側
129 - 130,資訊科技區,台達電子 DELTA ELECTRONICS,椰林大道左側
131,資訊科技區,晶睿通訊 VIVOTEK,椰林大道左側
132,資訊科技區,乾坤科技 Cyntec,椰林大道左側
133 - 134,資訊科技區,英業達集團 Inventec,椰林大道左側
135 - 136,資訊科技區,工業技術研究院 ITRI,椰林大道左側
137 - 139,資訊科技區,美光 Micron,椰林大道左側
140 - 141,資訊科技區,新加坡商鈦坦科技 Titansoft,椰林大道左側
142 - 144,資訊科技區,聯華電子 UMC,椰林大道左側
145 - 146,資訊科技區,仁寶電腦 COMPAL,椰林大道左側
147,資訊科技區,訊連科技 CyberLink,椰林大道左側
148,資訊科技區,玩美移動 Perfect Corp.,椰林大道左側
149 - 150,資訊科技區,蝦皮購物 Shopee Taiwan,椰林大道左側
151 - 152,資訊科技區,Garena,椰林大道左側
153,資訊科技區,戴爾科技集團 Dell Technologies,椰林大道左側
154,資訊科技區,DISCO TAIWAN,椰林大道左側
155,資訊科技區,和椿科技 Aurotek,椰林大道左側
232,資訊科技區,Taboola Taiwan,蒲葵道小椰林道垂葉榕道
233,資訊科技區,京鼎精密科技 Foxsemicon,蒲葵道小椰林道垂葉榕道
234 - 235,資訊科技區,威加資訊 VICIHOLDINGS,蒲葵道小椰林道垂葉榕道
236,資訊科技區,南亞科技 NANYA,蒲葵道小椰林道垂葉榕道
237 - 238,資訊科技區,網銀國際 WANIN,蒲葵道小椰林道垂葉榕道
239,資訊科技區,Marvell Taiwan 邁威爾科技,蒲葵道小椰林道垂葉榕道
240,資訊科技區,聖洋科技 cacaFly,蒲葵道小椰林道垂葉榕道
241,資訊科技區,新代科技 Syntec,蒲葵道小椰林道垂葉榕道
242,資訊科技區,索尼網路通訊 Sony Network Communications,蒲葵道小椰林道垂葉榕道
243 - 244,資訊科技區,臻鼎科技集團 Zhen Ding Group,蒲葵道小椰林道垂葉榕道
245 - 246,資訊科技區,創意電子 GUC,蒲葵道小椰林道垂葉榕道
247 - 248,資訊科技區,信驊科技 ASPEED,蒲葵道小椰林道垂葉榕道
249,資訊科技區,群光電子 Chicony,蒲葵道小椰林道垂葉榕道
250,資訊科技區,奕力科技 ILITEK,蒲葵道小椰林道垂葉榕道
251 - 252,資訊科技區,康舒科技 Acbel,蒲葵道小椰林道垂葉榕道
253 - 254,資訊科技區,大立光 LARGAN,蒲葵道小椰林道垂葉榕道
255 - 256,資訊科技區,世界先進,蒲葵道小椰林道垂葉榕道
257,資訊科技區,見臻科技 Ganzin,蒲葵道小椰林道垂葉榕道
258,資訊科技區,達明機器人 TECHMAN ROBOT,蒲葵道小椰林道垂葉榕道
259 - 260,資訊科技區,明基佳世達集團 BenQ Qisda Group,蒲葵道小椰林道垂葉榕道
261 - 262,資訊科技區,和碩聯合科技 PEGATRON,蒲葵道小椰林道垂葉榕道
263 - 264,資訊科技區,QNAP x IEI,蒲葵道小椰林道垂葉榕道
265 - 266,資訊科技區,KLA 美商科磊,蒲葵道小椰林道垂葉榕道
267 - 268,資訊科技區,緯創資通 Wistron Corporation,蒲葵道小椰林道垂葉榕道
269 - 270,資訊科技區,美商科林研發 Lam research,蒲葵道小椰林道垂葉榕道
271,資訊科技區,HP 惠普科技 HP Inc.,蒲葵道小椰林道垂葉榕道
272 - 275,資訊科技區,台塑企業 Formosa Plastics Group,蒲葵道小椰林道垂葉榕道
276 - 277,資訊科技區,慧榮科技 SMI,蒲葵道小椰林道垂葉榕道
278 - 279,資訊科技區,中磊電子 Sercomm,蒲葵道小椰林道垂葉榕道
280,資訊科技區,MSS 訊銓科技 MSSCORPS,蒲葵道小椰林道垂葉榕道
281,資訊科技區,台灣安特雲 Netskope,蒲葵道小椰林道垂葉榕道
282,資訊科技區,鼎新電腦 Datasys,蒲葵道小椰林道垂葉榕道
283 - 284,資訊科技區,群聯電子 Phison,蒲葵道小椰林道垂葉榕道
285,資訊科技區,神準科技 Senao Networks,蒲葵道小椰林道垂葉榕道
286,資訊科技區,旺矽科技 MPI,蒲葵道小椰林道垂葉榕道
287,資訊科技區,禾多移動 AviviD.ai,蒲葵道小椰林道垂葉榕道
288,資訊科技區,雲象科技 aetherAI,蒲葵道小椰林道垂葉榕道
289 - 290,資訊科技區,聯詠科技 Novatek,蒲葵道小椰林道垂葉榕道
291 - 292,資訊科技區,祥碩科技 ASMedia,蒲葵道小椰林道垂葉榕道
293,資訊科技區,貿聯集團 BizLink,蒲葵道小椰林道垂葉榕道
294,資訊科技區,知洋科技公司 Awareocean,蒲葵道小椰林道垂葉榕道
295,資訊科技區,創未來科技 Tron Future,蒲葵道小椰林道垂葉榕道
296,資訊科技區,圓展科技 AVer,蒲葵道小椰林道垂葉榕道
297,資訊科技區,天鈺科技 Fitipower,蒲葵道小椰林道垂葉榕道
298,資訊科技區,慧友電子 EverFocus,蒲葵道小椰林道垂葉榕道
299,資訊科技區,瑞嘉軟體 ONElab,蒲葵道小椰林道垂葉榕道
300,資訊科技區,敦泰電子 FocalTech,蒲葵道小椰林道垂葉榕道
301,資訊科技區,研揚科技 AAEON,蒲葵道小椰林道垂葉榕道
302,資訊科技區,拼貼趣 PicCollage,蒲葵道小椰林道垂葉榕道
303,資訊科技區,欣新網 Hsin Hsin Galaxy,蒲葵道小椰林道垂葉榕道
304 - 305,資訊科技區,力積電 PSMC,蒲葵道小椰林道垂葉榕道
343 - 344,資訊科技區,東京威力科創 TOKYO ELECTRON TAIWAN,蒲葵道小椰林道垂葉榕道
345 - 346,資訊科技區,SHOPLINE,蒲葵道小椰林道垂葉榕道
347,資訊科技區,奇景光電 Himax Technologies,蒲葵道小椰林道垂葉榕道
348,資訊科技區,彩富電子 DYNACOLOR,蒲葵道小椰林道垂葉榕道
349,資訊科技區,威盛電子 VIA,蒲葵道小椰林道垂葉榕道
374 - 375,資訊科技區,MixerBox,蒲葵道小椰林道垂葉榕道
376,資訊科技區,普安科技 Infortrend Technology,蒲葵道小椰林道垂葉榕道
377 - 378,資訊科技區,欣興電子 UNIMICRON,蒲葵道小椰林道垂葉榕道
412 - 413,資訊科技區,能元科技 Molicel,蒲葵道小椰林道垂葉榕道
329 - 330,資訊科技區,統一資訊 UNI-PIC,蒲葵道小椰林道垂葉榕道
331 - 332,資訊科技區,錼創顯示科技 PlayNitride,蒲葵道小椰林道垂葉榕道
333,資訊科技區,原相科技 PixArt,蒲葵道小椰林道垂葉榕道
334 - 335,資訊科技區,達睿 AUO Display Plus,蒲葵道小椰林道垂葉榕道
336 - 337,資訊科技區,91APP,蒲葵道小椰林道垂葉榕道
338,資訊科技區,凌群電腦 THE SYSCOM GROUP,蒲葵道小椰林道垂葉榕道
339,資訊科技區,瑞鼎科技 Raydium,蒲葵道小椰林道垂葉榕道
340,資訊科技區,Tomofun_寵物科技公司 Tomofun_Pet Tech Company,蒲葵道小椰林道垂葉榕道
341 - 342,資訊科技區,瑞儀光電 Radiant,蒲葵道小椰林道垂葉榕道`;

const detailedInfo: Record<string, Partial<Company>> = {
  "garmin": {
    short_description: "全球衛星導航與智慧穿戴領導品牌",
    full_description: "Garmin 致力於GPS導航與穿戴技術的研發，產品橫跨航空、航海、車用、戶外及健身休閒五大領域。我們尋求熱愛挑戰、具備創新精神的人才加入。",
    official_website: "https://www.garmin.com.tw/",
    careers_page: "https://careers.garmin.com/",
    tags: ["外商", "智慧穿戴", "軟硬整合"],
    featured_jobs: [
      { title: "軟體工程師", link: "https://www.104.com.tw/company/garmin" },
      { title: "硬體研發工程師", link: "https://www.104.com.tw/company/garmin" }
    ]
  },
  "tsmc": {
    short_description: "全球最大的專業積體電路製造服務公司",
    full_description: "台灣積體電路製造股份有限公司，簡稱台積電、台積，為全球最大的晶圓代工半導體製造廠。我們提供具競爭力的薪資福利與全球化的發展舞台。",
    official_website: "https://www.tsmc.com/",
    careers_page: "https://careers.tsmc.com/",
    tags: ["半導體", "晶圓代工", "世界級企業"],
    featured_jobs: [
      { title: "製程工程師", link: "https://www.104.com.tw/company/tsmc" },
      { title: "設備工程師", link: "https://www.104.com.tw/company/tsmc" },
      { title: "IT 軟體工程師", link: "https://www.104.com.tw/company/tsmc" }
    ]
  },
  "amazon": {
    short_description: "全球領先的雲端運算與電子商務平台",
    full_description: "Amazon 亞馬遜致力於成為全球最以客戶為中心的公司。在台灣，AWS (Amazon Web Services) 提供領先全球的雲端運算服務，協助企業數位轉型。我們重視創新、領導力原則 (Leadership Principles)，並提供充滿挑戰與活力的國際化工作環境，歡迎具備開創精神的人才加入我們，一起創造未來。",
    official_website: "https://www.amazon.tw/",
    careers_page: "https://www.amazon.jobs/",
    tags: ["外商", "雲端運算", "電商"],
    featured_jobs: [
      { title: "Software Development Engineer", link: "https://www.amazon.jobs/" },
      { title: "Cloud Support Engineer", link: "https://www.amazon.jobs/" }
    ]
  },
  "mediatek": {
    short_description: "全球第四大無晶圓廠半導體公司",
    full_description: "聯發科技是全球無晶圓廠半導體公司，在智慧手持裝置、智慧家庭應用、無線連結技術及物聯網產品等市場位居領先地位。",
    official_website: "https://www.mediatek.tw/",
    careers_page: "https://careers.mediatek.com/",
    tags: ["IC設計", "5G", "AI"],
    featured_jobs: [
      { title: "演算法開發工程師", link: "https://www.104.com.tw/company/mediatek" },
      { title: "數位IC設計工程師", link: "https://www.104.com.tw/company/mediatek" }
    ]
  },
  "asus": {
    short_description: "全球知名主機板與電腦品牌",
    full_description: "華碩電腦 (ASUS) 是全球科技領導品牌，致力於提供最創新的硬體設備、智慧物聯網及雲端解決方案。我們以「追尋無與倫比」為品牌精神，鼓勵員工發揮創意、突破框架。加入華碩，您將參與打造改變世界的前瞻科技產品，並在國際化的舞台上發光發熱。",
    official_website: "https://www.asus.com/tw/",
    careers_page: "https://recruit.asus.com/",
    tags: ["品牌廠", "硬體製造", "電競"],
    featured_jobs: [
      { title: "軟韌體研發工程師", link: "https://www.104.com.tw/company/asus" },
      { title: "全球儲備幹部", link: "https://www.104.com.tw/company/asus" }
    ]
  },
  "acer": {
    short_description: "全球頂尖的資通訊公司之一",
    full_description: "宏碁 (Acer) 創立於 1976 年，是全球頂尖的資通訊公司之一。隨著產業趨勢發展，宏碁正轉型為結合軟體、硬體與服務的企業，積極投入雲端技術、人工智慧與智慧城市等前瞻領域。我們提供多元的職涯發展路徑與完善的培訓資源，邀請您一同打破科技與人的藩籬。",
    official_website: "https://www.acer.com/tw-zh/",
    careers_page: "https://www.acer.com/tw-zh/about/careers",
    tags: ["品牌廠", "筆記型電腦", "AI PC"],
    featured_jobs: [
      { title: "AI 軟體工程師", link: "https://www.104.com.tw/company/acer" },
      { title: "硬體研發工程師", link: "https://www.104.com.tw/company/acer" }
    ]
  },
  "realtek": {
    short_description: "全球頂尖的IC設計公司",
    full_description: "瑞昱半導體 (Realtek) 成立於 1987 年，為全球頂尖的無晶圓廠 IC 設計公司。我們的產品涵蓋通訊網路、電腦週邊及多媒體應用。瑞昱以「自信、信人」為企業文化，提供極具競爭力的薪資福利與高度自主的研發環境，歡迎頂尖研發人才加入我們的螃蟹家族！",
    official_website: "https://www.realtek.com/zh-tw/",
    careers_page: "https://www.realtek.com/zh-tw/careers",
    tags: ["IC設計", "網通晶片", "多媒體"],
    featured_jobs: [
      { title: "數位IC設計工程師", link: "https://www.104.com.tw/company/realtek" },
      { title: "演算法工程師", link: "https://www.104.com.tw/company/realtek" }
    ]
  },
  "asml": {
    short_description: "全球最大半導體微影設備供應商",
    full_description: "艾司摩爾 (ASML) 是全球最大半導體微影設備製造商，為全球頂尖半導體廠提供關鍵設備與技術。我們在台灣設有亞洲最大的製造中心與培訓基地。ASML 提供高度國際化的工作環境、優渥的薪資福利以及完善的全球培訓計畫，邀請您與我們一起推進摩爾定律。",
    official_website: "https://www.asml.com/zh-tw",
    careers_page: "https://www.asml.com/zh-tw/careers",
    tags: ["外商", "半導體設備", "EUV"],
    featured_jobs: [
      { title: "Customer Support Engineer", link: "https://www.104.com.tw/company/asml" },
      { title: "Application Engineer", link: "https://www.104.com.tw/company/asml" }
    ]
  },
  "quanta": {
    short_description: "全球第一大筆記型電腦研發設計製造公司",
    full_description: "廣達電腦 (Quanta Computer) 是全球第一大筆記型電腦研發設計製造公司，近年更積極佈局雲端運算、AI 伺服器、智慧醫療與車用電子等新興領域。我們擁有世界級的研發團隊與製造實力，提供員工廣闊的發展空間與穩健的職涯舞台，歡迎具備熱忱的科技人才加入。",
    official_website: "https://www.quantatw.com/",
    careers_page: "https://hr.quantatw.com/",
    tags: ["代工廠", "伺服器", "雲端運算"],
    featured_jobs: [
      { title: "伺服器硬體研發工程師", link: "https://www.104.com.tw/company/quanta" },
      { title: "AI 軟體工程師", link: "https://www.104.com.tw/company/quanta" }
    ]
  },
  "trendmicro": {
    short_description: "全球資訊安全軟體領導廠商",
    full_description: "趨勢科技 (Trend Micro) 是全球資訊安全軟體領導廠商，致力於打造安全的數位資訊交換世界。我們在台灣擁有全球最大的研發基地，專注於雲端安全、人工智慧與威脅防禦技術。加入趨勢科技，您將與全球頂尖的資安專家共事，對抗最新的網路威脅，守護全球用戶的資訊安全。",
    official_website: "https://www.trendmicro.com/zh_tw/business.html",
    careers_page: "https://www.trendmicro.com/zh_tw/about/careers.html",
    tags: ["資安", "軟體開發", "雲端安全"],
    featured_jobs: [
      { title: "Software Engineer", link: "https://www.104.com.tw/company/trendmicro" },
      { title: "Threat Researcher", link: "https://www.104.com.tw/company/trendmicro" }
    ]
  },
  "taiwanmobile": {
    short_description: "台灣領先的電信與數位服務公司",
    full_description: "台灣大哥大 (Taiwan Mobile) 不僅是台灣領先的電信品牌，更積極轉型為新世代的科技電信公司 (Telco+Tech)。我們結合 5G、物聯網、大數據與人工智慧，打造全方位的數位生活圈。我們重視人才的創新思維與跨領域能力，提供豐富的集團資源與多元的職涯發展機會。",
    official_website: "https://www.taiwanmobile.com/",
    careers_page: "https://twm5g.co/careers",
    tags: ["電信", "數位轉型", "5G"],
    featured_jobs: [
      { title: "數據分析師", link: "https://www.104.com.tw/company/taiwanmobile" },
      { title: "軟體開發工程師", link: "https://www.104.com.tw/company/taiwanmobile" }
    ]
  },
  "104": {
    short_description: "台灣最大的人力資源服務平台",
    full_description: "104 人力銀行是台灣最大、最具影響力的人力資源服務平台。我們以「幫助每個人找到發揮天賦的舞台」為使命，積極導入 AI 技術與大數據分析，提供精準的職涯導航與媒合服務。我們提供彈性的工作模式與重視員工成長的文化，歡迎對 HR Tech 充滿熱情的夥伴加入。",
    official_website: "https://www.104.com.tw/",
    careers_page: "https://corp.104.com.tw/careers/",
    tags: ["人力資源", "網路服務", "數據分析"],
    featured_jobs: [
      { title: "前端工程師", link: "https://www.104.com.tw/company/104" },
      { title: "產品經理", link: "https://www.104.com.tw/company/104" }
    ]
  },
  "honhai": {
    short_description: "全球最大的電子專業製造服務公司",
    full_description: "鴻海科技集團 (Hon Hai / Foxconn) 是全球最大的電子專業製造服務 (EMS) 公司。近年來，我們積極推動「3+3」轉型策略，聚焦電動車、數位健康、機器人三大新興產業，以及人工智慧、半導體、新世代通訊三大核心技術。加入鴻海，您將站上全球科技產業的最前線，參與改變世界的創新專案。",
    official_website: "https://www.foxconn.com/zh-tw/",
    careers_page: "https://recruit.foxconn.com/",
    tags: ["代工廠", "電動車", "AI伺服器"],
    featured_jobs: [
      { title: "AI 研發工程師", link: "https://www.104.com.tw/company/honhai" },
      { title: "機構設計工程師", link: "https://www.104.com.tw/company/honhai" }
    ]
  },
  "shopee": {
    short_description: "東南亞及台灣領先的電子商務平台",
    full_description: "蝦皮購物 (Shopee) 是東南亞及台灣領先的電子商務平台。我們擁有快速變動、充滿活力的工作環境，鼓勵員工提出創新想法並勇於嘗試。在蝦皮，您將與來自不同背景的優秀人才合作，參與具備高度影響力的專案，共同打造最佳的線上購物體驗。",
    official_website: "https://shopee.tw/",
    careers_page: "https://careers.shopee.tw/",
    tags: ["外商", "電商", "網路服務"],
    featured_jobs: [
      { title: "Software Engineer", link: "https://www.104.com.tw/company/shopee" },
      { title: "Product Manager", link: "https://www.104.com.tw/company/shopee" }
    ]
  },
  "line": {
    short_description: "台灣最受歡迎的通訊軟體與數位生活平台",
    full_description: "LINE 致力於「拉近你我的距離 (Closing the Distance)」，在台灣不僅是最受歡迎的通訊軟體，更發展出涵蓋新聞、支付、購物、旅遊等全方位的數位生活圈。我們提供開放、扁平的企業文化與極佳的員工福利，歡迎具備創新思維與熱愛挑戰的人才加入 LINE 的行列。",
    official_website: "https://line.me/zh-hant/",
    careers_page: "https://careers.linecorp.com/zh-hant/",
    tags: ["外商", "通訊軟體", "網路服務"],
    featured_jobs: [
      { title: "Frontend Engineer", link: "https://www.104.com.tw/company/line" },
      { title: "Data Scientist", link: "https://www.104.com.tw/company/line" }
    ]
  },
  "auo": {
    short_description: "全球領先的光電解決方案供應商",
    full_description: "友達光電 (AUO) 擁有深厚的顯示技術基礎，致力於提供涵蓋顯示器、智慧解決方案、太陽能等領域的創新產品。我們正積極轉型為「以顯示技術為核心的解決方案公司」，歡迎具備跨領域思維的人才加入，與我們一同看見更寬廣的世界。",
    official_website: "https://www.auo.com/zh-TW",
    careers_page: "https://auo.com/zh-TW/Join_AUO/index",
    tags: ["面板", "光電", "智慧製造"],
    featured_jobs: [
      { title: "光電研發工程師", link: "https://www.104.com.tw/company/auo" },
      { title: "AI 數據分析師", link: "https://www.104.com.tw/company/auo" }
    ]
  },
  "delta": {
    short_description: "全球電源管理與散熱解決方案領導廠商",
    full_description: "台達電子 (Delta Electronics) 以「環保 節能 愛地球」為經營使命，提供高效率的電源管理產品、無刷直流風扇、散熱系統及工業自動化解決方案。我們在全球設有研發中心與生產基地，提供完善的培訓與具競爭力的薪資，歡迎有志於綠能科技的人才加入。",
    official_website: "https://www.deltaww.com/zh-TW/index",
    careers_page: "https://careers.deltaww.com/",
    tags: ["電源管理", "綠能", "自動化"],
    featured_jobs: [
      { title: "電力電子工程師", link: "https://www.104.com.tw/company/delta" },
      { title: "軟體研發工程師", link: "https://www.104.com.tw/company/delta" }
    ]
  },
  "umc": {
    short_description: "全球知名的半導體晶圓專工公司",
    full_description: "聯華電子 (UMC) 為全球半導體晶圓專工業界的領導者，提供高品質的晶圓製造服務。我們專注於邏輯及特殊技術，為跨越電子產業的各項主要應用產品生產晶片。聯電提供穩健的職涯發展與優質的福利制度，歡迎半導體菁英加入。",
    official_website: "https://www.umc.com/zh-TW/Home/Index",
    careers_page: "https://www.umc.com/zh-TW/Careers/overview",
    tags: ["半導體", "晶圓代工", "科技製造"],
    featured_jobs: [
      { title: "製程整合工程師", link: "https://www.104.com.tw/company/umc" },
      { title: "設備工程師", link: "https://www.104.com.tw/company/umc" }
    ]
  },
  "micron": {
    short_description: "全球領先的創新記憶體與儲存解決方案供應商",
    full_description: "美光科技 (Micron Technology) 是全球記憶體與儲存解決方案的領導者。台灣美光是美光全球最大的 DRAM 製造基地，我們提供極具競爭力的薪資福利、跨國合作機會與完善的培訓計畫。加入美光，與我們一起改變世界使用資訊的方式。",
    official_website: "https://tw.micron.com/",
    careers_page: "https://tw.micron.com/careers",
    tags: ["外商", "半導體", "記憶體"],
    featured_jobs: [
      { title: "Process Engineer", link: "https://www.104.com.tw/company/micron" },
      { title: "Data Scientist", link: "https://www.104.com.tw/company/micron" }
    ]
  },
  "dell": {
    short_description: "全球領先的端到端科技解決方案供應商",
    full_description: "戴爾科技集團 (Dell Technologies) 致力於推動人類進步，提供從邊緣運算到核心資料中心，再到雲端的全面解決方案。台灣戴爾研發中心是 Dell 全球重要的硬體與軟體設計基地。我們提倡彈性工作與多元包容的文化，歡迎頂尖科技人才加入。",
    official_website: "https://www.dell.com/zh-tw",
    careers_page: "https://jobs.dell.com/",
    tags: ["外商", "硬體研發", "雲端運算"],
    featured_jobs: [
      { title: "Hardware Engineer", link: "https://www.104.com.tw/company/dell" },
      { title: "Software Engineer", link: "https://www.104.com.tw/company/dell" }
    ]
  },
  "hp": {
    short_description: "全球知名的個人運算與列印技術領導者",
    full_description: "惠普科技 (HP Inc.) 致力於創造能讓所有人、所有地方的生活變得更美好的技術。台灣 HP 是全球產品研發與供應鏈管理的重要樞紐。我們提供充滿活力、重視創新的工作環境，以及完善的全球職涯發展機會。",
    official_website: "https://www.hp.com/tw-zh/home.html",
    careers_page: "https://jobs.hp.com/",
    tags: ["外商", "個人電腦", "列印技術"],
    featured_jobs: [
      { title: "System Software Engineer", link: "https://www.104.com.tw/company/hp" },
      { title: "Mechanical Engineer", link: "https://www.104.com.tw/company/hp" }
    ]
  },
  "kla": {
    short_description: "全球半導體製程控管設備領導廠商",
    full_description: "美商科磊 (KLA) 是全球半導體製程控管與良率管理解決方案的領導者。我們的設備與技術是推動奈米世代半導體製造的關鍵。KLA 提供優渥的薪資、國際化的培訓與充滿挑戰的技術環境，歡迎具備物理、光學、材料或工程背景的人才加入。",
    official_website: "https://www.kla.com/",
    careers_page: "https://careers.kla.com/",
    tags: ["外商", "半導體設備", "製程控管"],
    featured_jobs: [
      { title: "Applications Engineer", link: "https://www.104.com.tw/company/kla" },
      { title: "Customer Support Engineer", link: "https://www.104.com.tw/company/kla" }
    ]
  },
  "lam": {
    short_description: "全球半導體晶圓製造設備領導供應商",
    full_description: "美商科林研發 (Lam Research) 是全球半導體產業創新晶圓製造設備及服務的主要供應商。我們的技術協助晶片製造商打造體積更小、效能更好、更省電的電子元件。我們重視員工發展，提供具競爭力的薪酬與跨國合作舞台。",
    official_website: "https://www.lamresearch.com/zh-hant/",
    careers_page: "https://careers.lamresearch.com/",
    tags: ["外商", "半導體設備", "蝕刻技術"],
    featured_jobs: [
      { title: "Field Service Engineer", link: "https://www.104.com.tw/company/lam" },
      { title: "Process Engineer", link: "https://www.104.com.tw/company/lam" }
    ]
  },
  "amat": {
    short_description: "全球最大半導體及顯示器設備製造商",
    full_description: "台灣應用材料 (Applied Materials) 是全球最大的半導體及顯示器設備製造商。我們的材料工程解決方案是全球幾乎所有新式晶片與先進顯示器生產的關鍵。我們提供頂尖的技術環境與全球化的職涯發展機會。",
    official_website: "https://www.appliedmaterials.com/zh-tw.html",
    careers_page: "https://careers.appliedmaterials.com/",
    tags: ["外商", "半導體設備", "材料工程"],
    featured_jobs: [
      { title: "Customer Engineer", link: "https://www.104.com.tw/company/amat" },
      { title: "Process Support Engineer", link: "https://www.104.com.tw/company/amat" }
    ]
  },
  "itri": {
    short_description: "台灣最大的產業技術研發機構",
    full_description: "工業技術研究院 (ITRI) 是台灣最大的產業技術研發機構，致力於前瞻科技研發與產業推動。領域涵蓋資訊與通訊、電子與光電、材料化工與奈米、醫療器材與生醫等。我們提供優質的研發環境與豐富的產學合作資源，歡迎有志於科技創新的研究人才加入。",
    official_website: "https://www.itri.org.tw/",
    careers_page: "https://careers.itri.org.tw/",
    tags: ["研發機構", "前瞻科技", "產學合作"],
    featured_jobs: [
      { title: "AI 演算法研究員", link: "https://www.104.com.tw/company/itri" },
      { title: "前瞻硬體研發工程師", link: "https://www.104.com.tw/company/itri" }
    ]
  },
  "compal": {
    short_description: "全球知名的智慧裝置代工大廠",
    full_description: "仁寶電腦 (COMPAL) 是全球知名的智慧裝置代工大廠，產品涵蓋筆記型電腦、平板電腦、穿戴裝置及伺服器等。近年積極佈局智慧醫療、5G 通訊與車用電子。我們提供穩健的發展舞台與多元的學習資源，歡迎具備熱忱的科技人才加入。",
    official_website: "https://www.compal.com/",
    careers_page: "https://www.compal.com/career/",
    tags: ["代工廠", "智慧裝置", "伺服器"],
    featured_jobs: [
      { title: "硬體研發工程師", link: "https://www.104.com.tw/company/compal" },
      { title: "軟體設計工程師", link: "https://www.104.com.tw/company/compal" }
    ]
  },
  "wistron": {
    short_description: "全球領先的資通訊產品專業設計及製造廠商",
    full_description: "緯創資通 (Wistron) 是全球領先的資通訊產品專業設計及製造廠商。我們不僅專注於核心的代工業務，更積極投入雲端運算、AI 伺服器、企業級儲存設備等高附加價值領域。緯創提供全球化的工作環境與完善的員工福利。",
    official_website: "https://www.wistron.com/",
    careers_page: "https://jobs.wistron.com/",
    tags: ["代工廠", "AI伺服器", "資通訊"],
    featured_jobs: [
      { title: "伺服器硬體研發工程師", link: "https://www.104.com.tw/company/wistron" },
      { title: "AI 軟體工程師", link: "https://www.104.com.tw/company/wistron" }
    ]
  },
  "pegatron": {
    short_description: "全球知名的電子製造服務大廠",
    full_description: "和碩聯合科技 (PEGATRON) 結合了豐富的產品開發經驗與垂直整合的製造能力，為客戶提供從設計到生產的完整服務。產品涵蓋主機板、桌上型電腦、筆記型電腦、智慧型手機及車用電子等。我們鼓勵創新思維，提供充滿挑戰的工作環境。",
    official_website: "https://www.pegatroncorp.com/",
    careers_page: "https://www.pegatroncorp.com/hr/",
    tags: ["代工廠", "消費性電子", "車用電子"],
    featured_jobs: [
      { title: "硬體研發工程師", link: "https://www.104.com.tw/company/pegatron" },
      { title: "機構設計工程師", link: "https://www.104.com.tw/company/pegatron" }
    ]
  },
  "phison": {
    short_description: "全球快閃記憶體控制晶片領導品牌",
    full_description: "群聯電子 (Phison) 是全球快閃記憶體 (NAND Flash) 控制晶片及儲存解決方案的領導廠商。我們專注於技術研發，提供從消費級到企業級的完整 SSD 解決方案。群聯提供極具競爭力的薪資與分紅制度，歡迎頂尖 IC 設計與韌體人才加入。",
    official_website: "https://www.phison.com/zh-tw/",
    careers_page: "https://www.phison.com/zh-tw/careers",
    tags: ["IC設計", "快閃記憶體", "SSD"],
    featured_jobs: [
      { title: "韌體工程師", link: "https://www.104.com.tw/company/phison" },
      { title: "數位IC設計工程師", link: "https://www.104.com.tw/company/phison" }
    ]
  },
  "novatek": {
    short_description: "全球顯示器驅動IC領導廠商",
    full_description: "聯詠科技 (Novatek) 是全球顯示器驅動 IC 及系統單晶片 (SoC) 的領導廠商。我們的產品廣泛應用於電視、桌上型螢幕、筆記型電腦及智慧型手機等領域。聯詠以優渥的薪資福利與穩健的營運績效著稱，是 IC 設計人才的理想選擇。",
    official_website: "https://www.novatek.com.tw/zh-TW",
    careers_page: "https://www.novatek.com.tw/zh-TW/Career/Index",
    tags: ["IC設計", "驅動IC", "系統單晶片"],
    featured_jobs: [
      { title: "數位IC設計工程師", link: "https://www.104.com.tw/company/novatek" },
      { title: "類比IC設計工程師", link: "https://www.104.com.tw/company/novatek" }
    ]
  },
  "cht": {
    short_description: "台灣最大的綜合電信業者",
    full_description: "中華電信 (CHT) 是台灣最大的綜合電信業者，提供固網、行動通訊、寬頻上網及企業資通訊服務。我們正積極推動數位轉型，發展 5G、AI、大數據、雲端及資安等新興業務。中華電信提供穩定的工作環境與完善的福利制度，歡迎各界菁英加入。",
    official_website: "https://www.cht.com.tw/zh-tw/home/cht",
    careers_page: "https://rmis.cht.com.tw/portal/career/index.jsp",
    tags: ["電信", "資通訊", "5G"],
    featured_jobs: [
      { title: "軟體開發工程師", link: "https://www.104.com.tw/company/cht" },
      { title: "網路維運工程師", link: "https://www.104.com.tw/company/cht" }
    ]
  },
  "fet": {
    short_description: "台灣領先的電信與數位服務供應商",
    full_description: "遠傳電信 (FET) 致力於提供優質的電信服務與創新的數位應用。我們以「大人物」(大數據、人工智慧、物聯網) 為核心策略，積極佈局 5G 智慧城市、智慧醫療與企業專網。遠傳提供充滿活力的企業文化與多元的職涯發展路徑。",
    official_website: "https://www.fetnet.net/",
    careers_page: "https://corporate.fetnet.net/content/corp/tw/career.html",
    tags: ["電信", "大數據", "物聯網"],
    featured_jobs: [
      { title: "大數據分析師", link: "https://www.104.com.tw/company/fet" },
      { title: "雲端架構師", link: "https://www.104.com.tw/company/fet" }
    ]
  },
  "innolux": {
    short_description: "全球領先的 TFT-LCD 面板製造商",
    full_description: "群創光電 (Innolux) 是全球領先的 TFT-LCD 面板製造商，提供全尺寸的顯示器解決方案。我們積極推動智慧製造與數位轉型，並跨足車用顯示、醫療顯示等高附加價值領域。群創提供完善的培訓體系與具競爭力的薪資福利。",
    official_website: "https://www.innolux.com/tw/",
    careers_page: "https://hrrecruit.innolux.com/",
    tags: ["面板", "光電", "智慧製造"],
    featured_jobs: [
      { title: "製程設備工程師", link: "https://www.104.com.tw/company/innolux" },
      { title: "光電研發工程師", link: "https://www.104.com.tw/company/innolux" }
    ]
  },
  "worldquant": {
    short_description: "全球知名的量化資產管理公司",
    full_description: "WorldQuant (美商世坤) 是一家全球量化資產管理公司，致力於開發和部署系統化的金融投資策略。我們結合數學、計算機科學與金融知識，在海量數據中尋找預測市場的訊號 (Alphas)。我們提供極具競爭力的薪酬與國際化的工作環境，歡迎頂尖的數理與資訊人才加入。",
    official_website: "https://www.worldquant.com/",
    careers_page: "https://www.worldquant.com/careers/",
    tags: ["外商", "量化交易", "金融科技"],
    featured_jobs: [
      { title: "Quantitative Researcher", link: "https://www.104.com.tw/company/worldquant" },
      { title: "Software Engineer", link: "https://www.104.com.tw/company/worldquant" }
    ]
  },
  "garena": {
    short_description: "全球領先的線上遊戲開發商與發行商",
    full_description: "Garena 是全球領先的線上遊戲開發商與發行商，旗下擁有《英雄聯盟》、《傳說對決》、《Free Fire》等多款知名遊戲。我們致力於打造優質的遊戲體驗與電競賽事。Garena 提供充滿熱情、年輕且具挑戰性的工作環境，歡迎熱愛遊戲的人才加入。",
    official_website: "https://www.garena.tw/",
    careers_page: "https://careers.garena.com/",
    tags: ["外商", "遊戲", "電競"],
    featured_jobs: [
      { title: "Game Operations", link: "https://www.104.com.tw/company/garena" },
      { title: "Software Engineer", link: "https://www.104.com.tw/company/garena" }
    ]
  },
  "app91": {
    short_description: "台灣首家原生 SaaS 軟體服務上櫃公司",
    full_description: "91APP 是台灣首家原生 SaaS 軟體服務上櫃公司，提供品牌 D2C (Direct-to-Consumer) 虛實融合 (OMO) 的全通路解決方案。我們協助零售品牌數位轉型，打造專屬的電商 APP 與購物官網。91APP 提供敏捷開發的環境與高速成長的職涯舞台。",
    official_website: "https://www.91app.com/",
    careers_page: "https://careers.91app.com/",
    tags: ["SaaS", "電商", "新零售"],
    featured_jobs: [
      { title: "前端工程師", link: "https://www.104.com.tw/company/app91" },
      { title: "後端工程師", link: "https://www.104.com.tw/company/app91" }
    ]
  },
  "mixerbox": {
    short_description: "全球知名的 AI Super-Apps 開發商",
    full_description: "MixerBox 是一間總部位於矽谷的 AI Super-Apps 開發商，致力於打造讓人們生活更便利的行動應用程式。我們的產品在全球擁有數億下載量。MixerBox 提供矽谷新創的文化、極具競爭力的薪資與高度彈性的工作模式，歡迎頂尖軟體人才加入。",
    official_website: "https://tw.mixerbox.com/",
    careers_page: "https://careers.mixerbox.com/",
    tags: ["外商", "App開發", "AI"],
    featured_jobs: [
      { title: "Software Engineer", link: "https://www.104.com.tw/company/mixerbox" },
      { title: "Product Manager", link: "https://www.104.com.tw/company/mixerbox" }
    ]
  }
};

export const companies: Company[] = rawData.split('\n').slice(1).filter(line => line.trim()).map(line => {
  const [booth_id, industry, company_name, booth_location] = line.split(',');
  
  // Generate a simple ID
  let id = company_name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (!id || id.length < 2) {
    let hash = 0;
    for (let i = 0; i < company_name.length; i++) {
      hash = ((hash << 5) - hash) + company_name.charCodeAt(i);
      hash |= 0;
    }
    id = `company-${Math.abs(hash)}`;
  }
  
  // Try to match with detailed info
  let matchedDetail = {};
  if (company_name.includes('GARMIN')) matchedDetail = detailedInfo['garmin'];
  else if (company_name.includes('台積電')) matchedDetail = detailedInfo['tsmc'];
  else if (company_name.includes('Amazon')) matchedDetail = detailedInfo['amazon'];
  else if (company_name.includes('聯發科技')) matchedDetail = detailedInfo['mediatek'];
  else if (company_name.includes('華碩')) matchedDetail = detailedInfo['asus'];
  else if (company_name.includes('Acer') || company_name.includes('宏碁')) matchedDetail = detailedInfo['acer'];
  else if (company_name.includes('瑞昱')) matchedDetail = detailedInfo['realtek'];
  else if (company_name.includes('ASML')) matchedDetail = detailedInfo['asml'];
  else if (company_name.includes('廣達')) matchedDetail = detailedInfo['quanta'];
  else if (company_name.includes('趨勢科技')) matchedDetail = detailedInfo['trendmicro'];
  else if (company_name.includes('台灣大哥大')) matchedDetail = detailedInfo['taiwanmobile'];
  else if (company_name.includes('104')) matchedDetail = detailedInfo['104'];
  else if (company_name.includes('鴻海')) matchedDetail = detailedInfo['honhai'];
  else if (company_name.includes('蝦皮')) matchedDetail = detailedInfo['shopee'];
  else if (company_name.includes('LINE')) matchedDetail = detailedInfo['line'];
  else if (company_name.includes('友達')) matchedDetail = detailedInfo['auo'];
  else if (company_name.includes('台達')) matchedDetail = detailedInfo['delta'];
  else if (company_name.includes('聯華電子')) matchedDetail = detailedInfo['umc'];
  else if (company_name.includes('美光')) matchedDetail = detailedInfo['micron'];
  else if (company_name.includes('戴爾') || company_name.includes('Dell')) matchedDetail = detailedInfo['dell'];
  else if (company_name.includes('惠普') || company_name.includes('HP')) matchedDetail = detailedInfo['hp'];
  else if (company_name.includes('科磊') || company_name.includes('KLA')) matchedDetail = detailedInfo['kla'];
  else if (company_name.includes('科林') || company_name.includes('Lam')) matchedDetail = detailedInfo['lam'];
  else if (company_name.includes('應材') || company_name.includes('AMAT')) matchedDetail = detailedInfo['amat'];
  else if (company_name.includes('工業技術研究院')) matchedDetail = detailedInfo['itri'];
  else if (company_name.includes('仁寶')) matchedDetail = detailedInfo['compal'];
  else if (company_name.includes('緯創')) matchedDetail = detailedInfo['wistron'];
  else if (company_name.includes('和碩')) matchedDetail = detailedInfo['pegatron'];
  else if (company_name.includes('群聯')) matchedDetail = detailedInfo['phison'];
  else if (company_name.includes('聯詠')) matchedDetail = detailedInfo['novatek'];
  else if (company_name.includes('中華電信')) matchedDetail = detailedInfo['cht'];
  else if (company_name.includes('遠傳')) matchedDetail = detailedInfo['fet'];
  else if (company_name.includes('群創')) matchedDetail = detailedInfo['innolux'];
  else if (company_name.includes('WorldQuant')) matchedDetail = detailedInfo['worldquant'];
  else if (company_name.includes('Garena')) matchedDetail = detailedInfo['garena'];
  else if (company_name.includes('91APP')) matchedDetail = detailedInfo['app91'];
  else if (company_name.includes('MixerBox')) matchedDetail = detailedInfo['mixerbox'];

  const defaultFullDescription = `${company_name} 誠摯邀請優秀人才加入我們的團隊！作為「${industry}」領域的活躍企業，我們始終致力於技術創新與服務升級，並提供員工充滿挑戰與成長機會的工作環境。\n\n在本次 2026 臺大校園徵才博覽會中，我們釋出多項重點職缺，涵蓋研發、工程、產品、營運等多元領域。我們重視每一位員工的職涯發展，提供完善的培訓計畫、具競爭力的薪酬福利，以及開放包容的企業文化。\n\n歡迎各位學子於博覽會期間，前往我們的攤位（${booth_id}，位於${booth_location}）與我們的招募團隊面對面交流。您將有機會深入了解我們的核心業務、最新專案以及未來的發展藍圖。無論您是尋找實習機會的在校生，或是準備大展身手的應屆畢業生，${company_name} 都期待與您攜手，共同開創璀璨的未來！`;

  return {
    id,
    booth_id,
    industry,
    company_name,
    booth_location,
    full_description: (matchedDetail as any).full_description || defaultFullDescription,
    ...matchedDetail
  };
});
