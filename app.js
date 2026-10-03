/* ════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════ */

const RATES = {
  "UC Medicare PPO U": null,
  "UC Medicare PPO UC": null,
  "UC Medicare PPO UA": null,
  "UC Medicare PPO UAC": null,
  "UC Medicare PPO M": [576.46, 516.02],
  "UC Medicare PPO MM": [1152.92, 1032.04],
  "UC Medicare PPO MC": null,
  "UC Medicare PPO MA": null,
  "UC Medicare PPO MAC": null,
  "UC Medicare PPO MMM": [1729.38, 1548.06],
  "UC Medicare PPO MMC": null,

  "UC Medicare PPO without Rx U": null,
  "UC Medicare PPO without Rx UC": null,
  "UC Medicare PPO without Rx UA": null,
  "UC Medicare PPO without Rx UAC": null,
  "UC Medicare PPO without Rx M": [151.95, 551.04],
  "UC Medicare PPO without Rx MM": [303.90, 1102.08],
  "UC Medicare PPO without Rx MC": null,
  "UC Medicare PPO without Rx MA": null,
  "UC Medicare PPO without Rx MAC": null,
  "UC Medicare PPO without Rx MMM": [455.85, 1653.12],
  "UC Medicare PPO without Rx MMC": null,

  "HealthSavings+ U": [1194.59, 945.23],
  "HealthSavings+ UC": [2150.26, 1701.41],
  "HealthSavings+ UA": [2508.64, 1887.44],
  "HealthSavings+ UAC": [3464.31, 2643.62],
  "HealthSavings+ M": null,
  "HealthSavings+ MM": null,
  "HealthSavings+ MC": null,
  "HealthSavings+ MA": null,
  "HealthSavings+ MAC": null,
  "HealthSavings+ MMM": null,
  "HealthSavings+ MMC": null,

  "UC Blue & Gold HMO/UC Medicare Choice U": [1270.38, 913.15],
  "UC Blue & Gold HMO/UC Medicare Choice UC": [2286.68, 1643.67],
  "UC Blue & Gold HMO/UC Medicare Choice UA": [2667.80, 1777.87],
  "UC Blue & Gold HMO/UC Medicare Choice UAC": [3684.10, 2508.39],
  "UC Blue & Gold HMO/UC Medicare Choice M": null,
  "UC Blue & Gold HMO/UC Medicare Choice MM": null,
  "UC Blue & Gold HMO/UC Medicare Choice MC": [1704.55, 1281.56],
  "UC Blue & Gold HMO/UC Medicare Choice MA": [2085.67, 1415.76],
  "UC Blue & Gold HMO/UC Medicare Choice MAC": [3101.97, 2146.28],
  "UC Blue & Gold HMO/UC Medicare Choice MMM": null,
  "UC Blue & Gold HMO/UC Medicare Choice MMC": [2392.80, 1832.60],

  "UC High Option PPO U": null,
  "UC High Option PPO UC": null,
  "UC High Option PPO UA": null,
  "UC High Option PPO UAC": null,
  "UC High Option PPO M": [898.30, 534.56],
  "UC High Option PPO MM": [1796.60, 1069.12],
  "UC High Option PPO MC": null,
  "UC High Option PPO MA": null,
  "UC High Option PPO MAC": null,
  "UC High Option PPO MMM": [2694.90, 1603.68],
  "UC High Option PPO MMC": null,

  "Kaiser Permanente/Senior Advantage HMO U": [985.22, 708.25],
  "Kaiser Permanente/Senior Advantage HMO UC": [1773.39, 1274.84],
  "Kaiser Permanente/Senior Advantage HMO UA": [2068.96, 1378.94],
  "Kaiser Permanente/Senior Advantage HMO UAC": [2857.13, 1945.53],
  "Kaiser Permanente/Senior Advantage HMO M": [238.09, 551.04],
  "Kaiser Permanente/Senior Advantage HMO MM": [476.18, 1102.08],
  "Kaiser Permanente/Senior Advantage HMO MC": [1026.26, 1117.63],
  "Kaiser Permanente/Senior Advantage HMO MA": [1321.83, 1221.73],
  "Kaiser Permanente/Senior Advantage HMO MAC": [2110.00, 1788.32],
  "Kaiser Permanente/Senior Advantage HMO MMM": [714.27, 1653.12],
  "Kaiser Permanente/Senior Advantage HMO MMC": [1264.35, 1668.67],

  "UC Care PPO/UC Medicare PPO U": [1308.81, 913.15],
  "UC Care PPO/UC Medicare PPO UC": [2355.86, 1643.67],
  "UC Care PPO/UC Medicare PPO UA": [2748.50, 1777.87],
  "UC Care PPO/UC Medicare PPO UAC": [3795.55, 2508.39],
  "UC Care PPO/UC Medicare PPO M": null,
  "UC Care PPO/UC Medicare PPO MM": null,
  "UC Care PPO/UC Medicare PPO MC": [1623.51, 1246.54],
  "UC Care PPO/UC Medicare PPO MA": [2016.15, 1380.74],
  "UC Care PPO/UC Medicare PPO MAC": [3063.20, 2111.26],
  "UC Care PPO/UC Medicare PPO MMM": null,
  "UC Care PPO/UC Medicare PPO MMC": [2199.97, 1762.56],

  "UC Medicare Choice U": null,
  "UC Medicare Choice UC": null,
  "UC Medicare Choice UA": null,
  "UC Medicare Choice UAC": null,
  "UC Medicare Choice M": [688.25, 551.04],
  "UC Medicare Choice MM": [1376.50, 1102.08],
  "UC Medicare Choice MC": null,
  "UC Medicare Choice MA": null,
  "UC Medicare Choice MAC": null,
  "UC Medicare Choice MMM": [2064.75, 1653.12],
  "UC Medicare Choice MMC": null,

  "Delta Dental PPO U": [46.08, 46.08],
  "Delta Dental PPO UC": [82.94, 82.94],
  "Delta Dental PPO UA": [96.77, 96.77],
  "Delta Dental PPO UAC": [133.63, 133.63],
  "Delta Dental PPO M": null,
  "Delta Dental PPO MM": null,
  "Delta Dental PPO MC": null,
  "Delta Dental PPO MA": null,
  "Delta Dental PPO MAC": null,
  "Delta Dental PPO MMM": null,
  "Delta Dental PPO MMC": null,

  "DeltaCare USA (Dental HMO) U": [19.00, 19.00],
  "DeltaCare USA (Dental HMO) UC": [34.20, 34.20],
  "DeltaCare USA (Dental HMO) UA": [39.90, 39.90],
  "DeltaCare USA (Dental HMO) UAC": [55.10, 55.10],
  "DeltaCare USA (Dental HMO) M": null,
  "DeltaCare USA (Dental HMO) MM": null,
  "DeltaCare USA (Dental HMO) MC": null,
  "DeltaCare USA (Dental HMO) MA": null,
  "DeltaCare USA (Dental HMO) MAC": null,
  "DeltaCare USA (Dental HMO) MMM": null,
  "DeltaCare USA (Dental HMO) MMC": null,
};

