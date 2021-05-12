<template>
    <div class="d-flex">
        <b-avatar class="mr-3" :src="student.pic" size="6rem"></b-avatar>
        <div class="">
            <h3 class="font-weight-bold">{{ student.firstName }} {{ student.lastName }}</h3>
            <div>email: {{ student.email }}</div>
            <div>company: {{ student.company }}</div>
            <div>skill: {{ student.skill }}</div>
            <div>average: {{ average.toFixed(3) }}%</div>
            <div v-if="expanded">
                <div v-for="(grade, i) in student.grades" :key="i">
                    <span class="mr-3">Test {{ i + 1 }}:</span> {{ grade }} %
                </div>
            </div>
        </div>
        <div class="ml-auto">
            <b-icon v-if="expanded" 
                icon="dash-square"
                class="expand-icon"
                @click="expanded = !expanded"
            ></b-icon>
            <b-icon v-else
                icon="plus-square"
                class="expand-icon"
                @click="expanded = !expanded"
            ></b-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Student',
    props: {
        data: Object,
    },
    data() {
        return {
            expanded: false,
            student: {
                id: this.data.id,
                firstName: this.data.firstName,
                lastName: this.data.lastName,
                email: this.data.email,
                company: this.data.company,
                pic: this.data.pic,
                skill: this.data.skill,
                grades: this.data.grades,
            }
        }
    },
    computed: {
        average: function () {
            const average = list => list.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr) ) / list.length;
            return this.data.grades ? average(this.data.grades) : 0
        }
    }
}
</script>