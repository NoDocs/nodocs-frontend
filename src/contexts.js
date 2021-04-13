import React from 'react'

export const PortalContext = React.createContext()
export const DocumentContext = React.createContext({ activePageId: '', updateActivePageId: () => {} })
export const ShortcutsContext = React.createContext()
