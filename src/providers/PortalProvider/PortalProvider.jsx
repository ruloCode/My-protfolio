import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const PortalProvider = (props) => {
  const { children } = props;

  const portal = document.getElementById('portal');

  const closePortal = () => portal.classList.remove('portal--enable');

  useEffect(() => {
    portal.classList.add('portal', 'portal--enable');
    return closePortal;
  }, []);

  return createPortal(children(closePortal), portal);
};

export default PortalProvider;
