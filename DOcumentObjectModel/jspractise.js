//sum of arr
/*
function sumOfArr(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(parseInt(prompt()))

    }
    console.log(sumOfArr(arr))
}
main()
*/

/*
function COmparison(a,b){
    let count=0
    let jout=0
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
            count++
        }
        else if(a[i]<b[i]){
            jout++
        }
    }
    return [count,jout]
}
function main(){
    let a=[17,28,30]
    let b=[99,16,8]
    console.log(COmparison(a,b))
}
main()
*/

/*
function reverseString(n){
    return n.split(' ').reverse().join(' ')
}
function main(){
    n="Hello world"
    console.log(reverseString(n))
}
main()
*/

/*
function reverseString(n){
    return n.split('').reverse().join('')
}
function main(){
    let n="hello"
    console.log(reverseString(n))
}
main()
*/

/*
function reverseString(n){
    return n.split('').reverse().join('')

}
function main(){
    let n="hello"
    console.log(reverseString(n))
}
main()
*/

/*
function reverseString(s){
    return s.split('').reverse().join('')
}
function main(){
    let s="hello"
    console.log(reverseString(s))
}
main()
*/

//longestCommon Prefix
/*
function longestCOmmonPrefix(s){
    if (s.length===0){
        return ''
    }
    let first=s[0]
    let last=s[s.length-1]
    let i=0
    while (i<first.length && i<last.length && first[i]===last[i]){
        i++
    }
    return first.substring(0,i);
}
function main(){
    let s= ["geeksforgeeks", "geeks", "geek", "geezer"];
    console.log(longestCOmmonPrefix(s))
}
main()
*/

/*
function longestCommonPrefix(s){
    if(s.length===0){
        return ''
    }
    let first=s[0]
    let last=s[s.length-1]
    let i=0
    while(i<first.length && i<last.length && first[i]===last[i]){
        i++
    }
    return first.substring(0,i)
}
function main(){
    let s=["apple","ape","april"];
    console.log(longestCommonPrefix(s))
}
main()*/

/*
function reverseString(s){
    return s.split(' ').reverse().join(' ')
}
function main(){
    let n='happy world'
    console.log(reverseString(n))
}
main()
*/

/*function longestCOmmonPrefix(s){
    if(s.length===0){
        return ''
    }
    let first=s[0]
    let last=s[s.length-1]
    let i=0
    while(i<first.length && i<last.length && first[i]===last[i]){
        i++
    }
    return first.substring(0,i)
}

function main(){
    let s=['apex','apple','ap','april']
    console.log(longestCOmmonPrefix(s))

}
main()
*/

/*
function romantoInt(s){
    let p={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    for(let i=0;i<s.length;i++){
        if(i<s.length-1 && p[s[i]]<p[s[i+1]]){
            ans-=p[s[i]]
        }
        else{
            ans+=p[s[i]]
        }
    }
    return ans

}
function main(){
    let s='MCMIV'
    console.log(romantoInt(s))

}
main()
*/

/*
function romanToInt(s){
    let p={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    for(let i=0;i<s.length;i++){
        if(i<s.length-1 && p[s[i]]<p[s[i+1]]){
            ans-=p[s[i]]
        }
        else{
            ans+=p[s[i]]
        }
    }
    return ans

}
function main(){
    let n='MCMIV'
    console.log(romanToInt(n))
}
main()
*/
/*
function romatoInt(s){
    let p={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    for(let i=0;i<s.length;i++){
        if(i<s.length-1 && p[s[i]]<p[s[i+1]]){
            ans-=p[s[i]]
        }
        else{
            ans+=p[s[i]]
        }
    }
    return ans

}
function main(){
    let s="MCMXCIV"
    console.log(romatoInt(s))
}
main()
*/

/*
function intToRoman(num){
    const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let res=''
    for(let i=0;i<values.length;i++){
        while (num>=values[i]){
            res+=symbol[i]
            num-=values[i]
        }
    }
    return res
}  
function main(){
    let n=1994
    console.log(intToRoman(n))
} 
main() 
*/

/*
function IntToRoman(n){
    const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let ans=''
    for(let i=0;i<values.length;i++){
        while(n>=values[i]){
            ans+=symbol[i]
            n-=values[i]
        }

    }
    return ans
}
function main(){
    let n=1904
    console.log(IntToRoman(n))
}
main()
*/

