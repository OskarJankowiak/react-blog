import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleComments } from 'actions/blogActions';

export const useComments = ({ articleId }) => {
  const dispatch = useDispatch();
  const { data: commentsData, areLoading } = useSelector(
    (state) => state.comments,
  );

  const articleComments = commentsData.filter(
    ({ postId }) => String(postId) === String(articleId),
  );

  useEffect(() => {
    const controller = new AbortController();

    dispatch(getArticleComments(controller, articleId));

    return () => {
      controller.abort();
    };
  }, [articleId]);

  return {
    articleComments,
    areLoadingComments: areLoading,
  };
};
