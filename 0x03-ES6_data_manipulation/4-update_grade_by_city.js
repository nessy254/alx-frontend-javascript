export default function updateStudentGradeByCity(myArray, city, newGrades) {
  return myArray
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = newGrades.find(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
