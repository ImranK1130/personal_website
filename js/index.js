const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Project Modal Interactivity
const learnMoreBtns = document.querySelectorAll('.project-learnmore');
const modals = document.querySelectorAll('.project-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const project = btn.getAttribute('data-project');
        const modal = document.getElementById(`modal-${project}`);
        if (modal) {
            modals.forEach(m => m.classList.remove('active'));
            modal.classList.add('active');
        }
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.project-modal').classList.remove('active');
    });
});

// Close modal when clicking outside modal content
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
