class Solution:
    def deleteDuplicates(self, head):
        current = head
        while current and current.next:
            if current.data == current.next.data:  # Use `data` instead of `val`
                current.next = current.next.next  # Skip the duplicate node
            else:
                current = current.next  # Move to the next unique node
        return head
