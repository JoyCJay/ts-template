onmessage = function({data}) {
    let {arr, idx} = data;
    if (idx < arr.length - 1) {
        idx ++;
        postMessage(idx);
        console.log(`result ${arr[idx]} is from worker 2`);
    } else {
        close();
    }
}