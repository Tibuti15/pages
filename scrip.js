
document.getElementById('tourForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('confirmationModal').style.display = 'block';
});


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});


document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('confirmationModal')) {
        document.getElementById('confirmationModal').style.display = 'none';
    }
});