//K-th Occurence Queries
// Problem Statement: Given an array of integers, report the answers to multiple queries based on the elements of the array with respect to a given integer.


// More formally, an array of integers an integer X, and a few queries are available. Each query is described by a single integer K. The task is to find the index of the Kth occurrence of the integer X in the array for each of the queries. Report -1 as the answer to the corresponding query if the Kth occurrence does not exist.

//EXAMPLE:
// queries: [100, 4, 2]
// array: [1, 2, 20, 8, 8, 1, 2, 5, 8, 0]
// X:  8

// OUTPUT:
// [-1, -1, 5]

// Assumung arrays start at 1 for this problem
function kOccurance(queries, array, X){
    let result = [];
    let hash = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == X){
            hash.push(i);
        }
    }
    for(let query of queries){
        if(query > hash.length){
            result.push(-1);
        }
        else{
            result.push(hash[query - 1]);
        }
    }
    console.log(hash);
    console.log(result);
    return result;
}

kOccurance([100, 4, 2], [1, 2, 20, 8, 8, 1, 2, 5, 8, 0], 8)