function LengthConverter(thisevent, value) {
    var id = thisevent.id;
    var feet, meters, inches, cm, yards, kilometers, miles;

    // feet
    if (id === 'inputFeet') {
        // convert the value
        feet = value;
        meters = (feet/3.2828).toFixed(2);
        inches = (feet*12).toFixed(2);
        cm = (feet/0.032808).toFixed(0);
        yards = (feet*0.33333).toFixed(2);
        kilometers = (feet/3280.8).toFixed(5);
        miles = (feet*0.00018939).toFixed(5);
        // show value
        document.getElementById('inputInches').value = inches;
        document.getElementById('inputYards').value = yards;
        document.getElementById('inputMiles').value = miles;
        document.getElementById('inputMeters').value = meters;
        document.getElementById('inputCM').value = cm;
        document.getElementById('inputKilometers').value = kilometers;
    }

    // Convert from Feet to other Measurements
    if (id === 'inputMeters') {
        // convert the value
        meters = value;
        feet = (meters*3.2808).toFixed(2);
        inches = (meters*39.370).toFixed(2);
        cm = (meters/0.01).toFixed(0);
        yards = (meters*1.0936).toFixed(2);
        kilometers = (meters/1000).toFixed(5);
        miles = (meters*0.00062137).toFixed(5);
        // show value
        document.getElementById('inputInches').value = inches;
        document.getElementById('inputYards').value = yards;
        document.getElementById('inputMiles').value = miles;
        document.getElementById('inputFeet').value = feet;
        document.getElementById('inputCM').value = cm;
        document.getElementById('inputKilometers').value = kilometers;
    }

    // Convert from Inches to other Measurements
    if (id === 'inputInches') {
        // convert the value
        inches = value;
        meters = (inches/39.370).toFixed(3);
        feet = (inches*0.083333).toFixed(3);
        cm = (inches/0.39370).toFixed(2);
        yards = (inches*0.027778).toFixed(3);
        kilometers = (inches/39370).toFixed(6);
        miles = (inches*0.000015783).toFixed(6);
        // show value
        document.getElementById('inputFeet').value = feet;
        document.getElementById('inputYards').value = yards;
        document.getElementById('inputMiles').value = miles;
        document.getElementById('inputMeters').value = meters;
        document.getElementById('inputCM').value = cm;
        document.getElementById('inputKilometers').value = kilometers;
    }

    // Convert from cm to other Measurements
    if (id === 'inputCM') {
        // convert the value
        cm = value;
        meters = (cm/100).toFixed(3);
        inches = (cm*0.39370).toFixed(2);
        feet = (cm*0.032808).toFixed(3);
        yards = (cm*0.010936).toFixed(3);
        kilometers = (cm/100000).toFixed(6);
        miles = (cm*0.0000062137).toFixed(6);
        // show value
        document.getElementById('inputInches').value = inches;
        document.getElementById('inputYards').value = yards;
        document.getElementById('inputMiles').value = miles;
        document.getElementById('inputMeters').value = meters;
        document.getElementById('inputFeet').value = feet;
        document.getElementById('inputKilometers').value = kilometers;
    }
    // Convert from Yards to other Measurements
    if (id === 'inputYards') {
        // convert the value
        yards = value;
        meters = (yards/1.0936).toFixed(2);
        inches = (yards*36).toFixed(0);
        cm = (yards/0.010936).toFixed(0);
        feet = (yards*3).toFixed(0);
        kilometers = (yards/1093.6).toFixed(5);
        miles = (yards*0.00056818).toFixed(5);
        // show value
        document.getElementById('inputInches').value = inches;
        document.getElementById('inputFeet').value = feet;
        document.getElementById('inputMiles').value = miles;
        document.getElementById('inputMeters').value = meters;
        document.getElementById('inputCM').value = cm;
        document.getElementById('inputKilometers').value = kilometers;
    }
    // Convert from Kilometers to other Measurements
    if (id === 'inputKilometers') {
        // convert the value
        kilometers = value;
        meters = (kilometers*1000).toFixed(0);
        inches = (kilometers*39370).toFixed(0);
        cm = (kilometers*100000).toFixed(0);
        yards = (kilometers*1093.6).toFixed(0);
        feet = (kilometers*3280.8).toFixed(0);
        miles = (kilometers*0.62137).toFixed(2);
        // show value
        document.getElementById('inputInches').value = inches;
        document.getElementById('inputYards').value = yards;
        document.getElementById('inputMiles').value = miles;
        document.getElementById('inputMeters').value = meters;
        document.getElementById('inputCM').value = cm;
        document.getElementById('inputFeet').value = feet;
    }

    // Convert from Miles to other Measurements
    if (id === 'inputMiles') {
        // convert the value
        miles = value;
        meters = (miles/0.00062137).toFixed(0);
        inches = (miles*63360).toFixed(0);
        cm = (miles/0.0000062137).toFixed(0);
        yards = (miles*1760).toFixed(0);
        feet = (miles*5280).toFixed(0);
        kilometers = (miles/0.62137).toFixed(2);
        // show value
        document.getElementById('inputInches').value = inches;
        document.getElementById('inputYards').value = yards;
        document.getElementById('inputKilometers').value = kilometers;
        document.getElementById('inputMeters').value = meters;
        document.getElementById('inputCM').value = cm;
        document.getElementById('inputFeet').value = feet;
    }                    
}                    

