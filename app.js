"use strict";

/* ============================ Icons ============================ */
const ICONS = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
  sunrise: '<path d="M12 9a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4z"/><path d="M12 2v2M5 6l1.5 1.5M19 6l-1.5 1.5M2 13h2M20 13h2M3 20h18M8 16h8"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4 12 14l-3-3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  crown: '<path d="m3 7 4 4 5-7 5 7 4-4v11H3z"/>',
  flame: '<path d="M12 2c.8 3.2-3.5 5.2-3.5 9.3a5.5 5.5 0 0 0 11 0c0-4.2-3.5-6.3-4.5-8.2-1.2 2-3 3-3 1.5z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 3 5-7"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4a2 2 0 0 0 2 5M17 6h3a2 2 0 0 1-2 5"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5"/>',
  micOff: '<path d="m2 2 20 20"/><path d="M9 9v3a3 3 0 0 0 5.1 2.1M15 9V5a3 3 0 0 0-6-.9"/><path d="M5 10a7 7 0 0 0 9.7 6.4M19 10a7 7 0 0 1-1.5 4.2M12 17v5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  gift: '<rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M5 12v9h14v-9"/><path d="M12 8s-2-5-4-5a3 3 0 0 0 0 6h4zm0 0s2-5 4-5a3 3 0 0 1 0 6h-4z"/>',
  ticket: '<path d="M4 5h16a1 1 0 0 1 1 1v3a3 3 0 0 0 0 6v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a3 3 0 0 0 0-6V6a1 1 0 0 1 1-1z"/><path d="M13 9v6"/>',
  radio: '<circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.5M16.2 7.8a6 6 0 0 1 0 8.5M4.9 4.9a10 10 0 0 0 0 14.1M19.1 4.9a10 10 0 0 1 0 14.1"/>',
  sprout: '<path d="M7 20h10M12 20v-8"/><path d="M12 12c0-4 3-5 3-8-3 0-5 2-5 6 0 0-2-1-2-3-3 0-4 3-2 5 1.5 1.5 4 0 4 0z"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  scale: '<path d="M12 3v18M8 21h8"/><path d="M5 7h14M5 7l-2.5 5a3 3 0 0 0 6 0L6 7M19 7l-2.5 5a3 3 0 0 0 6 0L20 7"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 21l1.9-5.1a8.5 8.5 0 1 1 16.1-4.4z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  timer: '<path d="M10 2h4M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
  star: '<path d="m12 2 3 6.5 7 .8-5 4.5 1.3 7L12 17.3 5.7 20.8 7 13.8l-5-4.5 7-.8z"/>',
  flag: '<path d="M4 21V4M4 4h12l-2 4 2 4H4"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.7 5H7.3a2 2 0 0 0-1.8 1.5z"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  thumbsUp: '<path d="M7 10v11M3 21h4M7 11 12 4c1 0 2 .8 2 2v3h5a2 2 0 0 1 2 2l-1.5 7a2 2 0 0 1-2 1.7H8"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"/>'
};

function icon(name, size) {
  size = size || 20;
  const body = ICONS[name] || ICONS.sparkle;
  return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
}

/* ============================ Data ============================ */
const TIERS = {
  week:    { key: "week", name: "周卡", days: 7, price: "9.9", group: "7天短期打卡群", exempt: 0, rewards: ["早早大王电子明信片", "电子励志签名壁纸"], color: "#0fa88c", note: "连续7天每日打卡" },
  month:   { key: "month", name: "月卡", days: 30, price: "29.9", group: "月度成长群", exempt: 1, rewards: ["纸质明信片", "电子签名照"], color: "#f26b3a", note: "30天允许豁免1天" },
  quarter: { key: "quarter", name: "季卡", days: 90, price: "89.9", group: "季度成长群", exempt: 3, rewards: ["纸质明信片", "签名卡", "IP书签"], color: "#7c6cf0", note: "90天允许豁免3天" },
  year:    { key: "year", name: "年卡", days: 365, price: "199", group: "年度核心成长群", exempt: 12, rewards: ["全套IP礼盒", "签名明信片", "签名卡", "定制书签", "专属自律笔记本"], color: "#d99a20", note: "365天允许豁免12天", hot: true }
};

const QUOTES = [
  "早起不是一瞬间的热血，是日复一日的坚持。",
  "你起不来的早晨，总有人在替你坚持。",
  "把最难的半小时交给清晨，把从容的一整天还给自己。",
  "普通人也能逆天改命，关键是别在黎明前放弃。",
  "先完成，再完美；先早起，再逆袭。",
  "今天多读的一页书，是未来多走的一条路。"
];

const TEMPLATES = [
  { id: "t1", name: "早起自律套餐", color: "#f26b3a", items: ["05:30早起", "晨间拉伸", "写今日计划"], icon: "sunrise" },
  { id: "t2", name: "考研备考套餐", color: "#7c6cf0", items: ["背单词100个", "专业课2小时", "真题1套"], icon: "book" },
  { id: "t3", name: "减脂健身套餐", color: "#0fa88c", items: ["空腹有氧30分钟", "记录体重", "清淡饮食"], icon: "flame" },
  { id: "t4", name: "读书成长套餐", color: "#3b82f6", items: ["阅读30分钟", "读书笔记", "输出一句感悟"], icon: "book" },
  { id: "t5", name: "考公学习套餐", color: "#e34d6d", items: ["行测刷题", "申论积累", "时政速览"], icon: "target" }
];

const SUCCESS_STORIES = [
  { name: "上岸鸭", text: "跟着训练营坚持了86天，从赖床到每天05:20起床，终于上岸了。", tag: "考研" },
  { name: "追光者小鹿", text: "读完12本书、瘦了9斤，原来普通人真的可以一点点变好。", tag: "减脂" },
  { name: "慢慢", text: "把早起当成重启人生的按钮，现在我也有资格说自己是自律的人了。", tag: "成长" }
];

const TOPICS = ["早起打卡", "考研自律", "读书成长", "减脂逆袭", "考公上岸", "时间管理"];

const DRILLS = [
  { id: "g1", title: "早起的复利效应", desc: "为什么每天早起1小时，一年后你会多出365小时的可支配人生。", category: "干货", icon: "sunrise" },
  { id: "g2", title: "番茄钟的正确用法", desc: "25分钟专注+5分钟休息，是普通人最容易被忽略的高效心法。", category: "方法论", icon: "timer" },
  { id: "g3", title: "2026读书清单", desc: "早早大王亲选：改变认知的12本必读书。", category: "书单", icon: "book" },
  { id: "g4", title: "从辍学到博士的避坑经验", desc: "那些我踩过的坑，希望你能绕过去。", category: "逆袭", icon: "flame" }
];

/* ============================ Store ============================ */
const LS_KEY = "zzdw_app_v1";

function uid(prefix) {
  return (prefix || "id") + "-" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

function pad(n) { return String(n).padStart(2, "0"); }
function toISO(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
function todayISO() { return toISO(new Date()); }
function parseISO(s) { const p = s.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); }
function addDaysISO(iso, n) { const d = parseISO(iso); d.setDate(d.getDate() + n); return toISO(d); }
function diffDays(a, b) { return Math.round((parseISO(b) - parseISO(a)) / 86400000); }
function iso(d) { return toISO(d); }
function fmtCN(d) { return (d.getMonth() + 1) + "月" + d.getDate() + "日"; }

function seed() {
  const t = todayISO();
  const plans = [
    { id: "p1", title: "早起打卡", category: "早起", period: "每日", icon: "sunrise", color: "#f26b3a", target: "05:30 起床", note: "早起是一天中最重要的一件事", tags: ["早起"], start: addDaysISO(t, -20), active: true },
    { id: "p2", title: "每天阅读", category: "读书", period: "每日", icon: "book", color: "#3b82f6", target: "阅读 30 分钟", note: "把阅读变成像刷牙一样的习惯", tags: ["读书"], start: addDaysISO(t, -14), active: true },
    { id: "p3", title: "减脂健身", category: "运动", period: "每周", icon: "flame", color: "#0fa88c", target: "每周运动 4 次", note: "瘦下来之前，先动起来", tags: ["运动"], start: addDaysISO(t, -9), active: true }
  ];

  const checkins = [];
  for (let i = 20; i >= 0; i--) {
    const d = addDaysISO(t, -i);
    if (i === 4) continue; // one missed day
    if (i === 7) continue;
    checkins.push({ id: uid("c"), planId: "p1", date: d, time: "05:36", note: i % 5 === 0 ? "今天状态很好，继续坚持" : "", tag: "早起" });
  }
  for (let i = 14; i >= 0; i--) {
    const d = addDaysISO(t, -i);
    if (i === 5 || i === 12) continue;
    checkins.push({ id: uid("c"), planId: "p2", date: d, time: "22:05", note: i % 4 === 0 ? "读完一章，很有收获" : "", tag: "读书" });
  }

  const members = [
    { id: "m1", name: "早起的蜗牛", streak: 42, done: true, color: "#f26b3a" },
    { id: "m2", name: "小树苗", streak: 31, done: true, color: "#0fa88c" },
    { id: "m3", name: "上岸鸭", streak: 28, done: true, color: "#7c6cf0" },
    { id: "m4", name: "追光者小鹿", streak: 24, done: false, color: "#3b82f6" },
    { id: "m5", name: "阿猛", streak: 19, done: true, color: "#e34d6d" },
    { id: "m6", name: "慢慢", streak: 15, done: false, color: "#d99a20" }
  ];

  const posts = [
    { id: "po1", author: "上岸鸭", color: "#7c6cf0", topic: "考研自律", time: "今天 05:42", text: "第28天，天还没亮，但我已经站在了图书馆门口。坚持的感觉真的会上瘾。", likes: 128, comments: 16, img: "晨光图书馆" },
    { id: "po2", author: "追光者小鹿", color: "#3b82f6", topic: "减脂逆袭", time: "今天 06:10", text: "早起空腹有氧打卡，体重又掉了0.4kg。普通人也能一点点靠近想要的自己。", likes: 86, comments: 9, img: "晨跑记录" },
    { id: "po3", author: "早起的蜗牛", color: "#f26b3a", topic: "读书成长", time: "昨天 21:34", text: "本月读完第4本书《掌控习惯》。好习惯不是靠意志力，而是靠系统。", likes: 203, comments: 31, img: "读书笔记" },
    { id: "po4", author: "慢慢", color: "#d99a20", topic: "时间管理", time: "昨天 07:02", text: "用番茄钟把一天拆成可以掌控的块，焦虑少了一大半。", likes: 54, comments: 7, img: "番茄钟" }
  ];

  const notifications = [
    { id: "n1", type: "checkin", title: "今日打卡提醒", desc: "别忘记今天的早起打卡哦，坚持的第21天，加油！", time: "刚刚", read: false },
    { id: "n2", type: "room", title: "晨间监督房即将开始", desc: "05:00 的晨间专注房还有 20 分钟开始，提前进入占位。", time: "1小时前", read: false },
    { id: "n3", type: "content", title: "新干货已更新", desc: "早早大王发布了「早起的复利效应」，点击查看。", time: "昨天", read: false },
    { id: "n4", type: "report", title: "本周自律周报", desc: "本周打卡率 91%，连续打卡 20 天，超过 92% 的伙伴。", time: "周日", read: true }
  ];

  const treehole = [
    { id: "th1", text: "最近总是坚持了几天就断，好焦虑。", reply: "断档不可怕，能重新开始就是赢家。", time: "2天前" },
    { id: "th2", text: "一个人在自习室有点孤单。", reply: "你不是一个人，今晚的视频房见。", time: "1天前" }
  ];

  return {
    user: { nickname: "早起追光者", avatar: "追", bio: "用早起重启人生", wakeTime: "05:30", signature: "" },
    membership: null,
    plans: plans,
    checkins: checkins,
    exemptions: [],
    orders: [],
    rewards: [],
    notes: [
      { id: "r1", date: addDaysISO(t, -7), title: "第2周自律复盘", body: "本周早起6天，阅读5天。做得好的：坚持晨间仪式；待改进：晚上刷手机太久，影响睡眠。" }
    ],
    favorites: [],
    wishlist: [{ id: "w1", text: "2026年考上心仪的学校", open: true }],
    notifications: notifications,
    members: members,
    posts: posts,
    treehole: treehole,
    focusSessions: [
      { date: addDaysISO(t, -6), min: 125 }, { date: addDaysISO(t, -5), min: 100 }, { date: addDaysISO(t, -4), min: 150 },
      { date: addDaysISO(t, -3), min: 75 }, { date: addDaysISO(t, -2), min: 175 }, { date: addDaysISO(t, -1), min: 100 }, { date: t, min: 50 }
    ],
    bodyMetrics: [],
    teams: [],
    teamPosts: [],
    settings: { push: true, roomNotify: true, reportNotify: true, contentNotify: true },
    seenIntro: false,
    contractSigned: false,
    radioOn: false,
    createdAt: t
  };
}

function load() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Object.assign(seed(), parsed);
    }
  } catch (e) { /* ignore */ }
  return seed();
}

