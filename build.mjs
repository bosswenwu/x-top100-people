import fs from "node:fs";

const raw = JSON.parse(
  fs.readFileSync("C:/Users/xuewe/AppData/Local/Temp/x-people.json", "utf8")
);

const meta = {
  elonmusk: ["商业", "埃隆·马斯克", "Elon Musk", "企业家，X、特斯拉与 SpaceX 的负责人。"],
  BarackObama: ["政治", "巴拉克·奥巴马", "Barack Obama", "美国第44任总统。"],
  Cristiano: ["体育", "克里斯蒂亚诺·罗纳尔多", "Cristiano Ronaldo", "葡萄牙足球运动员。"],
  realDonaldTrump: ["政治", "唐纳德·特朗普", "Donald J. Trump", "美国第45任、第47任总统。"],
  narendramodi: ["政治", "纳伦德拉·莫迪", "Narendra Modi", "印度总理。"],
  rihanna: ["音乐", "蕾哈娜", "Rihanna", "巴巴多斯歌手、企业家，Fenty 创始人。"],
  justinbieber: ["音乐", "贾斯汀·比伯", "Justin Bieber", "加拿大歌手。"],
  katyperry: ["音乐", "凯蒂·佩里", "Katy Perry", "美国歌手。2017年成为首位粉丝破亿的 X 用户，其后回落。"],
  taylorswift13: ["音乐", "泰勒·斯威夫特", "Taylor Swift", "美国歌手、词曲作者。"],
  ladygaga: ["音乐", "嘎嘎小姐", "Lady Gaga", "美国歌手、演员。"],
  imVkohli: ["体育", "维拉特·科利", "Virat Kohli", "印度板球运动员。"],
  KimKardashian: ["影视", "金·卡戴珊", "Kim Kardashian", "美国电视名人、企业家，SKIMS 创始人。"],
  neymarjr: ["体育", "内马尔", "Neymar Jr", "巴西足球运动员。"],
  BillGates: ["商业", "比尔·盖茨", "Bill Gates", "微软联合创始人，盖茨基金会联席主席。"],
  selenagomez: ["音乐", "赛琳娜·戈麦斯", "Selena Gomez", "美国歌手、演员。"],
  TheEllenShow: ["影视", "艾伦·德杰尼勒斯", "Ellen DeGeneres", "美国喜剧演员、前脱口秀主持人。这个号长期是她的主账号，现在页面以《艾伦秀》片段为主。"],
  KingJames: ["体育", "勒布朗·詹姆斯", "LeBron James", "美国篮球运动员。"],
  jtimberlake: ["音乐", "贾斯汀·汀布莱克", "Justin Timberlake", "美国歌手、演员。"],
  ddlovato: ["音乐", "黛米·洛瓦托", "Demi Lovato", "美国歌手、演员。"],
  shakira: ["音乐", "夏奇拉", "Shakira", "哥伦比亚歌手。"],
  SrBachchan: ["影视", "阿米塔布·巴赫坎", "Amitabh Bachchan", "印度演员。"],
  akshaykumar: ["影视", "阿克谢·库马尔", "Akshay Kumar", "印度演员。"],
  miley: ["音乐", "麦莉·赛勒斯", "Miley Cyrus", "美国歌手、演员。"],
  britneyspears: ["音乐", "布兰妮·斯皮尔斯", "Britney Spears", "美国歌手。"],
  jimmyfallon: ["影视", "吉米·法伦", "Jimmy Fallon", "美国脱口秀主持人，《今夜秀》主持。"],
  BeingSalmanKhan: ["影视", "萨尔曼·汗", "Salman Khan", "印度演员。"],
  iamsrk: ["影视", "沙鲁克·汗", "Shah Rukh Khan", "印度演员。"],
  KylieJenner: ["影视", "凯莉·詹纳", "Kylie Jenner", "美国名流、企业家，Kylie Cosmetics 创始人。"],
  sachin_rt: ["体育", "萨钦·坦杜尔卡", "Sachin Tendulkar", "印度前板球运动员。"],
  JoeBiden: ["政治", "乔·拜登", "Joe Biden", "美国第46任总统。"],
  iamcardib: ["音乐", "卡迪·B", "Cardi B", "美国说唱歌手。"],
  BrunoMars: ["音乐", "布鲁诺·马尔斯", "Bruno Mars", "美国歌手、词曲作者。"],
  AmitShah: ["政治", "阿米特·沙阿", "Amit Shah", "印度内政部长、合作部长。"],
  JLo: ["音乐", "珍妮弗·洛佩兹", "Jennifer Lopez", "美国歌手、演员。"],
  Oprah: ["影视", "奥普拉·温弗瑞", "Oprah Winfrey", "美国主持人、制作人。"],
  MrBeast: ["创作者", "MrBeast", "MrBeast", "美国视频创作者，以大型挑战和公益项目闻名。"],
  Drake: ["音乐", "德雷克", "Drake", "加拿大说唱歌手、歌手。主页显示名为 Drizzy。"],
  myogiadityanath: ["政治", "约吉·阿迪亚纳特", "Yogi Adityanath", "印度北方邦首席部长。"],
  NiallOfficial: ["音乐", "奈尔·霍兰", "Niall Horan", "爱尔兰歌手，前 One Direction 成员。"],
  KevinHart4real: ["影视", "凯文·哈特", "Kevin Hart", "美国喜剧演员。"],
  wizkhalifa: ["音乐", "维兹·卡利法", "Wiz Khalifa", "美国说唱歌手。"],
  kanyewest: ["音乐", "Ye", "Ye", "美国说唱歌手、制作人，曾用名坎耶·韦斯特。"],
  Harry_Styles: ["音乐", "哈里·斯泰尔斯", "Harry Styles", "英国歌手，前 One Direction 成员。"],
  LilTunechi: ["音乐", "利尔·韦恩", "Lil Wayne", "美国说唱歌手。"],
  iHrithik: ["影视", "赫里蒂克·罗尚", "Hrithik Roshan", "印度演员。"],
  HillaryClinton: ["政治", "希拉里·克林顿", "Hillary Clinton", "美国前国务卿、前第一夫人，2016年民主党总统候选人。"],
  KendallJenner: ["影视", "肯达尔·詹纳", "Kendall Jenner", "美国模特、电视名人。"],
  Louis_Tomlinson: ["音乐", "路易斯·汤姆林森", "Louis Tomlinson", "英国歌手，前 One Direction 成员。"],
  RahulGandhi: ["政治", "拉胡尔·甘地", "Rahul Gandhi", "印度国会人民院反对党领袖。"],
  chrisbrown: ["音乐", "克里斯·布朗", "Chris Brown", "美国歌手。"],
  khloekardashian: ["影视", "科勒·卡戴珊", "Khloé Kardashian", "美国电视名人。"],
  NICKIMINAJ: ["音乐", "妮琪·米娜", "Nicki Minaj", "特立尼达和多巴哥裔美国说唱歌手。"],
  LiamPayne: ["音乐", "利亚姆·佩恩", "Liam Payne", "英国歌手，前 One Direction 成员。2024年去世，账号仍保留。"],
  KDTrey5: ["体育", "凯文·杜兰特", "Kevin Durant", "美国篮球运动员。"],
  ArvindKejriwal: ["政治", "阿尔温德·凯杰里瓦尔", "Arvind Kejriwal", "印度政治家，普通人党创始人。"],
  zaynmalik: ["音乐", "赞恩·马利克", "Zayn Malik", "英国歌手，前 One Direction 成员。"],
  priyankachopra: ["影视", "普里扬卡·乔普拉", "Priyanka Chopra", "印度演员、制作人。"],
  StephenCurry30: ["体育", "斯蒂芬·库里", "Stephen Curry", "美国篮球运动员。"],
  Pink: ["音乐", "P!nk", "P!nk", "美国歌手。"],
  rajnathsingh: ["政治", "拉杰纳特·辛格", "Rajnath Singh", "印度国防部长。"],
  KMbappe: ["体育", "基利安·姆巴佩", "Kylian Mbappé", "法国足球运动员，效力皇家马德里。"],
  ShawnMendes: ["音乐", "肖恩·门德斯", "Shawn Mendes", "加拿大歌手。"],
  ImRo45: ["体育", "罗希特·夏尔马", "Rohit Sharma", "印度板球运动员。"],
  ConanOBrien: ["影视", "柯南·奥布莱恩", "Conan O'Brien", "美国脱口秀主持人。"],
  aliciakeys: ["音乐", "艾丽西亚·凯斯", "Alicia Keys", "美国歌手、钢琴家。"],
  EmmaWatson: ["影视", "艾玛·沃特森", "Emma Watson", "英国演员。"],
  kourtneykardash: ["影视", "考特尼·卡戴珊", "Kourtney Kardashian", "美国电视名人。"],
  deepikapadukone: ["影视", "迪皮卡·帕度柯妮", "Deepika Padukone", "印度演员。"],
  KAKA: ["体育", "卡卡", "Kaká", "巴西前足球运动员。"],
  virendersehwag: ["体育", "维伦德拉·塞瓦格", "Virender Sehwag", "印度前板球运动员。"],
  Adele: ["音乐", "阿黛尔", "Adele", "英国歌手。"],
  auronplay: ["创作者", "AuronPlay", "AuronPlay", "西班牙直播与视频创作者。"],
  andresiniesta8: ["体育", "安德烈斯·伊涅斯塔", "Andrés Iniesta", "西班牙前足球运动员。"],
  AnushkaSharma: ["影视", "安努舒卡·夏尔马", "Anushka Sharma", "印度演员、制作人。"],
  Rubiu5: ["创作者", "ElRubius", "ElRubius", "西班牙视频创作者。"],
  RafaelNadal: ["体育", "拉斐尔·纳达尔", "Rafael Nadal", "西班牙前网球运动员。"],
  Benzema: ["体育", "卡里姆·本泽马", "Karim Benzema", "法国足球运动员。"],
  KamalaHarris: ["政治", "卡玛拉·哈里斯", "Kamala Harris", "美国前副总统。"],
  jokowi: ["政治", "佐科威", "Joko Widodo", "印度尼西亚前总统。"],
  ActuallyNPH: ["影视", "尼尔·帕特里克·哈里斯", "Neil Patrick Harris", "美国演员。"],
  MichelleObama: ["政治", "米歇尔·奥巴马", "Michelle Obama", "美国前第一夫人。"],
  ImranKhanPTI: ["政治", "伊姆兰·汗", "Imran Khan", "巴基斯坦前总理，正义运动党主席。"],
  VancityReynolds: ["影视", "瑞安·雷诺兹", "Ryan Reynolds", "加拿大演员，雷克瑟姆足球俱乐部共同所有者。"],
  tim_cook: ["商业", "蒂姆·库克", "Tim Cook", "苹果公司执行董事长。"],
  aliaa08: ["影视", "阿莉亚·巴特", "Alia Bhatt", "印度演员。"],
  RTErdogan: ["政治", "雷杰普·塔伊普·埃尔多安", "Recep Tayyip Erdoğan", "土耳其总统。"],
  Eminem: ["音乐", "埃米纳姆", "Eminem", "美国说唱歌手。"],
  MoSalah: ["体育", "穆罕默德·萨拉赫", "Mohamed Salah", "埃及足球运动员。"],
  SergioRamos: ["体育", "塞尔吉奥·拉莫斯", "Sergio Ramos", "西班牙足球运动员。"],
  KapilSharmaK9: ["影视", "卡皮尔·夏尔马", "Kapil Sharma", "印度喜剧演员、主持人。"],
  Anitta: ["音乐", "阿尼塔", "Anitta", "巴西歌手。"],
  SnoopDogg: ["音乐", "斯努普·狗狗", "Snoop Dogg", "美国说唱歌手。"],
  pitbull: ["音乐", "Pitbull", "Pitbull", "美国说唱歌手、歌手。"],
  Zendaya: ["影视", "赞达亚", "Zendaya", "美国演员。"],
  "10Ronaldinho": ["体育", "罗纳尔迪尼奥", "Ronaldinho", "巴西前足球运动员。"],
  theweeknd: ["音乐", "The Weeknd", "The Weeknd", "加拿大歌手、制作人。"],
  TuckerCarlson: ["媒体", "塔克·卡尔森", "Tucker Carlson", "美国时事评论员。"],
  Pontifex: ["宗教", "教宗良十四世", "Pope Leo XIV", "教宗官方账号，现任为良十四世。"],
  MariahCarey: ["音乐", "玛丽亚·凯莉", "Mariah Carey", "美国歌手。"],
  "3gerardpique": ["体育", "热拉尔·皮克", "Gerard Piqué", "西班牙前足球运动员，Kosmos 创始人。"],
};

