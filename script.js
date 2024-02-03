const images = [
    '/img/1.jpg', '/img/2.jpg',
    '/img/3.jpg', '/img/4.jpg',
    '/img/5.jpg', '/img/6.jpg',
    '/img/7.jpg', '/img/8.jpg',
    '/img/9.jpg', '/img/10.jpg',
    '/img/11.jpg', '/img/12.jpg',
    '/img/13.jpg', '/img/14.jpg',
    '/img/15.jpg', '/img/16.jpg',
    '/img/17.jpg', '/img/18.jpg',
    '/img/19.jpg', '/img/20.jpg',
    '/img/21.jpg', '/img/22.jpg',
    '/img/23.jpg', '/img/24.jpg',
];

function render() {
    const container = document.getElementById("container");
    
    // Überprüfen, ob der Container existiert
    if (!container) {
        console.error("Container not found!");
        return;
    }
    
    // HTML-String für die Bilder
    let html = "";
    for (let i = 0; i < images.length; i++) {
        html += `<img src="${images[i]}" alt="Image ${i+1}">`;
    }
    
    // Bilder in den Container einfügen
    container.innerHTML = html;
}