/*
function romanToInt(n){
    const p={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    for(let i=0;i<n.length;i++){
        if(i<n.length-1 && p[n[i]]<p[n[i+1]]){
            ans-=p[n[i]]

        }
        else{
            ans+=p[n[i]]
        }
    }return ans
}
function main(){
    let n='MCMIV'
    console.log(romanToInt(n))
}
main()
*/

/*
function InToROman(n){
    const p={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    for(let i=0;i<n.length;i++){
        if(i<n.length-1 && p[n[i]]<p[n[i+1]]){
            ans-=p[n[i]]
        }else{
            ans+=p[n[i]]
        }
    }
    return ans
}
function main(){
    let n='MCMIV'
    console.log(InToROman(n))
}
main()
*/

/*
function IntoROman(n){
    const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let ans=''
    for(let i=0;i<values.length;i++){
        while(n>=values[i]){
            
            ans+=symbol[i]
            n-=values[i]
        }
    }
    return ans

}
function main(){
    let n=1904
    console.log(IntoROman(n))

}
main()    

*/

/*
function IntToroman(n){
    const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let ans=''
    for(let i=0;i<values.length;i++){
        while(n>=values[i]){
            ans+=symbol[i]
            n-=values[i]
        }

    }
    return ans 
    
}
function main(){
    let n=1904
    console.log(IntToroman(n))
}
main()
*/

/*
function IntoROman(n){
    const p={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    for(let i=0;i<n.length;i++){
        if (i<n.length-1 && p[n[i]]<p[n[i+1]]){
            ans-=p[n[i]]
        }
        else{
            ans+=p[n[i]]
        }
    }
    return ans
    
}
function main(){
    let n='MCMIV'
    console.log(IntoROman(n))
}
main()
*/

/*
function romanToint(n){
    const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let ans=''
    for(let i=0;i<values.length;i++){
        while(n>=values[i]){
            ans+=symbol[i]
            n-=values[i]
        }
    }
    return ans


}
function main(){
    let n=1904
    console.log(romanToint(n))
}
main()
*/

/*
function shortestDistance(words,word1,word2){
    let index=-1
    let index2=-1
    let distance=Infinity;
    for(let i=0;i<words.length;i++){
        if(words[i]===word1){
            index=i
        }
        else if(words[i]===word2){
            index2=i
        }
        if(index !== -1 && index2 !==-1){
            distance=Math.min(distance,Math.abs(index-index2))
        }
    }
    return distance
    
}
function main(){
    let words = ["the", "quick", "brown", "fox", "quick"];
    let word1 = "the";
    let word2 = "fox";
    console.log(shortestDistance(words, word1, word2)); 

}
main()
*/

/*
function shortestDistance(words,word1,words2){
    let index1=-1
    let index2=-1
    let distance=Infinity
    for(let i=0;i<words.length;i++){
        if(words[i]===word1){
            index1=i
        }
        else if(words[i]===words2){
            index2=i
        }
        if(index1 !== -1 && index2 !== -1){
            distance=Math.min(distance,Math.abs(index1-index2))

        }
        
    }
    return distance
}
function main(){
    let words = ["the", "quick", "brown", "fox", "quick"];
    let word1 = "the";
    let word2 = "fox";
    console.log(shortestDistance(words, word1, word2));

    
}
main()
*/
/*

function shortestWord(words,word1,words2){
    let index1=-1
    let index2=-1
    let ans=Infinity
    for(let i =0;i<words.length;i++){
        if(words[i]===word1){
            index1=i
        }
        else if(words[i]===words2){
            index2=i
        }
        if(index1!==-1 && index2!==-1){
            ans=Math.min(ans,Math.abs(index1-index2))

        }

    }
    return ans
}
function main(){
    let words = ["the", "quick", "brown", "fox", "quick"];
    let word1 = "the";
    let word2 = "fox";
    console.log(shortestWord(words, word1, word2));

    
}
main()*/

/*function longestPrefix(n){
    if(n.length===0){
        return ''
    }
    let first=n[0]
    let last=n[n.length-1]
    let i=0
    while (i<first.length && i<last.length && first[i]===last[i]){
        i++
    }
    return first.substring(0,i)
}
function main(){
    let s = ["geeksforgeeks", "geeks", "geek", "geezer"]
    console.log(longestPrefix(s))

}
main()


function ThreeSum(nums){
    let arr=[]
    nums.sort((a,b)=>a-b)
    const n=nums.length
    for(let i=0;i<n-2;i++){
        if(i>0 && nums[i]===nums[i-1]){
            continue
        }
        for(let j=i+1;j<n-1;j++){
            if(j>i+1 && nums[j]===nums[j-1]){
                continue
            }
            for(let k=j+1;k<n;k++){
                if(k>j+1 && nums[k]===nums[k-1]){
                    continue
                }
                if(nums[i]+nums[j]+nums[k]===0){
                    arr.push([nums[i],nums[j],nums[k]])
                }
            }
        }
        

    }
    return arr


    
}
function main(){
    let arr=[-1,0,1,2,-1,-4]
    console.log(ThreeSum(arr))

}
main()
*/

