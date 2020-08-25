package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/apex/gateway"
)

func handler(rw http.ResponseWriter, req *http.Request) {
	log.Printf("> request %s", req.URL.Path)
	rw.Write([]byte("Hello from GO!"))
}

func main() {
	fmt.Println("Starting GO Function")
	addr := ":n/a"
	listener := gateway.ListenAndServe
	if _, isLambda := os.LookupEnv("_LAMBDA_SERVER_PORT"); !isLambda {
		addr = "localhost:8080"
		listener = http.ListenAndServe
	}
	listener(addr, http.HandlerFunc(handler))
}
