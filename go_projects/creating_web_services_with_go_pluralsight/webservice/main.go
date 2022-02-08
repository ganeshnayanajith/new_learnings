package main

import (
	"ganeshnayanajith/new_learnings/tree/main/go_projects/creating_web_services_with_go_pluralsight/webservice/database"
	"ganeshnayanajith/new_learnings/tree/main/go_projects/creating_web_services_with_go_pluralsight/webservice/product"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

const apiBasePath = "/api"

func main() {
	database.SetupDatabse()
	product.SetupRoutes(apiBasePath)
	http.ListenAndServe(":3000", nil)
}
