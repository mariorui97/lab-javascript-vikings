// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health = this.health - damage
  }

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  
  attack(){
    return this.strength
  };
  
  receiveDamage(damage){
    this.health = this.health - damage
    return this.health > 0 ? this.name + ' has received ' + damage + ' points of damage' : this.name + ' has died in act of combat'
  };

  battleCry(){
    return 'Odin Owns You All!'
  }


}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }

  attack(){
    return this.strength
  };
  
  receiveDamage(damage){
    this.health = this.health - damage
    return this.health > 0 ? 'A Saxon has received ' + damage + ' points of damage' : 'A Saxon has died in combat'
  };
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length -1))]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length -1))]

    if (randomSaxon === undefined) return 
    let result = randomSaxon.receiveDamage(randomViking.strength)
      
    this.saxonArmy = this.saxonArmy.filter( health => health > 0 ) 
    return result
   }

   saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length -1)) ]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length -1))]
    
    if (randomViking === undefined) return //shoutout to my friend Leo for helping me with this one
    let result = randomViking.receiveDamage(randomSaxon.strength)
      
    this.vikingArmy = this.vikingArmy.filter( health => health > 0 ) 
    return result
  }

   showStatus(){ 
    return this.saxonArmy.length == 0 ? 'Vikings have won the war of the century!' : this.vikingArmy.length == 0 ? "Saxons have fought for their lives and survived another day..." : "Vikings and Saxons are still in the thick of battle."
   }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
