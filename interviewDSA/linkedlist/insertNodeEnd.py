class Node:
  def_init_(self,data):
  self.data = data
  self.next = None



# creating 4 different nodes 
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)

# connecting  a node to form of liked list

node1.next = node2
node2.next = node3
node3.next = node4

# Adding new node in the end of linkedlist
new_node = Node(50)
head = node1
current = head

while current.next is not None:
  current = current.next
current.next = new_node


# printing the linked list
current = head
while current is not None:
  print(current.data, end= "->")
  current = current.next
print("None")