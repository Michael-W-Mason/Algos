//No Pairs Allowed
//given an array of words, return an array containing the number of changes needed to ensure there are no pairs within each word

//example:
// input = [ 'ab','aab','abb', 'abab','abaaaba' ]
//output: [ 0, 1, 1, 0, 1 ]
//explanation
// ab - no changes needed
// aab - one change needed to the 'aa'
// abb - one change needed to the 'bb'
// abab - no change needed
// abaaaba - one change needed to the midde 'a' of the 'aaa' sequence

function noPairs(words){
    let result = [];
    for(let word of words){
        let numChanges = 0;
        for(let i = 0; i < word.length; i++){
            let letter = word[i];
            if(i == 0){
                word[i+1] == letter ? numChanges++ : numChanges;
            }
            else if (i == word.length - 1){
                word[i-1] == letter ? numChanges++ : numChanges;
            }
            else{
                word[i+1] == letter && word[i-1] == letter ? numChanges++ : numChanges;
            }
        }
        result.push(numChanges);
    }
    console.log(result);
    return result;
}

noPairs([ 'ab','aab','abb', 'abab','abaaabaa' ]);