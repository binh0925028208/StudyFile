const SLOW = 1
const MEDIUM = 2
const FAST = 3
class Fan {
    speed:number
    private on:boolean
    private radius:number
    private color:string

    constructor (tocdo:number,batTat:boolean,banKinh:number,mausac:string){
            this.speed=SLOW
            this.on= false
            this.radius=5
            this.color= "blue"
        }

        get getSpeed():number {
            return this.speed;
        }
        set setSpeed(value: number) {
            this.speed = value;
        }

        get getOn():boolean {
            return this.on;
        }
        set setOn(value: boolean) {
            this.on = value;
        }

        get getRadius():number {
            return this.radius;
        }
        set setRadius(value: number) {
            this.radius = value;
        }

        get getColor():string {
            return this.color;
        }
        set setColor(value: string) {
            this.color = value;
        }
        toString():void{
            if (this.on==true){
                console.log(this.speed, this.color, this.radius,"fan is on")
            }
            else{
                console.log(this.color, this.radius,"fan is off")
            }
        }
}

const fan1 =new Fan(FAST,true,10,"yellow")
fan1.setSpeed=FAST
fan1.setOn=true
fan1.setRadius=10
fan1.setColor="yellow"
fan1.toString()

const fan2 =new Fan(MEDIUM,false,5,"blue")
fan2.setSpeed=MEDIUM
fan2.setOn=false
fan2.setRadius=5
fan2.setColor="blue"
fan2.toString()
