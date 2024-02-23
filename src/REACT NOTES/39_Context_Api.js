/*
CONTEXT FOLLOW THREE PARTS :-

1) PROVIDER
const PostContext = createContext() // returns component show name of variable storing should have capital name.

2) PROVIDE VALUE TO CHILD COMPONENTS

POST CONTEXT
<PostContext.Provider value={{
  posts: searchedPost,
  onClearPost: handleClearPost,
  : searchedPost,
  onAddPost: handleAddPost,
}}>
jsx in between
</PostContext.Provider>


SEARCH CONTEXT
<PostContext.Provider value={{
 searchQuery,
 setSearchQuery
}}>
jsx in between
</PostContext.Provider>
NOTE:
1) value prop container object of states to be passed to childern
2) Context should be seperated with functionality make context more clear.

3) CONSUME THE CONTEXT VALUE
const {post} = useContext(PostContext)



STATE MANAGEMENT WITH CONTEXT API
_________________________________

TYPES OF STATE




HOOKS USED
createContext() // to create context
useContext(PostContext) // to comusme the context
*/