let state = load();
function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
}

/* ============================ Utils ============================ */
function $(sel, root) { return (root || document).querySelector(sel); }
function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function initials(name) { return String(name || "我").slice(0, 1); }

function toast(msg) {
  const root = $("#toast-root");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  root.appendChild(el);
  setTimeout(function () { el.style.opacity = "0"; el.style.transition = "opacity 0.3s"; }, 2200);
  setTimeout(function () { el.remove(); }, 2600);
}

function openSheet(html) {
  const root = $("#sheet-root");
  root.innerHTML = '<div class="sheet-mask" data-action="close-sheet"></div><div class="sheet" role="dialog" aria-modal="true">' + html + "</div>";
  requestAnimationFrame(function () { root.classList.add("open"); });
}
function closeSheet() {
  const root = $("#sheet-root");
  root.classList.remove("open");
  setTimeout(function () { root.innerHTML = ""; }, 260);
}

/* ============================ Router ============================ */
const MAIN_VIEWS = ["home", "checkin", "community", "discover", "profile"];
const TITLES = {
  home: "早早大王早起成长营", checkin: "打卡计划", community: "成长社群", discover: "发现广场", profile: "个人中心",
  room: "视频监督房", membership: "会员中心", messages: "消息通知", story: "逆袭故事", settings: "账号设置",
  badges: "自律勋章", certificate: "自律证书", report: "复盘报告", plans: "全部计划", team: "组队打卡",
  notes: "我的复盘", metrics: "身体记录", treehole: "情绪树洞", questionnaire: "月度复盘问卷", radio: "晨间电台",
  contract: "自律契约书", poster: "分享海报", wish: "心愿墙", drill: "干货详情", topic: "话题广场", room2: "视频监督房"
};

let currentView = "home";
let navStack = [];
let calCursor = new Date();
let feedTab = "推荐";
let room = { joined: false, mode: "公开房", cam: true, mic: false };
let timer = { running: false, phase: "focus", remaining: 25 * 60, focus: 25 * 60, brk: 5 * 60, cycle: 1 };
let tickId = null;

function go(view) {
  if (view === currentView) return;
  if (MAIN_VIEWS.includes(view)) {
    navStack = [];
  } else {
    navStack.push(currentView);
  }
  currentView = view;
  if (view === "home") calCursor = new Date();
  if (tickId) { clearInterval(tickId); tickId = null; }
  render();
  window.scrollTo(0, 0);
}
function back() {
  currentView = navStack.length ? navStack.pop() : "home";
  if (currentView === "home") calCursor = new Date();
  if (tickId) { clearInterval(tickId); tickId = null; }
  render();
  window.scrollTo(0, 0);
}

/* ============================ Render ============================ */
function topbar() {
  const isMain = MAIN_VIEWS.includes(currentView);
  const title = TITLES[currentView] || "早早大王";
  const unread = state.notifications.filter(function (n) { return !n.read; }).length;
  return '<header class="topbar">' +
    '<div class="topbar__left">' +
      (isMain ? '<div class="topbar__title">' + esc(title) + '<small>普通人也能逆天改命</small></div>' :
        '<button class="icon-btn" data-action="back" aria-label="返回">' + icon("chevronLeft", 20) + "</button>" +
        '<div class="topbar__title">' + esc(title) + "</div>") +
    "</div>" +
    '<div class="topbar__right">' +
      '<button class="icon-btn" data-action="nav" data-to="messages" aria-label="消息">' + icon("bell", 20) + (unread ? '<span class="dot"></span>' : "") + "</button>" +
    "</div></header>";
}

function bottomnav() {
  const items = [
    { key: "home", label: "首页", ic: "home" },
    { key: "checkin", label: "打卡", ic: "check-circle" },
    { key: "community", label: "社群", ic: "users" },
    { key: "discover", label: "发现", ic: "compass" },
    { key: "profile", label: "我的", ic: "user" }
  ];
  const unread = state.notifications.some(function (n) { return !n.read; });
  return '<nav class="bottomnav">' + items.map(function (it) {
    return '<button class="bottomnav__item' + (currentView === it.key ? " active" : "") + '" data-action="nav" data-to="' + it.key + '">' +
      icon(it.ic, 22) + "<span>" + it.label + "</span>" +
      (it.key === "discover" && unread ? '<span class="badge-dot"></span>' : "") +
      "</button>";
  }).join("") + "</nav>";
}

function render() {
  const app = $("#app");
  const isMain = MAIN_VIEWS.includes(currentView);
  const full = currentView === "room";
  app.classList.remove("hidden");
  app.innerHTML =
    (full ? "" : topbar()) +
    '<div class="scroll' + (full ? " full" : "") + '">' +
      '<div class="view' + (isMain ? "" : " no-nav") + '">' + renderView() + "</div>" +
    "</div>" +
    (isMain ? bottomnav() : "");
  afterRender();
}

function renderView() {
  switch (currentView) {
    case "home": return renderHome();
    case "checkin": return renderCheckin();
    case "community": return renderCommunity();
    case "discover": return renderDiscover();
    case "profile": return renderProfile();
    case "room": return renderRoom();
    case "membership": return renderMembership();
    case "messages": return renderMessages();
    case "story": return renderStory();
    case "settings": return renderSettings();
    case "badges": return renderBadges();
    case "certificate": return renderCertificate();
    case "report": return renderReport();
    case "plans": return renderPlans();
    case "team": return renderTeam();
    case "notes": return renderNotes();
    case "metrics": return renderMetrics();
    case "treehole": return renderTreehole();
    case "questionnaire": return renderQuestionnaire();
    case "radio": return renderRadio();
    case "contract": return renderContract();
    case "poster": return renderPoster();
    case "wish": return renderWish();
    case "drill": return renderDrill();
    case "topic": return renderTopic();
    default: return renderHome();
  }
}

/* ============================ Home ============================ */
function renderHome() {
  const q = QUOTES[new Date().getDate() % QUOTES.length];
  const myGroup = membershipGroup();
  const todayCount = state.checkins.filter(function (c) { return c.date === todayISO(); }).length;
  const rank = leaderboard();
  return '' +
    hero() +
    '<div class="quick-grid mt16">' +
      '<button class="quick" data-action="checkin-today"><span class="quick__icon" style="background:' + hexSoft("#0fa88c") + ";color:#0fa88c\">" + icon("check", 21) + "</span><span>今日打卡</span></button>" +
      quick("视频监督", "video", "#f26b3a", "room") +
      quick("加入社群", "users", "#7c6cf0", "community") +
      quick(state.membership ? "我的会员" : "开通会员", "crown", "#d99a20", "membership") +
    "</div>" +
    '<section class="section-head"><h2>今日状态</h2><button class="more" data-action="nav" data-to="report">数据报告 ' + icon("chevronRight", 15) + "</button></section>" +
    '<div class="stat-grid cols3">' +
      stat("今日打卡", todayCount + "/" + state.plans.filter(function (p) { return p.active; }).length) +
      stat("连续打卡", currentStreak() + "天") +
      stat("累计专注", totalFocus() + "分钟") +
    "</div>" +
    '<section class="section-head"><h2>晨间监督房</h2><button class="more" data-action="nav" data-to="room">进入 ' + icon("chevronRight", 15) + "</button></section>" +
    '<div class="card pad row gap12">' +
      '<div class="quick__icon" style="background:var(--rose-soft);color:var(--rose)">' + icon("sunrise", 22) + "</div>" +
      '<div class="grow"><div class="bold">05:00 - 08:00 晨间专注房</div><div class="small muted">静音专注 · 彼此陪伴 · 番茄钟模式</div></div>' +
      '<button class="btn btn-soft btn-sm" data-action="room">' + (state.membership ? "进入" : "预约") + "</button>" +
    "</div>" +
    '<section class="section-head"><h2>今日早起排行</h2><button class="more" data-action="nav" data-to="community">全部 ' + icon("chevronRight", 15) + "</button></section>" +
    '<div class="card">' + rank.slice(0, 5).map(function (m, i) { return rankRow(m, i); }).join("") + "</div>" +
    '<section class="section-head"><h2>成功案例墙</h2></section>' +
    stories() +
    '<div class="quote mt20">' + icon("sparkle", 18) + ' "' + esc(q) + '"<div class="who">—— 早早大王 · 每日一句</div></div>';
}

function hero() {
  const m = state.membership;
  return '<div class="hero">' +
    '<span class="hero__badge">' + icon("crown", 14) + " 14年逆袭 · 从辍学打工到博士上岸</span>" +
    '<div class="row gap12 mt12">' +
      '<div class="avatar" style="width:58px;height:58px;font-size:24px">早</div>' +
      '<div class="grow"><h2>早早大王</h2><p>一个普通人的逆天改命训练营，有人监督，有人同行。</p></div>' +
    "</div>" +
    '<div class="row gap8 mt12">' +
      '<button class="btn" style="background:rgba(255,255,255,0.24)" data-action="nav" data-to="story">完整逆袭故事</button>' +
      (m ? '<button class="btn btn-soft" data-action="nav" data-to="membership">会员中心</button>' :
        '<button class="btn" style="background:#fff;color:var(--brand-deep)" data-action="nav" data-to="membership">开通会员</button>') +
    "</div>" +
  "</div>";
}

