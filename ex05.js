alert("Worked");

var getMelon = document.getElementById("get-melon");

console.log(getMelon);

getMelon.addEventListener("click", function(e){
    e.preventDefault();
    alert("GetMelonWorked");
    var getMelonImage = document.getElementById("img")
    alert("GetMelonImage Worked");
    getMelonImage.setAttribute("src", "http:/s/www.whataboutwatermelon.com/wp-content/uploads/2012/06/melon-4.jpg");

})