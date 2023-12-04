type Props = {
  children: React.ReactNode;
  title?: string;
  theme?: "azul" | "trans";
};

const Button = ({ children, title, theme = "azul" }: Props) => {
  const buttonThemes = {
    azul: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    trans:
      "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
  };

  return (
    <button className={buttonThemes[theme]}>
      {children}
      {title}
    </button>
  );
};
export default Button;
