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
    title: "ОДУ в биофизике: базовая динамика",
    desc: "Системы ОДУ, фазовое пространство, стационарные состояния, устойчивость.",
    icon: "📈",
    image: "images/materials/lecture-1.png",
    isVisible: true,
    materialLink: "files/lecture1_ode_basics.pdf",
    homework: null
},
{
    id: "S1",
    week: 1,
    date: "2026-02-12",
    type: "Seminar",
    title: "Биохимическая кинетика",
    desc: "Модели масс-действия, линейная устойчивость, якобиан.",
    icon: "🧪",
    materialLink: "files/seminar1_kinetics.pdf",
    homework: "Записать и проанализировать систему ОДУ для простой реакции"
},

{
    id: "L2",
    week: 2,
    date: "2026-02-17",
    type: "Lecture",
    title: "Нелинейные ОДУ и сети",
    desc: "Нелинейность, бифуркации, сетевые модели как матричные ОДУ.",
    icon: "🔁",
    materialLink: "files/lecture2_nonlinear_networks.pdf",
    homework: null
},
{
    id: "S2",
    week: 2,
    date: "2026-02-19",
    type: "Seminar",
    title: "Нейронные и генные сети",
    desc: "Фазовые портреты, спектр якобиана, устойчивость.",
    icon: "🧠",
    materialLink: "files/seminar2_networks.pdf",
    homework: "Исследовать устойчивость простой сетевой модели"
},

{
    id: "L3",
    week: 3,
    date: "2026-02-24",
    type: "Lecture",
    title: "Диффузия и транспорт",
    desc: "Уравнение диффузии, оператор Лапласа, краевые условия.",
    icon: "🌊",
    materialLink: "files/lecture3_diffusion.pdf",
    homework: null
},
{
    id: "S3",
    week: 3,
    date: "2026-02-26",
    type: "Seminar",
    title: "Решения уравнения диффузии",
    desc: "Аналитические решения и физический смысл.",
    icon: "📐",
    materialLink: "files/seminar3_diffusion.pdf",
    homework: "Решить уравнение диффузии в 1D"
},

{
    id: "L4",
    week: 4,
    date: "2026-03-03",
    type: "Lecture",
    title: "Реакционно-диффузионные системы",
    desc: "Связь реакции и диффузии, условия неустойчивости.",
    icon: "🎨",
    materialLink: "files/lecture4_reaction_diffusion.pdf",
    homework: null
},
{
    id: "S4",
    week: 4,
    date: "2026-03-05",
    type: "Seminar",
    title: "Морфогенез и паттерны",
    desc: "Спектр Лапласиана и пространственные моды.",
    icon: "🦓",
    materialLink: "files/seminar4_turing.pdf",
    homework: "Вывести условия возникновения паттерна Тьюринга"
},

{
    id: "L5",
    week: 5,
    date: "2026-03-10",
    type: "Lecture",
    title: "Пространственные нейронные модели",
    desc: "Кабельное уравнение, геометрия нейрона.",
    icon: "⚡",
    materialLink: "files/lecture5_cable.pdf",
    homework: null
},
{
    id: "S5",
    week: 5,
    date: "2026-03-12",
    type: "Seminar",
    title: "Дендриты и аксоны",
    desc: "Влияние геометрии на распространение сигнала.",
    icon: "🧬",
    materialLink: "files/seminar5_neuron_geometry.pdf",
    homework: "Оценить затухание сигнала вдоль дендрита"
},

{
    id: "L6",
    week: 6,
    date: "2026-03-17",
    type: "Lecture",
    title: "Стохастические процессы в биофизике",
    desc: "Шум, SDE, траектории и распределения.",
    icon: "🎲",
    materialLink: "files/lecture6_stochastic.pdf",
    homework: null
},
{
    id: "S6",
    week: 6,
    date: "2026-03-19",
    type: "Seminar",
    title: "Шум в клетке",
    desc: "Сравнение детерминированных и стохастических моделей.",
    icon: "📊",
    materialLink: "files/seminar6_noise.pdf",
    homework: "Сравнить детерминированную и стохастическую модель"
},

