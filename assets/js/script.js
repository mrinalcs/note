// MathJax configuration
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
  },
};

// Check for LaTeX in the body before loading MathJax script
if (document.body.innerHTML.match(/(\$.*?\$|\\\(.*?\\\)|\$\$.*?\$\$|\\\[.*?\\\]|\begin{.*?})/)) {
  // Load MathJax script from CDN
  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  })();
}
