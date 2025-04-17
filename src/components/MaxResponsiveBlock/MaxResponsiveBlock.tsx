type Props = {
  children: React.ReactNode;
}

export const MaxResponsiveBlock = ({ children }: Props) => {
  return (
    <div className="mx-5 md:mx-18 2xl:mx-24">
      {children}
    </div>
  );
}