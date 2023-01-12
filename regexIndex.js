//Note: regex is case sensitive
// let message = 'Hello, world'

// let lowerHello = /hello/
// let upperHello = /Hello/

// console.log("lowerHello: ",lowerHello.test(message))
// console.log("upperHello: ", upperHello.test(message))

//Note: to bypass or ignore the case sensitive, add an 'i' flag behind the regex
// let message = 'Hello, world'

// let lowerHello = /hello/i
// let upperHello = /Hello/i

// console.log("lowerHello: ",lowerHello.test(message))
// console.log("upperHello: ", upperHello.test(message))

//Note: extracting match in string
// let sampleString ="Extract the word 'coding' from this string."
// let codingRegex = /coding/; 
// console.log(sampleString.match(codingRegex))

//Note: extracting more than one matches in string
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/ig;
// let result = twinkleStar.match(starRegex); 
// console.log("%c 🐮: result ", "font-size:16px;background-color:#e02064;color:white;", result)

//Note: Match Anything with Wildcard Period
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; 
// let result = unRegex.test(exampleStr);
// console.log("%c 🗝️: result ", "font-size:16px;background-color:#5a6780;color:white;", result)

//Note: Match Single Character with Multiple Possibilities
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex); 
// console.log("%c 🤷‍♂️: result ", "font-size:16px;background-color:#24c3f6;color:white;", result)

//Note: Match Letters of the Alphabet
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; 
// let result = quoteSample.match(alphabetRegex); 
// console.log("%c ⚕️: result ", "font-size:16px;background-color:#bd332e;color:white;", result)

//Note: Match Numbers and Letters of the Alphabet
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig;
// let result = quoteSample.match(myRegex);
// console.log("%c 👨‍🎤: result ", "font-size:16px;background-color:#08f7f8;color:black;", result)

//Note: Match Single Characters Not Specified
// view only aphabet letters
// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9. ]/ig; 
// let result = quoteSample.match(myRegex); 
// console.log("%c 😉: result ", "font-size:16px;background-color:#bd5ed0;color:white;", result)

//Note: Match Characters that Occur One or More Times
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig;
// let result = difficultSpelling.match(myRegex);
// console.log("%c 🇧🇫: result ", "font-size:16px;background-color:#3e95cf;color:white;", result)

