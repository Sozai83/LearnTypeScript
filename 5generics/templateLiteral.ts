//Template Literal

type FirstName = 'John' | 'Paul';
type LastName = 'Lennon' | 'McCartney';

//type UserName =  "John-Lennon" | "John-McCartney" | "Paul-Lennon" | "Paul-McCartney"
type UserName = `${FirstName}-${LastName}`;
