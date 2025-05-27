interface Student {
    firtsName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firtsName: "Carlos",
    lastName: "Valentin",
    age: 20,
    location: "Puerto Rico"
}

const student2: Student = {
    firtsName: "Juan",
    lastName: "Perez",
    age: 20,
    location: "Puerto Rico"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");
