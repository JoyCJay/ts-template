

const promiseConfigs = [
    {
        delay: 2000,
        text: 'p1 resolve'
    },
    {
        delay: 1000,
        text: 'p2 resolve'
    },
    {
        delay: 3000,
        text: 'p3 resolve'
    },
];

const myPromises = promiseConfigs.map(config => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(config.text);
            res(config.delay);
        }, config.delay);
    });
});

// Promise.all(myPromises).then((result) => {
//     console.log("Promise.all() result", result);
// });

function promiseOr(ps: Promise<any>[]) {
    return new Promise((firstPRes, firstPRej) => {
        ps.forEach((p: Promise<any>) => {
            p.then(value => {
                console.log('result', value);
                firstPRes(value);
            });
        });
        
    });
}

promiseOr(myPromises).then(v => {
    console.log("or final result", v);
});
