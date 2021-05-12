<template>
    <b-container class="p-5 h-100">
        <div class=" h-100 shadow bg-white rounded">
            <div class="search-container">
                <div>

                </div>
            </div>
            <b-list-group class="h-100 rounded">
                <vuescroll :ops="ops">
                    <b-list-group-item v-for="student in students" :key="student.id" >
                        <Student :data="student" />
                    </b-list-group-item>
                </vuescroll>
            </b-list-group>
        </div>
    </b-container>
</template>

<script>
import vuescroll from 'vuescroll';
import Student from '../components/Student'
import StudentService from '../services/StudentService'
export default {
    name: 'Students',
    components: {
        vuescroll,
        Student
    },
    data() {
        return {
            ops: {
                vuescroll: {
                    wheelScrollDuration: 300,
                },
                scrollPanel: {
                    speed: 3000,
                    easing: 'easeInQuad'
                },
                rail: {
                },
                bar: {
                    background: '#ccc',
                }
            },
            students: []
        }
    },
    async created() {
        this.students = await StudentService.getStudents();
    }
}
</script>