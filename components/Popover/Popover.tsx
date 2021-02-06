import React, { useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

type Toggle = 'click' | 'hover';

type ToggleActive = () => void;
type ToggleRef = React.RefObject<HTMLElement>;
export type RenderPopover = (toggleActive: ToggleActive) => React.ReactNode;
export type RenderToggle = (
  toggleActive: ToggleActive,
  ref: ToggleRef
) => React.ReactNode;

type PopoverProps = {
  children?: React.ReactNode;
  className?: string;
  offset?: [number | null | undefined, number | null | undefined];
  placement?: Placement;
  renderPopover: RenderPopover;
  renderToggle: RenderToggle;
  toggle?: Toggle;
};

const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  offset = [0, 0],
  placement = 'auto',
  renderPopover,
  renderToggle,
  toggle = 'click',
}) => {
  const [active, setActive] = useState(false);
  const toggleRef = useRef(null);
  const popoverWindowRef = useRef(null);
  const popoverContainerRef = useRef(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(
    toggleRef.current,
    popoverWindowRef.current,
    {
      placement: placement,
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        { name: 'offset', options: { offset: offset } },
      ],
    }
  );

  function toggleActive() {
    if (!active) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    setActive((prevState) => !prevState);
  }

  const handleClickOutside = useCallback(
    function (event: MouseEvent) {
      if (
        popoverContainerRef.current &&
        !popoverContainerRef.current.contains(event.target)
      ) {
        setActive(false);
        document.removeEventListener('mousedown', handleClickOutside);
      }
    },
    [popoverContainerRef]
  );

  return (
    <div
      onMouseEnter={() => toggle === 'hover' && toggleActive()}
      onMouseLeave={(event) => toggle === 'hover' && toggleActive()}
      ref={popoverContainerRef}
    >
      {renderToggle(() => toggle === 'click' && toggleActive(), toggleRef)}
      {active && (
        <PopoverWindow
          active={active}
          className={className}
          ref={popoverWindowRef}
          style={styles.popper}
          {...attributes.popper}
        >
          {renderPopover(toggleActive)}
          <div ref={setArrowElement} style={styles.arrow} />
        </PopoverWindow>
      )}
    </div>
  );
};

type WindowProps = {
  active: boolean;
};

const PopoverWindow = styled.div<WindowProps>`
  ${({ active, theme }) => css`
    box-sizing: border-box;
    padding: ${rem(16)};
    border-radius: ${rem(10)};
    background: ${theme.background.primary};
    box-shadow: ${theme.shadow.small.down};
    z-index: 1000;
  `}
`;

export default Popover;
