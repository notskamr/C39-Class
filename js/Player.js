class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.ordinal = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
getOrdinal() {
  var ordinalCountRef = database.ref('ordinal')
  ordinalCountRef.on("value",(data)=> {
    ordinal = data.val();
  })
}
  updateOrdinal(ordinal) {

    database.ref('/'+ this.index).update({
     ordinal: ordinal
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      ordinal: this.ordinal
    });
  }

  static getOrdinalInfo(){
    var ordinalCountRef = database.ref('players');
    ordinalCountRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}





