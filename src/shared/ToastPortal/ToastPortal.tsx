import { FC } from 'react';

import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { useToastsPortal } from '../../hooks/useToastsPortal';
import { selectToasts } from '../../store/selectors/toastsSelectors';

import { Toast } from './Toast/Toast';
import s from './ToastPortal.module.scss';

export const ToastPortal: FC = () => {
  const toasts = useSelector(selectToasts);

  const { id, isLoad } = useToastsPortal();

  return isLoad
    ? ReactDOM.createPortal(
        <div className={s.container}>
          {toasts.map(({ id, message }) => (
            <Toast key={id} id={id} message={message} />
          ))}
        </div>,
        document.querySelector(`#${id}`) as HTMLElement,
      )
    : null;
};
