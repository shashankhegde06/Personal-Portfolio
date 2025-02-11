// Scroll Animation for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the item is visible
    }
);

timelineItems.forEach((item) => {
    observer.observe(item);
});