// //* StopLight
// int DELAY_TIME = 3000;

// void setup() {
//   // put your setup code here, to run once:
//   pinMode(7, OUTPUT);
//   pinMode(6, OUTPUT);
//   pinMode(5, OUTPUT);
//   pinMode(2, OUTPUT);
// }

// void loop() {
//   // put your main code here, to run repeatedly:
//   digitalWrite(2, HIGH);
//   lightBlink(7, DELAY_TIME);

//   lightBlink(6, 1000);

//   lightBlink(5, DELAY_TIME);
// }

// void lightBlink(char pin, int time) {
//   digitalWrite(pin, HIGH);
//   delay(time);
//   digitalWrite(pin, LOW);
// }

// //* Inputting colors using the serial monitor
// int redPin = 3;
// int greenPin = 6;
// int bluePin = 9;
// int colorR = 100;
// int colorG = 192;
// int colorB = 23;

// String setColor;

// void setup() {
//   pinMode(redPin, OUTPUT);
//   pinMode(greenPin, OUTPUT);
//   pinMode(bluePin, OUTPUT);

//   Serial.begin(9600);
// }

// void loop() {

//   setColor = Serial.readString();
//   Serial.print(setColor);
//   Serial.print("hello");

//   if (setColor == "red\n") {
//     analogWrite(redPin, 255);
//     analogWrite(greenPin, 0);
//     analogWrite(bluePin, 0);
//   } else if (setColor == "green\n") {
//     analogWrite(redPin, 0);
//     analogWrite(greenPin, 255);
//     analogWrite(bluePin, 0);
//   } else if (setColor == "blue\n") {
//     analogWrite(redPin, 0);
//     analogWrite(greenPin, 0);
//     analogWrite(bluePin, 255);
//   }
// }
