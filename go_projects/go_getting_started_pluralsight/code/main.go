package main

import (
	"ganeshnayanajith/new_learnings/tree/main/go_projects/go_getting_started_pluralsight/code/controllers"
	"net/http"
)

func main() {

	controllers.RegisterControllers()
	http.ListenAndServe(":3000", nil)

	/* fmt.Println("Program running..") */

	/* port := 3000
	_, err := startWebServer(port, 2)
	fmt.Println(err) */
	/* port, err := startWebServer(port, 2)
	fmt.Println(port, err) */
	/* err := startWebServer(port, 2)
	fmt.Println(err) */
	/* isStarted := startWebServer(port, 2)
	fmt.Println(isStarted) */
	/* startWebServer(port, 2) */
	/* startWebServer(port) */

	/* u := models.User{
		ID:        2,
		FirstName: "Ganesh",
		LastName:  "Nayanajith",
	}

	fmt.Println(u) */

}

/* func startWebServer(port, noOfRetries int) (int, error) {
	fmt.Println("Server started on port : ", port)
	fmt.Println("Number of retries : ", noOfRetries)
	return port, nil
} */

/* func startWebServer(port, noOfRetries int) error {
	fmt.Println("Server started on port : ", port)
	fmt.Println("Number of retries : ", noOfRetries)
	return errors.New("something went wrong")
} */

/* func startWebServer(port, noOfRetries int) error {
	fmt.Println("Server started on port : ", port)
	fmt.Println("Number of retries : ", noOfRetries)
	return nil
} */

/* func startWebServer(port, noOfRetries int) bool {
	fmt.Println("Server started on port : ", port)
	fmt.Println("Number of retries : ", noOfRetries)
	return true
} */

/* func startWebServer(port, noOfRetries int) {
	fmt.Println("Server started on port : ", port)
	fmt.Println("Number of retries : ", noOfRetries)
} */

/* func startWebServer(port int) {
	fmt.Println("Server started on port : ", port)
} */