const COV_DESCS = {
  U:   "University of California Retiree Only",
  UC:  "Retiree + Child(ren)",
  UA:  "Retiree + Adult",
  UAC: "Retiree + Adult + Child(ren)",
  M:   "Medicare-eligible Retiree",
  MM:  "Medicare-eligible Retiree + Medicare-eligible Adult or Child",
  MC:  "Medicare-eligible Retiree + Child(ren), or Retiree + Medicare-eligible Child",
  MA:  "Medicare-eligible Retiree + Adult, or Retiree + Medicare-eligible Adult",
  MAC: "Medicare-eligible Retiree + Adult + Child(ren) OR Retiree + Medicare-eligible Adult + Child(ren) OR Retiree + Adult + Medicare-eligible Child",
  MMM: "Medicare-eligible Retiree + Medicare-eligible Adult + Medicare-eligible Child",
  MMC: "MMC = Medicare-eligible Retiree + Medicare-eligible Adult + Child(ren) OR Medicare-eligible Retiree + Adult + Medicare-eligible Child",
};

const PARTB_PERSONS = { M: 1, MM: 2, MC: 1, MA: 1, MAC: 1, MMM: 3, MMC: 2 };
const PARTB_MAX = 202.90;
const LEVELS = ['U', 'UC', 'UA', 'UAC', 'M', 'MM', 'MC', 'MA', 'MAC', 'MMM', 'MMC'];
const VL_LEVELS = ['U', 'UC', 'UA', 'UAC'];

