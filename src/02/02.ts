type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>

}


const student: StudentType = {
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

