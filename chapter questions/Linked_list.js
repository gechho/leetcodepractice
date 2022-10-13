// Delete Node in a Linked List
/*
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.
Custom testing:

For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 var deleteNode = function(node) {
    // Since we know input node is not last node, so nextNode will not be null
    nextNode = node.next;
    console.log(nextNode);
    // Step 2
    node.val = nextNode.val;
    console.log(node.val);
    // Step 3
    node.next = nextNode.next;
    console.log(node.next)
    nextNode.next = null;
    console.log(nextNode);
    delete(nextNode);
    console.log(node);
};


// console.log(delete([4,5,1,9],5));

/* @param {ListNode} node
* @return {void} Do not return anything, modify node in-place instead.
*/


var head; // head of list
 
    /* Linked list Node */
    class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
 
    /*
     * Given a key, deletes the first occurrence of key in linked list
     */
    function deleteNode(key) {
        // Store head node
        var temp = head, prev = null;
 
        // If head node itself holds the key to be deleted
        if (temp != null && temp.data == key) {
            head = temp.next; // Changed head
            return;
        }
 
        // Search for the key to be deleted, keep track of
        // the previous node as we need to change temp.next
        while (temp != null && temp.data != key) {
            prev = temp;
            temp = temp.next;
        }
 
        // If key was not present in linked list
        if (temp == null)
            return;
 
        // Unlink the node from linked list
        prev.next = temp.next;
    }
 
    /* Inserts a new Node at front of the list. */
    function push(new_data) {
        var new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }
 
    /*
     * This function prints contents of linked list starting from the given node
     */
    function printList() {
         tnode = head;
        while (tnode != null) {
            console.log(tnode.data + " ");
            tnode = tnode.next;
        }
    }
 
    /*
     * Driver program to test above functions. Ideally this function should be in a
     * separate user class. It is kept here to keep code compact
     */
     
         
        push(7);
        push(1);
        push(3);
        push(2);
 
       console.log("Created Linked list is:<br/>");
        printList();
 
        deleteNode(1); // Delete node with data 1
 
        console.log("<br/>Linked List after Deletion of 1:<br/>");
        printList();


// Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
var removeNthFromEnd = function(head, n) {
    let count=0;
    var temp=head;

    while(temp.next !=null){
        count++;
        temp= temp.next;
    }

    let current = head;
    if (count === n-1) return head.next;
    
    for(i=0;i<count-n;i++){
        current = current.next;
    }


    current.next = current.next&&current.next.next;

  
    return head;    

    
};