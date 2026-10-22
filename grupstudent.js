const students = [
    {
        "nama": "Mulyono",
        "major": "Fisika"
    },
    {
        "nama": "Citra",
        "major": "Matematika"
    },
    {
        "nama": "Budi",
        "major": "Fisika"
    },
    {
        "nama": "Eka",
        "major": "Seni Rupa"
    }
];

function grouping(students){
    const group ={};
    for (const student of students){
        const major = student.major;

        if (!group[major]){
            group[major] = [];
        }

        group[major].push(student)
    }
    return group;
}
const result = grouping(students)

console.log(result)