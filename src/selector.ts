export const selector = (dependencies: string[]) =>
  (store: any) =>
    dependencies.reduce((previousModel, currentModel) => ({
      ...previousModel,
      ...{ [currentModel]: store[currentModel] },
    }), {});
