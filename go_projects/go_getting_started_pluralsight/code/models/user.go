package models

import "errors"

type User struct {
	ID        int
	FirstName string
	LastName  string
}

var (
	users  []*User
	nextID = 1
)

func GetUsers() []*User {
	return users
}

func AddUser(u User) (User, error) {
	if u.ID != 0 {
		return User{}, errors.New("cannot have an ID")
	}
	u.ID = nextID
	nextID++
	users = append(users, &u)
	return u, nil
}
