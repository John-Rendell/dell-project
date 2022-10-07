function changephoto(){ //for changing img
    let image = document.getElementById('dp')

    if(image.src.match('Images/profile.jpg')){
        image.src = 'Images/photo1.jpg'
    } 

    else if(image.src.match('Images/photo1.jpg')){
        image.src = 'Images/photo2.jpg'
    } 

    else if(image.src.match('Images/photo2.jpg')){
        image.src = 'Images/profile.jpg'
    } 
}
setInterval(changephoto, 1500);

function hoverImage(){ //for hover
    document.getElementById('when-hover-img').style.display = "block";
}

function nothoverImage(){ //for not hover
    document.getElementById('when-hover-img').style.display = "none";
}