var printval = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome' + val);
    }
    if (typeof (val) == 'number') {
        console.log('your score is' + val);
    }
};
printval('kumaran');
printval(10);
