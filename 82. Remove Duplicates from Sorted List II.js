/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
deleteDuplicates = (head,ar=[])=> {while(head){ar.push(head.val);head=head.next};res = ar.filter(function(v) {return ar.indexOf(v) == ar.lastIndexOf(v);});h = res.reverse().reduce((acc, curr) => { if (acc == null) {acc = new ListNode(curr); } else {acc = new ListNode(curr, acc);}return acc;}, null);return h }
    
