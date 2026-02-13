// Structure Car en anglais (model, owner). Le JSON utilise modele/proprietaire (FR).
// Le constructeur ne reçoit que 6 paramètres : seuls model.name et model.topSpeed (et owner.*) sont remplis ;
// brand, modeleId, serialNumber restent donc "", null, null sauf si on les assigne ailleurs.
class Car{
    id = null
    model = {
        "name": "",
        "brand": "",
        "modeleId": null,
        "serialNumber": null,
        "topSpeed" : null
    }
    owner = {
        "firstName": "",
        "lastName": "",
        "age": null
    }

    constructor(id, modelName, ownerFirstName, ownerLastName, age = 0, topSpeed = 0 ) {
        this.id = id
        this.model.name = modelName
        this.owner.firstName = ownerFirstName
        this.owner.lastName = ownerLastName
        this.owner.age = age
        this.model.topSpeed = topSpeed
    }

    printEssentialCarInfos() {
        console.log(`
            Id de la voiture : ${this.id},
            Modèle de la voiture : ${this.model.name}
            Propriétaire : ${this.owner.firstName} ${this.owner.lastName}
            Age du propriétaire : ${this.owner.age}
            `)
    }

    static sayHello() {
        console.log("Hello I am from the Car class !");
    }

    // Méthode statique qui décrit à quoi sert la classe Car (pour l'exercice 2).
    static decrire() {
        console.log("La classe Car représente une voiture : elle contient l'id, le modèle, les infos du propriétaire (prénom, nom, âge) et la vitesse de pointe.");
    }
}

export default Car;