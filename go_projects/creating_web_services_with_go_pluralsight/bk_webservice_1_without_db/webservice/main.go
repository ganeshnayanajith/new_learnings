package main

import (
	"ganeshnayanajith/new_learnings/tree/main/go_projects/creating_web_services_with_go_pluralsight/webservice/product"
	"net/http"
)

const apiBasePath = "/api"

func main() {
	product.SetupRoutes(apiBasePath)
	http.ListenAndServe(":3000", nil)
}
