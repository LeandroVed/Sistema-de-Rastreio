import React from 'react'
import { Divider as MuiDivider } from '@material-ui/core'
import { DividerStylesProps, useStyles } from './Divider.style'

interface DividerProps extends DividerStylesProps {
  className?: string
  line?: 'secondaryColor'
}

export const Divider: React.FC<DividerProps> = ({ spacing, className, line }) => {
  const styles = useStyles({ spacing, line: line })

  return <MuiDivider className={`${styles.divider} ${className ?? ''}`} />
}
