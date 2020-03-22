




var input = prompt('Enter a word')

if (input === input.toUpperCase()) {
    console.log('Shouting')
} else if (input === input.toLowerCase()) {
    console.log('Whispering')
}else {
    console.log('Talking Normal')
}