/*function ThreeSum(nums){
    let n=nums.length
    let arr=[]
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                if(nums[i]+nums[j]+nums[k]===0){
                    let triplet=[nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
                    if(!arr.includes(triplet)){
                        arr.push(triplet)
                    }
                }
            }
        }
    }
    return arr
}
function main(){
    let n=[-1,0,1,2,-1,-4]
    console.log(ThreeSum(n))
}
main()*/
/*function threeSumcloset(nums,target){
    nums.sort((a,b)=>a-b)
    let closet=Infinity
    for(let i=0;i<nums.length-2;i++){
        let left=i+1
        let right=nums.length-1
        while(left<right){
            let current=nums[i]+nums[left]+nums[right]
            if(Math.abs(current-target)<Math.abs(current-closet)){
                closet=current
            }
            if(current<target){
                left+=1

            }
            else if(current>target){
                right-=1
            }
            else{
                return current
            }
        }
    }
    return closet
}
function main(){
    let n=[-1,2,1,-4]
    let target=1
    console.log(threeSumcloset(n,target))


}
main()*/

/*function sqrt(x){
    if (x<2){
        return x
    }
    let l=2
    let h=Math.floor(x/2)
    while(l<h){
        let mid=Math.floor(l+h)/2
        let sqrt=mid*mid
        if(sqrt===x){
            return mid
        }
        else if(sqrt<x){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return h
}
function main(){
    let x=8
    console.log(sqrt(x))
}
main()

function sqrt(x){
    let i=0
    while(i*i<=x){
        i+=1
    }
    return i-1
}
function main(){
    let x=8
    console.log(sqrt(x))
}
main()

function climbStairs(n){
    if(n<=2){
        return n
    }
    let first=1,second=2
    for(let i=3;i<=n;i++){
        let third=first+second
        first=second
        second=third
    }
    return second
}
function main(){
    let n=3
    console.log(climbStairs(n))


}main()


function threeSum(nums){
    nums.sort((a,b)=>a-b)
    let n=nums.length
    let ans=new Set()
    for(let i=0;i<n-2;i++){
        let j=i+1
        let k=n-1
        while(j<k){
          let temp=nums[i]+nums[j]+nums[k]
          if(temp===0){
            ans.add((nums[i],nums[j],nums[k]))
            j+=1
          }  
          if(temp>0){
            k-=1
          }
          else{
            j+=1
          }
        }
    }
    return Array.from(ans)

}
function main(){
    let nums=[-1,0,1,2,-1,-4]
    console.log(threeSum(nums))
}
main()
*/


/*
function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i+1;j++){
            str+='*'
        }
        for (let k=0;k<n-i-1;k++){
            str+=' '
        }
        for (let l=0;l<i+1;l++){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()
*/

/*function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i+1;j++){
            str+='*'
        }
        for(let k=0;k<2*(n-i-1);k++){
            str+=' '
        }
        for(let l=0;l<i+1;l++){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*function printpattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        for(let k=0;k<2*(i);k++){
            str+=' '
        }
        for(let l=0;l<n-i;l++){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printpattern(n)
}
main()
*/

/*function sqrt(n){
    let i=0
    while(i*i<=n){
        i+=1
    }
    return i-1
}
function main(){
    let n=4
    console.log(sqrt(n))
}
main()*/

