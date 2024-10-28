(function() {
  let logId=0;
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      console.log(mutation);
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        console.log('Child nodes added:', mutation.target);
        console.log('Restoring scroll position');

        const scrollPosition = sessionStorage.getItem('scrollPosition');
        console.log('1. Current scroll position: ', window.scrollY);

        if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition));
          console.log('2. Current scroll position: ', parseInt(scrollPosition));

          sessionStorage.removeItem('scrollPosition'); // Clear after restoring
          observer.disconnect();
        }
      }
    }
  });
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.dataset.automationId === 'jobTitle' && target.dataset.uxiElementId === 'jobItem') {
      console.log(logId++,'. Clicked link:', target.href);
      sessionStorage.setItem('scrollPosition', window.scrollY);

      // Remove existing observer (optional)
      observer.disconnect();
    
      // Recreate targetDiv and observer
      const targetDiv = document.querySelectorAll('#mainContent > div > div.css-uvpbop > div')[0];
      if (targetDiv) {
        const config = { childList: true };
          observer.observe(targetDiv, config);
      } else {
        console.warn("Target div not found.");
      }
    }
  });
})();
