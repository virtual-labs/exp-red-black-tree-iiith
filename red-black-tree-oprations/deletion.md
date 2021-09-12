
<iframe src="https://www.youtube.com/embed/ViCPHRlUofY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Recap of Deletion in a Binary Search Tree

In a Binary Search Tree, we end up deleting a node which is leaf or has one child.

The internal nodes are deleted by replacing it by its inorder successor.

### Deletion in a Red Black Tree

Initially, we will delete a node just like we delete a node in a normal binary search tree. Here are the cases we will look at:

**1) Red leaf node**

**2) Black node, with one red child node**

**3) Black leaf node**

   - In fithe rst case, the normal binary search tree delete is sufficient. Removing a red node does not change the black depths of any node, nor create a red child for any red node.
   - In the second case, after we complete the binary search tree delete, we must simply recolor the child node of the deleted node to black. Changing this color adds one to the black depths of each node in the subtree of the deleted node, restoring the equality of the black depths of all external nodes. Also, changing a node to black does not violate any of the other Red-Black Tree specifications.
   - Neither of the strategies mentioned above are adequate for dealing with the third case. Instead, when we patch in the child of the deleted node in this case, in order to temporarily preserve the black depth property, we will color this child node a fictitious "double black" color.
   - Before we discuss how to deal with "double black" nodes, let's real quickly justify why the cases above are the only cases we will deal with. First off, we will only delete nodes with 0 or 1 child. Neither colored node can have one black child. If it did, the black height of the node's null child would not be proper. Further more, a red node can NOT have a red child. These observations narrow the cases to the situations listed above.
   - The remaining cases with this "double black" node can be categorized as follows:
    1) The sibling of the "double black" node is black and has a red child.
    2) The sibling of the "double black" node is black and both children are black.
    3) The sibling of the "double black" node is red.
    (Note that initially, even though the double black node is a null node, after starting the recoloring/restructuring process, we may create a double black node that is NOT null.)
   - To deal with each of these situations, let's first set up names for all of the important nodes:
    1) Let the child of the deleted node, which is colored "double black" be r.
    2) Let y be the sibling of r.
    3) Let z be a child of y, in each case, the specific child will be designated.
    4) Let x be the parent of y.

**Case 1**: y is black and has a red child z.

This case corresponds to the transfer operation in a 2-4 Tree delete. Take the nodes, x, y, and z and relabel them a, b, and c, in their inorder ordering. Place b where x used to be, and then have a and c be the left and right children of x, respectively. Color a and c black, and color b whatever color x USED to be. This eliminates the "double black" problem, so we can stop here.

**Case 2:** y is black and both of its children are as well.

This case corresponds to a fusion operation in a 2-4 Tree. We deal with this case by just recoloring, instead of making any structural changes to the tree. In particular, we will color r black, (changing it from "double black") and then color y red. What this does is subtract one from the black depth of every external node in the subtree of x. To compensate for this, we must change x from red to black. BUT, this only works if x was red to begin with!!! If it's not, to maintain the "black depth" at the external nodes in the subtree rooted at x, we must color x "double black." In essence, if this occurs, we have pushed the "double black" node up the tree, much like a fusion operation can propogate another fusion operation. 
