document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Calculate the top position of the target section
        const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;

        // Calculate the offset to center the section in the viewport
        const offset = window.innerHeight / 2 - targetSection.offsetHeight / 2;

        // Scroll smoothly to the target section with the calculated offset
        window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth'
        });
    });
});


const rolesElement = document.getElementById('roles');
const roles = [
    "Sinh viên CS",
    "Đam mê với game",
    "Lập trình viên C/C++",
];

let currentRoleIndex = 0;

function typeRole(role) {
    rolesElement.textContent = ''; // Clear the previous role
    let i = 0;

    const typingInterval = setInterval(() => {
        if (i < role.length) {
            rolesElement.textContent += role.charAt(i); // Type one character at a time
            i++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                deleteRole(role); // After typing, delete the role
            }, 2000); // Delay before starting to delete
        }
    }, 50); // Typing speed
}

function deleteRole(role) {
    let i = role.length;

    const deletingInterval = setInterval(() => {
        if (i >= 0) {
            rolesElement.textContent = role.slice(0, i); // Remove one character at a time
            i--;
        } else {
            clearInterval(deletingInterval);
            currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
            setTimeout(() => {
                typeRole(roles[currentRoleIndex]); // Start typing the next role
            }, 500); // Delay before typing the next role
        }
    }, 50); // Deleting speed
}

// Start typing the first role
typeRole(roles[currentRoleIndex]);