function classify(url) {
  if (!url) return null;
  let host = "";
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
  const drop = ["bit.ly", "twitter.com", "x.com", "t.co", "airbnb.com"];
  if (drop.some((b) => host === b || host.endsWith("." + b))) return null;
  if (
    host === "linktr.ee" ||
    host.endsWith(".lnk.to") ||
    host === "lnk.to" ||
    host === "linkin.bio" ||
    host === "komi.io" ||
    host === "hoo.be" ||
    host === "linktree.com" ||
    host === "pear.us"
  ) {
    return { href: url, label: "链接" };
  }
  if (host.includes("instagram.com")) return { href: url, label: "Instagram" };
  if (host.includes("facebook.com")) return { href: url, label: "Facebook" };
  if (host.includes("youtube.com")) return { href: url, label: "YouTube" };
  if (host.includes("twitch.tv")) return { href: url, label: "Twitch" };
  if (host.includes("tumblr.com")) return { href: url, label: "Tumblr" };
  return { href: url, label: "官网" };
}

const people = raw.top120.slice(0, 100).map((p, i) => {
  const row = meta[p.handle];
  if (!row) throw new Error("missing meta for " + p.handle);
  const [category, nameZh, nameEn, bio] = row;
  const link = classify(p.website);
  return {
    rank: i + 1,
    handle: p.handle,
    xName: p.name,
    nameZh,
    nameEn,
    followers: p.followers,
    category,
    bio,
    avatar: p.avatar,
    x: `https://x.com/${p.handle}`,
    link,
  };
});

const payload = {
  fetchedAt: raw.fetchedAt,
  people,
};

fs.writeFileSync(
  new URL("./data.js", import.meta.url),
  "window.XPEOPLE = " + JSON.stringify(payload) + ";\n"
);
console.log("wrote", people.length, raw.fetchedAt);
