import {
  GET_LIST_POSTS,
  GET_LIST_PUBLIS,
  PUBLIS_POST,
  DETAIL_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../../actions/PostsAction";

const initialState = {
  getListPostsResult: false,
  getListPostsLoading: false,
  getListPostsError: false,

  getListPublisResult: false,
  getListPublisLoading: false,
  getListPublisError: false,

  publisPostResult: false,
  publisPostLoading: false,
  publisPostError: false,

  addPostResult: false,
  addPostLoading: false,
  addPostError: false,

  editPostResult: false,
  editPostLoading: false,
  editPostError: false,

  deletePostResult: false,
  deletePostLoading: false,
  deletePostError: false,

  detailPostResult: false,
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
        publisPostResult: action.payload.data,
        publisPostLoading: action.payload.loading,
        publisPostError: action.payload.errorMessage,
      };

    case ADD_POST:
      return {
        ...state,
        addPostResult: action.payload.data,
        addPostLoading: action.payload.loading,
        addPostError: action.payload.errorMessage,
      };

    case EDIT_POST:
      return {
        ...state,
        editPostResult: action.payload.data,
        editPostLoading: action.payload.loading,
        editPostError: action.payload.errorMessage,
      };

    case DELETE_POST:
      return {
        ...state,
        deletePostResult: action.payload.data,
        deletePostLoading: action.payload.loading,
        deletePostError: action.payload.errorMessage,
      };

    case DETAIL_POST:
      return {
        ...state,
        detailPostResult: action.payload.data,
      };

    default:
      return state;
  }
};

export default PostsReducer;
