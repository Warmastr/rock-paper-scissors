# rock-paper-scissors
This is my first Javascript program from scratch. This program is intended to introduce problem-solving techniques whilst utilizing the programming syntax I've learned to date. 

This program is a simple replica of the famouse Rock Paper Scissors game played as children, typically to decide between two or more people. This version is a player vs. the computer version where there is a random chance to win. May the best player win!

Reflection:

In all, it took a few hours to code this program spread over a few days. I added a function not called for to handle the player 'weapon' selection called playerSelection(). I initially coded the playRound() function using full strings as the 'result' return value. I then opted to change the function completely to concatenate the weapon selections for the player and computer to simplify the return result to either "player", "computer", or "tie". This really made coding the game() function much simpler and less code-intensive since it didn't have to sort through every condition. The logic was already worked out. 

In the game() function, I really struggled with calling the return data from playRound(). I wasn't getting the concept of assigning a function to a variable to work specifically with the return value of the function. Once I figured that out, the rest was self-explanatory and I spent about 60% of my time coding just trying to figure that portion out. It is a lesson well-learned and now it is engrained in memory (hopefully anyway). One slight struggle I had was the scoring system. I tried to place my variables for playerScore and computerScore inside the 'for' loop and that was problematic for obvious reasons. I just wasn't picking up on it until I debugged using Dev Tools, then it was plainly obvious to me that each time the loop iterated, my 

                                "let playerScore = 0;"  
reset the score to zero. Another lesson learned. Then I set it as a global variable by placing the two score variables to the top of the program, before finally realizing there was no point in using global variables, especially after reading somewhere that it is best to not use them when you don't have to. So, in keeping with best practices, I moved the two variables back into the game() function just before the loop initialization. 

Conclusion:

I really enjoyed this program. The learning experiences proved to be lessons learned that will stick with me. I got decent experience working with user input, creating functions, working with functions inside of functions, and variable scope to name a few key topics that stood out. Looking forward to continuing The Odin Project!
