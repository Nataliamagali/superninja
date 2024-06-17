// Defino la clase Ninja
class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        console.log(`Nombre: ${this.name}, Salud: ${this.health}, Velocidad: ${this.speed}, Fuerza: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} bebió sake y ahora tiene ${this.health} de salud.`);
    }
}

//  aqui se extiende  la clase Ninja para crear la clase Senseii
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10); //  se Llama  al constructor de Ninja con los valores específicos para Sensei
        this.wisdom = 10; // aca es el atributo sabiduría con valor predeterminado de 10
    }

    speakWisdom() {
        this.drinkSake(); // se llama  al método drinkSake() de la clase Ninjaa
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."); // Mensaje de sabiduría
    }
}

// Ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
