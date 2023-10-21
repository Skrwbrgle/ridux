import {
  GET_LIST_POSTS,
  GET_LIST_PUBLIS,
  PUBLIS_POST,
} from "../../actions/PostsAction";

const initialState = {
  getListPostsResult: false,
  getListPostsLoading: false,
  getListPostsError: false,

  getListPublisResult: false,
  getListPublisLoading: false,
  getListPublisError: false,

  publisResult: false,
  publisLoading: false,
  publisError: false,
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POSTS:
      return {
        ...state,
        getListPostsResult: action.payload.data,
        getListPostsLoading: action.payload.loading,
        getListPostsError: action.payload.errorMessage,
      };

    case GET_LIST_PUBLIS:
      return {
        ...state,
        getListPublisResult: action.payload.data,
        getListPublisLoading: action.payload.loading,
        getListPublisError: action.payload.errorMessage,
      };

    case PUBLIS_POST:
      return {
        ...state,
        publisResult: action.payload.data,
        publisLoading: action.payload.loading,
        publisError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default PostsReducer;
