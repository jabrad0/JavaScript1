function fibonacci_set(max)
    {
        if (max >1)
            {
                var fib_list = [1]; 
                var current_fib = 1;
                while (current_fib < max)
                    {
                        fib_list.push(current_fib);
                        var len = fib_list.length;
                        current_fib = (fib_list[len-1]) + (fib_list[len-2]);
                    }
                return fib_list;
            }
        else
            {
            return [1,1];
            }

    }
    
function even(list_num)
    {
        var evenlist = [];
        var len = list_num.length;
        for (var i = 0; i < len; i++)
            {
                if (list_num[i] % 2 === 0)
                    {
                        evenlist.push(list_num[i]);
                    }
        
            }
        return evenlist;    
    }
    
console.log("This is the fibonacci",fibonacci_set(60));
console.log( "This is the even fibonacci", even(fibonacci_set(60)));

function sum(some_list)
    {
        var sum_even = 0;
        for (var i = 0; i<some_list.length; i++)
            {
                sum_even += some_list[i];
            }
        return sum_even;
}
console.log("This is the sum of evens", sum(even(fibonacci_set(60))));