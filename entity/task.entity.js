export class Task {
    constructor(id, description, initial, final, days, precedence, resource, coast) {
        this.id = id
        this.description = description
        this.initial = initial
        this.final = final
        this.days = days
        this.precedence = precedence
        this.resource = resource
        this.coast = coast
    }
}