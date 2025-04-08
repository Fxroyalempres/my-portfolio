document.addEventListener('DOMContentLoaded', () => {
    // Fetch projects from the JSON file (our "database")
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById('project-list');
            projects.forEach(project => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${project.name}</strong>: ${project.description} <a href="${project.link}" target="_blank">View on GitHub</a>`;
                projectList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = '<li>Sorry, couldn’t load projects right now.</li>';
        });
});

successMessage.classList.add("show");

clicksound.volume = 0.5; // 50% volume

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
