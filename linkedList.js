/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

 'use strict';
var linkedListGenerator = function() {

  var node = {

  };

  var newLinkedList = {};
  var head = null;
  var tail = null;
  var totalNode = 0;

  var link = {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };

  function _getHead() {
    return head;
  }

  function _getTail() {
    return tail;
  }

  function _add(value) {
    var newNode = {
      value : value,
      next : null
    };

    if (_getTail() === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    ++totalNode;

    return tail;
  }

  function _get(number) {
    if (totalNode < 0 || number >= totalNode) {
      return false;
    } else {
      if (number === 0) {
        //theres a node connecting to it
        return head;
      }
      //iterate through the linked list
      var curNode = head.next;
      for (var counter = 1; counter < number; counter++) {
        // found it return that Node
        if (counter === number) {
          return curNode;
        }
        curNode = curNode.next;
      }
    }
    return curNode;
  }

  function _remove(number) {
    var pNode = _get(number-1);
    var aNode = _get(number+1);
    //user tries to remove node outside linked list
    if (totalNode < 0 || number >= totalNode) {
      return false;
    } else {

       console.log('this is previous:',pNode.next);
       console.log('this is after1:',aNode);

    }
  }

 function _insert(value,index) {
    //user tries to append node to end of linked list
    // if (index === tail) {
    //   return false;
    // } else {

    // }
  }
  return link;

};

console.log(linkedListGenerator);
//link._getHead();
