document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#rock').addEventListener('click', function () {
        var rock = document.querySelector('#rock');
        var paper = document.querySelector('#paper');
        var scissors = document.querySelector('#scissors');
        var x = ['rock', 'paper', 'scissors'];
        var random = Math.floor(Math.random() * x.length);
        var computerChoice = x[random];

        if (rock && computerChoice === 'paper') {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> You: Rock <br> Computer wins!`;
            document.querySelector('#result').innerHTML=' ';
        }
        if (rock && computerChoice === 'scissors') {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> You: Rock <br> You won!`;
               
        } 
        else {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> Tie!`;
            document.querySelector('#result').innerHTML=' ';
        }
        return document.querySelector('#result').innerHTML=' ';
    });

    document.querySelector('#paper').addEventListener('click', function () {
        var rock = document.querySelector('#rock');
        var paper = document.querySelector('#paper');
        var scissors = document.querySelector('#scissors');
        var x = ['rock', 'paper', 'scissors'];
        var random = Math.floor(Math.random() * x.length);
        var computerChoice = x[random];

        if (paper && computerChoice === 'scissors') {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> You: Paper <br> Computer wins!`;
            document.querySelector('#result').innerHTML=' ';
        }
        if (paper && computerChoice === 'rock') {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> You: Paper <br>You won!`;
               
        }
        else {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> Tie!`;
            document.querySelector('#result').innerHTML=' ';
        }
        return document.querySelector('#result').innerHTML=' ';
    });

    document.querySelector('#scissors').addEventListener('click', function () {
        var rock = document.querySelector('#rock');
        var paper = document.querySelector('#paper');
        var scissors = document.querySelector('#scissors');
        var x = ['rock', 'paper', 'scissors'];
        var random = Math.floor(Math.random() * x.length);
        var computerChoice = x[random];

        if (scissors && computerChoice === 'rock') {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br>You: Scissors <br> Computer wins!`;  
            
        }
        if (scissors && computerChoice === 'paper') {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> You: Scissors <br> You won!`;
            document.querySelector('#result').innerHTML=' ';
        } 
        else {
            return document.querySelector('#result').innerHTML=`Computer: ${computerChoice} <br> Tie!`;
            
        }
        return document.querySelector('#result').innerHTML=' ';
    });
    
})