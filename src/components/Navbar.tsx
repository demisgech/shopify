interface Props {
  onOpen: () => void;
}

const Navbar = ({ onOpen }: Props) => {
  return (
    <nav className="navbar bg-purple-400 col-span-full text-primary-content justify-between">
      <div className="flex-1 px-2">
        <span className="text-lf font-bold">Navigation</span>
      </div>
      <div className="flex-none lg:hidden">
        <button onClick={() => onOpen()} className="btn btn-primary btn-sm">
          ☰ toggle
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
