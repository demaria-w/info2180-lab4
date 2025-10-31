//javascript file

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('searchbtn').addEventListener('click', function() {
        //Using the fetch() API to open an AJAX request returning the results of superheroes.php
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Could not load superheroes.php');
            });
    });
});
