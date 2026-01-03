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
    id: "L3",
    week: 3,
    date: "2026-02-24",
    type: "Lecture",
    title: "ЧДУ:Диффузия и транспорт",
    desc: "Уравнение диффузии, оператор Лапласа, краевые условия.",
    icon: "🌊",
    materialLink: "files/lecture3_diffusion.pdf",
    homework: null
},

{
    id: "L4",
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
    id: "L5",
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
    id: "L6",
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
    id: "L7",
    week: 12,
    date: "2026-04-28",
    type: "Lecture",
    title: "Механика биологических сред и структур",
    desc: "Упругость, вязкость, активные среды.",
    icon: "🏗️",
    materialLink: "files/lecture12_mechanics.pdf",
    homework: null
},
{
    id: "L8",
    week: 12,
    date: "2026-04-28",
    type: "Lecture",
    title: "Модели полимеров в биофизике",
    desc: "Упругость, вязкость, активные среды.",
    icon: "🏗️",
    materialLink: "files/lecture12_mechanics.pdf",
    homework: null
},
{
    id: "L9",
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
    id: "L10",
    week: 8,
    date: "2026-03-31",
    type: "Lecture",
    title: "Неравновесная статистическая физика",
    desc: "Ансамбли, свободная энергия, распределение Больцмана.",
    icon: "🔥",
    materialLink: "files/lecture8_statphys_eq.pdf",
    homework: null
},
{
    id: "L11",
    week: 8,
    date: "2026-03-31",
    type: "Lecture",
    title: "Энергетические ландашафты биомолекул",
    desc: "Ансамбли, свободная энергия, распределение Больцмана.",
    icon: "🔥",
    materialLink: "files/lecture8_statphys_eq.pdf",
    homework: null
},
{
    id: "L12",
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
    id: "L13",
    week: 15,
    date: "2026-05-19",
    type: "Lecture",
    title: "Квантовые эффекты в живых системах",
    desc: "Фотосинтез, туннелирование, магниторецепция.",
    icon: "🧬",
    materialLink: "files/lecture15_quantum_bio.pdf",
    homework: null
},
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

document.addEventListener('DOMContentLoaded', () => {
    // ... existing code (setupNavigation, renderSchedule и т.д.) ...
    
    // Mobile menu toggle
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    // Toggle sidebar
    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });
    
    // Close sidebar when clicking on overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
    
    // Close sidebar when clicking on nav items (on mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
        });
    });
    
    // Close sidebar when window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    });
});