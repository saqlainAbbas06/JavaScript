function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}
function contains(list, element) {
  let curr = list.head;
  while (curr !== null) {
    if (curr.element === element) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}
function getAt(list, index) {
  let curr = list.head;
  let listIndex = 0;
  
  while (curr !== null) {
    if (listIndex === index) {
      return curr.element; 
    }
    listIndex++;
    curr = curr.next;
  }
  return undefined; 
}

function insertAt(list, index, element) {
  if (index < 0 || index > list.length) return;

  let node = { element, next: null };

  if (index === 0) {
    node.next = list.head;
    list.head = node;
  } else {
    let curr = list.head;
    let previous = null;
    let listIndex = 0;

    while (listIndex < index) {
      previous = curr;
      curr = curr.next;
      listIndex++;
    }

    node.next = curr;
    previous.next = node;
  }
  
  list.length++; 
}

function removeAt(list, index) {

  if (index < 0 || index >= list.length || list.head === null) return;


  if (index === 0) {
    list.head = list.head.next;
  } else {
    let curr = list.head;
    let previous = null;
    let listIndex = 0;

    while (listIndex < index) {
      previous = curr;
      curr = curr.next;
      listIndex++;
    }

 
    previous.next = curr.next;
  }
  
  list.length--; 
}

function clear(list) {
  list.head = null;
  list.length = 0; 
}