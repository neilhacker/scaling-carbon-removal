function min_utilisation(
    total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100
    ) {
    var num_array = [
        total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100    ]
    var min_val = Math.min(
        total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100
        )

    const index = num_array.indexOf(min_val);

    return (index-1)*5;
    // (index+1)*5 is what we actually want for the smallest value but I'm using this to map out zones and I want the zone to be set to 10% lower utilisation
    // than is actually smallest 
}

function min_cost(
    total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100
    ) {
        var num_array = [
            total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100    ]
        var min_val = Math.min(
            total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100
            )
    
        const index = num_array.indexOf(min_val);


    // similar to the above this is going to give us the cost 10% utilisation lower than the actual min cost 
    return num_array[index-1];
}

function min_cost_high(
    total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100
    ) {
        var num_array = [
            total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100    ]
        var min_val = Math.min(
            total_5, total_10,total_15,total_20,total_25,total_30,total_35,total_40,total_45,total_50,total_55,total_60,total_65,total_70,total_75,  total_80,  total_85,  total_90,  total_95,  total_100
            )
    
        const index = num_array.indexOf(min_val);
        // this is so we can't go out of bounds for our index
        if(index>17){index=17} 


    return num_array[index+2];
}