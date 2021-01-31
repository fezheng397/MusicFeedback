export type Action<Type, Params> = Params & {
  type: Type;
};
