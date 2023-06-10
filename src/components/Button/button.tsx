import { FC, memo } from 'react'
import type { Props } from './buttonTypes'
import { CustomButton } from './buttonStyles'

const Button: FC<Props> = ({
  children,
  onClick,
  className,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <CustomButton
      $variant={variant}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  )
}

export default memo(Button)
