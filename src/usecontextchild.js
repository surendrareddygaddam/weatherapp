import SubChildComponet from "./usecontextsubchild";
const ChildComponet = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <SubChildComponet userDetails={props.userDetails} />
    </div>
  );
};

export default ChildComponet;