/*function LongestCmnPrefix(strs){
    if(strs.length===0){
        return ''
    }
    strs.sort()
    let first=strs[0]
    let last=strs[strs.length-1]
    let ans=0
    while (ans<first.length && ans<last.length && first[ans]===last[ans]){
        ans+=1

    }
    return first.substring(0,ans)


}
function main(){
    let  strs = ["flower","flow","flight"]
    console.log(LongestCmnPrefix(strs))
}
main()

function longestCommonPrefix(strs){
    if(strs.length===0){
        return ''
    }
    strs.sort()
    let first=strs[0]
    let last=strs[strs.length-1]
    let ans=0
    while (ans<first.length && ans<last.length && first[ans]===last[ans]){
        ans+=1

    }
    return first.substring(0,ans)
}
function main(){
    let  strs = ["flower","flow","flight"]
    console.log(longestCommonPrefix(strs))
}
main()

function LongestCmnPrefix(strs){
    if(strs.length===0){
        return''
    }
    strs.sort()
    let first=strs[0]
    let last=strs[strs.length-1]
    let ans=0
    while (ans<first.length && ans<last.length && first[ans]===last[ans]){
        ans+=1
    }
    return first.substring(0,ans)
}
function main(){
    let  strs = ["flower","flow","flight"]
    console.log(longestCommonPrefix(strs))

}
main()*/

/*function removeDuplicate(nums){
    if (nums.length===0){
        return 0
    }
    let slow=0
    for (let i=1;i<nums.length;i++){
        if(nums[i]!==nums[slow]){
            slow+=1
        }
        nums[slow]=nums[i]
    }
    return slow+1
}
function main(){
    let nums=[1,1,2]
    console.log(removeDuplicate(nums))

}
main()

function removeDup(nums){
    if(nums.length===0){
        return 0
    }
    let first=0
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[first]){
            first+=1
        }
        nums[i]=nums[first]
    }
    return first+1
}
function main(){
    let nums=[1,1,2]
    console.log(removeDup(nums))
}
main()*/

/*
function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
    for(let k=0;k<n;k++){
        let trs=''
        for(let l=0;l<k+1;l++){
            trs+='*'
        }
        console.log(trs)
    }
    
}
function main(){
    let n=5
    printPattern(n)
}
main()
*/

/*function printPattern(n){
    let i=0
    while(i<n){
        let j=0
        let str=''
        while(j<n-i){
            str+='*'
            j++
        }
        i++
        console.log(str)

    }
}
function main(){
    let n=5
    printPattern(n)

}
main()*/


/*
function stopPrinting(n,m){
    for(let i=1;i<n;i++){
        if(i===m){
            break
        }
        console.log(i)
    }
}
function main(){
    let n=10
    let m=4
    stopPrinting(n,m)
}
main()


function divisible(n){
    for(let i=0;i<=n;i++){
        if(i%4===0){
            continue
        }
        if(i%2===0){
            console.log(i)
        }
    }
}
function main(){
    let n=10
    divisible(n)
}
main()
function printSeries(n){
    for(let i=1;i<=n;i++){
        if(i*i*i>n){
            break
        }
        console.log(i*i*i)
    }
}
function main(){
    let n=125
    printSeries(n)
}
main()
*/

/*
function printSeries(n){
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}
function main(){
    let n=7
    printSeries(n)

}
main()
*/

/*function reverse(n){
    let rev=0
    while (n>0){
        let temp=n%10
        rev=rev*10+temp
        n=Math.floor(n/10)
    }
    return rev
}
function main(){
    let n=123
    console.log(reverse(n))

}
main()*/

/*
function ArmStrong(n){
    let temp=n
    let sum=0
    while(temp>0){
        let dup=temp%10
        sum=sum+dup**3
        temp=Math.floor(temp/10)

    }
    if(n===sum){
        return true
    }
    return false
}
function main(){
    let n=163
    console.log(ArmStrong(n))

}
main()
*/

/*
function printDigit(n){
    while(n>0){
        let temp=n%10
        n=Math.floor(n/10)
        console.log( temp)
    }
}
function main(){
    let n=153
    printDigit(n)
}
main()

function Divisible(n){
    for (let i=1;i<=n;i++){
        if(i%5===0){
            continue
        }
        else{
            console.log(i)
        }
    }
}
function main(){
    let n=7
    Divisible(n)

}
main()
*/

/*function Divisi(n){
    let i=1
    while(i<=n){
        if(i%5===0){
            i++
            continue
        }
        console.log(i)
        i++
    }
}
function main(){
    let n=7
    Divisi(n)
}
main()
*/

/*function printSeries(n){
    let i=1
    while(i*i<=n){
        console.log(i*i)
        i++
    }
}
function main(){
    let n=49
    printSeries(n)
}
main()*/

function printEven(n){
    let i=1
    while(i<=n){
        if(i%2===0){
            console.log(i)
        }
        i++
    }
}
function main(){
    let n=10
    printEven(n)
}
main()