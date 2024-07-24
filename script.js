document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Store form values in both session storage and local storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Reload the page
    window.location.reload();
});
