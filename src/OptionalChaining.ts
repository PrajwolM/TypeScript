 type Customer ={
    birthday : Date
 }

 function getCustomer(id: number): Customer| null | undefined {
    return id ==0? null : {birthday: new Date};
 }

 let customer = getCustomer(1);
//  if(customer !== null && customer !== undefined)
//      console.log(customer.birthday);
    
console.log(customer?.birthday?. getFullYear()); 
// ?. this is called the optional property access operator  

// Optional element access operator
// An array called customers and we need to access the the first customer at position 0 which might be null or undefined then
// customers?.[0]

// ?optional call
let log: any =null;
log?.('a');