export class TagDto {
    id: number
    name: string

    static fromValue(value: any[]):TagDto {
        const item = new TagDto()
        item.id = value.id
        item.name = value.name

        return item;
    }
}