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

// //* Countdown 
// int DP = 3;
// int C = 4;
// int D = 5;
// int E = 6;
// int B = 7;
// int A = 8;
// int F = 9;
// int G = 10;
// int delayTime = 500;

// void setup() {
//   pinMode(DP, OUTPUT);
//   pinMode(C, OUTPUT);
//   pinMode(D, OUTPUT);
//   pinMode(E, OUTPUT);
//   pinMode(B, OUTPUT);
//   pinMode(A, OUTPUT);
//   pinMode(F, OUTPUT);
//   pinMode(G, OUTPUT);
// }

// void loop() {
//   // ZERO
//   digitalWrite(DP, LOW);
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, HIGH);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, LOW);
//   delay(delayTime);
//   // ONE
//   digitalWrite(C, HIGH);
//   digitalWrite(D, LOW);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, LOW);
//   digitalWrite(F, LOW);
//   digitalWrite(G, LOW);
//   delay(delayTime);
//   // TWO
//   digitalWrite(C, LOW);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, HIGH);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, LOW);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
//   // THREE
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, LOW);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
//   // FOUR
//   digitalWrite(C, HIGH);
//   digitalWrite(D, LOW);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, LOW);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
//   // FIVE
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, LOW);
//   digitalWrite(B, LOW);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
//   // SIX
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, HIGH);
//   digitalWrite(B, LOW);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
//   // SEVEN
//   digitalWrite(C, HIGH);
//   digitalWrite(D, LOW);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, LOW);
//   digitalWrite(G, LOW);
//   delay(delayTime);
//   // EIGHT
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, HIGH);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
//   // NINE
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   delay(delayTime);
// }

// // 4-DIGIT YEAR
// //? START TIME AT 1000, 500, 100, 5, 1
// int A = 2;
// int B = 7;
// int C = 11;
// int D = 9;
// int E = 8;
// int F = 3;
// int G = 12;
// int DP = 10;
// int D1 = 4;
// int D2 = 5;
// int D3 = 6;
// int D4 = 13;
// int delayTime = 1;

// void setup() {
//   pinMode(A, OUTPUT);
//   pinMode(B, OUTPUT);
//   pinMode(C, OUTPUT);
//   pinMode(D, OUTPUT);
//   pinMode(E, OUTPUT);
//   pinMode(F, OUTPUT);
//   pinMode(G, OUTPUT);
//   pinMode(DP, OUTPUT);
//   pinMode(D1, OUTPUT);
//   pinMode(D2, OUTPUT);
//   pinMode(D3, OUTPUT);
//   pinMode(D4, OUTPUT);
// }

// void loop() {
//   // FIRST DIGIT
//     digitalWrite(C, HIGH);
//   digitalWrite(D, LOW);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, LOW);
//   digitalWrite(F, LOW);
//   digitalWrite(G, LOW);
//   digitalWrite(D1, LOW);
//   digitalWrite(D2, HIGH);
//   digitalWrite(D3, HIGH);
//   digitalWrite(D4, HIGH);
//   delay(delayTime);
//   // SECOND DIGIT
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   digitalWrite(D1, HIGH);
//   digitalWrite(D2, LOW);
//   digitalWrite(D3, HIGH);
//   digitalWrite(D4, HIGH);
//   delay(delayTime);
//   // THIRD DIGIT
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, HIGH);
//   digitalWrite(G, HIGH);
//   digitalWrite(D1, HIGH);
//   digitalWrite(D2, HIGH);
//   digitalWrite(D3, LOW);
//   digitalWrite(D4, HIGH);
//   delay(delayTime);
//   // FOURTH DIGIT
//   digitalWrite(C, HIGH);
//   digitalWrite(D, HIGH);
//   digitalWrite(E, LOW);
//   digitalWrite(B, HIGH);
//   digitalWrite(A, HIGH);
//   digitalWrite(F, LOW);
//   digitalWrite(G, HIGH);
//   digitalWrite(D1, HIGH);
//   digitalWrite(D2, HIGH);
//   digitalWrite(D3, HIGH);
//   digitalWrite(D4, LOW);
//   delay(delayTime);
// }

// //* Countdown with buzzer
// #include <SevSeg.h>

// int A = 2;
// int B = 7;
// int C = 11;
// int D = 9;
// int E = 8;
// int F = 3;
// int G = 12;
// int DP = 10;
// int D1 = 4;
// int D2 = 5;
// int D3 = 6;
// int D4 = 13;
// int userInput;
// int buzzPin = A3;
// int delayTime = 5;
// #include "SevSeg.h"

// SevSeg sevseg;

// byte numDigits = 4;
// byte digitPins[] = { D1, D2, D3, D4 };
// byte segmentPins[] = { A, B, C, D, E, F, G, DP };
// bool resistorsOnSegments = true;
// byte hardwareConfig = COMMON_CATHODE;

// void setup() {
//   sevseg.begin(hardwareConfig, numDigits, digitPins, segmentPins, resistorsOnSegments);
//   sevseg.setBrightness(90);
//   Serial.begin(9600);
// }

// void loop() {
//   Serial.println('Set a timer for seconds, maximum: 9999');
//   while (Serial.available() == 0) {
//   }

//   userInput = Serial.parseInt();
//   if (userInput <= 9999 && userInput > 0) {
//     // Serial.println(userInput);
//     while (userInput > 0) {
//       sevseg.setNumber(userInput);

//       refreshAndReset(200);

//       sevseg.refreshDisplay();
//       userInput = userInput - 1;
//       sevseg.refreshDisplay();
//     }

//     analogWrite(buzzPin, 255);
//     delay(5000);
//     analogWrite(buzzPin, 0);
//     sevseg.blank();
//   } else {
//     Serial.println("Maximum number is 9999. Try again pal!");
//   }
// }

// void refreshAndReset(int num) {
//   // repeat num times
//   while(num > 0) {
// sevseg.refreshDisplay();
//       delay(delayTime);
//       num--;
//   }
// }
