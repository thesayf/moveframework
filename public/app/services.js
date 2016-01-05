app.factory("dash", function(){
    return {
        currentView: 'dash-home',
    };
});

app.factory("dashInstant", function(){
    return {
        jobName: '',
        vanType: undefined,
        porterQty: '0 Porters',
    };
});

app.factory("dashPorters", function(){
    return {
        "0 Porter" : {
            porterQty: "0 Porters",
            //price: ,
        },
        "1 Porter" : {
            porterQty: "1 Porter",
            //price: ,
        },
        "2 Porters" : {
            porterQty: "2 Porters",
            //price: ,
        }
    };
});

app.factory("dashVans", function(){
    return {
        "Car": {
            vanType: 'Car',
            weight: '50kg',
            length: '100cm',
            width: '100cm',
            height: '75cm',
            hourlyPrice: ''
        },
        "Car Derived Van": {
            vanType: 'Car Derived Van',
            weight: '660kg',
            length: '1523m',
            width: '1473',
            height: '1181',
            MPG: '68.2',
            hourPriceDriver: '25',
            hourPricePorter: '10'
        },
        "Sub 1 Tonne": {
            vanType: 'Sub 1 Tonne',
            weight: '731kg',
            length: '2040',
            width: '1500',
            height: '1358',
            MPG: '53.3',
            hourPriceDriver: '25',
            hourPricePorter: '10'
        },
        "Short Wheel Base": {
            vanType: 'Short Wheel Base',
            weight: '1114kg',
            length: '2555',
            width: '1775',
            height: '1406',
            MPG: '40.4',
            hourPriceDriver: '30',
            hourPricePorter: '12'
        },
        "Long Wheel Base": {
            vanType: 'Long Wheel Base',
            weight: '1337kg',
            length: '3494',
            width: '1784',
            height: '2025',
            MPG: '33.2',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        },
        "Hi-Top Long Wheel Base": {
            vanType: 'Hi-Top Long Wheel Base',
            weight: '1087kg',
            length: '4300',
            width: '1780',
            height: '1940',
            MPG: '33.6',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        },
        "Luton Tail Lift": {
            vanType: 'Luton Tail Lift',
            weight: '1031kg',
            length: '4144',
            width: '1960',
            height: '2184',
            MPG: '33.6',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        }
    };
});
