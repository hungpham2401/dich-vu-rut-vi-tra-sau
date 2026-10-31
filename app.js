// Contact Configuration (Zalo, Telegram, TikTok)
const ADMIN_CONFIG = {
  phone: "0985332378",
  phoneFormatted: "0985.332.378",
  zaloUrl: "https://zalo.me/0985332378",
  telegramUsername: "loveblue67",
  telegramUrl: "https://t.me/loveblue67",
  tiktokUsername: "andrew80117",
  tiktokUrl: "https://www.tiktok.com/@andrew80117",
  address: "11 Phạm Văn Bạch, Cầu Giấy, Hà Nội"
};

// Single Official Office Location: 11 Phạm Văn Bạch, Cầu Giấy, Hà Nội
const storeLocatorData = [
  {
    id: 1,
    name: "Văn Phòng Hỗ Trợ Rút Ví Trả Sau (Cầu Giấy)",
    address: "11 Phạm Văn Bạch, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội",
    hotline: "0985332378",
    hours: "07:00 - 24:00 (Hỗ trợ Online 24/7 Toàn Quốc)",
    province: "Hà Nội",
    district: "Cầu Giấy",
    coordinates: { lat: 21.0268, lng: 105.7885 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=11+Ph%E1%BA%A1m+V%C4%83n+B%E1%BA%A1ch,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i"
  }
];

// 16 Full-Screen Uncropped Phone Receipts
const billGallery = [
  { src: "assets/bills/bill-01.png", amount: "8.000.000đ", tag: "MoMo Trả Sau", title: "Giải ngân thành công 8.000.000đ" },
  { src: "assets/bills/bill-07.png", amount: "15.000.000đ", tag: "MoMo Trả Sau", title: "Giải ngân thành công 15.000.000đ" },
  { src: "assets/bills/bill-08.png", amount: "10.202.200đ", tag: "Ví Trả Sau", title: "Giải ngân thành công 10.202.200đ" },
  { src: "assets/bills/bill-10.png", amount: "7.142.200đ", tag: "MoMo Trả Sau", title: "Giải ngân thành công 7.142.200đ" },
  { src: "assets/bills/bill-13.jpg", amount: "8.073.544đ", tag: "Trả Góp 3 Kỳ", title: "Thanh toán & rút 8.073.544đ" },
  { src: "assets/bills/bill-14.jpg", amount: "5.443.355đ", tag: "Trả Góp Ví", title: "Giải ngân thành công 5.443.355đ" },
  { src: "assets/bills/bill-02.png", amount: "5.000.000đ", tag: "MoMo Trả Sau", title: "Hoàn tất rút hạn mức Ví Trả Sau" },
  { src: "assets/bills/bill-09.png", amount: "6.500.000đ", tag: "ZaloPay / MoMo", title: "Biên lai giao dịch thành công" },
  { src: "assets/bills/bill-11.png", amount: "10.000.000đ", tag: "Full Hạn Mức", title: "Chuyển khoản tức thì sau 3 phút" },
  { src: "assets/bills/bill-12.png", amount: "4.500.000đ", tag: "Ví Trả Sau", title: "Giao dịch rút ví trả sau 24/7" },
  { src: "assets/bills/bill-15.jpg", amount: "997.650đ", tag: "Hóa Đơn Điện", title: "Rút nhanh hạn mức nhỏ lẻ 3 phút" },
  { src: "assets/bills/bill-16.jpg", amount: "792.450đ", tag: "Ví Trả Sau", title: "Xử lý giao dịch ban đêm 01:53" },
  { src: "assets/bills/bill-03.png", amount: "382.342đ", tag: "Ví Trả Sau", title: "Hỗ trợ rút mọi mệnh giá linh hoạt" },
  { src: "assets/bills/bill-04.png", amount: "3.200.000đ", tag: "Ví Trả Sau", title: "Bill thanh toán hạn mức thành công" },
  { src: "assets/bills/bill-05.png", amount: "4.800.000đ", tag: "SPayLater / Ví", title: "Giải ngân về tài khoản chính chủ" },
  { src: "assets/bills/bill-06.png", amount: "2.500.000đ", tag: "Ví Trả Sau", title: "Khách nhận tiền ngay trong 3 phút" }
];

// Realtime Comments Data
const seedComments = [
  "Uy tín quá anh em, nhắn Zalo rút trong 3 phút có tiền luôn!",
  "Shop hỗ trợ nhiệt tình thật sự, mình rút MoMo 8 triệu tiền về ngay.",
  "Dịch vụ ổn áp, rất đáng tin tưởng, phí rẻ hơn mấy chỗ trước mình hỏi.",
  "Mình thử 2 lần qua Telegram @loveblue67 đều nhận được tiền siêu nhanh.",
  "Biết bên này qua kênh TikTok @andrew80117, qua rút thử uy tín 100% luôn.",
  "Rút cái có luôn tiền vào tài khoản ngân hàng, chất lượng thật sự!",
  "Lúc đầu cũng hơi nghi ngờ nhưng qua trực tiếp 11 Phạm Văn Bạch giao dịch xong thì tin tuyệt đối.",
  "Chưa từng thấy dịch vụ nào xử lý nhanh như vậy, đúng 3 phút tinh tinh.",
  "Support nhiệt tình 10 điểm, hướng dẫn từng bước rất dễ hiểu.",
  "Mình rút SPayLater lúc 11h30 đêm vẫn được hỗ trợ chuyển khoản ngay.",
  "Lần đầu hơi lo nên nhắn trực tiếp Zalo 0985.332.378, tư vấn cực kỳ đàng hoàng.",
  "Oke đó chứ, vừa rút 5 củ ZaloPay xong, phí hợp lý.",
  "Hỗ trợ nhiệt tình quá, cảm ơn shop nhiều nhé!",
  "Rất hài lòng, tháng sau có hạn mức em lại nhắn Zalo tiếp.",
  "Tuyệt vời, đúng như cam kết, không giữ giấy tờ hay mật khẩu gì cả.",
  "Mình recommend cho mọi người luôn, cứ nhắn Zalo 0985.332.378 hoặc Tele @loveblue67 là chuẩn.",
  "Giao dịch nhanh chóng, minh bạch, báo phí rõ ràng trước khi làm.",
  "Tin tưởng 100% rồi, rút Kredivo với FE PayLater bên này rất mượt."
];

const seedNames = [
  "Văn An", "Lê Hương", "Trần Minh", "Nguyễn Lan", "Phạm Đức",
  "Vũ Mai", "Hoàng Nam", "Đặng Linh", "Bùi Hải", "Lý Thảo",
  "Phan Tuấn", "Tô Nga", "Đỗ Quang", "Lưu Yến", "Trương Huy",
  "Cao Trang", "Đinh Sơn", "Ngọc Hoa", "Lê Dũng", "Chu Bảo",
  "Dương Kiệt", "Thành Phương", "Tạ Long", "Hồ Xuân", "Minh Khôi"
];

function formatVND(num) {
  return Number(num).toLocaleString("vi-VN") + " đ";
}

function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Đã sao chép ${label}: ${text}`);
  }).catch(() => {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(`Đã sao chép ${label}: ${text}`);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;
  toastMsg.textContent = message;
  toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 2800);
}

// Interactive Bright Neo-Fintech Fee Calculator
function initCalculator() {
  const amountInput = document.getElementById("withdrawal-amount");
  const amountSlider = document.getElementById("withdrawal-slider");
  const walletChips = document.querySelectorAll(".wallet-chip");
  const methodBtns = document.querySelectorAll(".method-toggle-btn");
  const quickBtns = document.querySelectorAll(".quick-amount-btn");

  let selectedWallet = "MoMo Trả Sau";
  let selectedMethod = "online";
  let selectedMethodLabel = "Rút Online (Nhận tiền sau 3 phút)";

  function calculateFeeRate(amount) {
    if (selectedWallet.indexOf("SPayLater") !== -1) return 18;
    return 8;
  }

  function runCalculation() {
    if (!amountInput) return;
    let amount = parseFloat(String(amountInput.value).replace(/[^0-9]/g, ""));
    if (isNaN(amount) || amount < 100000) {
      amount = 100000;
    }

    let feeRate = calculateFeeRate(amount);
    if (selectedMethod === "offline") {
      feeRate += 2;
    }

    const feeAmount = Math.round(amount * (feeRate / 100));
    const receivedAmount = amount - feeAmount;

    document.getElementById("wallet-value").textContent = selectedWallet;
    document.getElementById("method-value").textContent = selectedMethodLabel;
    document.getElementById("amount-value").textContent = formatVND(amount);
    document.getElementById("fee-rate").textContent = feeRate + "%";
    document.getElementById("fee-amount").textContent = "- " + formatVND(feeAmount);
    document.getElementById("received-amount").textContent = formatVND(receivedAmount);
  }

  // Wallet Chips
  walletChips.forEach(chip => {
    chip.addEventListener("click", () => {
      walletChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      selectedWallet = chip.getAttribute("data-wallet");
      runCalculation();
    });
  });

  // Method Toggle Buttons
  methodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      methodBtns.forEach(b => {
        b.classList.remove("bg-[#0068ff]", "text-white", "font-extrabold", "shadow-md");
        b.classList.add("text-slate-600");
      });
      btn.classList.add("bg-[#0068ff]", "text-white", "font-extrabold", "shadow-md");
      btn.classList.remove("text-slate-600");
      selectedMethod = btn.getAttribute("data-method");
      selectedMethodLabel = btn.getAttribute("data-label");
      runCalculation();
    });
  });

  // Quick Preset Buttons
  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-amount");
      amountInput.value = val;
      if (amountSlider) amountSlider.value = val;
      quickBtns.forEach(b => b.classList.remove("border-[#0068ff]", "text-[#0068ff]", "bg-blue-50"));
      btn.classList.add("border-[#0068ff]", "text-[#0068ff]", "bg-blue-50");
      runCalculation();
    });
  });

  // Slider sync
  if (amountSlider) {
    amountSlider.addEventListener("input", () => {
      amountInput.value = amountSlider.value;
      runCalculation();
    });
  }

  if (amountInput) {
    amountInput.addEventListener("input", () => {
      const v = parseFloat(amountInput.value);
      if (amountSlider && !isNaN(v) && v >= 500000 && v <= 20000000) {
        amountSlider.value = v;
      }
      runCalculation();
    });
    amountInput.value = "5000000";
    runCalculation();
  }
}

// Initialize Uncropped Phone Frame Bill Gallery (Bright Mode)
let currentLightboxIdx = 0;
function initGallery() {
  const grid = document.getElementById("bill-gallery-grid");
  if (!grid) return;

  grid.innerHTML = billGallery.map((item, idx) => `
    <div class="bill-phone-frame group" onclick="openLightbox(${idx})">
      <!-- Top Phone Header -->
      <div class="flex items-center justify-between px-1.5 pb-2 text-[11px]">
        <span class="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${item.tag}
        </span>
        <span class="font-extrabold text-slate-900">${item.amount}</span>
      </div>

      <!-- Full Uncropped Image Container -->
      <div class="bill-img-wrapper">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
      </div>

      <!-- Bottom Caption Bar -->
      <div class="pt-2.5 px-1 flex items-center justify-between gap-2">
        <span class="text-xs font-semibold text-slate-700 truncate">${item.title}</span>
        <span class="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#0068ff] group-hover:text-white text-slate-500 flex items-center justify-center text-[10px] shrink-0 transition">
          <i class="fa-solid fa-expand"></i>
        </span>
      </div>
    </div>
  `).join("");
}

function openLightbox(idx) {
  currentLightboxIdx = idx;
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const counter = document.getElementById("lightbox-counter");
  if (!modal || !img) return;

  const item = billGallery[currentLightboxIdx];
  img.src = item.src;
  caption.textContent = `${item.title} (${item.amount})`;
  counter.textContent = `${currentLightboxIdx + 1} / ${billGallery.length}`;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function stepLightbox(dir) {
  currentLightboxIdx = (currentLightboxIdx + dir + billGallery.length) % billGallery.length;
  openLightbox(currentLightboxIdx);
}

// Store Locator & Leaflet Map (Single Official Location: 11 Phạm Văn Bạch, Cầu Giấy)
let leafletMap = null;

function initStoreLocator() {
  const loc = storeLocatorData[0];
  const mapEl = document.getElementById("map");
  if (mapEl && typeof L !== "undefined") {
    leafletMap = L.map("map").setView([loc.coordinates.lat, loc.coordinates.lng], 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap"
    }).addTo(leafletMap);

    const marker = L.marker([loc.coordinates.lat, loc.coordinates.lng]).addTo(leafletMap);
    marker.bindPopup(`
      <div style="min-width:220px;color:#0f172a">
        <strong style="font-size:13px">${loc.name}</strong>
        <p style="font-size:12px;margin:4px 0">${loc.address}</p>
        <p style="font-size:12px;margin:4px 0"><strong>Zalo:</strong> <a href="https://zalo.me/0985332378" target="_blank">0985.332.378</a> | <strong>Tele:</strong> <a href="https://t.me/loveblue67" target="_blank">@loveblue67</a></p>
      </div>
    `).openPopup();
  }
}

window.focusMainOffice = function() {
  const loc = storeLocatorData[0];
  if (!loc || !leafletMap) return;
  leafletMap.setView([loc.coordinates.lat, loc.coordinates.lng], 17);
  showToast("Đã định vị: 11 Phạm Văn Bạch, Cầu Giấy, Hà Nội");
};

// Realtime Seeding Comments (Bright Mode)
function initRealtimeComments() {
  const listEl = document.getElementById("realtime-comments-list");
  const onlineCountEl = document.getElementById("online-users-count");
  const formEl = document.getElementById("user-comment-form");
  if (!listEl) return;

  let commentIdx = 0;
  let nameIdx = 0;

  function getInitials(name) {
    return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase();
  }

  function createCommentHTML(name, text, timeLabel, isNew = false) {
    return `
      <div class="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 ${isNew ? 'comment-item-new border-blue-300 bg-blue-50/40' : ''}">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0068ff] to-emerald-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm">
          ${getInitials(name)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="font-bold text-slate-900 text-sm">${name}</span>
              <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i class="fa-solid fa-check text-[9px]"></i> Đã giải ngân
              </span>
            </div>
            <span class="text-xs text-slate-400 shrink-0">${timeLabel}</span>
          </div>
          <p class="text-slate-600 text-sm mt-1 leading-relaxed">${text}</p>
        </div>
      </div>
    `;
  }

  const initialTimes = ["Vừa xong", "1 phút trước", "2 phút trước", "3 phút trước", "5 phút trước", "7 phút trước"];
  let initialHTML = "";
  for (let i = 0; i < 6; i++) {
    initialHTML += createCommentHTML(seedNames[i], seedComments[i], initialTimes[i], false);
    commentIdx = i + 1;
    nameIdx = i + 1;
  }
  listEl.innerHTML = initialHTML;

  setInterval(() => {
    const name = seedNames[nameIdx % seedNames.length];
    const text = seedComments[commentIdx % seedComments.length];
    nameIdx++;
    commentIdx++;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = createCommentHTML(name, text, "Vừa xong", true);
    listEl.insertBefore(wrapper.firstElementChild, listEl.firstChild);

    while (listEl.children.length > 10) {
      listEl.removeChild(listEl.lastElementChild);
    }

    if (onlineCountEl) {
      onlineCountEl.textContent = Math.floor(Math.random() * 12) + 26;
    }
  }, 6500);

  if (formEl) {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const authorInput = document.getElementById("comment-author");
      const contentInput = document.getElementById("comment-content");
      const author = authorInput.value.trim();
      const content = contentInput.value.trim();
      if (!author || !content) return;

      const wrapper = document.createElement("div");
      wrapper.innerHTML = createCommentHTML(author, content, "Vừa xong", true);
      listEl.insertBefore(wrapper.firstElementChild, listEl.firstChild);

      authorInput.value = "";
      contentInput.value = "";
      showToast("Cảm ơn bạn đã gửi bình luận đánh giá!");
    });
  }
}

function initAccordions() {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    if (header) {
      header.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
  });
}

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => menu.classList.add("hidden"));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCalculator();
  initGallery();
  initStoreLocator();
  initRealtimeComments();
  initAccordions();
  initMobileMenu();
});
