# Peak and Plate Predictor

### Description
Pico y Placa Predictor is an application designed to determine if a vehicle can be in circulation on a specific date and time, based on “Pico y Placa” restrictions. These restrictions are measures implemented in some cities to reduce traffic congestion by limiting the circulation of vehicles during rush hours according to the last digit of their license plate.
### Features
- Object Oriented Code: Clean and maintainable design following best practices.
- Automated Testing: Use of Jest to ensure code reliability.
- Accurate Determination: Accurate calculation of constraints based on local regulations.

#### Table of Contents
- Installation
- Usage
- Example
- Restriction Schedule
- Testing
- Version Control
- Contributions
- Licensing
- Author

### Installation
Make sure you have Node.js installed.
- Clone the repository:

```
git clone https://github.com/CristianDTV/pico-y-placa-predictor.git
cd pico-placa-predictor

```
### Install the dependencies:

```
npm install
```
### Use
You can use the Peak and Plate Predictor by importing the PicoPlacaPredictor class into your Node.js application.

### Example
```
const PicoPlacaPredictor = require('./src/PicoPlacaPredictor');

// Input parameters
const licensePlate = 'ABC-1234';
const date = '2024-09-16'; // Format: YYYYY-MM-DD
const time = '08:00'; // Format: HH:MM (24 hours)

// Create an instance of the predictor
const predictor = new PicoPlacaPredictor(licensePlate, date, time);

// Checks if the vehicle can be on the road
if (predictor.canBeOnRoad()) {
  console.log('The vehicle can be on the road.');
} else {
  console.log('The vehicle is restricted and cannot be on the road.');
}
```
## Restriction Schedule

Pico y Placa restrictions are based on the following rules:
![image](https://github.com/user-attachments/assets/1887ce27-f280-482d-8a58-0fe28a5265a5)


### Weekdays (Monday through Friday):

- Restrictions during two peak periods:
  - Morning: 06:00 AM to 09:30 AM
  - Afternoon: 04:00 PM to 08:00 PM

- Restrictions are determined by the last digit of the license plate and the day of the week:
  - Monday: Plates ending in 1 & 2
  - Tuesday: Plates ending in 3 & 4
  - Wednesday: License plates ending in 5 & 6
  - Thursday: Plates ending in 7 & 8
  - Friday: Plates ending in 9 & 0

### Weekends (Saturday and Sunday):

- No restrictions.

## Testing
Automated tests are provided to ensure that the predictor works correctly in various scenarios.

#### Test Execution
Installs Jest (if not already installed):

```
npm install --save-dev jest
```
#### Run the tests:

```
npm test
```
This command will run all test cases defined in PicoPlacaPredictor.test.js.

## Test Cases
The test suite includes scenarios such as:

- Restricted vehicle during peak hours on a restricted day.
- Vehicle allowed off-peak.
- Vehicle allowed on weekends.
- Limit cases at the beginning and end of restriction periods.

## Version Control
This project uses Git for version control. The commit history reflects incremental development with meaningful messages, making it easy to track changes and updates.

## Contributions
Contributions are welcome! To contribute:

1. make a fork of the repository.
2. Create a new branch:

```
git checkout -b feature/tu-new-functionality
```
3. Make your changes and commit:

```
git commit -m 'Add your message here'.
```
4. Push to the branch:

```
git push origin origin feature/your-new-functionality
```
5. Open a pull request.

## License
This project is licensed under the MIT License.

 ## Author
Cristian David Trávez

GitHub: CristianDVT

Email: cristian.travez@epn.edu.ec


