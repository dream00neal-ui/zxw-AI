const NAV_ITEMS = [
  {label:"找商机", icon:"🔍", sub:["项目信息","招投标","土地及前期","项目引荐服务"], href:"opportunity-list.html"},
  {label:"找客户", icon:"🏢", sub:["参建单位库","企业拓客","地图拓客","采购预测推荐"], href:"customer-list.html"},
  {label:"找人脉", icon:"👥", sub:["工程人脉查询","关系图谱","导入我的人脉"], href:"network.html"},
  {label:"找渠道", icon:"📡", sub:[]},
  {label:"目标商机", icon:"🎯", sub:[]},
  {label:"海外商机", icon:"🌏", sub:[]},
  {label:"CRM", icon:"📋", sub:[]},
  {label:"市场服务", icon:"📊", sub:[]},
  {label:"行业研究院", icon:"🏛", sub:[]},
];

function renderNav(activeMenu) {
  const nav = document.getElementById('left-nav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="px-3 py-3 border-b border-slate-700">
      <div class="text-sm font-bold text-blue-400">中项网 × SIEMENS</div>
      <div class="text-[12px] text-slate-400 mt-0.5">智联工业·共创无限</div>
    </div>
    <div class="px-2 py-1.5">
      <div class="flex items-center gap-1.5 bg-amber-600 text-white text-[12px] px-2 py-1 rounded cursor-pointer">
        <span>⚡</span><span>智能制造专版</span><span class="ml-auto">∨</span>
      </div>
    </div>
    <nav class="flex-1 overflow-y-auto py-1">
      ${NAV_ITEMS.map(item => `
        <a href="${item.href||'#'}" class="flex items-center gap-2 px-3 py-2 text-sm transition-colors cursor-pointer ${item.label===activeMenu?'text-blue-400 bg-slate-800':'text-slate-300 hover:bg-slate-800 hover:text-blue-400'}">
          <span>${item.icon}</span><span>${item.label}</span>
          ${item.sub.length?'<span class="ml-auto text-slate-500">∨</span>':''}
        </a>
        ${item.label===activeMenu && item.sub.length ? item.sub.map(s=>`
          <div class="pl-9 py-1.5 text-[13px] text-slate-400 hover:text-blue-400 cursor-pointer">${s}</div>
        `).join(''):''}
      `).join('')}
    </nav>
  `;
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; t.className='fixed top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm z-50 opacity-0 transition-opacity duration-300 pointer-events-none'; document.body.appendChild(t); }
  t.textContent = msg; t.style.opacity = '1';
  setTimeout(()=>{ t.style.opacity='0'; }, 2000);
}

function openModal(id) { document.getElementById(id)?.classList.remove('hidden'); document.body.style.overflow='hidden'; }
function closeModal(id) { document.getElementById(id)?.classList.add('hidden'); document.body.style.overflow=''; }
