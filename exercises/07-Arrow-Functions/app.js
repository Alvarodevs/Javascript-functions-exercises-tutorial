const rapid = (str) => {

    for (var i in str) {
        i = str.toUpperCase();
        return i.replace(/[aeiou]/ig,'');
    }
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));