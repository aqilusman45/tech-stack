---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.jsx
---
import React from 'react'
import clsx from 'clsx'

export const <%= h.changeCase.pascal(name) %> = ({
  otherClasses
}) => {

  const <%= h.changeCase.camel(name) %>Classes = clsx(
    otherClasses
  )
  
  return (
    <div className={<%= h.changeCase.camel(name) %>Classes} data-testid='<%= h.changeCase.param(name) %>'>
      New Component!
    </div>
  )
}

export default <%= h.changeCase.pascal(name) %>
