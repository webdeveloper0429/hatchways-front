<template>
    <div>
        students
    </div>
</template>

<script>
import StudentService from '../Services/StudentService'
export default {
    name: 'Students',
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