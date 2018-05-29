import { IStoresToProps, IValueMap } from 'mobx-react';

export const selector = (dependencies: string[]): IStoresToProps =>
  (store: IValueMap): IValueMap =>
    dependencies.reduce((previousModel, currentModel) => ({
      ...previousModel,
      ...{ [currentModel]: store[currentModel] },
    }), {});
