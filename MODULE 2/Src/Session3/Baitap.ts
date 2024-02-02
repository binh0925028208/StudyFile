class Circles {
    radius:number
    color:string

    constructor(banKinh:number,color:string){
        this.radius =banKinh
        this.color = color
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
    
    perimeter(banKinh:number){
        if(banKinh>0){
            return banKinh*2*Math.PI
        }
        else(
        "Bán kính không hợp lệ"
        )
    }
    acreage(banKinh:number){
        if (banKinh>0){
            return banKinh*banKinh*Math.PI
        }
        else(
            "Bán kính không hợp lệ"
        )
    }
    inputData():void{
        this.radius=Number(prompt("nhập bán kính"));
        this.color=String(prompt("nhập màu"));
    }
    outputData():void{
        console.log("bán kính:",this.radius)
        console.log("màu sắc:",this.radius)
    }
}
let hinhtron =new Circles(5,'red')
console.log (hinhtron.perimeter(5))
console.log (hinhtron.acreage(5))
hinhtron.inputData();
hinhtron.outputData();