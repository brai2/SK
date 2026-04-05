document.addEventListener('DOMContentLoaded', () => {
  // Ticket choice toggle in event detail
  const ticketTypes = document.querySelectorAll('.ticket-type');
  
  if (ticketTypes.length > 0) {
    ticketTypes.forEach(ticket => {
      ticket.addEventListener('click', () => {
        // Remove active class from all
        ticketTypes.forEach(t => t.classList.remove('active'));
        // Add active class to clicked
        ticket.classList.add('active');
        
        // Optionally update the price depending on the selection
        const priceDisplay = document.querySelector('.ticket-price');
        if (priceDisplay) {
          if (ticket.classList.contains('type-vip')) {
            priceDisplay.innerHTML = '3.500.000 <span>VND</span>';
          } else {
            priceDisplay.innerHTML = '1.250.000 <span>VND</span>';
          }
        }
      });
    });
  }

  // Basic smooth reveal for scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});
