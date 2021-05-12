<template>
    <b-container class="p-5 h-100">
        <div class="shadow bg-white rounded h-100">
            <div class="search-container">
                <div class="border-bottom">
                    <b-form-input
                        class="border-0 shadow-none"
                        v-model="name"
                        type="search"
                        placeholder="Search by name"
                    ></b-form-input>
                </div>
                <div class="border-bottom">
                    <b-form-input
                        class="border-0 shadow-none"
                        v-model="tag"
                        type="search"
                        placeholder="Search by tag"
                    ></b-form-input>
                </div>
            </div>
            <div class="student-wrapper">
                <vue-scroll>
                    <b-list-group flush class="">
                        <b-list-group-item v-for="student in filteredStudents(name, tag)" :key="student.id" >
                            <Student :data="student" />
                        </b-list-group-item>
                    </b-list-group>
                </vue-scroll>
            </div>
        </div>
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
            name: '',
            tag: '',
            students: []
        }
    },
    async created() {
        this.students = await StudentService.getStudents();
    },
    computed: {
        filteredStudents: function() {
            return function(name, tag) {
                return this.students.filter(student => {
                    const fullName = student.firstName + ' ' + student.lastName;
                    const tagString = (student.tags && student.tags.length > 0) ? student.tags.join('---') : '';
                    if (!tag && !name) {
                        return this.students
                    } else if (!tag) {
                        return fullName.toLowerCase().includes(name.toLowerCase())
                    } else if (!name) {
                        return tagString.toLowerCase().includes(tag.toLowerCase())
                    } else {
                        return fullName.toLowerCase().includes(name.toLowerCase()) && tagString.toLowerCase().includes(tag.toLowerCase())
                    }
                })
            }
        }
    }
}
</script>