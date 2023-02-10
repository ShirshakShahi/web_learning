async function shirshak() {
    let humanNormalTemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(37);
        }, 1000);
    })

    let humanFeverTemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40 deg");
        }, 5000);
    })

    // humanNormalTemp.then(alert);
    // humanFeverTemp.then(alert);
    let normalTemp = await humanNormalTemp;
    let FeverTemp = await humanFeverTemp;
    return [normalTemp, FeverTemp];
}

console.log("welcome to weather control room");
shirshak();
