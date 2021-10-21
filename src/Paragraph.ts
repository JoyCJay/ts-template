import { categoryTagMap, Tag, TagType, yearTagMap } from "./Tag";
import { TagHost } from "./TagHost";

// default should be incremental
export interface Reordernable<T> {
    compareTo(comparedTarget: T, type: TagType, reverse?: boolean): number
}

export class Paragraph extends TagHost implements Reordernable<Paragraph> {
    private _content: string;

    constructor(content: string, tags?: Tag[]) {
        super();
        this._content = content

        if (tags && tags.length > 0) {
            this.tags = tags; // instead of super.tags!!!
        }
    }

    
    public set content(v : string) {
        this._content = v;
    }
    

    compareTo(comparedParagraph: Paragraph, tagType: TagType, reverse = false): number {
        const mySortTag: Tag = this.tags.find(t => t.tagType === tagType);
        const targetSortTag: Tag = comparedParagraph.tags.find(t => t.tagType === tagType);
        // console.log('Paragraph compareTo', mySortTag, targetSortTag);

        let result = mySortTag.compareTo(targetSortTag, null);

        if (reverse === true) {
            result = (-1) * result;
        }
        return result;
    }
}

/**
 * P1 with test
 */
 export const p1 = new Paragraph('cj journal en 2019');
 const testTag = new Tag('test');
 // Add Tag
 p1.addTag(yearTagMap.get(2019));
 p1.addTag(categoryTagMap.get('journal'));
 p1.addTag(testTag);
 
 // Remove Tag
//  p1.removeTag(new Tag('2022')); // error: no 2022 tag in the paragraph
 p1.removeTag(testTag);
 
 /**
  * P2
  */
  export const p2 = new Paragraph('cj journal en 2020', [
     yearTagMap.get(2020),
     categoryTagMap.get('journal')
 ]);
 
 /**
  * P3
  */
  export const p3 = new Paragraph('cj journal en 2021', [
     yearTagMap.get(2021),
     categoryTagMap.get('journal')
 ])
 
 export const p4 = new Paragraph('cj these en 2021', [
     yearTagMap.get(2021),
     categoryTagMap.get('these')
 ])

 export const p0 = new Paragraph('paragraph for cj main section');
 
//  console.log('initialize paragraphs', p1, p2, p3, p4, '\n', '\n');