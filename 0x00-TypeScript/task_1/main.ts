export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Diego',
    fullTimeEmployee: false,
    lastName: 'Tardio',
    location: 'Stamford',
    contract: false
};

console.log(teacher3);
