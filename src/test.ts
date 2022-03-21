const str = " hello thank funny   hello thank  what funny"


const supMap = new Map<string, number[]>();

const strArr = str.split(' ').forEach((w, idx) => {
    if (!supMap.has(w)) {
        supMap.set(w, [])
    }

    supMap.get(w).push(idx)
})

let res = {
    word: null,
    idxes: []
}

for (const [key, idxes] of supMap) {
    if (key !== '') {
        if (idxes.length > res.idxes.length) {
            res = {
                word: key,
                idxes
            }
        }
    }
}


console.log(
    res
)
