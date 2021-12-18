var number=30
var n=[10,11,12,13,14,17,18,19]
var i=0
var a=[]
while (i<n.length){
    j=4
    while (j<n.length){
        if (n[i]+n[j]==number){
            a.push([n[i],n[j]])
        }
        j++
    }
    i++
    console.log(a)
}