const G2_SVC = {
  10: 0.50, 11: 0.55, 12: 0.60, 13: 0.65, 14: 0.70,
  15: 0.75, 16: 0.80, 17: 0.85, 18: 0.90, 19: 0.95, 20: 1.00,
};

const G3_SVCS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const G3_AGES = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65];
const G3_DATA = [
  [0, 0, 0, 0, 0, 0, 0.050, 0.100, 0.150, 0.200, 0.250, 0.300, 0.350, 0.400, 0.450, 0.500],
  [0, 0, 0, 0, 0, 0, 0.055, 0.110, 0.165, 0.220, 0.275, 0.330, 0.385, 0.440, 0.495, 0.550],
  [0, 0, 0, 0, 0, 0, 0.060, 0.120, 0.180, 0.240, 0.300, 0.360, 0.420, 0.480, 0.540, 0.600],
  [0, 0, 0, 0, 0, 0, 0.065, 0.130, 0.195, 0.260, 0.325, 0.390, 0.455, 0.520, 0.585, 0.650],
  [0, 0, 0, 0, 0, 0, 0.070, 0.140, 0.210, 0.280, 0.350, 0.420, 0.490, 0.560, 0.630, 0.700],
  [0, 0, 0, 0, 0, 0, 0.075, 0.150, 0.225, 0.300, 0.375, 0.450, 0.525, 0.600, 0.675, 0.750],
  [0, 0, 0, 0, 0, 0, 0.080, 0.160, 0.240, 0.320, 0.400, 0.480, 0.560, 0.640, 0.720, 0.800],
  [0, 0, 0, 0, 0, 0, 0.085, 0.170, 0.255, 0.340, 0.425, 0.510, 0.595, 0.680, 0.765, 0.850],
  [0, 0, 0, 0, 0, 0, 0.090, 0.180, 0.270, 0.360, 0.450, 0.540, 0.630, 0.720, 0.810, 0.900],
  [0, 0, 0, 0, 0, 0, 0.095, 0.190, 0.285, 0.380, 0.475, 0.570, 0.665, 0.760, 0.855, 0.950],
  [0, 0, 0, 0, 0, 0, 0.100, 0.200, 0.300, 0.400, 0.500, 0.600, 0.700, 0.800, 0.900, 1.000],
];

const COMP_PLANS = [
  "UC Blue & Gold HMO/UC Medicare Choice",
  "Kaiser Permanente/Senior Advantage HMO",
  "HealthSavings+",
  "UC Care PPO/UC Medicare PPO",
  "UC High Option PPO",
  "UC Medicare PPO",
  "UC Medicare PPO without Rx",
  "UC Medicare Choice",
];

/* helpers */
const BLOCKED_ATTR  = /^on/i;
const URL_ATTRS     = new Set(['href', 'src', 'xlink:href']);
const JAVASCRIPT_RE = /^\s*javascript:/i;

function el(tag, { cls, text, attrs } = {}) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (BLOCKED_ATTR.test(k)) continue;
      if (URL_ATTRS.has(k) && typeof v === 'string' && JAVASCRIPT_RE.test(v)) continue;
      node.setAttribute(k, v);
    }
  }
  return node;
}

function replaceChildren(container, ...children) {
  if (container) container.replaceChildren(...children);
}

function makeCovCell(level) {
  const wrapper = el('div', { cls: 'cov-cell' });
  const code = el('span', { text: level, attrs: { style: 'font-weight:600;color:var(--navy)' } });
  const tipWrap = el('span', { cls: 'cov-tip-wrap' });
  const btn = el('span', { cls: 'cov-info-btn', text: 'i', attrs: { tabindex: '0', 'aria-label': COV_DESCS[level] } });
  const tip = el('span', { cls: 'cov-tooltip', text: COV_DESCS[level], attrs: { role: 'tooltip' } });

  tipWrap.appendChild(btn);
  tipWrap.appendChild(tip);
  wrapper.appendChild(code);
  wrapper.appendChild(tipWrap);
  return wrapper;
}

function makePlaceholder(icon, message) {
  const wrap = el('div', { cls: 'placeholder-msg' });
  wrap.appendChild(el('div', { cls: 'icon', text: icon }));
  wrap.appendChild(el('p', { text: message }));
  return wrap;
}

