import { FC, memo } from 'react'
import type { Props } from './buttonTypes'
import { CustomButton } from './buttonStyles'

const Button: FC<Props> = ({
  children,
  onClick,
  className,
  disabled = false,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <CustomButton
      $variant={variant}
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  )
}

export default memo(Button)
