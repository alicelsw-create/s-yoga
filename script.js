document.addEventListener("DOMContentLoaded", function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmParams.forEach(param => {
        if (urlParams.has(param)) {
            sessionStorage.setItem(param, urlParams.get(param));
            console.log(`Sparade UTM-parameter: ${param} = ${urlParams.get(param)}`);
        }
    });

    const forms = document.querySelectorAll('.lead-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const formName = form.getAttribute('data-form-name') || 'okant_formular';
            console.log(`Formulär skickat! Typ: ${formName}. Skickar användaren till tack-sidan...`);
        });
    });

    console.log("Lumina Yoga script.js laddat och redo för analysmätning!");
});