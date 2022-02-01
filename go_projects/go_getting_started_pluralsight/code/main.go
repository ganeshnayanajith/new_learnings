package main

import "fmt"

const (
	/* first  = iota + 6
	second = 2 << iota */

	first = iota
	second
)

const (
	third = iota
	fourth
)

func main() {

	fmt.Println("Program running..")

	fmt.Println(first, second, third, fourth)

	/* const c int = 3
	fmt.Println(c + 3)
	fmt.Println(float32(c) + 1.2) */

	/* const c int = 3
	fmt.Println(c + 3)
	fmt.Println(c + 1.2) */

	/* const c = 3
	fmt.Println(c + 3)
	fmt.Println(c + 1.2) */

	/* const pi = 3.1415
	fmt.Println(pi)
	// pi = 2.5 */

	/* firstName := "Ganesh"
	fmt.Println(firstName)

	ptr := &firstName
	fmt.Println(ptr, *ptr)

	firstName = "Nayanajith"
	fmt.Println(ptr, *ptr) */

	/* firstName := "Ganesh"
	fmt.Println(firstName)

	ptr := &firstName
	fmt.Println(ptr, *ptr) */

	/* var firstName *string = new(string)
	*firstName = "Ganesh"
	fmt.Println(firstName)
	fmt.Println(*firstName) */

	/* var i int
	i = 42
	fmt.Println(i)

	var f float32 = 3.14
	fmt.Println(f)

	firstName := "Ganesh"
	fmt.Println(firstName)

	b := true
	fmt.Println(b)

	c := complex(3, 4)
	fmt.Println(c)

	r, im := real(c), imag(c)
	fmt.Println(r, im) */

}