function quick(label, ic, color, action) {
  return '<button class="quick" data-action="nav" data-to="' + action + '">' +
    '<span class="quick__icon" style="background:' + hexSoft(color) + ";color:" + color + '">' + icon(ic, 21) + "</span>" +
    "<span>" + label + "</span></button>";
}
function hexSoft(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + r + "," + g + "," + b + ",0.12)";
}
function stat(num, lbl) { return '<div class="stat"><div class="num">' + num + "</div><div class='lbl'>" + lbl + "</div></div>"; }
function rankRow(m, i) {
  const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : (i + 1);
  return '<div class="list-item"><div class="small bold" style="width:24px">' + medal + '</div>' +
    '<div class="avatar" style="width:36px;height:36px;background:' + m.color + '">' + initials(m.name) + "</div>" +
    '<div class="grow"><div class="bold" style="font-size:14px">' + esc(m.name) + "</div><div class='tiny muted'>连续早起 " + m.streak + " 天</div></div>" +
    '<span class="chip ' + (m.done ? "soft-green" : "") + '">' + (m.done ? "今日已打卡" : "未打卡") + "</span></div>";
}
function stories() {
  return '<div class="grid2">' + SUCCESS_STORIES.map(function (s) {
    return '<div class="card pad"><div class="tag" style="background:var(--accent-soft);color:#0a7f6a">' + s.tag + "</div>" +
      '<div class="bold mt8" style="font-size:14px">' + esc(s.name) + "</div>" +
      '<div class="small muted mt8">' + esc(s.text) + "</div></div>";
  }).join("") + "</div>";
}

/* ============================ Check-in ============================ */
function renderCheckin() {
  const active = state.plans.filter(function (p) { return p.active; });
  return '' +
    '<section class="section-head"><h2>我的计划</h2><button class="btn btn-soft btn-sm" data-action="new-plan">' + icon("plus", 16) + " 新建</button></section>" +
    (active.length ? active.map(planCard).join("") : '<div class="empty">' + icon("target") + "<p>还没有打卡计划，先创建一个吧</p><button class='btn btn-primary mt12' data-action='new-plan'>创建打卡计划</button></div>") +
    '<section class="section-head"><h2>模板库</h2><button class="more" data-action="nav" data-to="plans">全部计划</button></section>' +
    '<div class="grid2">' + TEMPLATES.map(templateCard).join("") + "</div>" +
    '<section class="section-head"><h2>打卡日历</h2></section>' +
    calendarHTML() +
    '<div class="row gap8 mt12">' +
      '<span class="tag" style="background:var(--accent-soft);color:#0a7f6a">绿色 已打卡</span>' +
      '<span class="tag" style="background:var(--amber-soft);color:#9a6500">黄色 豁免</span>' +
      '<span class="tag" style="background:#e7e9e8;color:#7b8582">灰色 未打卡</span>' +
    "</div>" +
    '<section class="section-head"><h2>今日待办</h2></section>' +
    '<button class="card pad row gap12 w100" data-action="new-plan" style="width:100%">' +
      '<div class="quick__icon" style="background:var(--brand-soft);color:var(--brand)">' + icon("timer", 22) + "</div>" +
      '<div class="grow" style="text-align:left"><div class="bold">设置早起闹钟</div><div class="small muted">当前 ' + esc(state.user.wakeTime) + " 起床，到点强提醒</div></div>" +
      icon("chevronRight", 18) + "</button>";
}

function planCard(p) {
  const done = checkedToday(p.id);
  const progress = planProgress(p);
  return '<div class="card pad mt12">' +
    '<div class="row gap12">' +
      '<div class="quick__icon" style="background:' + hexSoft(p.color) + ";color:" + p.color + '">' + icon(p.icon, 22) + "</div>" +
      '<div class="grow"><div class="bold">' + esc(p.title) + '</div><div class="small muted">' + esc(p.target) + ' · ' + p.period + "</div></div>" +
      '<button class="icon-btn" data-action="toggle-plan" data-id="' + p.id + '" aria-label="切换状态">' + (p.active ? icon("check-circle", 19) : icon("clock", 19)) + "</button>" +
    "</div>" +
    '<div class="row between mt12 small muted"><span>完成度 ' + progress.rate + "%</span><span>连续 " + progress.streak + " 天</span></div>" +
    '<div class="progress mt8"><span style="width:' + progress.rate + '%"></span></div>' +
    '<div class="row gap8 mt12">' +
      (done ? '<button class="btn btn-soft-accent btn-sm grow" data-action="open-checkin" data-id="' + p.id + '">' + icon("check", 15) + " 今日已打卡</button>" :
        '<button class="btn btn-primary btn-sm grow" data-action="open-checkin" data-id="' + p.id + '">' + icon("check", 15) + " 去打卡</button>") +
      '<button class="btn btn-ghost btn-sm" data-action="nav" data-to="report" data-id="' + p.id + '">统计</button>' +
    "</div></div>";
}

function templateCard(t) {
  return '<div class="card pad">' +
    '<div class="quick__icon" style="background:' + hexSoft(t.color) + ";color:" + t.color + '">' + icon(t.icon, 20) + "</div>" +
    '<div class="bold mt8" style="font-size:14px">' + t.name + "</div>" +
    '<div class="small muted mt8">' + t.items.map(function (i) { return "· " + esc(i); }).join("<br>") + "</div>" +
    '<button class="btn btn-soft btn-sm mt12 w100" data-action="use-template" data-id="' + t.id + '">一键套用</button></div>';
}

