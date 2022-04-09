const overnightPrice = 200;
const timesIN = new Date();
const timesOut = new Date();

function totalBillUsed(timesIN, timesOut) {
    let timesUsed = Math.abs(timesOut.getTime() - timesIN.getTime());
    if (timesUsed <= 86400000) {
        console.log(overnightPrice);
        return overnightPrice;
    } else {
        let totalBill = 0;
        let priceOver = ((timesUsed - 86400000) / 3600000) * 30;
        if (priceOver > 400) {
            priceOver = 200;
            totalBill = priceOver + 200;
            console.log(totalBill);
            return totalBill;
        } else {
            totalBill = priceOver + 200;
            console.log(totalBill);
            return totalBill;
        }
    }
}

console.log('Test case 1: \n' + 'Gio vao la: 2022-04-06 13:00:00  \n' + 'Gio ra la: 2022-04-07 11:00:00 \n' + 'so tien can thanh toan la: ' + totalBillUsed(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 11:00:00')));
console.log('Test case 2: \n' + 'Gio vao la: 2022-04-06 13:00:00  \n' + 'Gio ra la: 2022-04-07 13:00:00 \n' + 'so tien can thanh toan la: ' + totalBillUsed(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 13:00:00')));
console.log('Test case 3: \n' + 'Gio vao la: 2022-04-06 13:00:00  \n' + 'Gio ra la: 2022-04-07 15:00:00 \n' + 'so tien can thanh toan la: ' + totalBillUsed(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 15:00:00')));
console.log('Test case 4: \n' + 'Gio vao la: 2022-04-06 10:00:00  \n' + 'Gio ra la: 2022-04-07 11:00:00 \n' + 'so tien can thanh toan la: ' + totalBillUsed(new Date('2022-04-06 10:00:00'), new Date('2022-04-07 11:00:00')));