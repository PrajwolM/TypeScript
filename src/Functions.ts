function calculateTax (income: number, taxYear= 2022): number{ // number annoted here is for return type
    // taxYear= 2022 means that the default value has beeen set to 2022 so thath if the function is call only with the income it will still work and value of tax year would be 2022.
 if(taxYear< 2022)
    return income*1.2;
return income *1.3;
}

calculateTax(2000);
//  typescript is strict with the number of arguments therer are two means that only two arguments at most and  no more if there is default value then less arguments can be used. 