/* calc */
function calcUCPct(group, age, service) {
  if (group === 'group1') {
    if (isNaN(age) || isNaN(service)) return null;
    const svc = Math.floor(service);
    if (age < 50) return null;
    if (age >= 55 && svc >= 5) return 1.0;
    if (age >= 50 && svc >= 10) return 1.0;
    return null;
  }

  if (group === 'group2') {
    const svc = Math.floor(service);
    if (svc >= 10) return G2_SVC[Math.min(svc, 20)] ?? null;
    if (age < 55 || svc < 5) return null;
    if ((age + svc) >= 75) return G2_SVC[10];
    return null;
  }

  if (group === 'group3') {
    if (service < 10 || age < 50) return null;
    const si = G3_SVCS.indexOf(Math.min(Math.floor(service), 20));
    const ai = G3_AGES.indexOf(Math.min(Math.floor(age), 65));
    return (si < 0 || ai < 0) ? null : G3_DATA[si][ai];
  }

  return null;
}

function ageIsRequired(group, service) {
  if (group === 'group1') return true;
  if (group === 'group2') return !isNaN(service) && Math.floor(service) < 10;
  if (group === 'group3') return true;
  return false;
}

function calcRow(plan, level, ucPct) {
  const data = RATES[`${plan} ${level}`];
  if (!data) return null;

  const [total, maxUC] = data;
  const ucPays = Math.min(total, parseFloat((ucPct * maxUC).toFixed(2)));
  const retiree = Math.max(0, parseFloat((total - ucPays).toFixed(2)));
  const persons = PARTB_PERSONS[level] ?? 0;

  let partB = null;
  if (persons > 0 && retiree === 0) {
    const overage = parseFloat((ucPct * maxUC - total).toFixed(2));
    if (overage > 0) partB = Math.min(overage, persons * PARTB_MAX);
  }

  return { total, maxUC, ucPays, retiree, partB };
}

function getActivePct() {
  const ovEl = document.getElementById('override-pct');
  const ov = ovEl ? ovEl.value : '';
  if (ov !== '' && !isNaN(parseFloat(ov))) return parseFloat(ov) / 100;

  const gEl = document.getElementById('group');
  const sEl = document.getElementById('service');
  const aEl = document.getElementById('age');
  if (!gEl || !sEl || !aEl) return null;

  const g = gEl.value;
  const s = parseFloat(sEl.value);
  const a = parseFloat(aEl.value);

  if (!g || isNaN(s)) return null;
  if (g === 'group1') return !isNaN(a) ? calcUCPct(g, a, s) : null;
  if (g === 'group2' && Math.floor(s) >= 10) return calcUCPct(g, a, s);
  return !isNaN(a) ? calcUCPct(g, a, s) : null;
}

