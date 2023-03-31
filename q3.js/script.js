function verifyWord(event) {
    event.preventDefault();
    let wordInput = document.getElementById('text');
    let wordSplitted = wordInput.value.split('');
    
    let isValidWord = wordInput.value != '';

    if(!isValidWord) return alert('Digite uma palavra!');
    

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelsQuantity = 0;
    wordSplitted.forEach(currentLetter => {
        if (vowels.includes(currentLetter)) vowelsQuantity++;
    });

    alert(`A palavra que você digitou possui ${vowelsQuantity} vogais`);

}