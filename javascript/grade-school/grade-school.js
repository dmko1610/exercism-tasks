export default class GradeSchool {
  constructor() {
    this._students = {};
  }

  add(name, grade) {
    this._students[grade] = (this._students[grade] || []).concat(name).sort();
  }

  roster() {
    return JSON.parse(JSON.stringify(this._students));
  }

  grade(grade) {
    return Array.from((this._students[grade] && this._students[grade].sort()) || []);
  }
}

let school = new GradeSchool();

console.log(school.grade(1));
