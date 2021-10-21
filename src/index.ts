import { p0, p1, p2, p3, p4, Paragraph } from "./Paragraph"
import { my2021Section, myDiarySection, mySection, Section } from "./Section";
import { categoryTagMap, Tag, TagType, yearTagMap } from "./Tag";
import { TagHost } from "./TagHost";

console.time('process')

// console.log(p0, p1, p2, p3, p4, mySection, my2021Section, myDiarySection);
// testSortParagraphesByTag();
// testExport();

console.timeEnd('process')

function testSortParagraphesByTag() {
    console.log("===============my2021Section incremental sort by category=========================");
    console.log('my2021Section before sort:', my2021Section);
    my2021Section.sortParagraphesByTag(TagType.CATEGORY);
    console.log('my2021Section after sort:', my2021Section);

    console.log("===============myDiarySection incremental sort by year=========================");
    console.log('myDiarySection before sort:', myDiarySection);
    myDiarySection.sortParagraphesByTag(TagType.YEAR);
    console.log('myDiarySection after sort:', myDiarySection);

    console.log("===============myDiarySection decremental sort by year=========================");
    console.log('myDiarySection before sort:', myDiarySection);
    myDiarySection.sortParagraphesByTag(TagType.YEAR, true);
    console.log('myDiarySection after sort:', myDiarySection);
}

function testExport() {
    const resultSet = new Set();
    const result = [];
    const targetTags = [
        yearTagMap.get(2021),
        categoryTagMap.get('journal')
    ];

    const deepTraverseCallBack = (p: Paragraph, hostRef: TagHost) => {
        if (p.isTagHostExportable(targetTags).exportable && !resultSet.has(p._id)) {
            result.push(p);
            resultSet.add(p._id);
        }
        if (hostRef.isTagHostExportable(targetTags).exportable && !resultSet.has(hostRef._id)) {
            result.push(hostRef);
            resultSet.add(hostRef._id);
        }
    };
    mySection.deepTraverseParagraph(deepTraverseCallBack);
    console.log(result);
}