function fmt(v) {
  return '$' + v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function pctStr(v) {
  return (v * 100).toFixed(2).replace(/\.?0+$/, '') + '%';
}

/* renders */
function renderEstimator() {
  const gEl = document.getElementById('group');
  const sEl = document.getElementById('service');
  const ageField = document.getElementById('age');
  const ageHint = document.getElementById('age-hint');
  const planEl = document.getElementById('plan');
  const disp = document.getElementById('contrib-display');
  const title = document.getElementById('results-title');
  const area = document.getElementById('results-area');

  if (!gEl || !sEl || !ageField || !ageHint || !planEl || !disp || !title || !area) return;

  const g = gEl.value;
  const s = parseFloat(sEl.value);
  const needAge = ageIsRequired(g, s);

  ageField.disabled = !needAge;
  ageField.style.opacity = needAge ? '1' : '0.45';

  if (g === 'group1') {
    ageHint.textContent = 'Required — Group 1 eligibility: age 50–54 needs 10+ years of service; age 55+ needs 5+ years. Eligible retirees receive 100% UC contribution.';
    ageHint.style.display = 'block';
  } else if (g === 'group2' && !needAge) {
    ageHint.textContent = 'Not required — with 10+ years of service, contribution is based on service credit alone.';
    ageHint.style.display = 'block';
  } else if (g === 'group2' && needAge) {
    ageHint.textContent = 'Required — with fewer than 10 years of service, age is needed to evaluate Rule 75 eligibility (age + service ≥ 75).';
    ageHint.style.display = 'block';
  } else {
    ageHint.style.display = 'none';
  }

  const plan = planEl.value;
  const ucPct = getActivePct();

  if (ucPct === null) {
    disp.textContent = 'N/A';
    disp.className = 'contrib-value na';
  } else {
    disp.textContent = pctStr(ucPct);
    disp.className = 'contrib-value';
  }

  const planLabel = plan
    ? planEl.options[planEl.selectedIndex].text.trim()
    : '';
  title.textContent = planLabel || 'Premium Results';

  if (!plan) {
    replaceChildren(area, makePlaceholder('📋', 'Select a plan to view premium estimates.'));
    renderComparison();
    renderVisionLegal();
    return;
  }

  if (ucPct === null) {
    replaceChildren(area, makePlaceholder('⚠️', 'Cannot calculate — check eligibility inputs or enter UC % manually.'));
    renderComparison();
    renderVisionLegal();
    return;
  }

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const hdr = document.createElement('tr');

  ['Coverage Level', 'Monthly Premium', 'Max UC Contrib.', 'UC Pays', 'You Pay', 'Part B Reimb.']
    .forEach(text => hdr.appendChild(el('th', { text, attrs: { scope: 'col' } })));

  thead.appendChild(hdr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  for (const lv of LEVELS) {
    const r = calcRow(plan, lv, ucPct);
    const row = document.createElement('tr');

    const firstTh = el('th', { cls: 'cov-head', attrs: { scope: 'row' } });
    firstTh.appendChild(makeCovCell(lv));
    row.appendChild(firstTh);

    if (!r) {
      row.classList.add('na-row');
      row.appendChild(el('td', {
        cls: 'na-cell',
        text: 'Not available',
        attrs: { colspan: '5', style: 'text-align:center' },
      }));
    } else {
      row.appendChild(el('td', { cls: 'amount', text: fmt(r.total) }));
      row.appendChild(el('td', { cls: 'amount', text: fmt(r.maxUC) }));
      row.appendChild(el('td', { cls: 'amount uc-pays', text: fmt(r.ucPays) }));
      row.appendChild(el('td', {
        cls: `amount retiree-pays${r.retiree <= 0 ? ' zero' : ''}`,
        text: r.retiree <= 0 ? '$0.00' : fmt(r.retiree),
    }));

      const isDash = !r.partB;
      row.appendChild(el('td', {
        cls: `amount partb${isDash ? ' partb-dash' : ''}`,
        text: isDash ? '—' : fmt(r.partB),
      }));
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  replaceChildren(area, table);

  renderComparison();
  renderVisionLegal();
}

function renderComparison() {
  const ucPct = getActivePct();
  const compLabel = document.getElementById('comp-pct-label');
  const tbody = document.getElementById('comp-tbody');

  if (!tbody) return;
  if (compLabel) compLabel.textContent = ucPct !== null ? pctStr(ucPct) : '—';

  if (ucPct === null) {
    const row = document.createElement('tr');
    row.appendChild(el('td', {
      text: 'Set your eligibility inputs on the Estimator tab to populate this chart.',
      attrs: { colspan: '17', style: 'padding:32px;text-align:center;color:var(--text-muted);font-size:13px;' },
    }));
    replaceChildren(tbody, row);
    return;
  }

  const rows = LEVELS.map(lv => {
    const results = COMP_PLANS.map(p => calcRow(p, lv, ucPct));
    const row = document.createElement('tr');
    if (!results.some(r => r !== null)) row.classList.add('na-row');

    const firstTh = el('th', { cls: 'cov-head', attrs: { scope: 'row' } });
    firstTh.appendChild(makeCovCell(lv));
    row.appendChild(firstTh);

    for (const r of results) {
      if (!r) {
        row.appendChild(el('td', { cls: 'nav grp-sep', text: 'N/A' }));
        row.appendChild(el('td', { cls: 'nav', text: '—' }));
      } else {
        const isZero = r.retiree <= 0;
        row.appendChild(el('td', {
          cls: `net ${isZero ? 'zero' : 'nonzero'} grp-sep`,
          text: isZero ? '$0.00' : fmt(r.retiree),
        }));
        row.appendChild(el('td', { cls: 'pbv', text: r.partB ? fmt(r.partB) : '—' }));
      }
    }

    return row;
  });

  replaceChildren(tbody, ...rows);
}

function renderCoverageTable(tbodyId, premiums) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  const rows = VL_LEVELS.map((level, index) => {
    const row = document.createElement('tr');
    const coverage = el('th', { cls: 'cov-head', attrs: { scope: 'row' } });
    coverage.appendChild(makeCovCell(level));
    row.appendChild(coverage);
    row.appendChild(el('td', { text: premiums[index] }));
    return row;
  });

  replaceChildren(tbody, ...rows);
}

function renderVisionLegal() {
  const ucPct = getActivePct();
  const pill = document.getElementById('vl-pct-label');
  if (pill) pill.textContent = ucPct !== null ? pctStr(ucPct) : '—';

  renderCoverageTable('vision-tbody', ['$12.43', '$23.73', '$23.52', '$29.05']);
  renderCoverageTable('legal-tbody', ['$11.59', '$13.95', '$13.95', '$16.31']);
}

/* tabs/events */
let restoreTabAfterPrintId = null;
let restoreTabFallbackTimer = null;
let restoreTabFallbackCleanup = null;

function getActiveTabId() {
  return document.querySelector('.tab-btn.active')?.dataset.tab
    || document.querySelector('.tab-panel.active')?.id
    || 'tab-estimator';
}

function showTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === tabId);
  });

  if (tabId === 'tab-estimator') renderEstimator();
  if (tabId === 'tab-comparison') renderComparison();
  if (tabId === 'tab-vl') renderVisionLegal();
}

