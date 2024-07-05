export default function getStudentIdsSum(myArray) {
  return myArray.reduce((total, student) => total + student.id, 0);
}
