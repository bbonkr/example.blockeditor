type ErrorMessageProps = {
  message: string;
};
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div>
      <p className="text-red">{message}</p>
    </div>
  );
};
