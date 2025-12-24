/* =========================================
   MASTER DATA SOURCE
   Edit this array to update the entire site.
   ========================================= */
const courseContent = [
    {
    id: "L1",
    week: 1,
    date: "2026-02-10",
    type: "Lecture",
    title: "ОДУ как язык биофизики",
    desc: "Детерминированные динамические системы, фазовое пространство, стационарные точки.",
    icon: "📈",
    materialLink: "files/lecture1_ode_intro.pdf",
    homework: null
},
{
    id: "S1",
    week: 1,
    date: "2026-02-12",
    type: "Seminar",
    title: "Биохимическая кинетика и ОДУ",
    desc: "Запись моделей масс-действия, стационарные состояния, устойчивость.",
    icon: "🧪",
    materialLink: "files/seminar1_kinetics.pdf",
    homework: "Записать и проанализировать систему ОДУ для простой реакции A → B → C"
},

{
    id: "L2",
    week: 2,
    date: "2026-02-17",
    type: "Lecture",
    title: "Нелинейные ОДУ и режимы",
    desc: "Нелинейность, бифуркации, автоколебания.",
    icon: "🔁",
    materialLink: "files/lecture2_nonlinear_ode.pdf",
    homework: null
},
{
    id: "S2",
    week: 2,
    date: "2026-02-19",
    type: "Seminar",
    title: "Фазовые портреты и бифуркации",
    desc: "Фазовые диаграммы и биологическая интерпретация режимов.",
    icon: "🧭",
    materialLink: "files/seminar2_phase_portraits.pdf",
    homework: "Построить фазовый портрет модели FitzHugh–Nagumo"
},

{
    id: "L3",
    week: 3,
    date: "2026-02-24",
    type: "Lecture",
    title: "Сетевые модели как системы ОДУ",
    desc: "Матричная форма ОДУ, спектр якобиана, устойчивость сетей.",
    icon: "🧩",
    materialLink: "files/lecture3_network_ode.pdf",
    homework: null
},
{
    id: "S3",
    week: 3,
    date: "2026-02-26",
    type: "Seminar",
    title: "Генные и нейронные сети",
    desc: "Анализ устойчивости сетевых моделей.",
    icon: "🧠",
    materialLink: "files/seminar3_networks.pdf",
    homework: "Проанализировать устойчивость простой генной сети"
},

{
    id: "L4",
    week: 4,
    date: "2026-03-03",
    type: "Lecture",
    title: "Популяционная динамика",
    desc: "Взаимодействующие популяции и эпидемические модели.",
    icon: "🌱",
    materialLink: "files/lecture4_population.pdf",
    homework: null
},
{
    id: "S4",
    week: 4,
    date: "2026-03-05",
    type: "Seminar",
    title: "Модели Лотки–Вольтерры",
    desc: "Фазовый анализ и биологический смысл параметров.",
    icon: "🐺",
    materialLink: "files/seminar4_lotka_volterra.pdf",
    homework: "Исследовать влияние параметров на устойчивость системы"
},

{
    id: "L5",
    week: 5,
    date: "2026-03-10",
    type: "Lecture",
    title: "Диффузия и транспорт",
    desc: "Уравнение диффузии, оператор Лапласа, краевые условия.",
    icon: "🌊",
    materialLink: "files/lecture5_diffusion.pdf",
    homework: null
},
{
    id: "S5",
    week: 5,
    date: "2026-03-12",
    type: "Seminar",
    title: "Решения уравнения диффузии",
    desc: "Аналитические решения и физическая интерпретация.",
    icon: "📐",
    materialLink: "files/seminar5_diffusion.pdf",
    homework: "Решить уравнение диффузии для одномерной геометрии"
},

{
    id: "L6",
    week: 6,
    date: "2026-03-17",
    type: "Lecture",
    title: "Реакционно-диффузионные системы",
    desc: "Паттерны, неустойчивости, условия Тьюринга.",
    icon: "🎨",
    materialLink: "files/lecture6_reaction_diffusion.pdf",
    homework: null
},
{
    id: "S6",
    week: 6,
    date: "2026-03-19",
    type: "Seminar",
    title: "Морфогенез и паттерны",
    desc: "Анализ мод и биологический смысл паттернов.",
    icon: "🦓",
    materialLink: "files/seminar6_turing.pdf",
    homework: "Показать условия возникновения паттерна Тьюринга"
},

{
    id: "L7",
    week: 7,
    date: "2026-03-24",
    type: "Lecture",
    title: "Пространственные нейронные модели",
    desc: "Кабельное уравнение и распространение сигнала.",
    icon: "⚡",
    materialLink: "files/lecture7_cable.pdf",
    homework: null
},
{
    id: "S7",
    week: 7,
    date: "2026-03-26",
    type: "Seminar",
    title: "Дендриты и аксоны",
    desc: "Влияние геометрии на передачу сигнала.",
    icon: "🧬",
    materialLink: "files/seminar7_neuron_space.pdf",
    homework: "Проанализировать затухание сигнала вдоль дендрита"
},

{
    id: "L8",
    week: 8,
    date: "2026-03-31",
    type: "Lecture",
    title: "Стохастические процессы",
    desc: "Шум, SDE, траектории и распределения.",
    icon: "🎲",
    materialLink: "files/lecture8_stochastic.pdf",
    homework: null
},
{
    id: "S8",
    week: 8,
    date: "2026-04-02",
    type: "Seminar",
    title: "Шум в биологических системах",
    desc: "Сравнение детерминированных и стохастических моделей.",
    icon: "📊",
    materialLink: "files/seminar8_noise.pdf",
    homework: "Сравнить детерминированную и стохастическую модель реакции"
},

{
    id: "L9",
    week: 9,
    date: "2026-04-07",
    type: "Lecture",
    title: "Химическая стохастика",
    desc: "Мастер-уравнение и алгоритм Гиллеспи.",
    icon: "⚗️",
    materialLink: "files/lecture9_gillespie.pdf",
    homework: null
},
{
    id: "S9",
    week: 9,
    date: "2026-04-09",
    type: "Seminar",
    title: "Стохастическая экспрессия генов",
    desc: "Флуктуации при малом числе молекул.",
    icon: "🧫",
    materialLink: "files/seminar9_gene_noise.pdf",
    homework: "Смоделировать экспрессию гена методом Гиллеспи"
},

{
    id: "L10",
    week: 10,
    date: "2026-04-14",
    type: "Lecture",
    title: "Шум-индуцированные переходы",
    desc: "Редкие события и переключения состояний.",
    icon: "🔀",
    materialLink: "files/lecture10_switching.pdf",
    homework: null
},
{
    id: "S10",
    week: 10,
    date: "2026-04-16",
    type: "Seminar",
    title: "Клеточные переключатели",
    desc: "Биологический смысл стохастических переходов.",
    icon: "🧬",
    materialLink: "files/seminar10_switches.pdf",
    homework: "Проанализировать шум-индуцированное переключение"
},

{
    id: "L11",
    week: 11,
    date: "2026-04-21",
    type: "Lecture",
    title: "Равновесная статистическая физика",
    desc: "Ансамбли, свободная энергия, распределение Больцмана.",
    icon: "🔥",
    materialLink: "files/lecture11_statphys.pdf",
    homework: null
},
{
    id: "S11",
    week: 11,
    date: "2026-04-23",
    type: "Seminar",
    title: "Связывание лиганда",
    desc: "Вероятности состояний и кооперативность.",
    icon: "🧲",
    materialLink: "files/seminar11_binding.pdf",
    homework: "Вычислить распределение состояний системы связывания"
},

{
    id: "L12",
    week: 12,
    date: "2026-04-28",
    type: "Lecture",
    title: "Энтропия и информация",
    desc: "Информация как следствие статистики.",
    icon: "📡",
    materialLink: "files/lecture12_information.pdf",
    homework: null
},
{
    id: "S12",
    week: 12,
    date: "2026-04-30",
    type: "Seminar",
    title: "Нейронное кодирование",
    desc: "Энтропия сигналов и биологический смысл.",
    icon: "🧠",
    materialLink: "files/seminar12_coding.pdf",
    homework: "Оценить энтропию простого нейронного сигнала"
},

{
    id: "L13",
    week: 13,
    date: "2026-05-05",
    type: "Lecture",
    title: "Неравновесная статистическая физика",
    desc: "Потоки, производство энтропии.",
    icon: "♻️",
    materialLink: "files/lecture13_noneq.pdf",
    homework: null
},
{
    id: "S13",
    week: 13,
    date: "2026-05-07",
    type: "Seminar",
    title: "Метаболизм и моторы",
    desc: "Физический смысл неравновесности.",
    icon: "⚙️",
    materialLink: "files/seminar13_motors.pdf",
    homework: "Проанализировать простой неравновесный цикл"
},

{
    id: "L14",
    week: 14,
    date: "2026-05-12",
    type: "Lecture",
    title: "Квантовая механика в биофизике",
    desc: "Операторы, уравнение Шрёдингера, спектры.",
    icon: "⚛️",
    materialLink: "files/lecture14_quantum.pdf",
    homework: null
},
{
    id: "S14",
    week: 14,
    date: "2026-05-14",
    type: "Seminar",
    title: "Энергетические уровни молекул",
    desc: "Квантовые состояния и переходы.",
    icon: "🌈",
    materialLink: "files/seminar14_levels.pdf",
    homework: "Рассчитать уровни энергии простой модели"
},

{
    id: "L15",
    week: 15,
    date: "2026-05-19",
    type: "Lecture",
    title: "Квантовые эффекты в биологии",
    desc: "Фотосинтез, туннелирование, магниторецепция.",
    icon: "🧬",
    materialLink: "files/lecture15_quantum_bio.pdf",
    homework: null
},
{
    id: "S15",
    week: 15,
    date: "2026-05-21",
    type: "Seminar",
    title: "Синтез и границы применимости моделей",
    desc: "Обсуждение и интеграция всего курса.",
    icon: "🧠",
    materialLink: "files/seminar15_summary.pdf",
    homework: "Подготовить краткий обзор одной модели курса"
}

];

