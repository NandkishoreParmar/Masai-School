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

# Adding new node at the beginning

head = node1
new_node =  Node(50)
new_node.next = head
head = new_node


# traverse the linked list
current = head
while current is not None:
  print(current.data, end= "->")
  current = current.next
print("None")