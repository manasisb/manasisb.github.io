
document.getElementById("apply").addEventListener("click",function(){
        var x = document.getElementById("firstname").value;
        var y = document.getElementById("emailid").value;
        var w = document.getElementById("context").value;
        var z = document.getElementById("skill").value;
        var content =  `Thanks for Signing Up!!!      ` + `FirstName: ${x} ,`+ `EmailID: ${y} ,` + `ExperinceType: ${z} ,` + `Comment: ${w} `;
        document.getElementById("meminfo").innerHTML = content;
    });
             
 function removeElement(){
     var d = document.querySelector(".showDialog")
     d.style.display = "none";
    }


