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
//Merge Two Sorted Lists
/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};



var middle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//Reverse Linked List
/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/
var reverse = function(head) {
    let prev = null;
    let cur = head;
    while(cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};

//Palindrome Linked List
/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
*/
var isPalindrome = function(head) {
    let mid = middle(head);
    let h1 = head;
    let h2 = reverse(mid);
    
    while(h1 && h2) {
        if(h1.val != h2.val) return false;
        h1 = h1.next;
        h2 = h2.next;
    }
    return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//Linked List Cycle
/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    } 
    return false;
};