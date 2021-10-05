var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","baba", "pappa", "Siddhesh", "Sister", "Mummy"];
var i = 0;

function update()
 
{  
  
  if(i == 6)
  {
    i=0;

  }
  
  
  document.getElementById("family_member_name").innerHTML = names[i];
  document.getElementById("family_member_image").src = images[i];
  i++;
 
 
}
