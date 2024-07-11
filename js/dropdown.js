// JavaScript for toggling the dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});


// JavaScript for toggling the dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton1');
    const dropdownContent = document.getElementById('dropdownContent1');

    dropdownButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Toggle the display property
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtns = document.querySelectorAll('.dropdown-btn4, .dropdown-btn-info, .dropdown-btn-more');

    dropdownBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        });
    });
});
