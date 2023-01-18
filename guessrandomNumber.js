let randomNum = Math.floor(Math.random() * 101 );
var i = 0; 
const arr = [];

function GN() {
    var display_string; 
    const Guess_input = document.getElementById('numInput').value;
    
    
    
    if ( Guess_input != randomNum ) {
        if ( Guess_input < randomNum ) {
            display_string = "น้อยกว่า";
        } else if ( Guess_input > randomNum ) {
            display_string = "มากกว่า";
        }
        ++i;
        alert(display_string);
        document.getElementById('numInput') = ' ';
    
    } else if ( Guess_input == randomNum ) {
        alert("ถูกต้อง ค่าที่ถูกคือ " +randomNum +": คุณทายไปทั้งหมด : " +i +" ครั้ง");
        i = 0;
    }
} ;

function clearThis(target) {
    target.value= "";
}