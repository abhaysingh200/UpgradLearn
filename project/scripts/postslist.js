// postslist.js

document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.querySelector('.posts-container');
    const createPostBtn = document.getElementById('createPostBtn');

    const posts = [
        { id: 1, author: 'Author 1', title: 'Post 1', content: 'This is the content of post 1' },
        { id: 2, author: 'Author 2', title: 'Post 2', content: 'This is the content of post 2' },
        { id: 3, author: 'Author 3', title: 'Post 3', content: 'This is the content of post 3' },
        { id: 4, author: 'Author 4', title: 'Post 4', content: 'This is the content of post 4' },
    ];

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <div class="post-header">
                <span class="author">${post.author}</span>
                <i class="fas fa-trash trash-icon" data-id="${post.id}"></i>
                <i class="fas fa-ellipsis-h ellipsis-icon" data-id="${post.id}"></i>
            </div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.content}</p>
        `;
        postsContainer.appendChild(postCard);
    });

    postsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('trash-icon')) {
            const postId = event.target.getAttribute('data-id');
            deletePost(postId);
        } else if (event.target.classList.contains('ellipsis-icon')) {
            const postId = event.target.getAttribute('data-id');
            showModal(postId);
        }
    });

    createPostBtn.addEventListener('click', function () {
        window.location.href = 'createpost.html';
    });

    function deletePost(id) {
        const postCard = document.querySelector(`.trash-icon[data-id="${id}"]`).closest('.post-card');
        postCard.remove();
    }

    function showModal(id) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <p>Would you like to delete this post?</p>
                <button class="btn btn-green" data-id="${id}">Yes</button>
                <button class="btn btn-red">No</button>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';

        modal.querySelector('.btn-green').addEventListener('click', function () {
            deletePost(id);
            modal.remove();
        });

        modal.querySelector('.btn-red').addEventListener('click', function () {
            modal.remove();
        });
    }
});
