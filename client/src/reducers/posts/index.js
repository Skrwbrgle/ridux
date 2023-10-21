import { GET_LIST_POSTS } from "../../actions/PostsAction";

const initialState = {
  getListPostsResult: false,
  getListPostsLoading: false,
  getListPostsError: false,
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POSTS:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        getListPostsResult: action.payload.data,
        getListPostsLoading: action.payload.loading,
        getListPostsError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default PostsReducer;
