
// Retrieve blog post data from localStorage
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogPostsContainer = document.getElementById('blog-posts');

// Display blog posts in the main content
blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
    `;
    blogPostsContainer.appendChild(postElement);
});