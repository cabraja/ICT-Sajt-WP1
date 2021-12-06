// GAME FILTER FUNCTIONS
const gameButtons = document.querySelectorAll(".game-button");
const games = document.querySelectorAll(".game");

const filterGames = (id) => {
    games.forEach(game => {
        game.style.display = "block";
    })

    if(id !== "all"){
        games.forEach(game => {
        game.classList[1] !== id ? game.style.display = "none" : null; 
    })
    }
}

gameButtons.forEach(button => {
    button.addEventListener("click",() => {
        filterGames(button.id);
    })
})