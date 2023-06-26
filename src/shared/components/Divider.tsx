import React from 'react'
import { makeStyles } from '@material-ui'
import { colors, theme } from '_config/theme'

export interface DivederProps {
  spacing?: 0 | 1 | 2 | 3
  line?: 'secondaryColor'
}
export const useStyles = makeStyles({
  divider: {
    margin: ({ spacing }: DividerStylesProps) => {
      const verticalMargin = theme.spacing(spacing ?? 1)
      return `${verticalMargin}px 0`
    },
    color: ({ line }: DividerStylesProps) => {
      {
        return line === 'secondaryColor'
          ? colors.system.light.neutral
          : colors.readOnly.light.white
      }
    },
    height: 1.5,
  },
})
