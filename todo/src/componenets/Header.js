const Header = (props) => {
  const { todo } = props;
  const todolength = todo.length;
  const plural = todo.length != 1;
  const s = plural ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        Still {todolength} {s} are open
      </h1>
    </header>
  );
};

export default Header;
props;
