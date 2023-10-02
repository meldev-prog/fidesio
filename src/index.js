fetch('slide.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('slide').innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier HTML :', error);
  });

  require('./slide.js');

fetch('logos.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('logos').innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier HTML :', error);
  });

fetch('articles.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('articles').innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier HTML :', error);
  });

