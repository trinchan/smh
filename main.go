package main

import (
	"fmt"
	"html/template"
	"log"
	"math/rand"
	"net/http"
	"time"
)

func handler(w http.ResponseWriter, r *http.Request) {
	type Image struct {
		Filename string
	}

	paths := []string{
		"14750326756_c6ebb6fd58_o.jpg",
		"15620064589_8e3128a648_o.jpg",
		"17292164491_aecce9dde4_o.jpg",
		"17841500082_a6d6347e13_o.jpg",
		"18219838406_b096f5d7d0_o.jpg",
		"19050608439_90ef85be7c_o.jpg",
		"19368534318_375bedb815_o.jpg",
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
	http.HandleFunc("/assets/", AssetsHandler)
	http.HandleFunc("/", handler)
	fmt.Println("app running on port 8000")
	http.ListenAndServe("127.0.0.1:8000", nil)
}
