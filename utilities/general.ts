import { faker } from '@faker-js/faker'
import { NaveensPageUserData } from '../types/naveensPageUserData.ts'

export function randomEmailGenerator() {
    return Math.random().toString(36).substring(2, 8) + "@gmail.com"
}

export const randomUserDataGeneratorUsingFaker: NaveensPageUserData[] = [
    {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        telephone: faker.phone.number({ style: "national" }),
        password: faker.internet.password()
    },
    {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        telephone: faker.phone.number({ style: "national" }),
        password: faker.internet.password()
    }
]
