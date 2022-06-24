const arr = ["a","b","c","d"];

function start() {
    let idx = -1;

    var w1 = new Worker('worker1.js');
    var w2 = new Worker('worker2.js');

    w1.postMessage({arr, idx});

    w1.onmessage = ({data}) => {
        idx = data;
        const txtNode = document.createTextNode(arr[idx]);
        document.body.appendChild(txtNode);

        w2.postMessage({arr, idx});
    };

    w2.onmessage = ({data}) => {
        idx = data;
        const txtNode = document.createTextNode(arr[idx]);
        document.body.appendChild(txtNode);

        w1.postMessage({arr, idx});
    };
}