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
       if(name.length < 2 || name.length > 10) {
        throw new Error ('Invalid length name');
       }

        if(typeof name !== 'string') {
        throw new Error ('Name is not string');
       }

       if(!Character.typeContainer.includes(type)) {
        throw new Error ('Invalid type of character');
       }

        this.name = name;
        this.type = type;
        
        this.health = 100;
        this.level = 1;

        this.attack = null;
        this.defence = null;
    }
}
