var partition = function(head, x) {
    let rightPart = [];
    let leftPart = [];
    let curr = head;
    while(curr){
        if(curr.val < x) leftPart.push(curr.val);
        else rightPart.push(curr.val);
        curr = curr.next;
    }
    leftPart = leftPart.concat(rightPart);
    curr = head;
    let i = 0;
    while(curr){
        curr.val = leftPart[i];
        curr = curr.next;
        i++;
    }
    return head;
};