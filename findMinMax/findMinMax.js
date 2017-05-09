exports.findMinMax = (myArray)=>{
    //create a new array to save the min and mxs
    let newArray = [];
    //use the reduce function to check each element in the array and return the maximum
    let max = myArray.reduce(function(element1,element2){
       if( element1 > element2){
           return element1;
       }
        else{
           return element2;
       }

    });
    // add the maximum to the end of the new array
    newArray.push(max);

    //use the reduce function to check each element int the array and return the minimum
    let min = myArray.reduce(function(element1,element2){
        if( element1 < element2){
            return element1;
        }
        else{
            return element2;
        }

    });
    //add the minimum to the beginning of the array
    newArray.unshift(min);
    //check if the minimum and maximum are equal
    if(min === max){
        return [min];
    }

    return newArray;

};