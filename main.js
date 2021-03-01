var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg"
,"My papa1.jpg","My mama1.jpg","Anay mumbai"
 , "https://i.postimg.cc/5ymDKL83/bro.jpg"];
  var names = ["Family Book","Rakesh Sinha", "Rashmi Kiran","Anay Sinha"]; var i = 0;
   function update() {
        i++;
         var numbers_of_family_member_in_array = 3;
          if(i > numbers_of_family_member_in_array )
         { i = 0; } var updatedImage = images[i];
          var updatedName = names[i];
           document.getElementById("family_member_image").src = updatedImage;
            document.getElementById("family_member_name").innerHTML = updatedName;
         }