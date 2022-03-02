class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null, arr?: number[]) {
		if (!arr) {
			this.val = (val===undefined ? 0 : val)
			this.next = (next===undefined ? null : next)
		} else {
			this.val = arr.shift();
			let current: any = this;
			while (arr.length) {
				current.next = new ListNode(arr.shift());
				current = current.next
			}
		}
	}

	/**
	 * this will be the last node
	 * @returns newHead ListNode reference
	 */
	reverse() {
		let prev = null;
		let current: any = this;
		while (current) {
			const next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return prev;
	}
}

const l1 = new ListNode(null, null, [9,9]);
const l2 = new ListNode(null, null, [9,9,9,9]);
