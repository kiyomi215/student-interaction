export function addStudent(student) {
	return {
		type: 'addStudent',
		student
	}
}

export function deleteStudent(id) {
	return {
		type: 'deleteStudent',
		id
	}
}