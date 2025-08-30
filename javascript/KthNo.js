function n(s, arr, k){
    let i = 0;
    let m = 0;
    while(s!=0){
        while(m<k){
            if(i<=s){
                i++;
            }else{
                i = 0;
            }
            m++;
        }
        console.log(arr[i]);
        arr.splice(i, 1);
        s--;
        m = 0;
    }
}
n(5, [1, 2, 3, 4, 5], 3);