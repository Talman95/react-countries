import { memo, useCallback } from 'react';

import s from './Toast.module.scss';

import { useActions } from 'hooks/useActions';
import { useAutoCloseToast } from 'hooks/useAutoCloseToast';
import { allToastsActions } from 'store';

type PropsType = {
  id: string;
  message: string;
};

export const Toast = memo(({ id, message }: PropsType) => {
  const toastsActions = useActions(allToastsActions);

  const closeToast = useCallback((): void => {
    toastsActions.removeToast({ id });
  }, [toastsActions, id]);

  useAutoCloseToast({ closeToast });

  return (
    <div className={`${s.toast} ${s.error}`} onClick={closeToast} aria-hidden>
      {message}
    </div>
  );
});
