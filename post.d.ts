declare module "@shiraya-ma/mai-types/post" {

  /** The post. */
  export type Post = {
    /**
     * The ID of the post.
     * 
     * @example "20250824"
     * @example "20250824-title"
     */
    id: PostID | PostIDWithTitle;
    /**
     * The title of the post.
     */
    title: string;
    /**
     * The category of the post.
     * 
     * blogs: Blog
     * illustrations: Illustration
     */
    category: PostCategory;
    /**
     * The tags of the post.
     */
    tags: PostTag[];

    /**
     * The description of the post.
     * 
     * written by plaintext.
     */
    description: string;
    /**
     * The content of the post.
     * 
     * written by markdown.
     */
    content: string;

    // Date
    /** 
     * The date when the post was created.
     * 
     * @default Date.now()
     */
    createdAt: number;
    /** 
     * The date when the post was updated.
     * 
     * @default Date.now()
     */
    updatedAt: number;

    // Status
    /** 
     * Whether the post is published or not.
     * 
     * @default false
     */
    isPublished: boolean;
    /** 
     * Whether the post is deleted or not.
     * 
     * @default false
     */
    isDeleted: boolean;
    /** 
     * Whether the post is indexed or not.
     * 
     * @default true
     */
    isNoIndex: boolean;
  };

  /** The summary of the post. */
  export type PostSummary = Omit<Post, 'content' | 'isPublished' | 'isDeleted'>;
  /** The details of the post. */
  export type PostDetails = Omit<Post, 'description' | 'isPublished' | 'isDeleted' | 'isNoIndex'>;
  /** The draft of the post. */
  export type DraftPost = Omit<Post, 'createdAt' | 'updatedAt' | 'isPublished' | 'isDeleted' | 'isNoIndex'>;

  // ID
  /** The ID of the post. */
  export type PostID = `${number}`;
  /** The ID of the post with title. */
  export type PostIDWithTitle = `${PostID}-${string}`;

  // Category
  /** The category of the post. */
  export type PostCategory = 'blogs' | 'illustrations';

  // Tag
  /** The tag of the post. */
  export type PostTag = {
    /** The ID of the tag. */
    id: PostTagID;
    /** The label of the tag. */
    label: PostTagLabel;
  };
  /** The ID of the tag. */
  export type PostTagID = string;
  /** The label of the tag. */
  export type PostTagLabel = string;
}