export interface Headers {
  [key: string]: string;
}

export interface Response<TData = unknown> {
  data: TData;
}
