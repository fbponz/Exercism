//Package weather provides tools to generate string, from two strings CurrentCondition and CurrentLocation.
package weather

//CurrentCondition represent a status using a string.
var CurrentCondition string

//CurrentLocation is the place that we are informing the weather condition represented in a string.
var CurrentLocation string

//Forecast returns a string that represents the weather forecast of a location generated using the CurrentCondition and CurrentLocation.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}