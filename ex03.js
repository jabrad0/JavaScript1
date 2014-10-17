var votesToGoEatCake = [true, true, true, false, true];
console.log("This is votesToGoEatCake", votesToGoEatCake)
dict = {};
var j = 0;
for (var i = 0; i < votesToGoEatCake.length; i++)
    { 
        word = votesToGoEatCake[i];
        if (word === votesToGoEatCake[i])
            {
                dict[votesToGoEatCake[i]] = j++;
            }
        else
            {
                dict[votesToGoEatCake[i]] = 1;
            }
    }
    
console.log("This is the dictionary:", dict);
console.log("This is the common elements", dict);