/* TODAY. — today's edition. The daily job replaces only this file. */
const EDITION = { date: "Nov. 13, 2026", iso: "2026-11-13", issue: 317 };
const TOPICS = [
  { key:"TECHNOLOGY", stories:[
    { h:["BLUE ORIGIN","PUSHES","NEW GLENN","TO","2027"], s:"Blue Origin has pushed New Glenn's return to flight to January 2027. The rocket has been grounded since an explosion damaged its only launch pad in May.", src:"The Next Web", when:"Nov. 5", url:"https://thenextweb.com/news/blue-origin-new-glenn-return-to-flight-delayed-january" },
    { h:["GOOGLE","BETS","$17B","ON","WYOMING"], s:"Google plans to spend $17 billion on its first Wyoming data center, in Laramie County, and says it will pay for all the power the site uses.", src:"Silicon UK", when:"Nov. 5", url:"https://www.silicon.co.uk/cloud/datacenter/google-wyoming-data-centre-632219" },
    { h:["AI","SUMMARIES","MAY BREAK","COPYRIGHT"], s:"An adviser to the EU's top court says AI chatbots that pull in news articles to answer questions may infringe publishers' rights. The opinion isn't binding; the judges rule later.", src:"Silicon UK", when:"Nov. 3", url:"https://www.silicon.co.uk/cloud/ai/eu-google-gemini-court-632174" },
    { h:["APPLE","WARNS","OF","IPHONE","HACKS"], s:"Apple released iOS 18.7.11 for older iPhones after a report that a flaw may have been used in an extremely sophisticated attack on specific people.", src:"Daily Voice", when:"Oct. 26", url:"https://dailyvoice.com/article/iphone-security-warning-apple-expands-protection-after-targeted-attack-report/" },
    { h:["NVIDIA","TO DATA","CENTERS:","CUT","CHINA"], s:"Nvidia has told cloud partners that at least 51% of their services must go to non-Chinese customers, the Financial Times reports.", src:"DatacenterDynamics", when:"Nov. 3", url:"https://www.datacenterdynamics.com/en/news/nvidia-tells-data-center-partners-to-cut-china-exposure-limits-rtx-chip-sales-to-mainland" },
  ]},
  { key:"TODAY'S SPORTING EVENTS", head:["TODAY'S","SPORTING EVENTS"], cap:"Press for tonight's games.", stories:[
    { h:["WEMBY","VS.","WARRIORS"], s:"NBA Cup, 9:30 p.m. ET on Prime Video. The Spurs (10-2) host Golden State, which is missing Stephen Curry, Jimmy Butler and Moses Moody.", src:"Bleacher Nation · BetMGM", when:"Tonight", url:"https://www.bleachernation.com/picks/2026/11/13/spurs-vs-warriors-predictions-best-bets-and-odds-friday-november-13-2026/", mk:{ venue:"Kalshi", q:"Spurs to win the NBA Cup (no game market found)", odds:"18%", asof:"Nov. 8", via:"Kalshi", url:"https://kalshi.com/nba/teams/san-antonio-spurs" } },
    { h:["FSU","AT","PITT"], s:"College football, 7 p.m. ET on ESPN. Pitt (6-3) hosts Florida State (4-5) at Acrisure Stadium.", src:"Pickdawgz", when:"Tonight", url:"https://pickdawgz.com/college-football-picks/florida-state-vs-pittsburgh-prediction-11-13-2026-todays-college-football-picks/", mk:{ venue:"Kalshi", q:"Pittsburgh to win", odds:"59%", asof:"seen Nov. 13", via:"Kalshi", url:"https://kalshi.com/markets/kxncaafgame/event/kxncaafgame-26nov13fsupitt" } },
    { h:["UNBEATEN","UCLA","HOSTS","ILLINOIS"], s:"College football, 9 p.m. ET on FOX. UCLA (9-0) hosts Illinois (6-3) at the Rose Bowl.", src:"ESPN via ABC7", when:"Tonight", url:"https://abc7.com/post/illinois-visits-no-4-ucla-big-ten-matchup/20024712", mk:{ venue:"Kalshi", q:"UCLA to win", odds:"75%", asof:"seen Nov. 13", via:"Kalshi", url:"https://kalshi.com/markets/kxncaafgame/event/kxncaafgame-26nov13illucla" } },
    { h:["RANGERS","AT","CANUCKS"], s:"NHL, 9 p.m. ET at Rogers Arena. The Rangers (7-7-1) visit a Canucks team that has started 3-12-1.", src:"SportBusy", when:"Tonight", url:"https://www.sportbusy.com/games/nhl/14173645-new-york-rangers-at-vancouver-canucks-2026-11-13/", mk:{ venue:"Polymarket", q:"Rangers to win (price −147)", odds:"about 60%", asof:"seen Nov. 13", via:"Legion Report", url:"https://legionreport.com/?p=50489" } },
  ]},
  { key:"BUSINESS", stories:[
    { h:["CLOUDFLARE","REVENUE","UP","39%"], s:"Cloudflare's third-quarter revenue rose 39% to $782.5 million, its fastest growth in nearly four years, and it raised its full-year outlook.", src:"Cloudflare via Finviz", when:"Nov. 5", url:"https://finviz.com/news/417855/cloudflare-announces-third-quarter-2026-financial-results" },
    { h:["WORKERS","GOT","MORE","PRODUCTIVE"], s:"U.S. output per hour of work rose at a 3.6% annual rate from July through September, the Labor Department said. That's the strongest gain in a year.", src:"Axios", when:"Nov. 5", url:"https://www.axios.com/2026/11/05/labor-output-productivity-ai" },
    { h:["BLACKSTONE","BUYS","IN","INDIA"], s:"Blackstone will invest $535 million in India's IIFL Finance for about a 16% stake, part of a $686 million capital raise.", src:"YourStory", when:"Nov. 10", url:"https://yourstory.com/2026/11/iifl-finance-to-raise-rs-6414-crore-with-blackstone-leading-rs-5000-crore-primary-infusion" },
    { h:["CHINA","BLOCKS","SOFTBANK"], s:"China blocked SoftBank's $5.4 billion purchase of ABB's robotics business, ABB confirmed. The two companies say they're still working on the deal.", src:"Robotics 24/7", when:"Nov. 5", url:"https://www.robotics247.com/article/softbanks-proposed-5.4b-acquisition-of-abb-robotics-blocked-by-china" },
    { h:["UNITED","OPENS","CONCOURSE","E"], s:"Washington Dulles opened Concourse E, its first new concourse in nearly 20 years: 435,000 square feet with 14 new United gates.", src:"Business Traveller", when:"Nov. 10", url:"https://www.businesstraveller.com/news/washington-dulles-concourse-e-united-airlines-new-gates/" },
  ]},
  { key:"WORLD NEWS", stories:[
    { h:["PEACE","TALKS","IN","ABU DHABI"], s:"The Kremlin confirmed three-way peace talks with Ukraine and the United States in Abu Dhabi on Nov. 10 and 11.", src:"Reuters via FDD", when:"Nov. 4", url:"https://www.fdd.org/overnight-brief/november-4-2026/", mk:{ venue:"Polymarket", q:"Russia–Ukraine ceasefire by end of 2027", odds:"44%", asof:"Nov. 5", via:"Rio Times", url:"https://www.riotimesonline.com/ukraine-ceasefire-odds-fall-polymarket-2026/" } },
    { h:["POLAND","BEEFS UP","ITS","BORDER"], s:"Poland is boosting security along its border with Russia.", src:"FDD Overnight Brief", when:"Nov. 4", url:"https://www.fdd.org/overnight-brief/november-4-2026/" },
    { h:["EUROPE","EYES","BYD"], s:"Fourteen members of the European Parliament asked the EU to assess whether cars from China's BYD pose a security threat.", src:"Silicon UK", when:"Nov. 4", url:"https://www.silicon.co.uk/cybersecurity/meps-byd-security-632191" },
    { h:["JAPAN","ASKS","US AI","FOR","DATA"], s:"Japan will seek early access to undisclosed software vulnerability data from US AI companies after a spike in cyberattacks, Nikkei reported.", src:"Silicon UK", when:"Nov. 5", url:"https://www.silicon.co.uk/cybersecurity/japan-cyber-data-632194" },
    { h:["THAI","SPYWARE","WARNING"], s:"Thailand's opposition leader was targeted in a spyware attack, his party said. A government spokesman denied the state was behind it.", src:"The Star", when:"Nov. 3", url:"https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/04/thai-opposition-leader-targeted-in-spyware-attack-party" },
  ]},
  { key:"HEARD.", head:["HEARD.","R&B · HIP-HOP · AMBIENT"], cap:"Press for this week's records from HEARD.",
    playlist:[
      { artist:"Snoh Aalegra", song:"I Love You" }, { artist:"Snoh Aalegra", song:"This That" },
      { artist:"Rochelle Jordan", song:"I'm Your Muse (Ron Trent Remix)" },
      { artist:"Aesop Rock & Blockhead", song:"One Thing" }, { artist:"Aesop Rock & Blockhead", song:"Ewok" },
      { artist:"Armand Hammer", song:"Deadbolts" }, { artist:"Armand Hammer", song:"Send for Me" },
      { artist:"Hiroshi Yoshimura", song:"Hoh River" }, { artist:"Hiroshi Yoshimura", song:"Lullaby of Leaves" },
    ],
    stories:[
    { h:["SNOH","AALEGRA","LEGENDARY","LOVE"], s:"R&B & Soul, verdict STRONG. A love-and-heartbreak album steeped in '80s and '90s R&B, with Babyface and Nile Rodgers aboard. Critics call it her most consistent yet.", src:"HEARD. · The Guardian", when:"Nov. 13", url:"https://www.aol.co.uk/articles/snoh-aalegra-legendary-love-review-080013000.html" },
    { h:["ROCHELLE","JORDAN","DISC 4"], s:"R&B & Soul. The fourth of five remix EPs reworking her 2025 album Through the Wall with dance producers. No reviews yet.", src:"HEARD. · NPR Music", when:"Nov. 13", url:"https://www.wrti.org/wrti-picks-from-npr-music/2026-11-13/new-music-friday-the-best-albums-out-nov-13" },
    { h:["AESOP ROCK","& BLOCKHEAD","TROUBLE","MOUNTAIN"], s:"Hip-hop, verdict STRONG. Their first full collaboration since 2021, set at a made-up ski lodge. RIFF gave it 7/10 for Aesop's sharp eye.", src:"HEARD. · RIFF", when:"Nov. 13", url:"https://riffmagazine.com/album-reviews/aesop-rock-blockhead-trouble-mountain/" },
    { h:["ARMAND","HAMMER","SNAKES","& LADDERS"], s:"Hip-hop. billy woods and ELUCID surprise-released their eighth album: 16 tracks, each with its own producer. Full reviews haven't landed yet.", src:"HEARD. · The Quietus", when:"Nov. 11", url:"https://thequietus.com/news/armand-hammer-surprise-release-new-album-snakes-ladders/" },
    { h:["HIROSHI","YOSHIMURA","QUIET","FOREST"], s:"Ambient. A reissue of Quiet Forest from the Japanese ambient pioneer, picked in omg!nyc's suggested new music this week.", src:"omg!nyc", when:"This week", url:"https://omgnyc.substack.com/p/gold-soundz-november-13-2026" },
  ]},
  { key:"APP OF THE DAY", extra:true, head:["TODAY'S","APP"], cap:"Press for today's app.", stories:[
    { h:["TODAY'S APP:","DECK-MAN"], s:"Deck-Man turns the iPhone Duo into a cassette Walkman. Open the phone to flip through your albums as tapes, then close it to press play.", src:"App.Day No. 002", when:"Today", url:"https://claude.ai/artifact/Euuv8YFRuqUba6uEfPtqco" },
    { h:["INSERT","TAPE.","CLOSE","PHONE."], s:"The hinge is the whole idea. Opening and closing the Duo is how you load a tape and start playing, with clicks recorded from a real Walkman.", src:"App.Day No. 002", when:"Today", url:"https://claude.ai/artifact/Euuv8YFRuqUba6uEfPtqco" },
    { h:["$4.99","NO ADS.","NO SUBS."], s:"It plays Apple Music and local files for a one-time $4.99, with no subscription or in-app purchases.", src:"App Store", when:"Today", url:"https://apps.apple.com/us/app/deck-man-cassette-player/id6817070335" },
  ]},
  { key:"WORD OF THE DAY", extra:true, head:["TODAY'S","WORD"], cap:"Press for today's word.", stories:[
    { h:["TODAY'S","WORD:","TRISKAI-","DEKAPHOBIA"], s:"Triskaidekaphobia (triss-kye-dek-uh-FOH-bee-uh), noun: fear of the number 13. Fitting for Friday the 13th.", src:"Merriam-Webster", when:"Today", url:"https://www.merriam-webster.com/dictionary/triskaidekaphobia" },
    { h:["GREEK","FOR","THIRTEEN"], s:"The word dates to around 1911: the Greek word for thirteen, treiskaideka (minus its first e), plus phobia, meaning fear.", src:"Merriam-Webster", when:"Today", url:"https://www.merriam-webster.com/dictionary/triskaidekaphobia" },
    { h:["USE","IT","TODAY"], s:"\u201cHis triskaidekaphobia is why the hotel skips straight from floor 12 to floor 14.\u201d", src:"Merriam-Webster", when:"Today", url:"https://www.merriam-webster.com/dictionary/triskaidekaphobia" },
  ]},
  { key:"QUOTE OF THE DAY", extra:true, head:["TODAY'S","QUOTE"], cap:"Press for today's quote.", stories:[
    { h:["DEFINITIONS","BELONG TO","THE DEFINERS,","NOT THE","DEFINED."], s:"Toni Morrison, Beloved (1987). In the novel, a slaveholder called schoolteacher beats Sixo, an enslaved man who out-argues him, to make this point.", src:"Inquiries Journal", when:"Beloved, 1987", url:"https://inquiriesjournal.com/articles/904/naming-and-identity-in-toni-morrisons-beloved-and-song-of-solomon" },
    { h:["TONI","MORRISON","1931–2019"], s:"Novelist, editor and essayist who wrote about the African American experience. Beloved won the Pulitzer Prize, and she won the 1993 Nobel Prize in Literature.", src:"Literary Ladies Guide", when:"Today", url:"https://www.literaryladiesguide.com/?p=15507" },
  ]},
  { key:"LOGO SHOP", extra:true, logo:true, url:"https://claude.ai/artifact/BNzfipQWN9duLGxwnTcSsd",
    season:"Beginning of Winter", micro:"The ground begins to freeze", motif:"Frost crystal", stories:[] },
  { key:"CLAIM", extra:true, game:true, url:"https://claude.ai/artifact/J56wLgj1oUokb56Rg6juFs", stories:[] },
];
