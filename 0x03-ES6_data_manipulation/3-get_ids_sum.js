export default function getStudentIdsSum(ListStudents) {
  if (Array.isArray(ListStudents)) {
    return ListStudents.reduce((totalStudent, student) => totalStudent + student.id, 0);
  }
  return 0;
}
