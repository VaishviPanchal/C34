class Box{
    constructor(x,y){
        var option= {
            friction:0.7,
            density:0.9
        } 
        this.d=70
        this.box=Bodies.rectangle(x,y,this.d,this.d,option)
        World.add(myWorld,this.box)
    }
    display(){
        var angle=this.box.angle;
        var pos=this.box.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.d,this.d)
        pop()
    }
}