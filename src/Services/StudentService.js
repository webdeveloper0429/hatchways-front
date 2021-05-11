import apiClient from './api.client';


class StudentService {
    getStudents() {
        return apiClient.get('students').then((response) => {
            return response.data.students;
        })
    }
}

export default new StudentService();