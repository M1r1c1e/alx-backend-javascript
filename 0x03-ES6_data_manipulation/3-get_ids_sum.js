export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (preStudent, currStudent) => preStudent.id || preStudent + currStudent.id,
      0,
    );
  }
  return 0;
}
