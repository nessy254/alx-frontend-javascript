export default function getStudentIdsSum(myArray) {
  myArray.reduce((total, student) => total + student.id, 0)
}
