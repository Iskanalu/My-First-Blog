
// Retrieve blog post data from localStorage
const blogPosts = JSON.parse(localStorage.getItem('myblog')) || [];

const blogPostsContainer = document.getElementById('myblogs');

// Display blog posts in the main content
blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('row');
    postElement.innerHTML = `
      <div class="col-sm-12 blog-card">
      <h5>${post.title}</h5>
       <p class="blog-content">${post.content}</p>
       <p class ="blog-footer">Posted by:${post.user}</p>
     </div>
  `;
    blogPostsContainer.appendChild(postElement);
});

    document.getElementById('sun').addEventListener("click",() => {
    const blogBody = document.getElementById('blog-body');
    const hasDarkMode = blogBody.classList.value.includes("dark-mode"); 
    
    if (hasDarkMode){
        blogBody.classList.remove("dark-mode");
        document.getElementById('sun').innerHTML = '🌘';
    }
    else {
        blogBody.classList.add("dark-mode");
        document.getElementById('sun').innerHTML = '☀️';
    }
    });