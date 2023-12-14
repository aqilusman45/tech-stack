import React from 'react'

export const Icon = ({
  icon,
  iconColor,
  iconWidth = 26,
  iconHeight = 26,
  otherClasses,
  ...props
}) => {
  return (
    <svg
      data-testid="icon"
      style={iconColor}
      width={iconWidth}
      height={iconHeight}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`/sprite.svg#${icon}`} xlinkHref={`/sprite.svg#${icon}`}></use>
    </svg>
  )
}

export default Icon
