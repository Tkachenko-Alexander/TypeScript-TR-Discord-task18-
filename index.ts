











function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
    let r1 = l1;
    let r2 = l2;
    const output: ListNode = new ListNode();
    let runner: ListNode | null = output;

    while(r1 || r2) {
        let digit = (r1?.val || 0) + (r2?.val || 0);
        if (digit >= 10) {
            digit -= 10

            if (r1?.next) {
                r1.next.val++;
            }   else if (r2?.next) {
                r2.next.val++;
            }   else if (r1) {
                r1.next = new ListNode(1);
            }   else if (r2) {
                r2.next = new ListNode(1);
            }
        }
        runner.val = digit;
        if (r1?.next || r2?.next) {
            runner.next = new ListNode();
            runner = runner?.next;
        }
        if (r1) {
            r1 = r1.next;
        }
        if (r2) {
            r2 = r2.next;
        }
    }

    return output;    
};