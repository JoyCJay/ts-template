import { p0, p1, p2, p3, p4, Paragraph } from "./Paragraph";
import { categoryTagMap, TagType, yearTagMap } from "./Tag";
import { TagHost } from "./TagHost";

export class Section extends TagHost {
    private _paragraphes: Paragraph[] = [];
    private _subSections: Section[] = [];

    constructor() {
        super();
    }
    
    public get paragraphes(): Paragraph[] {
        return this._paragraphes;
    }

    // methodes about Paragraphes
    addParagraph(p: Paragraph) {
        return this._paragraphes.push(p);
    }

    setParagraphes(ps: Paragraph[]) {
        this._paragraphes = ps;
    }

    editParagraph(idx: number, newParagraphContent: string) {
        this._paragraphes[0].content = newParagraphContent;
    }

    sortParagraphesByTag(tagType: TagType, reverse?: boolean) {
        // bubble sort
        for (let index = this.paragraphes.length - 1; index >= 0 ; index--) {
            for (let idx = 0; idx < index; idx++) {
                const currentParagraph = this.paragraphes[idx];
                const nextParagraph = this.paragraphes[idx + 1];
                const compareResult = currentParagraph.compareTo(nextParagraph, tagType, reverse);
                if (compareResult < 0) {
                    // switch this.paragraphes position reference
                    const tempRef = this.paragraphes[idx];
                    this.paragraphes[idx] = this.paragraphes[idx + 1];
                    this.paragraphes[idx + 1] = tempRef;
                }
            }
        }
    }

    // methodes about subSections
    setSubSections(v : Section[]) {
        this._subSections = v;
    }

    deepTraverseParagraph(callback) {
        this.paragraphes.forEach(p => {
            callback(p, this);
        });

        for (const subSection of this._subSections) {
            subSection.deepTraverseParagraph(callback);
        }
    }

}

export const myDiarySection = new Section();
myDiarySection.tags = [categoryTagMap.get('journal')];
myDiarySection.addParagraph(p1);
myDiarySection.setParagraphes([p2, p1, p3]);

export const my2021Section = new Section();
my2021Section.tags = [yearTagMap.get(2021)];
my2021Section.setParagraphes([p3, p4]);

export const mySection = new Section();
mySection.setParagraphes([p0]);
mySection.editParagraph(0, 'edited paragraph for cj main section');
mySection.setSubSections([myDiarySection, my2021Section]);


// console.log('initialize sections', myDiarySection, '\n', '\n');