{
    id: "L7",
    week: 7,
    date: "2026-03-24",
    type: "Lecture",
    title: "Химическая стохастика",
    desc: "Мастер-уравнение и алгоритм Гиллеспи.",
    icon: "⚗️",
    materialLink: "files/lecture7_gillespie.pdf",
    homework: null
},
{
    id: "S7",
    week: 7,
    date: "2026-03-26",
    type: "Seminar",
    title: "Стохастическая экспрессия генов",
    desc: "Флуктуации при малом числе молекул.",
    icon: "🧫",
    materialLink: "files/seminar7_gene_noise.pdf",
    homework: "Смоделировать экспрессию гена методом Гиллеспи"
},

{
    id: "L8",
    week: 8,
    date: "2026-03-31",
    type: "Lecture",
    title: "Равновесная статистическая физика",
    desc: "Ансамбли, свободная энергия, распределение Больцмана.",
    icon: "🔥",
    materialLink: "files/lecture8_statphys_eq.pdf",
    homework: null
},
{
    id: "S8",
    week: 8,
    date: "2026-04-02",
    type: "Seminar",
    title: "Связывание и кооперативность",
    desc: "Вероятности состояний и биофизический смысл.",
    icon: "🧲",
    materialLink: "files/seminar8_binding.pdf",
    homework: "Вычислить распределение состояний системы"
},

{
    id: "L9",
    week: 9,
    date: "2026-04-07",
    type: "Lecture",
    title: "Энтропия и информация",
    desc: "Информация как следствие статистической физики.",
    icon: "📡",
    materialLink: "files/lecture9_information.pdf",
    homework: null
},
{
    id: "S9",
    week: 9,
    date: "2026-04-09",
    type: "Seminar",
    title: "Информационные меры в биофизике",
    desc: "Энтропия сигналов и нейронное кодирование.",
    icon: "🧠",
    materialLink: "files/seminar9_information.pdf",
    homework: "Оценить энтропию простого сигнала"
},

{
    id: "L10",
    week: 10,
    date: "2026-04-14",
    type: "Lecture",
    title: "Неравновесная статистическая физика",
    desc: "Потоки, производство энтропии.",
    icon: "♻️",
    materialLink: "files/lecture10_noneq.pdf",
    homework: null
},
{
    id: "S10",
    week: 10,
    date: "2026-04-16",
    type: "Seminar",
    title: "Молекулярные моторы",
    desc: "Физический смысл неравновесности.",
    icon: "⚙️",
    materialLink: "files/seminar10_motors.pdf",
    homework: "Разобрать простой неравновесный цикл"
},

{
    id: "L11",
    week: 11,
    date: "2026-04-21",
    type: "Lecture",
    title: "Геометрия биологических структур",
    desc: "Кривизна, минимальные поверхности, мембраны.",
    icon: "📐",
    materialLink: "files/lecture11_geometry.pdf",
    homework: null
},
{
    id: "S11",
    week: 11,
    date: "2026-04-23",
    type: "Seminar",
    title: "Геометрия мембран",
    desc: "Модель Хельфриха и энергетический функционал.",
    icon: "🫧",
    materialLink: "files/seminar11_membranes.pdf",
    homework: "Проанализировать энергию мембраны заданной формы"
},

{
    id: "L12",
    week: 12,
    date: "2026-04-28",
    type: "Lecture",
    title: "Механика биологических сред",
    desc: "Упругость, вязкость, активные среды.",
    icon: "🏗️",
    materialLink: "files/lecture12_mechanics.pdf",
    homework: null
},
{
    id: "S12",
    week: 12,
    date: "2026-04-30",
    type: "Seminar",
    title: "Цитоскелет и ткани",
    desc: "Связь механики и функции.",
    icon: "🧵",
    materialLink: "files/seminar12_cytoskeleton.pdf",
    homework: "Оценить механический отклик простой модели"
},

