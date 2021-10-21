import { Tag } from "./Tag";

interface isTagHostExportable{
    isTagHostExportable(tag: Tag[]) : {
        exportable: boolean,
        hostRef: TagHost
    }
}

export abstract class TagHost implements isTagHostExportable {
    private _tags: Tag[] = []
    _id: any;
    static latestId: any;

    constructor() {
        this._id = TagHost.incrementId()
    }
    
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    public set tags(tags : Tag[]) {
        this._tags = tags;
    }
    
    public get tags() : Tag[] {
        return this._tags;
    }

    isTagHostExportable(targetTags: Tag[]): {
        exportable: boolean,
        hostRef: TagHost
    } {
        if (targetTags.length === 0 || this.tags.length === 0) {
            return {
                exportable: true,
                hostRef: this
            };
        };

        const hasCommonTags = this.tags.some(selfTag => {
            const idx = targetTags.findIndex(targetTag => targetTag.value === selfTag.value);
            return idx >=0;
        });

        return {
            exportable: hasCommonTags,
            hostRef: this
        }
    }

    addTag(newTag: Tag): number {
        this._tags.push(newTag);
        return this._tags.length;
    }

    removeTag(t: Tag): number {
        const idx = this.tags.findIndex((tag) => {
            return tag.value === t.value
        });
        if (idx >= 0) {
            this._tags.splice(idx, 1);
        } else {
            // console.warn('cj debug', 'no tag', t, 'in', this.tags);
            throw new Error("no tag in the host");
        }
        return this._tags.length;
    }
}