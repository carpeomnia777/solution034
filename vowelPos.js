//write a program that checks a string for vowels then outputs an array with the numeric position of the vowel in the string

function vowelIndices(word){
    let arr = [];
    let word1 = word.toLowerCase();
  
    for(let i=0;i<word1.length; i++){
        if('aeiouy'.indexOf(word1[i]) !== -1 ){ // got most of it myself, except still gotta figure out what the doesn't equal negative 1 is about
          arr.push(i+1); 
        }
        
    }
    return arr;
  }