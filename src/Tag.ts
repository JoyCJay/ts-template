import { Reordernable } from "./Paragraph";

export enum TagType{
    DEFAULT = 0,
    YEAR = 1,
    CATEGORY = 2
}

export class Tag implements Reordernable<Tag> {
    public tagType = TagType.DEFAULT;
    private _value:string;

    constructor(value:string) {
        this._value = value;
    }
    compareTo(comparedTarget: Tag, type: TagType): number {
        let result = 0;
        // string can also be compared
        result = (comparedTarget.value > this.value)? 1 : -1;
        return result;
    }

    public get value() : string {
        return this._value;
    }
}

// Year Tag
export class YearTag extends Tag {
    public tagType = TagType.YEAR;

    constructor(year: number) {
        super(year.toString());
    }

    // override
    compareTo(comparedTarget: Tag, type: TagType): number {
        return parseInt(comparedTarget.value) - parseInt(this.value);
    }
}

export const yearTagMap = new Map<number, YearTag>([
    [2019, new YearTag(2019)],
    [2020, new YearTag(2020)],
    [2021, new YearTag(2021)],
])

// Category Tag
export class CategoryTag extends Tag {
    public tagType = TagType.CATEGORY;

    constructor(category: string) {
        super(category);
    }
}

export const categoryTagMap = new Map<string, CategoryTag>([
    ['these', new CategoryTag('these')], // paper/thesis
    ['presse', new CategoryTag('presse')], // news
    ['commentaire', new CategoryTag('commentaire')], // essay
    ['journal', new CategoryTag('journal')], // diary
])
