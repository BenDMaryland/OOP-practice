
class Circle {

    constructor(radius) {
        this.radius = radius

        this.location = {
            x: 1,
            y: 2
        },
            this.draw = function () {
                console.log("hi", this)
            }
    }
}

const reg = new Circle(2)

function adder(){

this.radius++

}

console.log(reg)
adder.call(reg)
console.log(reg)