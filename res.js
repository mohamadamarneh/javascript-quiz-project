let x = sessionStorage.getItem("passQ")
document.getElementById("got").innerHTML=`Your result is : ${x} out of 20`;
if ( x > 9){
  
    document.getElementById("col").style.backgroundColor="white";
    document.getElementById("state").innerHTML="“Congratulation, we will arrange with you the Second interview”";
    document.getElementById("finish").style.backgroundColor="green";
    document.getElementById("show_result").style.backgroundColor="green";
    document.getElementById("image2").style.display='block';
    document.getElementById("image").style.display='none';
    

} else{
    document.getElementById("col").style.backgroundColor="white";
    document.getElementById("state").innerHTML="“Unfortunately, you did not fulfill our requirements, Good Luck”"+"</br>"+"Failed the exam!";
    document.getElementById("finish").style.backgroundColor="red";
    document.getElementById("show_result").style.backgroundColor="red";
    document.getElementById("image").style.display='block';
    document.getElementById("image2").style.display='none';
  
}

// document.getElementById("image").setAttribute("alt", "fail")



function toWel() {
    window.location.href = "finish.html"
     document.getElementById("btn").style.display = "none";
};

function toshow()
{

    window.location.href = "show.html"

}