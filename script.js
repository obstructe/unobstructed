// Fetch the component and insert it into the placeholder div
fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav').innerHTML = data;
    });