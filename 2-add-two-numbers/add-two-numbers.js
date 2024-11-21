/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
   let link1 = l1;
    let link2 = l2;
    let carry = 0;  
    let l3 = new ListNode(0);  
    let link3 = l3;
    
    while (link1 || link2 || carry) {  
        let sum = (link1 ? link1.val : 0) + (link2 ? link2.val : 0) + carry;
        carry = Math.floor(sum / 10);  
        link3.val = sum % 10;  
        
        
        link1 = link1 ? link1.next : null;
        link2 = link2 ? link2.next : null;
        
        
        if (link1 || link2 || carry) {
            link3.next = new ListNode(0);
            link3 = link3.next;
        }
    }
    
    return l3;
};