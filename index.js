
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

reg.draw()