{
    id: "L13",
    week: 13,
    date: "2026-05-05",
    type: "Lecture",
    title: "Квантовая механика в биофизике",
    desc: "Операторы, уравнение Шрёдингера, спектры.",
    icon: "⚛️",
    materialLink: "files/lecture13_quantum.pdf",
    homework: null
},
{
    id: "S13",
    week: 13,
    date: "2026-05-07",
    type: "Seminar",
    title: "Квантовые уровни молекул",
    desc: "Энергетические уровни и переходы.",
    icon: "🌈",
    materialLink: "files/seminar13_levels.pdf",
    homework: "Рассчитать уровни энергии простой модели"
},

{
    id: "L14",
    week: 14,
    date: "2026-05-12",
    type: "Lecture",
    title: "Квантовая статистика",
    desc: "Квантовые ансамбли и распределения.",
    icon: "📊",
    materialLink: "files/lecture14_quantum_stat.pdf",
    homework: null
},
{
    id: "S14",
    week: 14,
    date: "2026-05-14",
    type: "Seminar",
    title: "Фотопроцессы в биологии",
    desc: "Поглощение и релаксация.",
    icon: "🌞",
    materialLink: "files/seminar14_photobio.pdf",
    homework: "Разобрать фотопереход в простой системе"
},

{
    id: "L15",
    week: 15,
    date: "2026-05-19",
    type: "Lecture",
    title: "Квантовые эффекты в живых системах",
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
    title: "Синтез курса и границы моделей",
    desc: "Интеграция всех подходов.",
    icon: "🧠",
    materialLink: "files/seminar15_summary.pdf",
    homework: "Подготовить обзор одной модели курса"
}


];



/* =========================================
   RENDER LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderSchedule();
    renderMaterials(); // Renders images based on isVisible flag
    renderHomework();
    renderNextEvent();
    renderLeaderboard();
});

// [Navigation function remains the same as before]
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

// 1. Render Materials (Images + Visibility Check)
function renderMaterials() {
    const container = document.getElementById('materials-grid-container');
    
    // Filter: Only show items where isVisible is TRUE
    const visibleMaterials = courseContent.filter(item => item.isVisible);

    if (visibleMaterials.length === 0) {
        container.innerHTML = "<p>No materials available yet.</p>";
        return;
    }

    container.innerHTML = visibleMaterials.map(item => `
        <div class="material-card">
            <!-- IMAGE RENDERER -->
            <div class="card-img" style="background-image: url('${item.image}');">
                <!-- Fallback text if image fails to load or is purely decorative -->
                <span class="img-overlay">${item.type}</span>
            </div>
            
            <div class="card-body">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <a href="${item.materialLink}" class="btn-small" target="_blank">Download Files</a>
            </div>
        </div>
    `).join('');
}

// 2. Render Schedule (Shows ALL items regardless of visibility)
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
            <td>
                <strong>${item.title}</strong>
                ${!item.isVisible ? '<span style="font-size:0.8em; color:#999; margin-left:5px;">(Coming Soon)</span>' : ''}
            </td>
        </tr>
    `).join('');
}

// [Homework, Leaderboard, and NextEvent functions remain same as before]
function renderHomework() {
    const container = document.getElementById('homework-list-container');
    const tasks = courseContent.filter(item => item.homework);
    container.innerHTML = tasks.map(item => `
        <div class="task-row">
            <div class="task-info">
                <strong>Week ${item.week}: ${item.title}</strong>
                <p>${item.homework}</p>
            </div>
            <div class="task-action"><span style="font-size:0.8rem; color:#e74c3c;">Due: ${item.date}</span></div>
        </div>
    `).join('');
}
function renderNextEvent() {
    const container = document.getElementById('next-event-display');
    const event = courseContent.find(i => i.isVisible) || courseContent[0]; 
    container.innerHTML = `<h3>${event.title}</h3><p>📅 ${event.date}</p><p>${event.desc}</p>`;
}
function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = studentData.map((s, i) => `<tr><td>#${i+1}</td><td>${s.badge} ${s.name}</td><td style="text-align:right"><strong>${s.xp} XP</strong></td></tr>`).join('');
}