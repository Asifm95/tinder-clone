
export class Profiles {
    // id: number;
    name: string;
    age: number;
    bio: string;
    title: string;
    school: string;
    company: string;
    gender: string;
    photos: string[];


    constructor(name: string, age: number, bio: string,
        title: string, school: string, company: string, gender: string, photos: string[] ) {
        this.name = name;
        this.age = age;
        this.bio = bio;
        this.title = title;
        this.company = company;
        this.school = school;
        this.gender = gender;
        this.photos = photos;
    }
}
