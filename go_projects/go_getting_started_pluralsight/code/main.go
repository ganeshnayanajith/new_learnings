package main

import (
	"ganeshnayanajith/new_learnings/tree/main/go_projects/go_getting_started_pluralsight/code/controllers"
	"net/http"
)

type HTTPRequest struct {
	Method string
}

func main() {

	controllers.RegisterControllers()
	http.ListenAndServe(":3000", nil)

}
