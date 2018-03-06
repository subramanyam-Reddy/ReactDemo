import React from 'react';
import { Tooltip, OverlayTrigger} from 'react-bootstrap';

function LinkWithTooltip({ id, children, href, tooltip }) {
  return (
    <OverlayTrigger  overlay={ <Tooltip id={id}> {tooltip} </Tooltip> }  placement="top">
      <a href={href}>{children}</a>
    </OverlayTrigger>
  );
}

export default LinkWithTooltip;
