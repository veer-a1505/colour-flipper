
/<---- SIMPLE COLOR ---->/

const color = ["red","green","yellow","blue", "orange", "gold", "lightblue", "Brown"];

const button1 = document.getElementById('btn-1');
const content = document.querySelector('.content');

console.log(content);


button1.addEventListener('click' , () => {
    // get a random number 
    let randomNumber = getRandomNumber();

    // settng backround color adn color content(name) by selecting randomly 
    document.body.style.backgroundColor = color[randomNumber];
    content.textContent = color[randomNumber];

    /// display same color to header
    document.querySelector('h1').style.color = color[randomNumber];    


})


getRandomNumber = () => {
    return Math.floor(Math.random() * color.length);
}

/<---- HEX COLOR ---->/

const colorcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const button2 = document.getElementById('btn-2');

button2.addEventListener( 'click' , () => {
    
    let hexColor = "#";
    for(var i = 0 ; i < 6 ; i++){
        // getting random number and then selecting color code from array using loop iteration (color code)
     hexColor += colorcode[getRandomNumberForHex()]   
    }

    // settng backround color adn color content(name) by selecting randomly     
    document.body.style.backgroundColor = hexColor;
    content.textContent = hexColor;

    /// display same color to header
    document.querySelector('h1').style.color = hexColor;
    
})


getRandomNumberForHex = () => {
    return Math.floor(Math.random() * colorcode.length)

}