const studentData = [
    { name: "HelixHunter", xp: 1250, badge: "🧬" },
    { name: "DockingMaster", xp: 1100, badge: "💊" },
    { name: "GromacsGuru", xp: 950, badge: "⚡" },
];

/* =========================================
   RENDER LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    
    // 1. Render Schedule (Uses ALL items)
    renderSchedule();

    // 2. Render Materials (Filters for items with materialLink)
    renderMaterials();

    // 3. Render Homework (Filters for items with homework)
    renderHomework();

    // 4. Render Dashboard Widgets
    renderNextEvent();
    renderLeaderboard();
});

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            sections.forEach(sec => sec.classList.remove('active-section'));
            document.getElementById(targetId).classList.add('active-section');
        });
    });
}

function renderSchedule() {
    const tbody = document.getElementById('full-schedule-body');
    tbody.innerHTML = courseContent.map(item => `
        <tr>
            <td>Week ${item.week}</td>
            <td style="color: #636e72;">${item.date}</td>
            <td>
                <span class="badge ${item.type === 'Lecture' ? 'badge-orange' : 'badge-green'}">
                    ${item.type}
                </span>
            </td>
            <td><strong>${item.title}</strong></td>
        </tr>
    `).join('');
}

function renderMaterials() {
    const container = document.getElementById('materials-grid-container');
    // Filter: Only show items that actually have a file link
    const materials = courseContent.filter(item => item.materialLink);
    
    container.innerHTML = materials.map(item => `
        <div class="material-card">
            <div class="card-img">
                <span style="font-size: 3rem;">${item.icon}</span>
            </div>
            <div class="card-body">
                <span style="font-size:0.75rem; font-weight:bold; color:#b2bec3;">${item.type.toUpperCase()}</span>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <a href="${item.materialLink}" class="btn-small">Download Materials</a>
            </div>
        </div>
    `).join('');
}

function renderHomework() {
    const container = document.getElementById('homework-list-container');
    // Filter: Only show items that have a homework assignment
    const tasks = courseContent.filter(item => item.homework);

    container.innerHTML = tasks.map(item => `
        <div class="task-row">
            <div class="task-info">
                <strong>Week ${item.week}: ${item.title}</strong>
                <p>${item.homework}</p>
            </div>
            <div class="task-action">
                <span style="font-size:0.8rem; color:#e74c3c;">Due: ${item.date}</span>
            </div>
        </div>
    `).join('');
}

function renderNextEvent() {
    const container = document.getElementById('next-event-display');
    // Simple logic: Find first item where date is "future" (omitted for brevity, taking index 2)
    const event = courseContent[2]; 
    container.innerHTML = `
        <h3>${event.title}</h3>
        <p>📅 ${event.date}</p>
        <p>${event.desc}</p>
    `;
}

function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = studentData.map((s, i) => `
        <tr>
            <td>#${i+1}</td>
            <td>${s.badge} ${s.name}</td>
            <td style="text-align:right"><strong>${s.xp} XP</strong></td>
        </tr>
    `).join('');
}
