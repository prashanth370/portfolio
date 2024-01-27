// // Add interactivity if needed
// // For example, smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
    

// Add interactivity if needed
// For example, smooth scrolling and animations

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smooth scrolling
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Add animation class to the target section after a slight delay
        setTimeout(() => {
            document.querySelector(this.getAttribute('href')).classList.add('show');
        }, 300);
    });
});
