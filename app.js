class Player {
    constructor(id, name, figs, score) {
        this.id = id;
        this.name = name;
        this.figs = figs;
        this.score = score;
    }
}

class Lobby {
    constructor(id, name, password, playerCount, status, maxPlayers) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.playerCount = playerCount;
        this.status = status;
        this.maxPlayers = maxPlayers;
    }
}

class Figure {
    constructor(id, player, position) {
        this.id = id;
        this.player = player;
        this.position = position;
    }
}

function createLobby(id, name, password, playerCount, status, maxPlayers) {
    return new Lobby(id, name, password, playerCount, status, maxPlayers);
}

function joinLobby(x, y) {
    //TODO: Implement lobby joining function
    //TODO: Player y should join Lobby x
}

function createPlayer(playerName) {
    // Initialize blank player. Define ID when joining lobby
    let player = new Player(undefined, playerName, [], 0);

    // Give player 4 figures (ID: 0, 1, 2, 3)
    for (let i = 0; i < 4; i++) {
        player.figs.push(new Figure(i, player, 0));
    }

    return player;
}

function startGame() {
    //TODO: start the game (get lobby on the board)

    //TODO: add online multiplayer functionality
}

function switchPlayer() {
    //TODO: cycle through the player after each playerTurn()
}

function playerTurn(player) {
  let figsInBase = 0;
  let maxMoveableFigs = 0;
  let currentFig = -1;
  let roll = 0;
  let dice6 = false;

  do {
    dice6 = false;
    maxMoveableFigs = countMoveableFigs(player);

    for (let i = 0; i < 4; i++) {
      if (player.figs[i].position == 0) {
        figsInBase += 1;
      }
    }

    if (figsInBase > 0 && maxMoveableFigs == 0) {
      for (let i = 0; i < 3; i++) {
        if (roleDice() == 6) {
          player.figs[0].position = 1;
          dice6 = true;
          i = 3;
        }
      }
    }

    currentFig = pickFig(player);

    roll = roleDice();
    if (roll == 6) {
      dice6 = true;
    }

    player.figs[currentFig].position += roll;
  } while (dice6 == true);

  return player;
  //TODO: when the player can't move for some reason (example: if the fig is at the end and needs a specific number to progress) they then can throw the dice 3 times till they get the correct number
}

function roleDice() {
    return Math.ceil(Math.random() * 6);
}

function countMoveableFigs(player) {
  //TODO: count how many figs can still move
}

function pickFig(player) {
  //TODO: player chooses which fig to move that is able to move currently
}

//? later on "CrazyMode" where there are more than 2 dice and numbers from 1-12 or from 1-3/3-6 etc.
//? maybe implement this with powerups?
