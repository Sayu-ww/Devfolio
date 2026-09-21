import clsx from 'clsx'

export const Paper = (props: React.ComponentProps<'div'>) => {
  const { className, ...restProps } = props

  return <div className={clsx('rounded-3xl bg-white/10', className)} {...restProps} />
}
