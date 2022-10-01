type LoaderProps = {
  toggle: boolean;
};

const Loader = ({ toggle }: LoaderProps) => {
  console.log(toggle);
  return <div>Loader</div>;
};

export default Loader;
