
export type Test = 'TEST';

export type SuccessResponse<T> = {
  success: true;
} & T;

export type FailedResponse = {
  success: false;
  error: string;
  error_details?: object;
};

export * from './article';
