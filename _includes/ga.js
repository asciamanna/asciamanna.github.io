{% if site.google-tracking-id %}

  <!-- Google Tracking Id Start -->

function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}


loadScriptAsync('https://www.googletagmanager.com/gtag/js?id={{ site.google-tracking-id }}', function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '{{ site.google-tracking-id }}', { 'anonymize_ip': true });
})

  <!-- Google Tracking Id End -->
{% endif %}
