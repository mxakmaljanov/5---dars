//1-masla
//let n = 5; 
//let arr = [];
//for (let i = 1; i <= n; i++) {
//    arr.push(2 ** i);
//}
//console.log(arr);
//2-masala
//let n = 5; 
//let a = 2; 
//let b = 3; 
//let a = [A, b];
//for (let i = 2; i < n; i++) {
//    let sum = 0;
//    for (let j = 0; j < i; j++) {
//        sum += a[j]; 
//    }
//    a.push(sum);
//}
//console.log(a)
//let arr = [1, 2, 3, 4, 5];
//let tk = [];
//for (let i = arr.length - 1; i >= 0; i--) {
//    tk.push(arr[i]);
//}
//console.log(tk); 
//4-masala
//let arr = [4, 5, 7, 8, 6, 9];
//let t = [];
//let ts = 0;
//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 !== 0) { 
//        t.push(arr[i]);
//        ts++;
//    }
//}
//console.log(t.join(' '));
//console.log("Toqlari soni =", ts);
//5-masala
//let arr = [4, 5, 7, 8, 6, 9];
//let j = [];
//let t = [];
//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//        j.push(arr[i]);
//    } else {
//        t.push(arr[i]);
//    }
//}
//console.log(j.join(' '));
//console.log(t.reverse().join(' ')); 
//6-masla
//let arr = [4, 5, 7, 8, 6, 9]; 
//for (let i = 0; i < arr.length; i += 2) {
//    console.log(arr[i]);
//}
//7-masla
//let arr = [4, 5, 7, 8, 6, 9];
//for (let i = arr.length - 1; i >= 0; i -= 2) {
//    console.log(arr[i]);
//}
//8-masla
//let arr = [4, 5, 7, 8, 6, 9]; 
//for (let i = 0; i < arr.length; i += 2) {
//    console.log(arr[i]); 
//}
//for (let i = 1; i < arr.length; i += 2) {
//    console.log(arr[i]); 
//}
//9-masla
//let arr = [4, 5, 7, 8, 6, 9];
//for (let i = 1; i < arr.length; i += 2) {
//    console.log(arr[i]);
//}
//for (let i = arr.length - 2; i >= 0; i -= 2) {
//    console.log(arr[i]); 
//}
// 10-masala
//let arr = [4, 5, 7, 8, 6, 9];
//let res = [];
//let u = arr.length;
//
//for (let i = 0; i < Math.ceil(u / 2); i++) {
//    res.push(arr[i]);
//    if (i !== uzunlik - i - 1) {
//        res.push(arr[u - i - 1]);
//    }
//}
//console.log(res.join(' ')); 