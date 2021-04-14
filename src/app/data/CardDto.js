import {TagDto} from "./TagDto";

export class CardDto {
    id: number
    name: string
    url: string
    rating: string
    tags: TagDto[]

    static fromValues(obj: any[]):CardDto[] {
        return obj.map(v => this.fromValue(v));
    }

    static fromValue(value: any):CardDto|null {
        if(value) {
            const item = new CardDto()
            item.id = value.id
            item.name = value.name
            item.url = "https://picsum.photos/seed/" + value.id + "/250/120"

            if(value.tags) {
                item.tags = value.tags.map(t => TagDto.fromValue(t))
            }

            return item;
        }

        return null;
    }

    static getDummy() {
        return CardDto.fromValue({
            id: 0,
            name: "Loading..",
            rating: "5ish",
            tags: [{id: 0, name: "Hold on"}]
        })
    }
}