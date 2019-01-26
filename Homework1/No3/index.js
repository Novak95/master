function isPanagram(sentence, letters){
    for (let i = 0; i < letters.length; i++) {
        if (sentence.indexOf(letters[i]) < 0) {
            return false;
        } else {
            return true;
        }

    }
}

console.log(isPanagram("hello world", "lowdail"));