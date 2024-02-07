function array(arr1) {
    arr1 = [1, 2, 3, "a", 4, "b", 5, "c"];
    console.log(arr1);
    result = 0;
    for (let i=0; i<arr1.length; i=i+1){
        if (isNaN(arr1[i])) {

        } else{
            result = result + i;
    }
    console.log(`Answer: ${result}`);
}
}

if (isNaN(array())) {

} else{
    array
}