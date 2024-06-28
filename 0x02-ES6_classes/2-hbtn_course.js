/**
 * Implementing a class named HolbertonCourse.
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - course name.
   * @param {Number} length - the length of the course in months.
   * @param {String[]} students - The names of students.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Getting the name for this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Setting the name for this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Getting the length of this course in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Setting the length of the course in months.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Getting the names of students for this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Setting the names of students for this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
