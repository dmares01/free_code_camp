function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    };

    let drawer_value = 0;
    for (let i = 0; i <= cid.length - 1; i++){
        console.log(cid[i][1]);
        drawer_value += cid[i][1];
    }
    drawer_value = drawer_value.toFixed(2);

    // How much is owed to the customer
    let changeToGive = cash - price;

    // Create an array to store the change given
    const changeArray = [];
    if (changeToGive > drawer_value) {
        return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } else if (changeToGive.toFixed(2) === drawer_value) { // change is the same amount as drawer
        return { status: "CLOSED", change: cid };
    } else {
        // Sort drawer by highest values first
        cid = cid.reverse();
        for (let coin of cid) {
            let temp = [coin[0], 0];
            while (changeToGive >= UNIT_AMOUNT[coin[0]] && coin[1] > 0) {
                temp[1] += UNIT_AMOUNT[coin[0]];
                coin[1] -= UNIT_AMOUNT[coin[0]];
                changeToGive -= UNIT_AMOUNT[coin[0]];
                changeToGive = changeToGive.toFixed(2);
            }
            if (temp[1] > 0) {
                changeArray.push(temp);
            }
        }
    }
    if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);