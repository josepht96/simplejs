package main

import (
	"fmt"
)

func main() {
	// Get a greeting mesage and print it.
	message := postgresgo.getSensors()
	fmt.Println(message)
}
