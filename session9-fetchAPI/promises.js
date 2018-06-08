const isBossHappy = true;
// promise
const goOnTrip = new Promise((resolve,reject) =>{
    if(isBossHappy){
        const Trip = {
            location : 'Goa',
            mode : 'Flight'
        };
        resolve(Trip);
    }else{
        const reason = new Error('Boss is not happy');
        reject(reason);
    }
});
const showOffOnFaceBook  = function(Trip){
    const message = 'Hey Friends i am in ' + Trip.location + '  enjoying .. came by '+ Trip.mode;
    return Promise.resolve(message);
}
// call our promise
const Review = function(){
    goOnTrip
    .then(showOffOnFaceBook)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
};
Review();
/* isBossHappy = true;
const willGetBonus = new Promise((resolve,reject) =>{
    if(isBossHappy){
        const Trip = {
            Place : 'Darjeeling',
            mode : 'flight'
        };
        resolve(Trip);
    }else{
        const reason = new Error("Boss is not happy");
        reject(reason);
    }
});
const updateFaceBook = function(Trip){
    const message = "Hey Friends.. look at our pics" + Trip.Place + " we reacheed here by " + Trip.mode;
    return Promise.resolve(message);
};
//calling our primise
const Review = function(){
    console.log('before review');
    willGetBonus
    .then(updateFaceBook)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
    console.log('after review');
}
Review();
 */