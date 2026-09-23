import clsx from 'clsx'

export const Paper = (props: React.ComponentProps<'div'>) => {
  const { className, ...restProps } = props

  return <div className={clsx('rounded-3xl bg-gray-50 dark:bg-gray-500/20', className)} {...restProps} />
}
