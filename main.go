package main

import (
	"flag"
	"html/template"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"strings"
	"time"
)

var addr string

func handler(w http.ResponseWriter, r *http.Request) {
	type Image struct {
		Filename string
	}

	var paths []string
	dir, err := ioutil.ReadDir("assets/")
	if err != nil {
		log.Println("ERROR: ", err)
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}
	for _, f := range dir {
		if !f.IsDir() && strings.HasSuffix(f.Name(), "jpg") {
			paths = append(paths, f.Name())
		}
	}

	rand.Seed(time.Now().UTC().UnixNano())
	image := Image{paths[rand.Intn(len(paths))]}

	t, err := template.ParseFiles("index.html")
	if err != nil {
		log.Println("ERROR: ", err)
	}
	t.Execute(w, image)
}

// AssetsHandler handles serving static files
func AssetsHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Serving " + r.URL.Path[1:])
	http.ServeFile(w, r, r.URL.Path[1:])
}

func main() {
	flag.StringVar(&addr, "addr", "127.0.0.1:8080", "address to run on")

	http.HandleFunc("/assets/", AssetsHandler)
	http.HandleFunc("/", handler)
	log.Printf("Running server on addr %s", addr)
	http.ListenAndServe(addr, nil)
}
