package techpalace

import (
	"strings"
)

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	return "Welcome to the Tech Palace, " + strings.ToUpper(customer)
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	var borderText string = strings.Repeat("*", numStarsPerLine)
	return borderText + "\n" + welcomeMsg + "\n" + borderText
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	var trimMsg string = strings.TrimSpace(oldMsg)
	return strings.TrimLeft(strings.TrimRight(strings.ReplaceAll(strings.ReplaceAll(trimMsg, "*", ""), "\n", ""), " "), " ")
}
