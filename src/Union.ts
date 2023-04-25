function kgToLbs(weight: number | string): void {
    // perform narrowing
    if(typeof (weight)=== 'number')
        console.log(weight* 2.2);
    else 
        console.log(parseInt(weight) * 2.2);
}

kgToLbs(10);
kgToLbs('10');