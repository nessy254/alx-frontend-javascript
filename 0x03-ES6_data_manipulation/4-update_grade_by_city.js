export default function updateStudentGradeByCity(myArray, city, newGrades) {
  return myArray
    .filter((student) => student.location === city);
    .map((student) => student.grade === newGrades);
}
