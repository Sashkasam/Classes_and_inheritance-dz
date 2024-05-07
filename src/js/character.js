 export default class Character {
    static typeContainer = [
        'Bowman',
        'Swordsman', 
        'Magician', 
        'Daemon', 
        'Undead', 
        'Zombie',
    ];

    constructor(name, type) {
       this.name = name;
       if((this.name).length < 2 || (this.name).length > 10) {
        throw new Error ('Invalid length name');
       }else if(typeof this.name !== 'string') {
        throw new Error ('Name is not string');
       }

       this.type = type;
       if(!Character.typeContainer.includes(type)) {
        throw new Error ('Invalid type of character');
       }
        
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
}
