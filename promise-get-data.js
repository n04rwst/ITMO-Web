document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

    let preloader = document.querySelector('.preloader');
    let comments = document.querySelector('.comments');
    let isFiltered = false;

    const showPreloader = function() {
        preloader.style.display = 'block';
    };

    const hidePreloader = function() {
        preloader.style.display = 'none';
    };

    const showError = function (message) {
        comments.innerHTML = `<div class="error">⚠ ${message}</div>`;
    };

    const renderData = function (items) {
        comments.innerHTML = ''
        items.forEach(item => {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');

            newComment.innerHTML = `
                <h2>${item.name}</h2>
                <p><strong>Email:</strong> ${item.email}</p>
                <p>${item.body}</p>
            `;

            comments.appendChild(newComment);
        });
    };

    const fetchData = async function() {
        showPreloader();
        await wait(2000)
        try {
            const filter = isFiltered ? '?id_gte=100' : '?id_lte=200';
            const response = await fetch(`${apiUrl}${filter}`);
            const data = await response.json();
            hidePreloader();
            renderData(data);
        } catch (error) {
            hidePreloader();
            showError(`${error}. Please, try again later.`);
            console.error(error);
        }
    };

    document.querySelector('button').addEventListener('click', function () {
        isFiltered = !isFiltered;
        fetchData();
    });
})

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}