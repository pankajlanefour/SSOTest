document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById('ipart-container');
            data.slice(0, 5).forEach(item => {
                let post = document.createElement('div');
                post.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
                container.appendChild(post);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});