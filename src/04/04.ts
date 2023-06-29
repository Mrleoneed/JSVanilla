const ages = [18, 20, 90, 100, 1, 5, 4, 7, 75]

type CourseType = {
    title: string
    price: number
}

const predicate = (age: number) => {
    return age > 90;

}

const aldAges = [100]  // >90

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = []