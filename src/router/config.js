import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Award from '../views/Award.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import experience1 from '../views/Experiences/experience1.vue'
import experience2 from '../views/Experiences/experience2.vue'
import experience3 from '../views/Experiences/experience3.vue'
import project1 from '../views/Projects/project1.vue'
import project2 from '../views/Projects/project2.vue'
import project3 from '../views/Projects/project3.vue'
import project4 from '../views/Projects/project4.vue'
import project5 from '../views/Projects/project5.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/award',
        name: 'award',
        component: Award
    },
    {
        path: '/education',
        name: 'education',
        component: Education
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skills
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/experience1',
        name: 'experience1',
        component: experience1
    },
    {
        path: '/experience2',
        name: 'experience2',
        component: experience2
    },
    {
        path: '/experience3',
        name: 'experience3',
        component: experience3
    },
    {
        path: '/project1',
        name: 'project1',
        component: project1
    },
    {
        path: '/project2',
        name: 'project2',
        component: project2
    },
    {
        path: '/project3',
        name: 'project3',
        component: project3
    },
    {
        path: '/project4',
        name: 'project4',
        component: project4
    },
    {
        path: '/project5',
        name: 'project5',
        component: project5
    }

]
export default routes