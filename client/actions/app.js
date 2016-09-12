let nextStudentId = 0;
export const addStudent = (student) => {
	return {
		type: 'ADD_STUDENT',
    id: nextStudentId++,
    student
	}
}

export function deleteStudent(id) {
	return {
		type: 'deleteStudent',
		id
	}
}