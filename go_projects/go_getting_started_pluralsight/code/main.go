package main

import (
	"fmt"
	"ganeshnayanajith/new_learnings/tree/main/go_projects/go_getting_started_pluralsight/code/models"
)

func main() {

	fmt.Println("Program running..")

	u := models.User{
		ID:        2,
		FirstName: "Ganesh",
		LastName:  "Nayanajith",
	}

	fmt.Println(u)

}
