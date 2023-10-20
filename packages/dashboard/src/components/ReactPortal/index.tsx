import { createPortal } from 'react-dom';
import { FC, useLayoutEffect, useState } from 'react';
import { ReactPortalProps } from './interfaces';
import { createWrapperAndAppendToBody } from './utils/createWrapperAndAppendToBody';

/**
 * TODO - вынести в packages/core/
 * */

export const ReactPortal: FC<ReactPortalProps> = ({
  children,
  wrapperId = 'react-portal-wrapper',
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};
