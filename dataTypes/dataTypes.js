exports.dataTypes =(argument) => {
    // check if argument is an array
    if(Array.isArray(argument)){
       if (argument.length === 0){
           return undefined;
       }
    }
    // check data type and return appropriate value
    if(typeof argument === "undefined" || argument === null){
        return 'no value';
    }
    if(typeof argument === "boolean"){
        return argument;
    }
    if(typeof argument === "string"){
        return argument.length;
    }

    // compare argument with 100
    if(argument === 100){
        return "equal to 100";
    }
    if(argument < 100){
        return "less than 100";
    }
    if(argument > 100){
        return "more than 100";
    }


    if(Array.isArray(argument)){
        if(argument[2]=== null){
            return undefined;
        }
        else{
            return argument[2];
        }
    }

    // check if argument is a function
    if(typeof argument === "function"){
        return argument(true);
    }

};