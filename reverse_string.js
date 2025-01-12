//function to reverse string recursivly
function fun_reverse(str){
    let rev_str="";

   for (let i = str.length-1; i >=0; i--) {

    rev_str=rev_str+str[i];
    
   }

   return rev_str;
}

console.log(fun_reverse("vivek"))