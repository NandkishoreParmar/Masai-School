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

head = node1  

# Delete the node from End
current = head
while current.next.next is not None:
  current = current.next
current.next = None


# traverse the linked list
current = head
while current is not None:
  print(current.data, end= "->")
  current = current.next
print("None")