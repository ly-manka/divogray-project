import clsx from 'clsx'

type BoxButtonProps = {
  text: string;
  variant: 'red' | 'yellow';
  className?: string;
}

export function BoxButton({ text, variant, className }: BoxButtonProps) {
  return (
    <button
      className={clsx(
        'text-[16px] px-6 py-4 rounded-lg transition-colors duration-400 ease border border-transparent cursor-pointer flex align-center justify-center',
        {
          'bg-red-accent text-white hover:bg-transparent hover:text-black hover:border hover:border-black': variant === 'red',
          'bg-yellow-accent text-black hover:bg-white': variant === 'yellow',
        },
        className
      )}
    >
      {text}
    </button>
  )
}

