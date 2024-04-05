//Q1
function check(){
    let nums= [1,2,3,4,5,6]
    for(var i=0;i<nums.length;i++){
        if(i<4){
        let a=nums[i];
        console.log(a*a)
        }
        else{
         let b= nums[i]
         console.log(b+10)
        }
    }
}
console.log(check())
//Q2
let arrNum = [1,2,3,4,5,6,7,8,9];

function operations(nums){
    let newArr = arrNum.length
    let i = 0;
    while(i<newArr){
        if(nums[i]===3){
            break;

        }
        else{
            console.log(nums[i]);
        }
        i++;
    }
}
operations(arrNum);

//Q3
let fruits=['apple','plum','banana','strawberries','kiwi'];

function arrayString(x){
    for (let i=0; i<x.length; i++){
        if(i===2){
            continue;
        }else{
            console.log(x[i])
        }
    }
}
arrayString(fruits)
//Q4
let colours = ["blue","black","green","white"]
function arrayString(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
arrayString(colours)
//Q5
function reverse(item){
    let word = true;
    while (word){
        console.log(item.split("").reverse().join(""));
         
        break;

    }
}
reverse("school")