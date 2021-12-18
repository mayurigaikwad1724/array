var number=[50,40,23,70,56,12,5,10,7]
var i=0
var array1=[]
var count=0
while (i<number.length){
    if (number[i]>=20 && number[i]<=40){
        array1.push(number[i])
        count=count+1
    }
    i++
}
console.log(count)
console.log(array1) 