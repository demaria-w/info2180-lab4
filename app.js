//javascript file

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('searchbtn').addEventListener('click', function() {
        const query = document.getElementById("search-bar").value.trim();
        const url = "superheroes.php?query=" + encodeURIComponent(query); // encodeURIComponent used to prevent malicious code being injected

        //Using the fetch() API to open an AJAX request returning the results of superheroes.php
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("result").innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Could not load the results');
            });
    });
});