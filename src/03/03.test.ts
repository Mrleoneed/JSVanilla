import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType
beforeEach(() => {

    student = {
        id: 1,
        name: "Leo",
        age: 30,
        isActive: false,
        address: {
            streetTitle: 'Lenina 1',
            city: {
                title: 'Moscow',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 3,
                title: 'JS',
            },
            {
                id: 4,
                title: 'React',
            }
        ]

    }
})


test('Skill added to student', () => {
    expect(student.technologies.length).toBe(4)
    addSkill(student, 'Redux')

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[3].title).toBeDefined()
})


test('Student is active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('Student live in city', () => {
    expect(student.isActive).toBe(false)
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')
    expect(result1).toBe(true)
    expect(result2).toBe(false)
})
