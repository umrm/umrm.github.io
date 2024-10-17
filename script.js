function toggleMenu() {
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentPage  =1;
const itemsPerPage = 3;

function showPage(page) {
    const allProjects = document.querySelectorAll('.project-content-container');
    const totalProjects = allProjects.length;

    allProjects.forEach((project, index) => {
        project.classList.add('hidden');

        if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
            project.classList.remove('hidden');
        }
    });
    document.getElementById('prev').style.display = page === 1 ? 'none' : 'inline';
    document.getElementById('next').style.display = page * itemsPerPage >= totalProjects ? 'none' : 'inline';
}

function scrollToProjects() {
    const projectSection = document.getElementById('projects'); // Get the project section
    projectSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the project section
}

function nextPage() {
    currentPage++;
    showPage(currentPage);
    scrollToProjects();
}

function prevPage() {
    currentPage--;
    showPage(currentPage);
    scrollToProjects();
}

showPage(currentPage);