function clearPrintRestoreFallbackState() {
  if (restoreTabFallbackTimer !== null) {
    clearTimeout(restoreTabFallbackTimer);
    restoreTabFallbackTimer = null;
  }

  if (restoreTabFallbackCleanup) {
    restoreTabFallbackCleanup();
    restoreTabFallbackCleanup = null;
  }
}

function restoreTabAfterPrint() {
  clearPrintRestoreFallbackState();

  if (!restoreTabAfterPrintId || restoreTabAfterPrintId === 'tab-comparison') {
    restoreTabAfterPrintId = null;
    return;
  }

  showTab(restoreTabAfterPrintId);
  restoreTabAfterPrintId = null;
}

function queueRestoreTabFallback() {
  clearPrintRestoreFallbackState();

  const startedAt = Date.now();
  let sawPrintFocusChange = false;

  const markPrintFocusChange = () => {
    if (document.visibilityState === 'hidden' || !document.hasFocus()) {
      sawPrintFocusChange = true;
    }
  };

  const clearListeners = () => {
    document.removeEventListener('visibilitychange', markPrintFocusChange);
    window.removeEventListener('blur', markPrintFocusChange);
  };
  restoreTabFallbackCleanup = clearListeners;

  document.addEventListener('visibilitychange', markPrintFocusChange);
  window.addEventListener('blur', markPrintFocusChange);
  markPrintFocusChange();

  const tryRestore = () => {
    if (!restoreTabAfterPrintId) {
      clearListeners();
      return;
    }

    const hardTimeoutReached = (Date.now() - startedAt) >= 15000;
    const focusRestoredAfterPrint =
      sawPrintFocusChange && document.visibilityState === 'visible' && document.hasFocus();

    if (focusRestoredAfterPrint || hardTimeoutReached) {
      clearListeners();
      restoreTabAfterPrint();
      return;
    }

    restoreTabFallbackTimer = setTimeout(tryRestore, 500);
  };

  restoreTabFallbackTimer = setTimeout(tryRestore, 1000);
}

function printActiveTab() {
  const activeTabId = getActiveTabId();

  if (activeTabId === 'tab-estimator') renderEstimator();
  if (activeTabId === 'tab-comparison') renderComparison();
  if (activeTabId === 'tab-vl') renderVisionLegal();

  window.print();
}

function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
  });

  const active = document.querySelector('.tab-btn.active')?.dataset.tab || 'tab-estimator';
  showTab(active);
}

function initEvents() {
  ['group', 'age', 'service', 'plan', 'override-pct'].forEach(id => {
    const node = document.getElementById(id);
    if (!node) return;
    node.addEventListener('input', () => renderEstimator());
    node.addEventListener('change', () => renderEstimator());
  });

  const printBtn = document.getElementById('print-comparison-btn');
  if (printBtn) {
    printBtn.addEventListener('click', printActiveTab);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initEvents();
  renderEstimator();
  renderComparison();
  renderVisionLegal();
});