function calendarHTML() {
  const y = calCursor.getFullYear(), m = calCursor.getMonth();
  const first = new Date(y, m, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  const dim = new Date(y, m + 1, 0).getDate();
  for (let d = 1; d <= dim; d++) cells.push(new Date(y, m, d));
  const t = todayISO();
  const days = cells.map(function (dt) {
    if (!dt) return '<div class="cal__day"></div>';
    const key = toISO(dt);
    const has = state.checkins.some(function (c) { return c.date === key; });
    const exempt = state.exemptions.some(function (e) { return e.date === key && e.status !== "rejected"; });
    const future = key > t;
    const pastNo = !future && !has && !exempt && state.plans.length > 0;
    let cls = "cal__day";
    if (has) cls += " success";
    else if (exempt) cls += " exempt";
    else if (future) cls += " future";
    else if (pastNo) cls += " missed";
    if (key === t) cls += " today";
    return '<div class="' + cls + '">' + dt.getDate() + "</div>";
  }).join("");
  return '<div class="card pad">' +
    '<div class="row between"><button class="icon-btn" data-action="cal-prev">' + icon("chevronLeft", 18) + "</button>" +
    '<div class="bold">' + y + " 年 " + (m + 1) + " 月</div>" +
    '<button class="icon-btn" data-action="cal-next">' + icon("chevronRight", 18) + "</button></div>" +
    '<div class="cal mt12">' + ["一","二","三","四","五","六","日"].map(function (w) { return '<div class="cal__week">' + w + "</div>"; }).join("") + days + "</div></div>";
}

function checkedToday(planId) { return state.checkins.some(function (c) { return c.planId === planId && c.date === todayISO(); }); }
function currentStreak() {
  let streak = 0; const t = todayISO();
  for (let i = 0; i < 365; i++) {
    const d = addDaysISO(t, -i);
    if (state.checkins.some(function (c) { return c.date === d; })) streak++;
    else if (i > 0) break;
    else if (!state.checkins.some(function (c) { return c.date === d; })) break;
  }
  return streak;
}
function planProgress(p) {
  const total = Math.max(1, diffDays(p.start, todayISO()) + 1);
  const done = state.checkins.filter(function (c) { return c.planId === p.id; }).length;
  const rate = Math.min(100, Math.round(done / total * 100));
  const streak = planStreak(p.id);
  return { rate: rate, streak: streak };
}
function planStreak(planId) {
  let streak = 0; const t = todayISO();
  for (let i = 0; i < 365; i++) {
    const d = addDaysISO(t, -i);
    if (state.checkins.some(function (c) { return c.planId === planId && c.date === d; })) streak++;
    else if (i === 0) continue;
    else break;
  }
  return streak;
}
function totalFocus() {
  return state.focusSessions.reduce(function (s, f) { return s + f.min; }, 0);
}

/* ============================ Community ============================ */
function renderCommunity() {
  const g = membershipGroup();
  if (!g) {
    return '<div class="card pad center">' +
      '<div class="quick__icon" style="margin:0 auto;width:54px;height:54px;background:var(--violet-soft);color:var(--violet)">' + icon("lock", 26) + "</div>" +
      '<h3 class="mt12">加入社群后查看</h3><p class="small muted mt8">开通会员会自动进入对应打卡群，群主早早大王每日监督。</p>' +
      '<button class="btn btn-primary mt16" data-action="nav" data-to="membership">去开通会员</button></div>';
  }
  const myDone = state.members.map(function (m) { return m; });
  const notDone = myDone.filter(function (m) { return !m.done; });
  return '' +
    '<div class="card pad">' +
      '<div class="row gap12"><div class="avatar" style="width:44px;height:44px;background:var(--violet)">早</div>' +
      '<div class="grow"><div class="bold">' + g.tier.name + " · " + g.tier.group + '</div><div class="small muted">群主：早早大王 · 成员 ' + (12 + state.members.length) + " 人</div></div>" +
      '<span class="chip soft-green">已加入</span></div>' +
    "</div>" +
    '<div class="notice mt12">' + icon("check-circle", 18) + '<div><div class="bold">本周期豁免额度</div>已用 0 天 / 可用 ' + g.tier.exempt + " 天，生病或紧急事务可申请豁免。</div></div>" +
    '<section class="section-head"><h2>今日群打卡面板</h2><button class="more" data-action="toggle-member-done">一键刷新</button></section>' +
    '<div class="card">' + myDone.map(rankRow).join("") + "</div>" +
    '<div class="notice rose mt12">' + icon("bell", 18) + "<div><div class='bold'>未打卡提醒（" + notDone.length + " 人）</div>" + notDone.map(function (m) { return m.name; }).join("、") + " 还未完成今日打卡。</div></div>" +
    '<section class="section-head"><h2>群公告</h2></section>' +
    '<div class="card pad">' +
      '<div class="row gap8"><span class="tag" style="background:var(--brand-soft);color:var(--brand-deep)">置顶</span><span class="small muted">今天 05:00</span></div>' +
      '<div class="bold mt8">晨间寄语：把起床当作一天的第一场胜利。</div>' +
      '<div class="small muted mt8">今天也请完成你的打卡，不必完美，但请出现。早安。</div>' +
    "</div>" +
    '<section class="section-head"><h2>群排行榜</h2><button class="more" data-action="nav" data-to="report">我的排名</button></section>' +
    '<div class="card">' + myDone.sort(function (a, b) { return b.streak - a.streak; }).map(rankRow).join("") + "</div>" +
    '<div class="row gap8 mt16">' +
      '<button class="btn btn-soft-accent grow" data-action="open-exemption">申请豁免</button>' +
      '<button class="btn btn-ghost grow" data-action="nav" data-to="membership">豁免规则</button>' +
    "</div>";
}

function membershipGroup() {
  if (!state.membership) return null;
  const tier = TIERS[state.membership.tier];
  return { tier: tier };
}
function leaderboard() {
  const arr = state.members.slice();
  arr.push({ id: "me", name: state.user.nickname, streak: currentStreak(), done: state.checkins.some(function (c) { return c.date === todayISO(); }), color: "#0fa88c" });
  arr.sort(function (a, b) { return b.streak - a.streak; });
  return arr;
}

/* ============================ Discover ============================ */
function renderDiscover() {
  const feeds = state.posts.filter(function (p) { return feedTab === "推荐" || p.topic === feedTab; });
  return '' +
    '<div class="feed-tabs">' + ["推荐", "精选", "早起打卡", "考研自律", "读书成长", "减脂逆袭"].map(function (t) {
      return '<button class="chip' + (feedTab === t ? " active" : "") + '" data-action="feed-tab" data-tab="' + t + '">' + t + "</button>";
    }).join("") + "</div>" +
    '<section class="section-head"><h2>话题广场</h2><button class="more" data-action="nav" data-to="topic">全部</button></section>' +
    '<div class="feed-tabs">' + TOPICS.map(function (t) {
      return '<span class="tag" style="background:var(--violet-soft);color:var(--violet)"># ' + t + "</span>";
    }).join("") + "</div>" +
    '<section class="section-head"><h2>学员打卡动态</h2></section>' +
    (feeds.length ? feeds.map(postCard).join("") : '<div class="empty"><p>这个分类还没有动态</p></div>') +
    '<section class="section-head"><h2>干货专区</h2></section>' +
    DRILLS.map(drillCard).join("") +
    '<button class="btn btn-primary btn-block mt20" data-action="share-poster">' + icon("share", 18) + " 生成我的自律海报</button>";
}

function postCard(p) {
  const liked = state.favorites.includes("post:" + p.id);
  return '<div class="post mt12">' +
    '<div class="post__head"><div class="avatar" style="width:38px;height:38px;background:' + p.color + '">' + initials(p.author) + "</div>" +
    '<div class="grow"><div class="bold" style="font-size:14px">' + esc(p.author) + '</div><div class="tiny muted">' + esc(p.time) + "</div></div>" +
    '<span class="tag" style="background:var(--blue-soft);color:var(--blue)">' + esc(p.topic) + "</span></div>" +
    '<div class="post__body">' + esc(p.text) + "</div>" +
    '<div class="post__img">' + icon("image", 24) + " " + esc(p.img) + "</div>" +
    '<div class="post__actions">' +
      '<button class="row gap8" data-action="like-post" data-id="' + p.id + '">' + icon(liked ? "heart" : "heart", 17) + " " + (p.likes + (liked ? 1 : 0)) + "</button>" +
      '<span class="row gap8">' + icon("message", 17) + " " + p.comments + "</span>" +
      '<button class="row gap8" data-action="share-poster">' + icon("share", 17) + " 分享</button>" +
    "</div></div>";
}
function drillCard(d) {
  return '<div class="card pad mt12 row gap12" data-action="open-drill" data-id="' + d.id + '" style="cursor:pointer">' +
    '<div class="quick__icon" style="background:var(--blue-soft);color:var(--blue)">' + icon(d.icon, 22) + "</div>" +
    '<div class="grow"><div class="bold" style="font-size:14px">' + esc(d.title) + '</div><div class="small muted">' + esc(d.desc) + "</div></div>" +
    icon("chevronRight", 18) + "</div>";
}

/* ============================ Profile ============================ */
function renderProfile() {
  const u = state.user;
  const unlocked = unlockedBadges().length;
  const m = state.membership;
  return '' +
    '<div class="card pad">' +
      '<div class="row gap12">' +
        '<div class="avatar" style="width:58px;height:58px;font-size:24px">' + initials(u.nickname) + "</div>" +
        '<div class="grow"><div class="bold" style="font-size:17px">' + esc(u.nickname) + '</div><div class="small muted">' + esc(u.bio) + "</div></div>" +
        '<button class="icon-btn" data-action="nav" data-to="settings">' + icon("sliders", 19) + "</button>" +
      "</div>" +
      '<div class="stat-grid cols3 mt12">' +
        stat(currentStreak() + "天", "连续早起") + stat(totalFocus() + "分", "专注时长") + stat(unlocked + "枚", "获得勋章") +
      "</div>" +
    "</div>" +
    '<section class="section-head"><h2>我的会员</h2><button class="more" data-action="nav" data-to="membership">查看</button></section>' +
    (m ? '<div class="card pad row gap12">' +
      '<div class="quick__icon" style="background:var(--brand-soft);color:var(--brand)">' + icon("crown", 22) + "</div>" +
      '<div class="grow"><div class="bold">' + TIERS[m.tier].name + "</div><div class='small muted'>有效期至 " + m.end + " · " + TIERS[m.tier].group + "</div></div>" +
      '<span class="chip soft-green">履约中</span></div>' :
      '<div class="card pad center"><p class="muted small">尚未开通会员，开通后解锁视频监督房与社群。</p><button class="btn btn-primary btn-sm mt8" data-action="nav" data-to="membership">立即开通</button></div>') +
    '<section class="section-head"><h2>自律工具箱</h2></section>' +
    '<div class="card">' +
      listItem("badges", "自律勋章", "award", "#d99a20", unlocked + "/6") +
      listItem("certificate", "电子证书", "ticket", "#0fa88c", state.rewards.length ? "已解锁" : "待解锁") +
      listItem("report", "数据看板", "chart", "#3b82f6", "") +
      listItem("notes", "我的复盘", "pencil", "#7c6cf0", state.notes.length + " 篇") +
      listItem("wish", "心愿墙", "star", "#e34d6d", state.wishlist.length + " 个") +
      listItem("metrics", "身体记录", "scale", "#0fa88c", "") +
      listItem("team", "组队打卡", "users", "#f26b3a", "") +
      listItem("treehole", "情绪树洞", "sprout", "#0fa88c", "") +
      listItem("radio", "晨间电台", "radio", "#7c6cf0", "") +
      listItem("contract", "自律契约书", "flag", "#d99a20", state.contractSigned ? "已签署" : "待签署") +
      listItem("questionnaire", "月度复盘问卷", "message", "#3b82f6", "") +
    "</div>" +
    '<section class="section-head"><h2>本月主题营</h2></section>' +
    '<div class="card pad row gap12">' +
      '<div class="quick__icon" style="background:var(--violet-soft);color:var(--violet)">' + icon("book", 22) + "</div>" +
      '<div class="grow"><div class="bold">读书成长月</div><div class="small muted">本月主题 · 已加入 128 位伙伴</div></div>' +
      '<span class="chip active">进行中</span>' +
    "</div>";
}

function listItem(action, title, ic, color, val) {
  return '<button class="list-item clickable w100" data-action="nav" data-to="' + action + '" style="width:100%;text-align:left">' +
    '<span class="list-item__icon" style="background:' + hexSoft(color) + ";color:" + color + '">' + icon(ic, 20) + "</span>" +
    '<span class="grow bold" style="font-size:14px">' + title + "</span>" +
    (val ? '<span class="small muted">' + val + "</span>" : "") + icon("chevronRight", 17) + "</button>";
}

/* ============================ Room ============================ */
function renderRoom() {
  if (!state.membership) {
    return '<div class="view" style="padding-top:28px">' +
      '<div class="card pad center" style="margin-top:30px">' +
        '<div class="quick__icon" style="margin:0 auto;width:60px;height:60px;background:var(--brand-soft);color:var(--brand)">' + icon("lock", 28) + "</div>" +
        '<h2 class="mt12">会员专属房间</h2><p class="small muted mt8">视频监督房仅对会员开放。开通会员后即可进入晨间/晚间专注房。</p>' +
        '<button class="btn btn-primary btn-lg mt16" data-action="nav" data-to="membership">开通会员进入</button>' +
        '<button class="btn btn-ghost mt8" data-action="back">返回</button>' +
      "</div></div>";
  }
  const peers = [
    { name: "早起的蜗牛", color: "#f26b3a", cam: true },
    { name: "小树苗", color: "#0fa88c", cam: true },
    { name: "上岸鸭", color: "#7c6cf0", cam: true },
    { name: "阿猛", color: "#e34d6d", cam: true },
    { name: "慢慢", color: "#d99a20", cam: true }
  ];
  return '<div class="view no-nav" style="padding-bottom:24px">' +
    '<div class="row between">' +
      '<div><div class="bold" style="font-size:18px">晨间专注房</div><div class="small muted">05:00 - 08:00 · 番茄钟模式 · 静音专注</div></div>' +
      '<button class="btn btn-soft btn-sm" data-action="back">退出</button>' +
    "</div>" +
    '<div class="timer mt8">' +
      '<div class="phase">第 ' + timer.cycle + ' 个番茄 · ' + (timer.phase === "focus" ? "专注中" : "休息中") + "</div>" +
      '<div class="big" id="timer-display">' + fmtTimer(timer.remaining) + "</div>" +
      '<div class="row center gap8 mt8">' +
        (timer.running ? '<button class="btn btn-ghost" data-action="timer-pause">暂停</button>' : '<button class="btn btn-primary" data-action="timer-start">开始专注</button>') +
        '<button class="btn btn-ghost" data-action="timer-reset">重置</button>' +
      "</div>" +
    "</div>" +
    '<div class="row gap8 mt12 wrap">' +
      seg(["公开房", "4-6人小房"], room.mode, "room-mode") +
    "</div>" +
    '<div class="room-grid mt12">' +
      '<div class="tile self"><div class="tile__inner">' + (room.cam ? '<div class="avatar" style="width:58px;height:58px">' + initials(state.user.nickname) + "</div>" : '<span class="small">摄像头已关闭</span>') + "</div>" +
        '<div class="tile__state">我</div>' +
        '<div class="tile__name"><span>' + esc(state.user.nickname) + "</span><span class='mic'>" + icon(room.mic ? "mic" : "micOff", 16) + "</span></div></div>" +
      peers.map(function (p) {
        return '<div class="tile"><div class="tile__inner">' + (p.cam ? '<div class="avatar" style="width:52px;height:52px;background:' + p.color + '">' + initials(p.name) + "</div>" : '<span class="small">静音专注中</span>') + "</div>" +
          '<div class="tile__name"><span>' + esc(p.name) + "</span><span class='mic'>" + icon("micOff", 16) + "</span></div></div>";
      }).join("") +
    "</div>" +
    '<div class="card pad mt12">' +
      '<div class="row between">' +
        '<div><div class="bold" style="font-size:14px">摄像头</div><div class="tiny muted">只露状态不说话</div></div><button class="switch' + (room.cam ? " on" : "") + '" data-action="toggle-cam"></button>' +
      "</div>" +
      '<div class="divider"></div>' +
      '<div class="row between">' +
        '<div><div class="bold" style="font-size:14px">麦克风</div><div class="tiny muted">可选语音交流</div></div><button class="switch' + (room.mic ? " on" : "") + '" data-action="toggle-mic"></button>' +
      "</div>" +
      '<div class="divider"></div>' +
      '<div class="notice accent">' + icon("check-circle", 18) + "<div>静音专注，彼此陪伴，不闲聊，不娱乐。可自主录制专注片段，仅自己可见。</div></div>" +
    "</div></div>";
}

function seg(options, current, action) {
  return options.map(function (o) {
    return '<button class="chip' + (current === o ? " active" : "") + '" data-action="' + action + '" data-val="' + o + '">' + o + "</button>";
  }).join("");
}
function fmtTimer(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return pad(m) + ":" + pad(sec);
}

/* ============================ Membership ============================ */
function renderMembership() {
  const m = state.membership;
  return '' +
    (m ? '<div class="card pad row gap12">' +
      '<div class="quick__icon" style="background:var(--brand-soft);color:var(--brand)">' + icon("crown", 22) + "</div>" +
      '<div class="grow"><div class="bold">' + TIERS[m.tier].name + " · " + TIERS[m.tier].group + '</div><div class="small muted">有效期至 ' + m.end + "</div></div>" +
      '<span class="chip soft-green">履约中</span></div>' +
      '<div class="notice mt12">' + icon("clock", 18) + '<div>到期前 3 天会推送续费提醒，连续续费可享额外豁免额度。</div></div>' :
      '<div class="notice mt12">' + icon("gift", 18) + "<div>选择适合你的档位，加入对应打卡群，开启有人监督的自律之旅。</div></div>") +
    '<section class="section-head"><h2>会员档位</h2></section>' +
    '<div class="grid2">' + Object.keys(TIERS).map(function (k) { return priceCard(TIERS[k]); }).join("") + "</div>" +
    '<section class="section-head"><h2>履约规则（购买前请阅读）</h2></section>' +
    '<div class="card pad">' +
      '<div class="rule-list">' +
        rule(1, "本产品为自律监督服务，所有会员订单不支持退款。") +
        rule(2, "豁免天数需在 APP 提交申请，写明原因，管理员审核生效，不可事后补豁免。") +
        rule(3, "周期内打卡未超出豁免额度并完成全部打卡 = 履约成功，周期结束后可申请奖励。") +
        rule(4, "履约成功：免费发放对应档位 IP 礼物（纸质礼物邮费方案见下单说明）。") +
        rule(5, "履约失败：无奖励，会员到期自动移出对应打卡社群。") +
      "</div>" +
      '<table class="small muted mt12" style="width:100%;border-collapse:collapse;font-size:12px">' +
        '<tr style="color:var(--muted)"><td style="padding:4px 0">档位</td><td>周期</td><td>豁免</td><td>社群</td></tr>' +
        Object.keys(TIERS).map(function (k) { const t = TIERS[k]; return '<tr><td style="padding:4px 0">' + t.name + "</td><td>" + t.days + "天</td><td>" + t.exempt + "天</td><td>" + t.group + "</td></tr>"; }).join("") +
      "</table>" +
    "</div>" +
    '<div class="notice rose mt12">' + icon("bell", 18) + '<div><div class="bold">重要提示</div>无论打卡成功或失败，会员费用均不退款；只有完整履约成功，才能领取对应等级 IP 礼物。</div></div>' +
    '<section class="section-head"><h2>履约奖励</h2></section>' +
    '<div class="card pad">' + Object.keys(TIERS).map(function (k) {
      const t = TIERS[k];
      return '<div class="row between" style="padding:8px 0;border-bottom:1px solid var(--line)"><div class="bold" style="font-size:14px">' + t.name + "</div><div class='small muted grow' style='margin-left:12px'>" + t.rewards.join(" · ") + "</div></div>";
    }).join("") + "</div>" +
    '<section class="section-head"><h2>订单与奖励</h2></section>' +
    (state.orders.length ? state.orders.map(orderRow).join("") : '<div class="empty"><p>还没有订单记录</p></div>') +
    '<div class="row gap8 mt16">' +
      '<button class="btn btn-primary grow" data-action="open-purchase">' + (m ? "续费 / 升级" : "立即开通会员") + "</button>" +
      '<button class="btn btn-ghost" data-action="nav" data-to="contract">自律契约书</button>' +
    "</div>" +
    '<div class="row gap8 mt12">' +
      '<button class="btn btn-soft grow" data-action="invite">邀请返现</button>' +
      (m ? '<button class="btn btn-soft-accent grow" data-action="claim-reward">申请履约奖励</button>' : "") +
    "</div>";
}

function priceCard(t) {
  const active = state.membership && state.membership.tier === t.key;
  return '<div class="price-card' + (active ? " active" : "") + '">' +
    (t.hot ? '<span class="hot">最受欢迎</span>' : "") +
    '<div class="row between"><div class="bold">' + t.name + "</div>" + icon("crown", 18) + "</div>" +
    '<div class="price mt8">¥' + t.price + "<small> / " + t.days + "天</small></div>" +
    '<div class="small muted mt8">' + t.group + " · 豁免 " + t.exempt + " 天</div>" +
    '<div class="small mt8" style="color:#7a5200">奖励：' + t.rewards.slice(0, 3).join("、") + (t.rewards.length > 3 ? "…" : "") + "</div>" +
    '<button class="btn btn-block mt12 ' + (active ? "btn-soft" : "btn-primary") + '" data-action="open-purchase" data-tier="' + t.key + '">' + (active ? "当前档位" : "选择") + "</button></div>";
}
function rule(idx, text) {
  return '<div class="rule-item"><span class="idx">' + idx + "</span><span>" + text + "</span></div>";
}
function orderRow(o) {
  return '<div class="list-item"><span class="list-item__icon" style="background:var(--accent-soft);color:var(--accent)">' + icon("ticket", 20) + "</span>" +
    '<div class="grow"><div class="bold" style="font-size:14px">' + o.tierName + "</div><div class='tiny muted'>" + o.time + " · " + o.status + "</div></div>" +
    '<span class="bold">¥' + o.price + "</span></div>";
}

/* ============================ Messages ============================ */
function renderMessages() {
  const groups = [
    { label: "今天", items: state.notifications.filter(function (n) { return n.time === "刚刚" || n.time === "1小时前"; }) },
    { label: "更早", items: state.notifications.filter(function (n) { return n.time !== "刚刚" && n.time !== "1小时前"; }) }
  ];
  return '<div class="row between" style="margin-bottom:8px"><h2 style="font-size:17px;font-weight:800">消息通知</h2>' +
    '<button class="btn btn-ghost btn-sm" data-action="mark-all-read">全部已读</button></div>' +
    groups.map(function (g) {
      if (!g.items.length) return "";
      return '<section class="section-head" style="margin-top:12px"><h2 style="font-size:13px;color:var(--muted-2)">' + g.label + "</h2></section>" +
        g.items.map(notifCard).join("");
    }).join("") +
    '<div class="card pad mt12">' +
      '<div class="row gap12"><div class="quick__icon" style="background:var(--blue-soft);color:var(--blue)">' + icon("inbox", 22) + "</div>" +
      '<div class="grow"><div class="bold" style="font-size:14px">推送设置</div><div class="small muted">打卡闹钟、社群消息、履约提醒与通知公告</div></div>' +
      '<button class="btn btn-soft btn-sm" data-action="nav" data-to="settings">设置</button></div></div>';
}
function notifCard(n) {
  const color = n.type === "checkin" ? "#f26b3a" : n.type === "room" ? "#e34d6d" : n.type === "content" ? "#7c6cf0" : "#0fa88c";
  const ic = n.type === "checkin" ? "bell" : n.type === "room" ? "video" : n.type === "content" ? "sparkle" : "chart";
  return '<div class="list-item" style="' + (n.read ? "opacity:0.65" : "background:#fff") + '">' +
    '<span class="list-item__icon" style="background:' + hexSoft(color) + ";color:" + color + '">' + icon(ic, 20) + "</span>" +
    '<div class="grow"><div class="bold" style="font-size:14px">' + n.title + '</div><div class="small muted">' + n.desc + "</div></div>" +
    '<div style="text-align:right"><div class="tiny muted">' + n.time + "</div>" + (n.read ? "" : '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rose);margin-top:6px"></span>') + "</div></div>";
}

/* ============================ Secondary views ============================ */
function renderStory() {
  const milestones = [
    ["2013.02", "正月初四，决定高三辍学，外出打工"],
    ["2016.07", "拿到专科录取通知书"],
    ["2019.07", "拿到本科录取通知书"],
    ["2023.07", "拿到硕士录取通知书"],
    ["2026.07", "拿到博士录取通知书"]
  ];
  return '' +
    '<div class="hero"><h2>一个普通人的逆天改命</h2><p>从辍学打工到博士上岸，一共13年174天，共计4922天。</p></div>' +
    '<div class="card pad mt12"><div class="bold">我的前半程</div><div class="small muted mt8" style="line-height:1.9">' +
      "做过酒店查房员、饭店服务员、收银员、领班；音响店、服装店售货员；网络贷款催收员；晚间辅导家教老师、周末培训班助教、假期代课老师；寒暑假电子厂工人、临时工中介；摆摊卖豆浆、夜光石、玩具、氢气球；线上兼职售卖流量。" +
    "</div></div>" +
    '<div class="card mt12">' + milestones.map(function (ms, i) {
      return '<div class="list-item"><div class="bold small" style="width:54px;color:var(--brand)">' + ms[0] + "</div><div class='grow' style='font-size:14px'>" + ms[1] + "</div>" + (i === milestones.length - 1 ? icon("award", 18) : "") + "</div>";
    }).join("") + "</div>" +
    '<div class="quote mt12">' + icon("flame", 18) + ' 在将近14年的时间里，我哭过、痛过、犹豫过、累过、穷过、后悔过、嫉妒过、愤怒过，唯独没有放弃过。<div class="who">—— 早早大王</div></div>' +
    '<button class="btn btn-primary btn-block mt16" data-action="nav" data-to="membership">加入早起成长营</button>';
}

function renderSettings() {
  const s = state.settings;
  const u = state.user;
  return '' +
    '<div class="card pad">' +
      fieldInput("昵称", "nickname", u.nickname) +
      fieldInput("一句话简介", "bio", u.bio) +
      fieldInput("早起时间", "wakeTime", u.wakeTime, "time") +
      '<button class="btn btn-primary btn-block mt16" data-action="save-profile">保存资料</button>' +
    "</div>" +
    '<section class="section-head"><h2>消息推送</h2></section>' +
    '<div class="card">' +
      switchRow("打卡闹钟提醒", "push", s.push) +
      switchRow("视频房间开播提醒", "roomNotify", s.roomNotify) +
      switchRow("周报推送", "reportNotify", s.reportNotify) +
      switchRow("新干货提醒", "contentNotify", s.contentNotify) +
    "</div>" +
    '<section class="section-head"><h2>账号</h2></section>' +
    '<div class="card">' +
      '<button class="list-item clickable w100" style="width:100%" data-action="reset-data"><span class="grow" style="text-align:left;color:var(--rose);font-weight:700">重置本地数据</span>' + icon("refresh", 18) + "</button>" +
    "</div>";
}
function fieldInput(label, id, value, type) {
  return '<div class="field"><label>' + label + '</label><input class="input" id="field-' + id + '" value="' + esc(value) + '" type="' + (type || "text") + '"></div>';
}
function switchRow(label, key, on) {
  return '<div class="list-item"><div class="grow bold" style="font-size:14px">' + label + '</div><button class="switch' + (on ? " on" : "") + '" data-action="toggle-setting" data-key="' + key + '"></button></div>';
}

function renderBadges() {
  const defs = [
    { id: "b1", name: "早起新星", desc: "完成第一次早起打卡", ic: "sunrise", color: "#f26b3a", cond: function () { return state.checkins.length > 0; } },
    { id: "b2", name: "连续7天", desc: "连续打卡7天", ic: "flame", color: "#e34d6d", cond: function () { return currentStreak() >= 7; } },
    { id: "b3", name: "月度全勤", desc: "单月打卡满30天", ic: "calendar", color: "#0fa88c", cond: function () { return state.checkins.length >= 30; } },
    { id: "b4", name: "百天自律达人", desc: "累计打卡100天", ic: "trophy", color: "#d99a20", cond: function () { return state.checkins.length >= 100; } },
    { id: "b5", name: "年度逆袭者", desc: "坚持打卡365天", ic: "crown", color: "#7c6cf0", cond: function () { return currentStreak() >= 365; } },
    { id: "b6", name: "专注达人", desc: "累计专注10小时", ic: "timer", color: "#3b82f6", cond: function () { return totalFocus() >= 600; } }
  ];
  return '<div class="grid2">' + defs.map(function (b) {
    const on = b.cond();
    return '<div class="card pad center" style="' + (on ? "" : "opacity:0.55") + '">' +
      '<div class="quick__icon" style="margin:0 auto;width:52px;height:52px;background:' + hexSoft(b.color) + ";color:" + b.color + '">' + icon(b.ic, 26) + "</div>" +
      '<div class="bold mt8" style="font-size:14px">' + b.name + "</div><div class='tiny muted mt8'>" + b.desc + "</div>" +
      '<span class="chip mt8 ' + (on ? "soft-green" : "") + '">' + (on ? "已解锁" : "未解锁") + "</span></div>";
  }).join("") + "</div>";
}
function unlockedBadges() {
  const defs = [
    function () { return state.checkins.length > 0; },
    function () { return currentStreak() >= 7; },
    function () { return state.checkins.length >= 30; },
    function () { return state.checkins.length >= 100; },
    function () { return currentStreak() >= 365; },
    function () { return totalFocus() >= 600; }
  ];
  return defs.filter(function (f) { return f(); });
}

function renderCertificate() {
  if (!state.rewards.length && !state.membership) {
    return '<div class="empty">' + icon("ticket") + "<p>履约成功后自动生成电子自律证书，可保存分享。</p><button class='btn btn-primary mt12' data-action='nav' data-to='membership'>去开通会员</button></div>";
  }
  const earned = state.rewards.length ? "已履约成功" : "履约进行中";
  return '' +
    '<div class="cert">' +
      '<div class="small muted">早早大王早起成长营 · 自律证书</div>' +
      '<h3 class="mt8">自律逆袭者</h3>' +
      '<div class="small muted mt8">兹证明</div>' +
      '<div class="bold" style="font-size:22px;margin-top:6px">' + esc(state.user.nickname) + "</div>" +
      '<div class="small muted mt8">在早起成长营中坚持早起、持续打卡，完成自律挑战</div>' +
      '<div class="stamp">自律成\n就人生</div>' +
      '<div class="row between small muted" style="position:relative;z-index:1"><span>早早大王</span><span>' + todayISO() + "</span></div>" +
    "</div>" +
    '<div class="row gap8 mt12">' +
      '<button class="btn btn-primary grow" data-action="save-cert">保存证书图片</button>' +
      '<button class="btn btn-ghost" data-action="share-poster">分享</button>' +
    "</div>" +
    '<div class="notice mt12">' + icon("check-circle", 18) + "<div>履约状态：<b>" + earned + "</b>" + (state.rewards.length ? "，奖励已发放：" + state.rewards.join("、") : "，完成后可申请奖励。") + "</div></div>";
}

function renderReport() {
  const bars = state.focusSessions.slice(-7).map(function (f) { return f.min; });
  const max = Math.max.apply(null, bars.concat([1]));
  const weekRate = Math.round(state.checkins.filter(function (c) { return c.date >= addDaysISO(todayISO(), -6); }).length / 7 * 100);
  return '' +
    '<div class="stat-grid cols2">' +
      stat(state.checkins.length + "次", "累计打卡") +
      stat(currentStreak() + "天", "当前连续") +
      stat(totalFocus() + "分", "累计专注") +
      stat(weekRate + "%", "近7日打卡率") +
    "</div>" +
    '<section class="section-head"><h2>近7日专注时长</h2></section>' +
    '<div class="card pad"><div class="chart">' + bars.map(function (b) { return '<div class="bar" style="height:' + Math.max(8, Math.round(b / max * 100)) + '%"></div>'; }).join("") + "</div>" +
    '<div class="row between tiny muted mt8">' + bars.map(function (b, i) { return '<span>' + ["一","二","三","四","五","六","日"][i] + "</span>"; }).join("") + "</div></div>" +
    '<section class="section-head"><h2>本周复盘报告</h2></section>' +
    '<div class="card pad">' +
      '<div class="row between"><div class="bold">自律评分</div><div class="bold" style="color:var(--accent)">' + Math.min(100, 60 + weekRate) + " 分</div></div>" +
      '<div class="progress mt8"><span style="width:' + Math.min(100, 60 + weekRate) + '%"></span></div>' +
      '<div class="small muted mt12">本周坚持打卡 ' + state.checkins.filter(function (c) { return c.date >= addDaysISO(todayISO(), -6); }).length + " 天，超过 92% 的伙伴。继续保持，把早起变成人生的复利。</div>" +
      '<button class="btn btn-soft btn-block mt12" data-action="open-note">写下本周复盘</button>' +
    "</div>";
}

function renderPlans() {
  return '<section class="section-head"><h2>全部计划</h2><button class="btn btn-soft btn-sm" data-action="new-plan">' + icon("plus", 16) + " 新建</button></section>" +
    (state.plans.length ? state.plans.map(planCard).join("") : '<div class="empty">暂无计划</div>');
}

function renderTeam() {
  return '' +
    '<div class="notice">' + icon("users", 18) + "<div>2-5 人组建小打卡小队，互相监督，小队内生成排行榜。</div></div>" +
    (state.teams.length ? state.teams.map(function (t) { return '<div class="card pad mt12"><div class="bold">' + esc(t.name) + '</div><div class="small muted">成员 ' + t.members.length + " 人 · 连续 " + t.streak + " 天</div></div>"; }).join("") :
      '<div class="empty">' + icon("users") + "<p>还没有小队，创建或加入一个小队吧</p></div>") +
    '<div class="row gap8 mt16"><button class="btn btn-primary grow" data-action="create-team">创建小队</button><button class="btn btn-ghost grow" data-action="join-team">加入小队</button></div>';
}

function renderNotes() {
  return '<div class="row between" style="margin-bottom:8px"><h2 style="font-size:17px;font-weight:800">我的复盘</h2><button class="btn btn-soft btn-sm" data-action="open-note">' + icon("plus", 16) + " 写复盘</button></div>" +
    (state.notes.length ? state.notes.map(function (n) {
      return '<div class="card pad mt12"><div class="row between"><div class="bold">' + esc(n.title) + '</div><span class="tiny muted">' + n.date + "</span></div><div class='small muted mt8'>" + esc(n.body) + "</div></div>";
    }).join("") : '<div class="empty">' + icon("pencil") + "<p>每周自动提醒你写自律复盘</p></div>");
}

function renderMetrics() {
  const latest = state.bodyMetrics[state.bodyMetrics.length - 1];
  return '' +
    '<div class="stat-grid cols2">' +
      stat(latest ? latest.weight + "kg" : "--", "当前体重") +
      stat(latest ? latest.waist + "cm" : "--", "腰围") +
    "</div>" +
    '<div class="card pad mt12">' + (state.bodyMetrics.length ? state.bodyMetrics.slice(-5).map(function (m) {
      return '<div class="row between" style="padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">' + m.date + "</span><span class='bold'>" + m.weight + "kg · " + m.waist + "cm</span></div>";
    }).join("") : '<div class="empty small">还没有记录，减脂人群可长期追踪身体数据</div>') + "</div>" +
    '<button class="btn btn-primary btn-block mt16" data-action="add-metric">' + icon("plus", 18) + " 记录身体数据</button>";
}

function renderTreehole() {
  return '' +
    '<div class="notice">' + icon("sprout", 18) + "<div>匿名树洞，自律路上的焦虑、内耗都可以倾诉，管理员正向回复，不对外公开。</div></div>" +
    '<div class="card mt12">' + state.treehole.map(function (t) {
      return '<div class="pad" style="border-bottom:1px solid var(--line)"><div class="small">' + esc(t.text) + '</div><div class="notice accent mt8">' + icon("heart", 16) + "<div>" + esc(t.reply) + "</div></div><div class='tiny muted mt8'>" + t.time + "</div></div>";
    }).join("") + "</div>" +
    '<button class="btn btn-primary btn-block mt16" data-action="open-treehole">匿名倾诉</button>';
}

function renderQuestionnaire() {
  return '' +
    '<div class="card pad">' +
      '<div class="bold">本月自律复盘问卷</div><div class="small muted mt8">看清自己的进步与卡点。</div>' +
      '<div class="field"><label>这个月最大的进步是什么？</label><textarea class="textarea" id="q1" placeholder="写下你的答案"></textarea></div>' +
      '<div class="field"><label>最大的卡点是什么？</label><textarea class="textarea" id="q2" placeholder="写下你的答案"></textarea></div>' +
      '<div class="field"><label>下个月最想突破的一件事</label><input class="input" id="q3" placeholder="例如：坚持早起30天"></div>' +
      '<button class="btn btn-primary btn-block mt16" data-action="submit-questionnaire">提交问卷</button>' +
    "</div>";
}

function renderRadio() {
  return '' +
    '<div class="card pad center">' +
      '<div class="quick__icon" style="margin:0 auto;width:64px;height:64px;background:var(--violet-soft);color:var(--violet)">' + icon("radio", 30) + "</div>" +
      '<h3 class="mt12">早早大王晨间电台</h3><p class="small muted mt8">每天早起可以收听的语音寄语。</p>' +
      '<button class="btn btn-primary btn-lg mt16" data-action="radio-toggle">' + (state.radioOn ? "暂停播放" : "播放今日寄语") + "</button>" +
      '<div class="small muted mt12">今日：把起床当作一天的第一场胜利</div>' +
    "</div>" +
    '<div class="card mt12">' + ["第1期 · 早起不是目的，改变人生才是", "第2期 · 如何熬过最难的前7天", "第3期 · 普通人如何建立自律系统"].map(function (e, i) {
      return '<div class="list-item"><span class="list-item__icon" style="background:var(--violet-soft);color:var(--violet)">' + icon("radio", 18) + "</span><div class='grow small bold'>" + e + "</div><button class='icon-btn' data-action='radio-toggle'>" + icon(state.radioOn && i === 0 ? "mic" : "arrowRight", 18) + "</button></div>";
    }).join("") + "</div>";
}

function renderContract() {
  return '' +
    '<div class="card pad">' +
      '<div class="center"><div class="quick__icon" style="margin:0 auto;width:56px;height:56px;background:var(--brand-soft);color:var(--brand)">' + icon("flag", 26) + "</div>" +
      '<h3 class="mt12">自律契约书</h3></div>' +
      '<div class="small muted mt12" style="line-height:1.9">我自愿加入早早大王早起成长营，承诺在会员周期内遵守打卡计划，坚持早起、读书、运动与学习。我清楚并接受会员费用不退、豁免需申请审核的履约规则，愿以日复一日的坚持，兑现对自己的承诺。</div>' +
      '<div class="divider"></div>' +
      '<div class="row between"><div class="small bold">签约人</div><div class="bold">' + esc(state.user.nickname) + "</div></div>" +
      '<div class="row between mt8"><div class="small bold">电子签名</div>' + (state.contractSigned ? '<div class="bold" style="color:var(--brand);font-size:20px;font-family:cursive">' + esc(state.user.signature || state.user.nickname) + "</div>" : '<span class="small muted">未签署</span>') + "</div>" +
      '<div class="row between mt8"><div class="small bold">签署日期</div><div class="small">' + (state.contractSigned ? todayISO() : "--") + "</div></div>" +
    "</div>" +
    (state.contractSigned ?
      '<div class="notice accent mt12">' + icon("check-circle", 18) + "<div>契约已签署，仪式感拉满，开始你的逆袭之旅。</div></div>" :
      '<button class="btn btn-primary btn-block mt16" data-action="sign-contract">签署契约</button>');
}

function renderPoster() {
  return '' +
    '<div class="card pad" id="poster-card" style="background:linear-gradient(150deg,#f58a4d,#e34d4d);color:#fff;text-align:center;padding:28px 22px">' +
      '<div class="avatar" style="width:64px;height:64px;margin:0 auto;background:rgba(255,255,255,0.24)">' + initials(state.user.nickname) + "</div>" +
      '<div class="bold" style="font-size:20px;margin-top:14px">' + esc(state.user.nickname) + "</div>" +
      '<div class="small" style="opacity:0.9;margin-top:4px">已在早早大王早起成长营坚持 ' + currentStreak() + " 天</div>" +
      '<div class="quote mt12" style="background:rgba(255,255,255,0.18);color:#fff;border-left-color:#fff">早起不是目的，改变人生才是。</div>' +
      '<div class="small mt12" style="opacity:0.9">普通人也能逆天改命 · 扫码加入</div>' +
      '<div style="width:72px;height:72px;background:#fff;margin:14px auto 0;border-radius:10px;display:grid;place-items:center;color:#333;font-weight:800;font-size:12px">APP二维码</div>' +
    "</div>" +
    '<div class="row gap8 mt12"><button class="btn btn-primary grow" data-action="save-poster">保存海报</button><button class="btn btn-ghost" data-action="copy-share">复制文案</button></div>';
}

function renderWish() {
  return '' +
    '<div class="row between" style="margin-bottom:8px"><h2 style="font-size:17px;font-weight:800">心愿墙</h2><button class="btn btn-soft btn-sm" data-action="open-wish">' + icon("plus", 16) + " 写心愿</button></div>" +
    (state.wishlist.length ? state.wishlist.map(function (w) {
      return '<div class="card pad mt12 row gap12"><div class="quick__icon" style="background:var(--rose-soft);color:var(--rose)">' + icon("star", 20) + "</div>" +
        '<div class="grow"><div class="bold" style="font-size:14px">' + esc(w.text) + '</div><div class="tiny muted">' + (w.open ? "公开可见" : "仅自己可见") + "</div></div>" +
        '<button class="icon-btn" data-action="del-wish" data-id="' + w.id + '">' + icon("x", 17) + "</button></div>";
    }).join("") : '<div class="empty">' + icon("star") + "<p>写下你的长期目标：上岸、减肥、考证</p></div>");
}

function renderDrill() {
  const d = DRILLS[0];
  return '<div class="card pad"><div class="row gap12"><div class="quick__icon" style="background:var(--blue-soft);color:var(--blue)">' + icon(d.icon, 24) + "</div>" +
    '<div class="grow"><div class="bold" style="font-size:16px">' + esc(d.title) + '</div><span class="tag mt8" style="background:var(--blue-soft);color:var(--blue)">' + d.category + "</span></div></div>" +
    '<div class="small muted mt12" style="line-height:1.9">' + esc(d.desc) + "</div>" +
    '<div class="small muted mt12">每天早起1小时，一年就多出365小时。用这365小时去读书、运动、学习，足以让一个普通人发生肉眼可见的改变。早起不是目的，把早起兑换成成长才是。</div></div>' +
    '<button class="btn btn-soft btn-block mt16" data-action="favorite" data-id="drill:g1">收藏这篇干货</button>';
}

function renderTopic() {
  return '<div class="feed-tabs">' + TOPICS.map(function (t) { return '<span class="tag" style="background:var(--violet-soft);color:var(--violet)"># ' + t + "</span>"; }).join("") + "</div>" +
    '<div class="card pad mt12"><div class="bold">话题广场</div><div class="small muted mt8">围绕自律成长，交流方法、打卡与心得。禁止广告、负能量引战。</div></div>' +
    state.posts.map(postCard).join("");
}

/* ============================ After render ============================ */
function afterRender() {
  if (currentView === "room") {
    syncTimerDisplay();
  }
}

function syncTimerDisplay() {
  const el = $("#timer-display");
  if (el) el.textContent = fmtTimer(timer.remaining);
  const phaseEl = $(".timer .phase");
  if (phaseEl) phaseEl.textContent = "第 " + timer.cycle + " 个番茄 · " + (timer.phase === "focus" ? "专注中" : "休息中");
}

function startTick() {
  if (tickId) clearInterval(tickId);
  tickId = setInterval(function () {
    if (!timer.running) return;
    timer.remaining--;
    if (timer.remaining <= 0) {
      if (timer.phase === "focus") {
        timer.phase = "break";
        timer.remaining = timer.brk;
        toast("专注完成，休息 5 分钟");
      } else {
        timer.phase = "focus";
        timer.remaining = timer.focus;
        timer.cycle++;
        toast("第 " + timer.cycle + " 个番茄开始");
      }
    }
    syncTimerDisplay();
  }, 1000);
}

/* ============================ Actions ============================ */
const ACTIONS = {
  "nav": function (el) { go(el.dataset.to); },
  "back": function () { back(); },
  "close-sheet": function () { closeSheet(); },
  "feed-tab": function (el) { feedTab = el.dataset.tab; render(); },
  "cal-prev": function () { calCursor.setMonth(calCursor.getMonth() - 1); render(); },
  "cal-next": function () { calCursor.setMonth(calCursor.getMonth() + 1); render(); },
  "toggle-plan": function (el) {
    const p = state.plans.find(function (x) { return x.id === el.dataset.id; });
    if (p) { p.active = !p.active; save(); toast(p.active ? "已恢复计划" : "已暂停计划"); render(); }
  },
  "new-plan": function () { openPlanSheet(null); },
  "use-template": function (el) {
    const t = TEMPLATES.find(function (x) { return x.id === el.dataset.id; });
    if (t) openPlanSheet(t);
  },
  "submit-plan": function (el) {
    const id = el.dataset.id;
    const title = $("#sheet-title").value.trim();
    const target = $("#sheet-target").value.trim();
    const period = $("#sheet-period").value;
    const category = $("#sheet-category").value;
    if (!title) { toast("请填写计划名称"); return; }
    if (id) {
      const p = state.plans.find(function (x) { return x.id === id; });
      if (p) { p.title = title; p.target = target; p.period = period; p.category = category; }
      toast("计划已更新");
    } else {
      state.plans.unshift({ id: uid("p"), title: title, target: target || "每日完成", period: period, category: category, icon: catIcon(category), color: catColor(category), tags: [category], start: todayISO(), active: true });
      toast("计划已创建");
    }
    save(); closeSheet(); render();
  },
  "open-checkin": function (el) { openCheckinSheet(el.dataset.id); },
  "submit-checkin": function (el) {
    const planId = el.dataset.id;
    const note = $("#checkin-note").value.trim();
    const tag = $("#checkin-tag").value.trim() || "打卡";
    state.checkins.push({ id: uid("c"), planId: planId, date: todayISO(), time: nowHM(), note: note, tag: tag });
    save(); closeSheet(); toast("打卡成功，今天也很棒"); render();
  },
  "open-exemption": function () { openExemptionSheet(); },
  "submit-exemption": function () {
    const reason = $("#exempt-reason").value.trim();
    const date = $("#exempt-date").value || todayISO();
    if (!reason) { toast("请填写豁免原因"); return; }
    state.exemptions.push({ id: uid("e"), date: date, reason: reason, status: "pending" });
    save(); closeSheet(); toast("豁免申请已提交，等待审核"); render();
  },
  "toggle-member-done": function () {
    state.members.forEach(function (m) { if (!m.done) m.done = true; });
    save(); toast("已提醒未打卡伙伴"); render();
  },
  "open-purchase": function (el) { openPurchaseSheet(el.dataset.tier); },
  "submit-purchase": function (el) {
    const tierKey = el.dataset.tier;
    const agreed = $("#purchase-agree").checked;
    if (!agreed) { toast("请先勾选阅读并同意履约规则"); return; }
    const t = TIERS[tierKey];
    const order = { id: uid("o"), tier: tierKey, tierName: t.name, price: t.price, time: todayISO(), status: "已支付" };
    state.orders.unshift(order);
    state.membership = { tier: tierKey, start: todayISO(), end: addDaysISO(todayISO(), t.days), orderId: order.id };
    state.contractSigned = true;
    state.user.signature = state.user.signature || state.user.nickname;
    save(); closeSheet(); toast("开通成功，已加入" + t.group); render();
  },
  "invite": function () { toast("邀请链接已复制，好友开通后你可得优惠券"); },
  "claim-reward": function () {
    if (!state.membership) { toast("请先开通会员"); return; }
    const t = TIERS[state.membership.tier];
    if (state.rewards.length) { toast("奖励已申请，正在发放中"); return; }
    state.rewards = t.rewards.slice();
    save(); toast("履约奖励申请成功"); render();
  },
  "room": function () { go("room"); },
  "room-mode": function (el) { room.mode = el.dataset.val; render(); },
  "toggle-cam": function () { room.cam = !room.cam; render(); },
  "toggle-mic": function () { room.mic = !room.mic; render(); },
  "timer-start": function () { if (currentView === "room") { timer.running = true; startTick(); render(); } },
  "timer-pause": function () { timer.running = false; render(); },
  "timer-reset": function () { timer.running = false; timer.phase = "focus"; timer.remaining = timer.focus; syncTimerDisplay(); render(); },
  "like-post": function (el) {
    const key = "post:" + el.dataset.id;
    if (state.favorites.includes(key)) { state.favorites = state.favorites.filter(function (f) { return f !== key; }); }
    else { state.favorites.push(key); toast("已点赞"); }
    save(); render();
  },
  "share-poster": function () { go("poster"); },
  "copy-share": function () { toast("自律文案已复制：普通人也能逆天改命"); },
  "save-cert": function () { toast("证书已保存到相册"); },
  "save-poster": function () { toast("海报已保存到相册"); },
  "open-drill": function () { go("drill"); },
  "favorite": function (el) {
    const key = el.dataset.id;
    if (state.favorites.includes(key)) { state.favorites = state.favorites.filter(function (f) { return f !== key; }); toast("已取消收藏"); }
    else { state.favorites.push(key); toast("已收藏"); }
    save();
  },
  "mark-all-read": function () { state.notifications.forEach(function (n) { n.read = true; }); save(); render(); },
  "toggle-setting": function (el) { state.settings[el.dataset.key] = !state.settings[el.dataset.key]; save(); render(); },
  "save-profile": function () {
    state.user.nickname = $("#field-nickname").value.trim() || state.user.nickname;
    state.user.bio = $("#field-bio").value.trim() || state.user.bio;
    state.user.wakeTime = $("#field-wakeTime").value || state.user.wakeTime;
    save(); toast("资料已保存"); render();
  },
  "reset-data": function () {
    if (confirm("确定要清空本地数据并重置吗？")) { localStorage.removeItem(LS_KEY); state = seed(); save(); go("home"); toast("已重置"); }
  },
  "open-note": function () { openNoteSheet(); },
  "submit-note": function () {
    const title = $("#note-title").value.trim() || "自律复盘";
    const body = $("#note-body").value.trim();
    if (!body) { toast("请写下复盘内容"); return; }
    state.notes.unshift({ id: uid("r"), date: todayISO(), title: title, body: body });
    save(); closeSheet(); toast("复盘已保存"); render();
  },
  "add-metric": function () { openMetricSheet(); },
  "submit-metric": function () {
    const w = $("#metric-weight").value, wa = $("#metric-waist").value;
    if (!w) { toast("请输入体重"); return; }
    state.bodyMetrics.push({ id: uid("b"), date: todayISO(), weight: w, waist: wa || "--" });
    save(); closeSheet(); toast("已记录"); render();
  },
  "open-treehole": function () { openTreeholeSheet(); },
  "submit-treehole": function () {
    const text = $("#treehole-text").value.trim();
    if (!text) { toast("写点什么吧"); return; }
    state.treehole.unshift({ id: uid("t"), text: text, reply: "收到，管理员会正向回复你。你已经在改变的路上，别放弃。", time: "刚刚" });
    save(); closeSheet(); toast("已匿名提交"); render();
  },
  "create-team": function () { openTeamSheet(); },
  "join-team": function () { toast("邀请码已复制，发给队友即可"); },
  "submit-team": function () {
    const name = $("#team-name").value.trim();
    if (!name) { toast("请输入小队名称"); return; }
    state.teams.push({ id: uid("t"), name: name, members: [state.user.nickname], streak: 0 });
    save(); closeSheet(); toast("小队已创建"); render();
  },
  "submit-questionnaire": function () {
    const q1 = $("#q1").value.trim(), q2 = $("#q2").value.trim(), q3 = $("#q3").value.trim();
    if (!q1 && !q2 && !q3) { toast("请至少填写一项"); return; }
    state.notes.unshift({ id: uid("r"), date: todayISO(), title: "月度复盘问卷", body: "进步：" + (q1 || "无") + "；卡点：" + (q2 || "无") + "；下月目标：" + (q3 || "无") });
    save(); toast("问卷已提交，生成了复盘笔记"); render();
  },
  "radio-toggle": function () { state.radioOn = !state.radioOn; save(); render(); },
  "sign-contract": function () {
    const name = prompt("请输入你的签名（默认昵称）：", state.user.nickname) || state.user.nickname;
    state.user.signature = name; state.contractSigned = true; save(); toast("契约已签署"); render();
  },
  "open-wish": function () { openWishSheet(); },
  "submit-wish": function () {
    const text = $("#wish-text").value.trim();
    if (!text) { toast("写下你的心愿"); return; }
    const open = $("#wish-open").checked;
    state.wishlist.push({ id: uid("w"), text: text, open: open });
    save(); closeSheet(); toast("心愿已写下"); render();
  },
  "del-wish": function (el) { state.wishlist = state.wishlist.filter(function (w) { return w.id !== el.dataset.id; }); save(); render(); },
  "checkin-today": function () { quickCheckin(); },
  "intro-got-it": function () { closeSheet(); }
};

function catIcon(c) {
  const map = { "早起": "sunrise", "读书": "book", "运动": "flame", "学习": "book", "背单词": "book", "健身": "flame", "练字": "pencil", "冥想": "moon", "喝水": "check-circle", "记账": "chart" };
  return map[c] || "target";
}
function catColor(c) {
  const map = { "早起": "#f26b3a", "读书": "#3b82f6", "运动": "#0fa88c", "学习": "#7c6cf0", "背单词": "#7c6cf0", "健身": "#0fa88c", "练字": "#d99a20", "冥想": "#0fa88c", "喝水": "#3b82f6", "记账": "#e34d6d" };
  return map[c] || "#f26b3a";
}

function quickCheckin() {
  const p = state.plans.find(function (x) { return x.active; });
  if (!p) { toast("请先创建一个打卡计划"); openPlanSheet(null); return; }
  if (checkedToday(p.id)) { toast("今天已经打过卡了"); return; }
  openCheckinSheet(p.id);
}

function nowHM() {
  const d = new Date(); return pad(d.getHours()) + ":" + pad(d.getMinutes());
}

/* ============================ Sheets ============================ */
function openPlanSheet(tpl) {
  const isTemplate = tpl && tpl.items;
  const title = isTemplate ? tpl.name : "";
  const target = isTemplate ? tpl.items.join("、") : "";
  const categories = ["早起", "读书", "背单词", "健身", "学习", "练字", "冥想", "喝水", "记账", "运动"];
  const periods = ["每日", "每周", "每月", "每年", "阶段性"];
  let presetCategory = "早起";
  if (isTemplate) {
    if (tpl.name.indexOf("考研") >= 0 || tpl.name.indexOf("考公") >= 0) presetCategory = "学习";
    else if (tpl.name.indexOf("减脂") >= 0) presetCategory = "健身";
    else if (tpl.name.indexOf("读书") >= 0) presetCategory = "读书";
    else presetCategory = "早起";
  }
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">新建打卡计划</h3>' +
    '<form data-submit="submit-plan">' +
      '<div class="field"><label>计划名称</label><input class="input" id="sheet-title" value="' + esc(title) + '" placeholder="例如：早起打卡"></div>' +
      '<div class="field"><label>目标内容</label><input class="input" id="sheet-target" value="' + esc(target) + '" placeholder="例如：05:30 起床"></div>' +
      '<div class="field"><label>打卡周期</label><select class="select" id="sheet-period">' + periods.map(function (x) { return "<option>" + x + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label>内容分类</label><select class="select" id="sheet-category">' + categories.map(function (x) { return '<option' + (x === presetCategory ? " selected" : "") + ">" + x + "</option>"; }).join("") + "</select></div>" +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">保存计划</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openCheckinSheet(planId) {
  const p = state.plans.find(function (x) { return x.id === planId; });
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">' + esc(p.title) + "</h3>" +
    '<p class="sheet__sub">' + esc(p.target) + " · " + p.period + "</p>" +
    '<div class="quote mt12">' + icon("sparkle", 18) + ' 早起不是一瞬间的热血，是日复一日的坚持。</div>' +
    '<form data-submit="submit-checkin" data-id="' + planId + '">' +
      '<div class="field"><label>打卡备注 / 心得</label><textarea class="textarea" id="checkin-note" placeholder="写下今天的感悟…"></textarea></div>' +
      '<div class="field"><label>打卡标签</label><input class="input" id="checkin-tag" value="' + esc(p.category) + '" placeholder="如：早起、读书"></div>' +
      '<div class="field"><label>打卡形式（可选）</label><div class="row gap8">' +
        '<label class="btn btn-ghost btn-sm grow" style="height:40px">' + icon("camera", 16) + ' 拍照</label>' +
        '<label class="btn btn-ghost btn-sm grow" style="height:40px">' + icon("video", 16) + " 视频</label>" +
      "</div></div>" +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">' + icon("check", 17) + " 完成打卡</button>" +
      '<button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openExemptionSheet() {
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">申请打卡豁免</h3>' +
    '<p class="sheet__sub">用于生病、紧急事务，需早早大王审核，不可事后补豁免。</p>' +
    '<form data-submit="submit-exemption">' +
      '<div class="field"><label>豁免日期</label><input class="input" id="exempt-date" type="date" value="' + todayISO() + '"></div>' +
      '<div class="field"><label>申请原因</label><textarea class="textarea" id="exempt-reason" placeholder="写明原因…"></textarea></div>' +
      '<div class="notice rose mt12">' + icon("bell", 17) + "<div>豁免额度使用后不可撤回，请如实填写。</div></div>" +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">提交申请</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openPurchaseSheet(tierKey) {
  const t = TIERS[tierKey || "month"];
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">开通 ' + t.name + "</h3>" +
    '<p class="sheet__sub">' + t.days + "天 · " + t.group + " · 豁免 " + t.exempt + " 天</p>" +
    '<div class="card pad mt12"><div class="row between"><div class="bold">套餐价格</div><div class="bold" style="font-size:20px">¥' + t.price + "</div></div>" +
    '<div class="small muted mt8">履约奖励：' + t.rewards.join("、") + "</div>" +
    '<div class="small muted mt8">纸质礼物邮费：下单后可在个人中心选择包邮或自理邮费。</div></div>' +
    '<div class="notice rose mt12">' + icon("bell", 18) + "<div>本产品属于自律陪伴监督服务，所有会员费用不予退款。完整履约成功才能领取对应 IP 礼物。</div></div>" +
    '<form data-submit="submit-purchase" data-tier="' + t.key + '">' +
      '<label class="row gap12 mt16" style="cursor:pointer"><input type="checkbox" id="purchase-agree" style="width:18px;height:18px">' +
      '<span class="small">我已阅读并同意《履约规则》，明白会员费用不退、豁免需申请审核。</span></label>' +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">确认支付 ¥' + t.price + "</button>" +
      '<button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openNoteSheet() {
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">写自律复盘</h3>' +
    '<form data-submit="submit-note">' +
      '<div class="field"><label>标题</label><input class="input" id="note-title" placeholder="例如：第3周自律复盘"></div>' +
      '<div class="field"><label>复盘内容</label><textarea class="textarea" id="note-body" placeholder="做得好的、待改进的、下周计划…"></textarea></div>' +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">保存复盘</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openMetricSheet() {
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">记录身体数据</h3>' +
    '<form data-submit="submit-metric">' +
      '<div class="field"><label>体重（kg）</label><input class="input" id="metric-weight" type="number" step="0.1" placeholder="例如：62.5"></div>' +
      '<div class="field"><label>腰围（cm）</label><input class="input" id="metric-waist" type="number" step="0.1" placeholder="可选"></div>' +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">保存记录</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openTreeholeSheet() {
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">匿名情绪树洞</h3>' +
    '<p class="sheet__sub">你的倾诉不对外公开，管理员会正向回复。</p>' +
    '<form data-submit="submit-treehole">' +
      '<div class="field"><label>想说的话</label><textarea class="textarea" id="treehole-text" placeholder="把焦虑和内耗留在这里…"></textarea></div>' +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">匿名提交</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openTeamSheet() {
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">创建打卡小队</h3>' +
    '<form data-submit="submit-team">' +
      '<div class="field"><label>小队名称</label><input class="input" id="team-name" placeholder="例如：凌晨四点半"></div>' +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">创建小队</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openWishSheet() {
  openSheet(
    '<div class="sheet__handle"></div><h3 class="sheet__title">写下心愿</h3>' +
    '<form data-submit="submit-wish">' +
      '<div class="field"><label>长期目标</label><textarea class="textarea" id="wish-text" placeholder="例如：2026年上岸 / 减重10斤 / 考证"></textarea></div>' +
      '<label class="row gap12 mt12"><input type="checkbox" id="wish-open" style="width:18px;height:18px"><span class="small">公开我的心愿（鼓励他人）</span></label>' +
      '<div class="row gap8 mt16"><button type="submit" class="btn btn-primary grow">写进心愿墙</button><button type="button" class="btn btn-ghost" data-action="close-sheet">取消</button></div>' +
    "</form>"
  );
}

function openIntro() {
  openSheet(
    '<div class="sheet__handle"></div>' +
    '<div class="center"><div class="avatar" style="width:56px;height:56px;margin:0 auto;font-size:24px">早</div>' +
    '<h3 class="mt12">欢迎来到早起成长营</h3><p class="small muted mt8">普通人也能逆天改命，往后你的人生有千千万万种可能。</p></div>' +
    '<div class="rule-list mt16">' +
      rule(1, "以早起为核心，全品类自律打卡，视频连麦监督。") +
      rule(2, "按会员档位进入对应社群，群主早早大王每日监督。") +
      rule(3, "会员费用不退，完整履约成功可领取 IP 专属礼物。") +
    "</div>" +
    '<button class="btn btn-primary btn-block mt16" data-action="intro-got-it">开始自律之旅</button>'
  );
}

/* ============================ Delegation ============================ */
document.addEventListener("click", function (e) {
  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;
  const handler = ACTIONS[action];
  if (handler) { e.preventDefault(); handler(actionEl); }
});

document.addEventListener("submit", function (e) {
  const form = e.target.closest("[data-submit]");
  if (!form) return;
  e.preventDefault();
  const action = form.dataset.submit;
  const handler = ACTIONS[action];
  if (handler) handler(form);
});

/* ============================ Boot ============================ */
function init() {
  const splash = $("#splash");
  render();
  setTimeout(function () { splash.classList.add("fade"); }, 1500);
  setTimeout(function () { splash.remove(); $("#app").removeAttribute("aria-hidden"); if (!state.seenIntro) { state.seenIntro = true; save(); openIntro(); } }, 2100);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
