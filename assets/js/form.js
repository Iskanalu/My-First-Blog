const messageDiv = document.getElementById('message');
const submitButton = document.getElementById('submit-one');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const user = document.getElementById('user-one').value; 
    const title = document.getElementById('title-one').value;    
    const content = document.getElementById('content').value;
    
    const blogObject = {user,title,content};
    const localStorageContent =  window.localStorage.getItem('myblog');
    const blogsArray = JSON.parse(localStorageContent) || [];

    if (user === '' || title === '' || content === '') {
        messageDiv.innerText = 'Please complete the form before submitting.';
    } else {
        // Form is valid, you can proceed with form submission or other actions
        messageDiv.innerText = ''; // Clear any previous messages
        blogsArray.push(blogObject);
        window.localStorage.setItem("myblog",JSON.stringify(blogsArray));
        document.getElementById("user-one").value = "";
        document.getElementById("title-one").value = "";
        document.getElementById("content").value = "";
       
        // Redirect to another HTML page
        window.location.href = "./blog.html";      

    }

});
   