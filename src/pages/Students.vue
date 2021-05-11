<template>
    <b-container class="p-3">
        <b-list-group class="h-100">
            <b-list-group-item v-for="student in students" :key="student.id" >
                <Student :data="student" />
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
import Student from '../components/Student'
import StudentService from '../services/StudentService'
export default {
    name: 'Students',
    components: {
        Student
    },
    data() {
        return {
            students: []
        }
    },
    async created() {
        this.students = await StudentService.getStudents();
    }
}
</script>