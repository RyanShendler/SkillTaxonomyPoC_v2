import { Handle } from "reactflow";

const TaxonomyNode = () => {
  return (
    <>
      <div className="border border-black rounded-lg p-2 bg-green-200">
        <h3>Taxonomy</h3>
      </div>
      <Handle type="source" position="bottom"/>
    </>
  );
};

export default TaxonomyNode;
