
export type SuccessResponse<T> = {
  success: true;
} & T;

export type FailedResponse = {
  success: false;
  error: string;
};

// ##############################
// 記事カテゴリ系
// ##############################

/**
 * 記事カテゴリ
 */
export type ArticleCategory = {
  /**
   * カテゴリID
   */
  id: string;
  /**
   * カテゴリ名
   */
  label: string;
  /**
   * カテゴリの説明
   */
  description: string;
};

export type ArticleCategoryWithoutId = Omit<ArticleCategory, 'id'>;

// POST /api/v1/management/articles/categories
// 記事のカテゴリを作成する

export type PostArticlesCategoriesRequest = {
  category: ArticleCategoryWithoutId;
};

export type PostArticlesCategoriesResponse = SuccessResponse<{ categoryId: string; }> | FailedResponse;

// GET /api/v1/public/articles/categories/:category_id
// 記事のカテゴリを取得する

export type GetArticleCategoryByIdResponse = SuccessResponse<{ category: ArticleCategory }> | FailedResponse;

// PATCH /api/v1/management/articles/categories/:category_id
// 記事のカテゴリを更新する

export type PatchArticleCategoryByIdRequest = {
  category: Partial<ArticleCategoryWithoutId>;
};

export type PatchArticleCategoryByIdResponse = SuccessResponse<{ categoryId: string; }> | FailedResponse;

// DELETE /api/v1/management/articles/categories/:category_id
// 記事のカテゴリを削除する

export type DeleteArticleCategoryByIdResponse = SuccessResponse<{ categoryId: string; }> | FailedResponse;
