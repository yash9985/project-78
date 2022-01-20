var images = ["https://images-na.ssl-images-amazon.com/images/I/81jCG3IrHeL.jpg","https://i.pinimg.com/originals/5a/21/ae/5a21aecb2f9dcea341c6fe17f62fb156.jpg","https://i.pinimg.com/originals/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg","https://i.pinimg.com/originals/6d/41/6f/6d416f0239f360a9136f81d11c8ecc5b.jpg","https://www.pngfind.com/pngs/m/174-1747073_uncle-bob-cartoon-hd-png-download.png","https://t4.ftcdn.net/jpg/02/17/60/09/360_F_217600932_yXxSLz3fq5YMhOpGxkrmChPQAa2yHpY6.jpg","https://cdn1.vectorstock.com/i/1000x1000/95/10/big-brother-doing-piggyback-ride-younger-brother-vector-21559510.jpg","https://image.shutterstock.com/image-vector/cartoon-little-kids-holding-hand-260nw-279237152.jpg"];
var names = ["Family Book","Yash Reddy","Prema Reddy","Naveen Reddy","Uncle Venkatesh","Aunt Usha","Anirudh","Charu"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = ["https://images-na.ssl-images-amazon.com/images/I/81jCG3IrHeL.jpg","https://i.pinimg.com/originals/5a/21/ae/5a21aecb2f9dcea341c6fe17f62fb156.jpg","https://i.pinimg.com/originals/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg","https://i.pinimg.com/originals/6d/41/6f/6d416f0239f360a9136f81d11c8ecc5b.jpg","https://www.pngfind.com/pngs/m/174-1747073_uncle-bob-cartoon-hd-png-download.png","https://t4.ftcdn.net/jpg/02/17/60/09/360_F_217600932_yXxSLz3fq5YMhOpGxkrmChPQAa2yHpY6.jpg","https://cdn1.vectorstock.com/i/1000x1000/95/10/big-brother-doing-piggyback-ride-younger-brother-vector-21559510.jpg","https://image.shutterstock.com/image-vector/cartoon-little-kids-holding-hand-260nw-279237152.jpg"];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Family Book","Yash Reddy","Prema Reddy","Naveen Reddy","Uncle Venkatesh","Aunt Usha","Anirudh","Charu"] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
