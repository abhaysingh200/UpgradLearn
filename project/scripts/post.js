// post.js

document.addEventListener('DOMContentLoaded', function () {
    const editBtn = document.getElementById('editBtn');
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    const likeBtn = document.getElementById('likeBtn');
    const likeStatus = document.getElementById('likeStatus');
    const commentInput = document.getElementById('commentInput');
    const commentBtn = document.getElementById('commentBtn');
    const commentsList = document.getElementById('commentsList');

    let likes = 0;
    let isEditable = false;

    editBtn.addEventListener('click', function () {
        if (!isEditable) {
            postTitle.contentEditable = "true";
            postContent.contentEditable = "true";
            postTitle.classList.add('editable');
            postContent.classList.add('editable');
            editBtn.innerHTML = 'Save <i class="fas fa-save"></i>';
            isEditable = true;
        } else {
            postTitle.contentEditable = "false";
            postContent.contentEditable = "false";
            postTitle.classList.remove('editable');
            postContent.classList.remove('editable');
            editBtn.innerHTML = 'Edit <i class="fas fa-edit"></i>';
            isEditable = false;
        }
    });

    likeBtn.addEventListener('click', function () {
        likes += 1;
        likeStatus.textContent = `${likes} ${likes === 1 ? 'person likes' : 'people like'} this!`;
        likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
    });

    commentBtn.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const comment = document.createElement('div');
            comment.classList.add('comment');
            comment.textContent = commentText;
            commentsList.prepend(comment);
            commentInput.value = '';
        }
    });
});
