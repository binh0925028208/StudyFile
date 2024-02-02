//bài 1-----------
let nums:number[]=[2,7,11,15]
let target:number =9
let output:number[] =[]
for (let i:number=0;i<nums.length;i++){
    for (let j:number=i+1; j<nums.length;j++){
        if (nums[i]+nums[j] == target){
            output.push(i,j);
            break
        }
    }
}
// console.log(output)

//bài 2--------------
const isCheck =(str:string)=>{
    let openString:string[]=[ '(','{','[' ]
    let closeString:string[]=[ ')','}',']']
    let stack:string[]=[] 
    for (let i:number=0;i<str.length;i++){
        if (openString.includes(str[i])){
            stack.push(str[i])
        }
        else{
            if(closeString.includes(str[i])){
                const matchBra= openString [closeString.indexOf(str[i])];
                if (stack.length===0||stack.pop()!==matchBra){
                    return false;
                }
            }
        }
    }
    console.log(stack)
    return stack.length===0
}
// console.log(isCheck("()({})"))

//bài 3-----------------
var regex:any = /[!@#$%^&*(),.?":{}|<>\/-]/;
var regex:any = /[^a-z0-9]/g;
let s:string = "A man, a plan, a canal: Panama"
let newS:string[]=s.toLocaleLowerCase().replace(/[^a-z0-9]/g,"").split("")
const sReverse:string = newS.reverse().join()
const sAfter:string = newS.join()
if (sReverse==sAfter){
    console.log (true)
}
else{
    console.log (false)
}

// bài 4-----------------
const st:string = "anagram"
const tt:string = "nagaram"
let newSt = st.toLowerCase().split("").sort().join('')
let newTt = tt.toLowerCase().split("").sort().join('')
let result = newSt == newTt ? true:false
console.log(result)

// bài 5------------------
 let numbs:number[] = [-2,1,-3,4,-1,2,1,-5,4]
 let maxSum:number=0
 let currentSum:number=0
 for (let i:number=1;i<numbs.length;i++){
    currentSum = Math.max(numbs[i], currentSum+numbs[i])
    maxSum =Math.max(maxSum,currentSum)
 }
console.log (maxSum)