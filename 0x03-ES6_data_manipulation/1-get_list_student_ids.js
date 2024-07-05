export default function getListStudentIds(myArray){
  if(!Array.isArray(myArray)) {
    return [];
  }

  return myArray.map(student => student.id)
}
